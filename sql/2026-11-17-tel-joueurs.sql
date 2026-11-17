-- Numéro WhatsApp du joueur, pour lui envoyer son résumé médical de fin de stage
alter table players add column if not exists phone text;
