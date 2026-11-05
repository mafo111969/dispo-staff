# Dispo Staff

Briefing médical quotidien et diffusion des disponibilités au staff, en français et en portugais.

- **Médical** : passe l'effectif en revue (statut, consigne, retour prévu, type pour les statistiques, minutes les jours de match), valide un ou plusieurs briefings par jour, gère les départs et arrivées de joueurs et la liste du staff.
- **Prépa physique** : voit les joueurs en réathlé ou en adapté et saisit les séances (durée, RPE, GPS, exercices).
- **Coach et team manager** : voient qui est disponible, adapté ou indisponible, par poste, sans diagnostic.
- **Direction** : taux de disponibilité, jours perdus, minutes jouées, matchs manqués, jours perdus par type (agrégés).
- **WhatsApp** : un message par destinataire, dans sa langue, filtré selon son rôle, ouvert en un clic.

Aucun diagnostic n'est saisi. Le type de blessure n'est visible que du médical, et de la direction sous forme agrégée.

## Mise en place (une seule fois)

### 1. Supabase
1. Créer un projet gratuit sur https://supabase.com.
2. **SQL Editor > New query** : coller `setup.sql`, remplacer `VOTRE_EMAIL` par l'e-mail de l'administrateur, puis **Run**.
3. **Authentication > Sign In / Providers > Email** : désactiver **Confirm email** (le staff crée son mot de passe directement dans l'app).
4. **Authentication > URL Configuration** : mettre l'adresse GitHub Pages de l'app dans **Site URL**.
5. **Project Settings > API** : copier la **Project URL** et la clé **anon public** dans `config.js`. Ne jamais utiliser la clé `service_role` ici.

### 2. GitHub Pages
**Settings > Pages > Build and deployment** : Source « Deploy from a branch », branche `main`, dossier `/ (root)`.

### 3. Staff
L'administrateur se connecte (bouton « Créer mon accès » la première fois), puis ajoute chaque personne dans **Staff et accès** avec son e-mail, son rôle, son numéro WhatsApp et sa langue. Chacun crée ensuite son accès avec cet e-mail.

## Mode démonstration
Si `config.js` est vide, l'app fonctionne en démonstration sur l'appareil, sans rien partager, avec un sélecteur de rôle.

## Envoi WhatsApp automatique (optionnel)
Voir `docs/whatsapp-automatique.md`.
