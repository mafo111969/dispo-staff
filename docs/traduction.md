# Traduction automatique FR <-> PT

Les textes libres du briefing (consigne, pathologie chronique, pathologie aiguë, soins réalisés) sont traduits dès leur saisie. Chacun les lit ensuite dans sa langue : dans l'app (selon le bouton FR / PT) et dans son message WhatsApp (selon la langue de sa fiche staff). Le texte d'origine reste celui qui est modifiable.

Seul le texte part vers le service de traduction (API Claude d'Anthropic), jamais le nom du joueur. Les données envoyées par l'API ne servent pas à entraîner les modèles.

## Mise en place (une seule fois)
1. **Clé API** : sur https://console.anthropic.com, créer un compte, ajouter un peu de crédit (**Billing**, 5 $ suffisent largement pour un stage), puis **API keys > Create key**. Cette clé est secrète : elle ne va que dans Supabase, jamais dans GitHub ni dans une conversation.
2. **Supabase > Edge Functions > Deploy a new function > Via Editor** : nom `translate`, coller le contenu de `supabase/functions/translate/index.ts`, puis **Deploy**.
3. **Edge Functions > Secrets** : ajouter `ANTHROPIC_API_KEY` avec la clé.

C'est tout : `translate:true` est déjà dans `config.js`. À la prochaine ouverture du briefing médical, les textes déjà saisis sont traduits automatiquement.

Pour couper la traduction : retirer `translate:true` de `config.js`.
