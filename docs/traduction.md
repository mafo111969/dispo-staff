# Traduction automatique FR <-> PT

Les textes libres du briefing (consigne, pathologie chronique, pathologie aiguë, soins réalisés) sont traduits dès leur saisie. Chacun les lit ensuite dans sa langue : dans l'app (selon le bouton FR / PT) et dans son message WhatsApp (selon la langue de sa fiche staff). Le texte d'origine reste celui qui est modifiable.

Seul le texte part vers le service de traduction (DeepL, entreprise européenne), jamais le nom du joueur.

## Mise en place (une seule fois)
1. **Clé DeepL** : sur https://www.deepl.com/pro-api, choisir **DeepL API Free** (gratuit jusqu'à 500 000 caractères par mois), créer le compte (une carte est demandée pour vérification, sans débit). Puis **Compte > Clés API** et copier la clé (elle finit par `:fx`). Cette clé est secrète : elle ne va que dans Supabase, jamais dans GitHub ni dans une conversation.
2. **Supabase > Edge Functions > Deploy a new function > Via Editor** : nom `translate`, coller le contenu de `supabase/functions/translate/index.ts`, puis **Deploy**. (Si la fonction existe déjà : l'ouvrir, remplacer le code, **Deploy**.)
3. **Edge Functions > Secrets** : ajouter `DEEPL_KEY` avec la clé.

C'est tout : `translate:true` est déjà dans `config.js`. À la prochaine ouverture du briefing médical, les textes déjà saisis sont traduits automatiquement.

Pour couper la traduction : retirer `translate:true` de `config.js`.
