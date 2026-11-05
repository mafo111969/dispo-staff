// Dispo Staff : envoi automatique des messages du briefing via l'API WhatsApp Cloud de Meta.
// Secrets à définir dans Supabase (Edge Functions > Secrets) : WA_TOKEN, WA_PHONE_ID, et en option WA_TEMPLATE.
// Seul un membre du staff médical connecté peut appeler cette fonction, et seulement vers les numéros de la table staff.
import { createClient } from "npm:@supabase/supabase-js@2.117.3";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (b: unknown, status = 200) =>
  new Response(JSON.stringify(b), { status, headers: { ...cors, "Content-Type": "application/json" } });

// Les paramètres d'un modèle WhatsApp ne peuvent pas contenir de retours à la ligne.
const flatten = (s: string) =>
  s.replace(/\s*\n+\s*/g, " | ").replace(/\s{2,}/g, " ").trim().slice(0, 1000);

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "method" }, 405);

  const token = Deno.env.get("WA_TOKEN"), phoneId = Deno.env.get("WA_PHONE_ID");
  const template = Deno.env.get("WA_TEMPLATE") || "dispo_briefing";
  if (!token || !phoneId) return json({ error: "WhatsApp non configuré (WA_TOKEN / WA_PHONE_ID)" }, 500);

  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
    global: { headers: { Authorization: req.headers.get("Authorization") ?? "" } },
  });
  const { data: me } = await sb.rpc("whoami");
  if (!me || me.role !== "medical") return json({ error: "Réservé au staff médical" }, 403);

  let body: { messages?: { staff_id: string; text: string }[] };
  try { body = await req.json(); } catch { return json({ error: "JSON invalide" }, 400); }
  const msgs = (body.messages || []).filter((m) => m && m.staff_id && m.text).slice(0, 50);
  if (!msgs.length) return json({ error: "Aucun message" }, 400);

  // Les numéros viennent de la base, jamais du navigateur.
  const { data: staff, error } = await sb.from("staff").select("id, phone, lang").in("id", msgs.map((m) => m.staff_id));
  if (error) return json({ error: error.message }, 500);
  const byId = new Map((staff || []).map((s) => [s.id, s]));

  const results = [];
  for (const m of msgs) {
    const s = byId.get(m.staff_id);
    const to = String(s?.phone || "").replace(/\D/g, "");
    if (!to) { results.push({ staff_id: m.staff_id, ok: false, error: "numéro manquant" }); continue; }
    const r = await fetch(`https://graph.facebook.com/v21.0/${phoneId}/messages`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "template",
        template: {
          name: template,
          language: { code: s?.lang === "fr" ? "fr" : "pt_PT" },
          components: [{ type: "body", parameters: [{ type: "text", text: flatten(m.text) }] }],
        },
      }),
    });
    const out = await r.json().catch(() => ({}));
    results.push(r.ok
      ? { staff_id: m.staff_id, ok: true }
      : { staff_id: m.staff_id, ok: false, error: out?.error?.message || `HTTP ${r.status}` });
  }
  return json({ results });
});
