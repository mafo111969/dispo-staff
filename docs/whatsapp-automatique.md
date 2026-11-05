# Envoi WhatsApp automatique

Sans cette configuration, l'app propose l'**envoi en série** (un geste par destinataire). Avec elle, un bouton **Envoi automatique** envoie tous les messages du briefing en un clic, depuis un numéro WhatsApp dédié.

## 1. Compte Meta (WhatsApp Cloud API)
1. https://developers.facebook.com > **Create app** > cas d'usage « Connect with customers through WhatsApp ». Créer ou choisir un portefeuille business.
2. **WhatsApp > API Setup** : Meta fournit un numéro de test gratuit, qui peut écrire à 5 numéros vérifiés au maximum. Ajouter ces numéros dans « To ».
3. Noter le **Phone number ID** (pas secret).
4. Pour un usage réel : ajouter un vrai numéro (une SIM qui n'est pas déjà utilisée sur WhatsApp) et faire la vérification de l'entreprise.

## 2. Modèle de message
WhatsApp exige un modèle approuvé pour écrire en premier à quelqu'un. Dans **WhatsApp Manager > Message templates > Create template** :
- Catégorie : **Utility** ; nom : `dispo_briefing`
- Langue **French** : `Dispo Staff : {{1}}. Message automatique, merci de ne pas répondre.`
- Ajouter la langue **Portuguese (POR)** : `Dispo Staff: {{1}}. Mensagem automática, por favor não responda.`
- Exemple pour {{1}} : `Briefing Matin du 07/11 | 25 disponibles, 2 adaptés, 1 indisponible`

L'approbation prend en général de quelques minutes à quelques heures. Dans ce modèle, les retours à la ligne du message sont remplacés par « | » (règle de WhatsApp).

## 3. Jeton d'accès (secret)
**Business settings > Users > System users** : créer un utilisateur système (Admin), lui assigner l'app, puis **Generate token** avec les permissions `whatsapp_business_messaging` et `whatsapp_business_management`. Ce jeton est secret : il ne va que dans Supabase, jamais dans GitHub ni dans une conversation.

## 4. Supabase
1. **Edge Functions > Deploy a new function > Via Editor** : nom `send-whatsapp`, coller le contenu de `supabase/functions/send-whatsapp/index.ts`, puis **Deploy**.
2. **Edge Functions > Secrets** : ajouter `WA_TOKEN` (le jeton) et `WA_PHONE_ID` (le Phone number ID).

## 5. Activer le bouton
Dans `config.js`, ajouter `waAuto:true`. L'app affiche alors **Envoi automatique** dans l'onglet Envoi WhatsApp. Les erreurs éventuelles (numéro non vérifié, modèle pas encore approuvé) s'affichent à côté du bouton.
