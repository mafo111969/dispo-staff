// Dispo Staff : traduction FR <-> PT des textes libres (consignes, pathologies, soins).
// Secret à définir dans Supabase (Edge Functions > Secrets) : ANTHROPIC_API_KEY.
// Seul un membre du staff médical connecté peut l'appeler. Aucun nom de joueur n'est envoyé, seulement le texte.
import { createClient } from "npm:@supabase/supabase-js@2.117.3";
import Anthropic from "npm:@anthropic-ai/sdk";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (b: unknown, status = 200) =>
  new Response(JSON.stringify(b), { status, headers: { ...cors, "Content-Type": "application/json" } });

const SYSTEM = `Tu traduis des notes courtes du staff médical d'une équipe de football (kinés, médecin) entre le français et le portugais (variante d'Angola / du Portugal).
Pour chaque texte reçu, détecte la langue et renvoie sa version française et sa version portugaise. Si le texte est déjà dans une langue, recopie-le tel quel pour cette langue.
Garde le vocabulaire médical et sportif précis, les abréviations courantes (D/G, RPE, GPS), les chiffres et la ponctuation. N'ajoute rien, n'explique rien.
Réponds uniquement par un tableau JSON, dans le même ordre que les textes reçus : [{"fr":"...","pt":"..."}, ...]`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "method" }, 405);
  if (!Deno.env.get("ANTHROPIC_API_KEY")) return json({ error: "Traduction non configurée (ANTHROPIC_API_KEY)" }, 500);

  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
    global: { headers: { Authorization: req.headers.get("Authorization") ?? "" } },
  });
  const { data: me } = await sb.rpc("whoami");
  if (!me || me.role !== "medical") return json({ error: "Réservé au staff médical" }, 403);

  const { texts } = await req.json().catch(() => ({ texts: null }));
  if (!Array.isArray(texts) || !texts.length || texts.length > 40) return json({ error: "texts" }, 400);
  const clean = texts.map((s) => String(s ?? "").slice(0, 500));

  const client = new Anthropic();
  try {
    const res = await client.beta.messages.create({
      model: "claude-opus-5-5",
      max_tokens: 4000,
      output_config: { effort: "low" },
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      system: SYSTEM,
      messages: [{ role: "user", content: JSON.stringify(clean) }],
    } as any);
    if (res.stop_reason === "refusal") return json({ error: "refus" }, 422);
    const text = res.content.filter((b: any) => b.type === "text").map((b: any) => b.text).join("");
    const arr = JSON.parse(text.slice(text.indexOf("["), text.lastIndexOf("]") + 1));
    if (!Array.isArray(arr) || arr.length !== clean.length) return json({ error: "format" }, 502);
    return json({ items: arr.map((x: any) => ({ fr: String(x?.fr ?? ""), pt: String(x?.pt ?? "") })) });
  } catch (e) {
    if (e instanceof Anthropic.RateLimitError) return json({ error: "trop de demandes, réessayez" }, 429);
    if (e instanceof Anthropic.APIError) return json({ error: `API ${e.status}` }, 502);
    return json({ error: String(e) }, 500);
  }
});
