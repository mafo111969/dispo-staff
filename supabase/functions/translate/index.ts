// Dispo Staff : traduction FR <-> PT des textes libres, via DeepL. Secret Supabase : DEEPL_KEY.
// Réservé au staff médical connecté. Seul le texte est envoyé, jamais le nom du joueur.
import { createClient } from "npm:@supabase/supabase-js@2.117.3";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (b: unknown, status = 200) =>
  new Response(JSON.stringify(b), { status, headers: { ...cors, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  const key = (Deno.env.get("DEEPL_KEY") || "").trim();
  if (!key) return json({ error: "DEEPL_KEY manquante" }, 500);

  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
    global: { headers: { Authorization: req.headers.get("Authorization") ?? "" } },
  });
  const { data: me } = await sb.rpc("whoami");
  if (!me || me.role !== "medical") return json({ error: "Réservé au staff médical" }, 403);

  const { texts } = await req.json().catch(() => ({ texts: null }));
  if (!Array.isArray(texts) || !texts.length || texts.length > 40) return json({ error: "texts" }, 400);
  const clean = texts.map((s) => String(s ?? "").slice(0, 500));

  const host = key.endsWith(":fx") ? "https://api-free.deepl.com" : "https://api.deepl.com";
  const call = async (target: string) => {
    const r = await fetch(`${host}/v2/translate`, {
      method: "POST",
      headers: { Authorization: `DeepL-Auth-Key ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ text: clean, target_lang: target }),
    });
    if (!r.ok) throw new Error(`DeepL ${r.status}`);
    return ((await r.json()).translations || []).map((x: { text: string }) => x.text);
  };
  try {
    const [fr, pt] = await Promise.all([call("FR"), call("PT-PT")]);
    return json({ items: clean.map((_, i) => ({ fr: fr[i] ?? "", pt: pt[i] ?? "" })) });
  } catch (e) {
    return json({ error: String(e) }, 502);
  }
});
