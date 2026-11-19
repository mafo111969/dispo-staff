/* Dispo Staff : briefing médical quotidien et diffusion filtrée par rôle */
'use strict';

/* ---------- textes FR / PT ---------- */
const T={
fr:{sub:'Sélection nationale · stage du 9 au 18 novembre 2026',
 tab_medical:'Médical',tab_prepa:'Prépa physique',tab_coach:'Staff technique',tab_direction:'Direction',tab_wa:'Envoi WhatsApp',tab_staff:'Staff et accès',tab_roster:'Effectif',photo:'Photo',photoKo:'Photo non enregistrée. Lancez d\'abord la commande SQL « photo ».',photoOk:'Photo enregistrée',cropT:'Cadrer la photo',cropL:'Faites glisser pour centrer le visage, zoomez avec le curseur.',zoom:'Zoom',savePh:'Enregistrer',cancel:'Annuler',ro_t:'Effectif du rassemblement',ro_l:'Corrigez un joueur, réglez sa date d\'arrivée ou retirez-le. Un joueur n\'apparaît dans le briefing qu\'à partir de sa date d\'arrivée.',arr:'Arrivée',dep:'Départ',del:'Retirer',delOk:'Joueur retiré',delKo:'Ce joueur a déjà des données ; marquez plutôt son départ.',
 r_medical:'Médical',r_prepa:'Prépa physique',r_coach:'Coach',r_tm:'Team manager',r_direction:'Direction',
 s_indispo:'Indisponible',s_soins:'En soins',s_reath:'En réathlé',s_adapte:'Entraînement adapté',s_ok:'Sans restriction',s_absent:'Absent',s_parti:'A quitté le rassemblement',
 c_ok:'Disponible',c_adapte:'Disponible avec adaptation',c_indispo:'Indisponible',c_parti:'A quitté le rassemblement',
 G:'Gardiens',D:'Défenseurs',M:'Milieux',A:'Attaquants',G1:'Gardien',D1:'Défenseur',M1:'Milieu',A1:'Attaquant',
 t_mus:'Musculaire',t_art:'Articulaire / ligamentaire',t_ten:'Tendineuse',t_tra:'Traumatique / contusion',t_mal:'Maladie',t_aut:'Autre',
 l_matin:'Matin',l_aprem:'Après-midi',l_soir:'Soir',l_avmatch:'Avant-match',l_match:'Après-match',g_ok:'Dispo match',g_no:'Indispo match',avL:'Avant-match : indiquez seulement qui est disponible ou non pour le match.',apL:'Après-match : minutes jouées et plainte éventuelle. Le détail de la plainte reste au médical.',pl:'Plainte',pl_non:'Non',pl_oui:'Oui',plt:'Détail de la plainte',pltPh:'Ex. douleur ischio droit',m_av:'Match {o} :\nDisponibles ({a}) :\n{al}\nIndisponibles ({b}) :\n{bl}',m_pl:'\nPlaintes après-match :\n{l}',m_pl0:'\nAucune plainte après-match.',avT:'Avant-match',sb:'Sortie sur blessure',sbt:'Blessure',sbtPh:'Ex. commotion cérébrale, choc tête',sbHint:'Reporté dans la pathologie aiguë du joueur.',m_sb:'\nSorties sur blessure :\n{l}',zone:'Zone',h_map:'Carte des pathologies',suiviV:'Soins de la veille',suiviVL:'Joueurs ayant reçu des soins le {d}.',suiviNone:'Aucun soin enregistré le {d}.',suiviAll:'Voir tous les suivis ({n})',suiviLess:'Masquer',aw:'À surveiller',tl:'Temps de jeu limité',awt:'Motif',awtPh:'Ex. tension ischio, reprise',m_aw:'\nÀ surveiller ({n}) :\n{l}',m_tl:'temps de jeu limité',al_btn:'⚠️ Alerte staff',al_t:'Alerte staff',al_l:'Message urgent aux coachs et au prépa, en dehors du briefing. Ils voient la zone et les consignes, pas le diagnostic détaillé.',al_pl:'Joueurs concernés',al_z:'Zones',al_lim:'À limiter',al_note:'Précision (facultatif)',al_notePh:'Ex. pas de sprint au-delà de 80 %',al_urg:'Urgence',u_now:'Immédiat (séance en cours)',u_next:'Dès la prochaine séance',al_send:'Créer l\'alerte',al_ok:'Alerte créée : envoyez-la aux groupes ci-dessous',al_lift:'Lever l\'alerte',al_lifted:'Alerte levée',al_open:'Envoyer à {g}',al_act:'Alertes en cours',al_none:'Cochez au moins un joueur.',al_sql:'Les alertes ne sont pas encore activées : lancez la commande SQL « alertes ».',z_isch:'Ischios',z_add:'Adducteurs',z_quad:'Quadriceps',z_mol:'Mollets',z_dos:'Dos / lombaires',z_gen:'Genou',z_che:'Cheville',x_sprint:'Sprints / haute vitesse',x_frappe:'Frappes',x_cod:'Changements de direction',x_duel:'Duels',x_vol:'Volume total',m_al:'⚠️ ALERTE MÉDICALE · {u}',m_alz:'Zones : {l}',m_alx:'À limiter : {l}',m_alp:'Joueurs ({n}) : {l}',m_alby:'{by}, {d} {h}',cp:'Compensation',cpm:'Durée (min)',m_cp:'\nCompensation (dispos n\'ayant pas joué) :\n{l}',cpNo:'non',
 med_t:'Briefing médical',med_l:'Passez l\'effectif en revue joueur par joueur. Seuls le statut, la consigne et la date de retour sont partagés. Pathologies et soins restent visibles du seul staff médical, jamais envoyés.',
 carry:'Statuts repris du jour précédent. Modifiez ce qui a changé.',fresh:'Premier briefing : tout l\'effectif démarre sans restriction.',
 sendsToday:'Briefings validés ce jour',noneYet:'aucun pour l\'instant',
 nChanges:'{n} changement(s) depuis le dernier briefing validé.',noChange:'Aucun changement depuis le dernier briefing validé.',
 label:'Briefing',validate:'Valider et envoyer',validateMine:'Valider ma saisie',mineOk:'Saisie validée',checks:'Saisies validées',canSend:'Valide et envoie',validated:'Briefing validé',
 matchDay:'Jour de match',opp:'Adversaire',played:'{n} joueur(s) ont joué',minHint:'Cochez pour saisir les minutes jouées.',min:'Min.',
 type:'Type (statistiques)',ret:'Retour prévu (optionnel)',cons:'Consigne partagée (prépa et coach)',consPh:'Ex. pas de duel, volume réduit',
 lastPrepa:'Séance prépa',pathBtn:'Pathologies / soins',chr:'Pathologie chronique',chrPh:'Ex. tendinopathie rotulienne G',aig:'Pathologie aiguë',aigPh:'Ex. contusion cuisse D',aigd:'Apparue le',care:'Prise en charge du jour',c_:'—',c_recup:'Récupération',c_soins:'Soins',careTx:'Soins réalisés',careTxPh:'Ex. drainage, cryo, strapping',medOnly:'Visible du médical uniquement',suivi:'Suivi soins / récupération',suiviL:'Joueurs avec une pathologie en cours ou une prise en charge aujourd\'hui.',since:'depuis le {d}',chrS:'chronique',leftOn:'Parti le {d}',
 addP:'Ajouter un joueur qui arrive',num:'N°',nom:'Nom',poste:'Poste',club:'Club',add:'Ajouter',added:'Joueur ajouté',
 prepa_t:'Prépa physique',prepa_l:'Joueurs en réathlé ou en entraînement adapté selon le dernier briefing validé. La séance saisie est visible par le médical.',
 prepaLock:'Vous voyez le statut et la consigne. Les détails médicaux se discutent à l\'oral avec le médical.',
 none_pr:'Aucun joueur en réathlé ou en adapté.',dur:'Durée (min)',rpe:'RPE (0–10)',gps:'GPS (m)',exos:'Exercices',exPh:'Ex. 4×6 min course, renforcement',load:'Charge interne (durée × RPE)',save:'Enregistrer la séance',saved:'Séance enregistrée',
 consL:'Consigne',retL:'Retour prévu',noneC:'aucune',matchMin:'Minutes du match contre {o}',
 coach_t:'Effectif pour la séance',coach_l:'Qui peut s\'entraîner, par poste, d\'après le dernier briefing validé.',coachLock:'Aucun diagnostic dans cette vue : nom, poste, disponibilité et consigne courte.',usable:'utilisables',
 noBrief:'Aucun briefing validé pour ce jour.',from:'Briefing {l} de {h}',
 dir_t:'Rapport de disponibilité',dir_l:'Indicateurs sur les jours de stage briefés, d\'après le dernier briefing validé de chaque jour. Un jour est perdu quand le joueur est indisponible, en soins ou en réathlé ; un match est manqué pour la même raison.',
 dirLock:'Pas de diagnostic. Le type de blessure n\'apparaît qu\'en statistique globale.',
 k_today:'Disponibles',k_rate:'Taux de disponibilité du stage',k_lost:'Jours perdus',k_of:'{a} joueurs sur {b}, dont {c} en adapté',k_pd:'sur {n} jours-joueur',k_avg:'{n} par joueur en moyenne',
 perPlayer:'Par joueur',clickP:'Touchez un joueur pour voir sa fiche.',h_player:'Joueur',h_today:'Statut',h_lost:'Jours perdus',h_rate:'Dispo',h_min:'Minutes jouées',h_miss:'Matchs manqués',h_ret:'Retour prévu',
 byType:'Jours perdus par type',sheet:'Fiche',sheetTxt:'{l} jour(s) perdu(s) sur {d}, disponibilité {r} %, {m} minutes jouées, {x} match(s) manqué(s) sur {y}.',matchMark:'encadré = jour de match',
 wa_t:'Envoi WhatsApp',wa_l:'Un message par destinataire, dans sa langue et filtré selon son rôle. Touchez « Ouvrir WhatsApp », puis envoyez.',
 noPhone:'Numéro manquant',byPerson:'Par personne',msgFull:'Message complet',msgShort:'Message court + lien',m_link:'Détail : {u}',m_wl:'À surveiller : {l}.',m_lf:'Départ : {l}.',m_ab:'Pas à l\'entraînement : {l}.',m_pr2:'Réathlé : {r}. Adaptés : {a}.',byGroup:'Par groupe',grpL:'Un message par groupe WhatsApp (un groupe par fonction). Le bouton ouvre WhatsApp : choisissez le groupe, puis envoyez.',grpOpen:'Partager dans le groupe',grpName:'Groupe {r}',sendAll:'Envoyer à tous ({n})',autoAll:'Envoi automatique ({n})',autoRes:'{ok} envoyé(s), {ko} échec(s)',autoBusy:'Envoi en cours…',serie:'Envoi {i} sur {n}',serieL:'Touchez le bouton, envoyez dans WhatsApp, puis revenez ici pour le suivant.',openFor:'Ouvrir WhatsApp pour {x}',skip:'Passer',stop:'Arrêter',allSent:'Tous les messages ont été ouverts.',sentMark:'Envoyé',open:'Ouvrir WhatsApp',copy:'Copier',copied:'Message copié',
 waNone:'Aucun briefing validé ce jour. Validez-le dans l\'onglet Médical.',noContacts:'Aucun destinataire. Ajoutez-les dans l\'onglet Staff et accès.',
 st_t:'Staff et accès',st_l:'Chaque personne se connecte avec son e-mail et reçoit la vue de son rôle. Le numéro WhatsApp est au format international, sans + ni espaces (ex. 244923000000).',
 st_name:'Nom',st_role:'Rôle',st_email:'E-mail de connexion',st_phone:'Numéro WhatsApp',st_lang:'Langue',st_add:'Ajouter une personne',st_del:'Retirer',
 demo:'Démonstration : rien n\'est partagé, les données restent sur cet appareil.',demoRole:'Voir comme',
 loading:'Chargement…',err:'Enregistrement impossible : {m}',
 li_t:'Connexion',li_l:'Utilisez l\'e-mail enregistré par le staff médical. À la première connexion, choisissez un mot de passe avec « Créer mon accès ».',
 email:'E-mail',pwd:'Mot de passe (6 caractères minimum)',signin:'Se connecter',signup:'Créer mon accès',signout:'Se déconnecter',
 li_bad:'E-mail ou mot de passe incorrect.',li_made:'Accès créé. Connectez-vous.',noRole:'Cet e-mail n\'est pas enregistré dans le staff. Demandez au staff médical de l\'ajouter.',
 m_head:'{l} du {d} ({h}), validé par {by}.',
 m_med:'{ok} sans restriction, {ad} adaptés, {re} en réathlé, {so} en soins, {in} indisponibles{ab}.',
 m_pr:'En réathlé :\n{re}\nEntraînement adapté :\n{ad}',
 m_co:'{pos}\nAdaptés :\n{adl}\nIndisponibles :\n{inl}',sum:{ok:'dispo',adapte:'adaptés',reath:'en réathlé',soins:'en soins',indispo:'indispo',absent:'absent(s)'},m_rate:'Taux de disponibilité : {p} % ({a}/{b}).',m_tmabs:'\nPas à l\'entraînement :\n{l}',m_tmleft:'A quitté le rassemblement :\n{l}\n→ Organiser son départ du rassemblement, informer le club et organiser son retour.',
 m_di:'Disponibilité : {p} % ({a}/{b}).\nIndisponibles :\n{inl}',
 m_ch:'Changements :\n{l}\n',m_left:'A quitté le rassemblement :\n{l}',m_watch:'\nJoueurs à surveiller :\n{l}',m_care:'\nSoins / récupération :\n{l}',watch:'À surveiller',watchT:'Partagé avec les coachs, sans détail médical',
 m_min:'\nMinutes vs {o} :\n{l}',m_none:'• aucun',m_ret:'retour {d}'},
pt:{sub:'Seleção Nacional · estágio de 9 a 18 de novembro de 2026',
 tab_medical:'Médico',tab_prepa:'Preparação física',tab_coach:'Equipa técnica',tab_direction:'Direção',tab_wa:'Envio WhatsApp',tab_staff:'Staff e acessos',tab_roster:'Plantel',photo:'Foto',photoKo:'Foto não guardada. Execute primeiro o comando SQL « photo ».',photoOk:'Foto guardada',cropT:'Enquadrar a foto',cropL:'Arraste para centrar o rosto, faça zoom com o cursor.',zoom:'Zoom',savePh:'Guardar',cancel:'Cancelar',ro_t:'Plantel do estágio',ro_l:'Corrija um jogador, ajuste a data de chegada ou retire-o. Um jogador só aparece no briefing a partir da data de chegada.',arr:'Chegada',dep:'Saída',del:'Retirar',delOk:'Jogador retirado',delKo:'Este jogador já tem dados; registe antes a sua saída.',
 r_medical:'Departamento médico',r_prepa:'Preparação física',r_coach:'Treinador',r_tm:'Team manager',r_direction:'Direção',
 s_indispo:'Indisponível',s_soins:'Em tratamento',s_reath:'Em readaptação',s_adapte:'Treino adaptado',s_ok:'Sem restrições',s_absent:'Ausente',s_parti:'Deixou o estágio',
 c_ok:'Disponível',c_adapte:'Disponível com adaptação',c_indispo:'Indisponível',c_parti:'Deixou o estágio',
 G:'Guarda-redes',D:'Defesas',M:'Médios',A:'Avançados',G1:'Guarda-redes',D1:'Defesa',M1:'Médio',A1:'Avançado',
 t_mus:'Muscular',t_art:'Articular / ligamentar',t_ten:'Tendinosa',t_tra:'Traumática / contusão',t_mal:'Doença',t_aut:'Outro',
 l_matin:'Manhã',l_aprem:'Tarde',l_soir:'Noite',l_avmatch:'Pré-jogo',l_match:'Pós-jogo',g_ok:'Disponível jogo',g_no:'Indisponível jogo',avL:'Pré-jogo: indique apenas quem está disponível ou não para o jogo.',apL:'Pós-jogo: minutos jogados e eventual queixa. O detalhe da queixa fica no médico.',pl:'Queixa',pl_non:'Não',pl_oui:'Sim',plt:'Detalhe da queixa',pltPh:'Ex. dor isquiotibial direito',m_av:'Jogo {o}:\nDisponíveis ({a}):\n{al}\nIndisponíveis ({b}):\n{bl}',m_pl:'\nQueixas pós-jogo:\n{l}',m_pl0:'\nNenhuma queixa pós-jogo.',avT:'Pré-jogo',sb:'Saída por lesão',sbt:'Lesão',sbtPh:'Ex. comoção cerebral, choque na cabeça',sbHint:'Copiado para a patologia aguda do jogador.',m_sb:'\nSaídas por lesão:\n{l}',zone:'Zona',h_map:'Mapa das patologias',suiviV:'Tratamentos da véspera',suiviVL:'Jogadores tratados em {d}.',suiviNone:'Nenhum tratamento registado em {d}.',suiviAll:'Ver todos os seguimentos ({n})',suiviLess:'Ocultar',aw:'A vigiar',tl:'Tempo de jogo limitado',awt:'Motivo',awtPh:'Ex. tensão isquiotibial, regresso',m_aw:'\nA vigiar ({n}):\n{l}',m_tl:'tempo de jogo limitado',al_btn:'⚠️ Alerta staff',al_t:'Alerta staff',al_l:'Mensagem urgente aos treinadores e ao preparador, fora do briefing. Veem a zona e as indicações, não o diagnóstico detalhado.',al_pl:'Jogadores',al_z:'Zonas',al_lim:'A limitar',al_note:'Precisão (opcional)',al_notePh:'Ex. sem sprint acima de 80 %',al_urg:'Urgência',u_now:'Imediato (sessão em curso)',u_next:'A partir da próxima sessão',al_send:'Criar o alerta',al_ok:'Alerta criado: envie-o aos grupos abaixo',al_lift:'Levantar o alerta',al_lifted:'Alerta levantado',al_open:'Enviar a {g}',al_act:'Alertas em curso',al_none:'Marque pelo menos um jogador.',al_sql:'Os alertas ainda não estão ativados: execute o comando SQL « alertas ».',z_isch:'Isquiotibiais',z_add:'Adutores',z_quad:'Quadríceps',z_mol:'Gémeos',z_dos:'Costas / lombar',z_gen:'Joelho',z_che:'Tornozelo',x_sprint:'Sprints / alta velocidade',x_frappe:'Remates',x_cod:'Mudanças de direção',x_duel:'Duelos',x_vol:'Volume total',m_al:'⚠️ ALERTA MÉDICO · {u}',m_alz:'Zonas: {l}',m_alx:'A limitar: {l}',m_alp:'Jogadores ({n}): {l}',m_alby:'{by}, {d} {h}',cp:'Compensação',cpm:'Duração (min)',m_cp:'\nCompensação (disponíveis que não jogaram):\n{l}',cpNo:'não',
 med_t:'Briefing médico',med_l:'Passe o plantel em revista jogador a jogador. Só o estado, a indicação e a data de regresso são partilhados. Patologias e tratamentos ficam visíveis só para o staff médico, nunca enviados.',
 carry:'Estados retomados do dia anterior. Altere o que mudou.',fresh:'Primeiro briefing: todo o plantel começa sem restrições.',
 sendsToday:'Briefings validados hoje',noneYet:'nenhum por enquanto',
 nChanges:'{n} alteração(ões) desde o último briefing validado.',noChange:'Nenhuma alteração desde o último briefing validado.',
 label:'Briefing',validate:'Validar e enviar',validateMine:'Validar o meu registo',mineOk:'Registo validado',checks:'Registos validados',canSend:'Valida e envia',validated:'Briefing validado',
 matchDay:'Dia de jogo',opp:'Adversário',played:'{n} jogador(es) jogaram',minHint:'Marque para registar os minutos jogados.',min:'Min.',
 type:'Tipo (estatísticas)',ret:'Regresso previsto (opcional)',cons:'Indicação partilhada (prep. física e treinador)',consPh:'Ex. sem duelos, volume reduzido',
 lastPrepa:'Sessão prep. física',pathBtn:'Patologias / tratamentos',chr:'Patologia crónica',chrPh:'Ex. tendinopatia rotuliana E',aig:'Patologia aguda',aigPh:'Ex. contusão coxa D',aigd:'Surgiu a',care:'Tratamento do dia',c_:'—',c_recup:'Recuperação',c_soins:'Tratamento',careTx:'Tratamentos realizados',careTxPh:'Ex. drenagem, crio, ligadura',medOnly:'Visível só para o médico',suivi:'Seguimento tratamentos / recuperação',suiviL:'Jogadores com patologia em curso ou tratamento hoje.',since:'desde {d}',chrS:'crónica',leftOn:'Saiu a {d}',
 addP:'Adicionar um jogador que chega',num:'N.º',nom:'Nome',poste:'Posição',club:'Clube',add:'Adicionar',added:'Jogador adicionado',
 prepa_t:'Preparação física',prepa_l:'Jogadores em readaptação ou treino adaptado segundo o último briefing validado. A sessão registada é visível pelo departamento médico.',
 prepaLock:'Vê o estado e a indicação. Os detalhes médicos são discutidos oralmente com o departamento médico.',
 none_pr:'Nenhum jogador em readaptação ou treino adaptado.',dur:'Duração (min)',rpe:'RPE (0–10)',gps:'GPS (m)',exos:'Exercícios',exPh:'Ex. 4×6 min corrida, reforço',load:'Carga interna (duração × RPE)',save:'Guardar a sessão',saved:'Sessão guardada',
 consL:'Indicação',retL:'Regresso previsto',noneC:'nenhuma',matchMin:'Minutos do jogo contra {o}',
 coach_t:'Plantel para o treino',coach_l:'Quem pode treinar, por posição, segundo o último briefing validado.',coachLock:'Nenhum diagnóstico nesta vista: nome, posição, disponibilidade e indicação curta.',usable:'utilizáveis',
 noBrief:'Nenhum briefing validado para este dia.',from:'Briefing {l} das {h}',
 dir_t:'Relatório de disponibilidade',dir_l:'Indicadores dos dias de estágio registados, segundo o último briefing validado de cada dia. Um dia é perdido quando o jogador está indisponível, em tratamento ou em readaptação; um jogo é falhado pelo mesmo motivo.',
 dirLock:'Sem diagnóstico. O tipo de lesão só aparece em estatística global.',
 k_today:'Disponíveis',k_rate:'Taxa de disponibilidade do estágio',k_lost:'Dias perdidos',k_of:'{a} jogadores de {b}, dos quais {c} em treino adaptado',k_pd:'em {n} dias-jogador',k_avg:'{n} por jogador em média',
 perPlayer:'Por jogador',clickP:'Toque num jogador para ver a ficha.',h_player:'Jogador',h_today:'Estado',h_lost:'Dias perdidos',h_rate:'Disp.',h_min:'Minutos jogados',h_miss:'Jogos falhados',h_ret:'Regresso previsto',
 byType:'Dias perdidos por tipo',sheet:'Ficha',sheetTxt:'{l} dia(s) perdido(s) em {d}, disponibilidade {r} %, {m} minutos jogados, {x} jogo(s) falhado(s) em {y}.',matchMark:'contorno = dia de jogo',
 wa_t:'Envio WhatsApp',wa_l:'Uma mensagem por destinatário, na sua língua e filtrada segundo a sua função. Toque em «Abrir WhatsApp» e envie.',
 noPhone:'Número em falta',byPerson:'Por pessoa',msgFull:'Mensagem completa',msgShort:'Mensagem curta + link',m_link:'Detalhe: {u}',m_wl:'A vigiar: {l}.',m_lf:'Saída: {l}.',m_ab:'Não estão no treino: {l}.',m_pr2:'Readaptação: {r}. Adaptados: {a}.',byGroup:'Por grupo',grpL:'Uma mensagem por grupo WhatsApp (um grupo por função). O botão abre o WhatsApp: escolha o grupo e envie.',grpOpen:'Partilhar no grupo',grpName:'Grupo {r}',sendAll:'Enviar a todos ({n})',autoAll:'Envio automático ({n})',autoRes:'{ok} enviado(s), {ko} falha(s)',autoBusy:'A enviar…',serie:'Envio {i} de {n}',serieL:'Toque no botão, envie no WhatsApp e volte aqui para o seguinte.',openFor:'Abrir WhatsApp para {x}',skip:'Saltar',stop:'Parar',allSent:'Todas as mensagens foram abertas.',sentMark:'Enviado',open:'Abrir WhatsApp',copy:'Copiar',copied:'Mensagem copiada',
 waNone:'Nenhum briefing validado hoje. Valide-o no separador Médico.',noContacts:'Nenhum destinatário. Adicione-os no separador Staff e acessos.',
 st_t:'Staff e acessos',st_l:'Cada pessoa entra com o seu e-mail e recebe a vista da sua função. O número WhatsApp está em formato internacional, sem + nem espaços (ex. 244923000000).',
 st_name:'Nome',st_role:'Função',st_email:'E-mail de acesso',st_phone:'Número WhatsApp',st_lang:'Língua',st_add:'Adicionar uma pessoa',st_del:'Retirar',
 demo:'Demonstração: nada é partilhado, os dados ficam neste aparelho.',demoRole:'Ver como',
 loading:'A carregar…',err:'Não foi possível guardar: {m}',
 li_t:'Entrar',li_l:'Use o e-mail registado pelo departamento médico. Na primeira vez, escolha uma palavra-passe com «Criar o meu acesso».',
 email:'E-mail',pwd:'Palavra-passe (mínimo 6 caracteres)',signin:'Entrar',signup:'Criar o meu acesso',signout:'Sair',
 li_bad:'E-mail ou palavra-passe incorretos.',li_made:'Acesso criado. Entre agora.',noRole:'Este e-mail não está registado no staff. Peça ao departamento médico para o adicionar.',
 m_head:'{l} de {d} ({h}), validado por {by}.',
 m_med:'{ok} sem restrições, {ad} adaptados, {re} em readaptação, {so} em tratamento, {in} indisponíveis{ab}.',
 m_pr:'Em readaptação:\n{re}\nTreino adaptado:\n{ad}',
 m_co:'{pos}\nAdaptados:\n{adl}\nIndisponíveis:\n{inl}',sum:{ok:'disponíveis',adapte:'adaptados',reath:'em readaptação',soins:'em tratamento',indispo:'indisponíveis',absent:'ausente(s)'},m_rate:'Taxa de disponibilidade: {p} % ({a}/{b}).',m_tmabs:'\nNão estão no treino:\n{l}',m_tmleft:'Deixou o estágio:\n{l}\n→ Organizar a saída do estágio, informar o clube e organizar o regresso.',
 m_di:'Disponibilidade: {p} % ({a}/{b}).\nIndisponíveis:\n{inl}',
 m_ch:'Alterações:\n{l}\n',m_left:'Deixou o estágio:\n{l}',m_watch:'\nJogadores a vigiar:\n{l}',m_care:'\nTratamentos / recuperação:\n{l}',watch:'A vigiar',watchT:'Partilhado com os treinadores, sem detalhe médico',
 m_min:'\nMinutos vs {o}:\n{l}',m_none:'• nenhum',m_ret:'regresso {d}'}
};
const ls={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
let LANG=ls.get('lang')||((navigator.language||'').startsWith('fr')?'fr':'pt');
const tr=(L,k,v={})=>String(T[L][k]??T.fr[k]??k).replace(/\{(\w+)\}/g,(_,x)=>v[x]??'');
const t=(k,v)=>tr(LANG,k,v);

/* ---------- constantes ---------- */
const STS=['indispo','soins','reath','adapte','ok','absent','parti'], LOST=['indispo','soins','reath'];
const CAT=s=>LOST.includes(s)||s==='absent'?'indispo':s;
const TYPES=['mus','art','ten','tra','mal','aut'], POS=['G','D','M','A'];
const ROLES=['medical','prepa','coach','tm','direction'], LABELS=['matin','aprem','soir','avmatch','match'];
// étiquette proposée par défaut : avant-match puis après-match les jours de match
const defLabel=(sends,d)=>{if(d&&d.match?.on){const ls_=sends.map(x=>x.label);return ls_.includes('avmatch')?'match':'avmatch'}return ['matin','aprem','soir'][Math.min(sends.length,2)]};
const gOf=x=>x.g||(['ok','adapte'].includes(x.s)?'ok':'no');
const TABS={medical:['medical','wa','prepa','coach','direction','roster','staff','fiches'],prepa:['prepa','coach','fiches'],coach:['coach','fiches'],tm:['coach','fiches'],direction:['direction','coach','fiches']};

/* ---------- dates ---------- */
const pad=n=>String(n).padStart(2,'0');
const iso=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const fromIso=s=>{const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d)};
const addDays=(s,n)=>{const d=fromIso(s);d.setDate(d.getDate()+n);return iso(d)};
const dm=s=>s?`${s.slice(8,10)}/${s.slice(5,7)}`:'';
const longD=s=>fromIso(s).toLocaleDateString(LANG==='pt'?'pt-PT':'fr-FR',{weekday:'short',day:'numeric',month:'short'});
const hmOf=isoTs=>{const d=new Date(isoTs);return `${pad(d.getHours())}h${pad(d.getMinutes())}`};
let DATE=iso(new Date());

/* ---------- état ---------- */
const S={players:[],drafts:{},sends:[],prepa:[],staff:[],alerts:[],typeStats:[],me:null,ready:false};
let selP=null, LABEL=null, TALLY=null;
const OPEN=new Set();
const ZONES=['isch','add','quad','mol','dos','gen','che'], LIMS=['sprint','frappe','cod','duel','vol'];
let AL_FORM=false, SUIVI_ALL=false;
const ini=n=>String(n||'?').split(/\s+/).map(w=>w[0]).join('').slice(0,2).toUpperCase();
const av=(p,cls='')=>p.photo?`<img class="av ${cls}" src="${esc(p.photo)}" alt="">`:`<span class="av ${cls}" aria-hidden="true">${esc(ini(p.nom))}</span>`;
// Recadrage : l'utilisateur déplace et zoome dans un cercle, sortie 320 px nette.
function cropDialog(file,OUT=320){return new Promise((ok,ko)=>{
  const u=URL.createObjectURL(file),im=new Image();
  im.onerror=()=>{URL.revokeObjectURL(u);ko(new Error('image'))};
  im.onload=()=>{
    const V=280,dlg=document.createElement('dialog');dlg.className='crop';
    dlg.innerHTML=`<h2>${t('cropT')}</h2><p class="sync">${t('cropL')}</p>
      <div class="cropbox"><canvas width="${V*2}" height="${V*2}" style="width:${V}px;height:${V}px"></canvas><div class="cropring"></div></div>
      <label class="f">${t('zoom')}<input type="range" min="1" max="4" step="0.01" value="1"></label>
      <div class="bar"><button class="btn" data-x="0">${t('cancel')}</button><button class="btn primary" data-x="1">${t('savePh')}</button></div>`;
    document.body.appendChild(dlg);
    const cv=dlg.querySelector('canvas'),g=cv.getContext('2d'),rg=dlg.querySelector('input');
    const base=V/Math.min(im.width,im.height); // échelle pour que le petit côté remplisse le cercle
    let z=1,cx=im.width/2,cy=Math.min(im.height/2,im.width*0.55); // portrait : visage plutôt en haut
    const clamp=()=>{const half=V/2/(base*z);cx=Math.min(Math.max(cx,half),im.width-half);cy=Math.min(Math.max(cy,half),im.height-half)};
    const draw=()=>{clamp();const sc=base*z*2;g.imageSmoothingQuality='high';g.fillStyle='#000';g.fillRect(0,0,cv.width,cv.height);g.drawImage(im,cv.width/2-cx*sc,cv.height/2-cy*sc,im.width*sc,im.height*sc)};
    let drag=null;
    cv.addEventListener('pointerdown',e=>{drag={x:e.clientX,y:e.clientY,cx,cy};cv.setPointerCapture(e.pointerId)});
    cv.addEventListener('pointermove',e=>{if(!drag)return;const k=base*z;cx=drag.cx-(e.clientX-drag.x)/k;cy=drag.cy-(e.clientY-drag.y)/k;draw()});
    cv.addEventListener('pointerup',()=>drag=null);cv.addEventListener('pointercancel',()=>drag=null);
    cv.addEventListener('wheel',e=>{e.preventDefault();z=Math.min(4,Math.max(1,z*(e.deltaY<0?1.08:1/1.08)));rg.value=z;draw()},{passive:false});
    rg.addEventListener('input',()=>{z=+rg.value;draw()});
    const end=v=>{dlg.close();dlg.remove();URL.revokeObjectURL(u);ok(v)};
    dlg.addEventListener('cancel',e=>{e.preventDefault();end(null)});
    dlg.addEventListener('click',e=>{const b=e.target.closest('[data-x]');if(!b)return;
      if(b.dataset.x!=='1')return end(null);
      const o=document.createElement('canvas');o.width=o.height=OUT;const og=o.getContext('2d');og.imageSmoothingQuality='high';
      const half=V/2/(base*z);// taille de la zone visible dans l'image d'origine
      // réduction en deux étapes pour garder la netteté sur les grandes photos
      const src=half*2,mid=document.createElement('canvas');const step=Math.min(Math.round(src),OUT*2);mid.width=mid.height=step;
      const mg=mid.getContext('2d');mg.imageSmoothingQuality='high';mg.drawImage(im,cx-half,cy-half,src,src,0,0,step,step);
      og.drawImage(mid,0,0,step,step,0,0,OUT,OUT);end(o.toDataURL('image/jpeg',0.9))});
    draw();dlg.showModal();
  };
  im.src=u;
})}
const hasPath=x=>!!(x.chr||x.aig||x.pc);
const blankP=()=>({s:'ok',c:'',r:'',t:'',m:0});
const byId=id=>S.players.find(p=>p.id===id);
const activeOn=(p,day)=>p.added_on<=day&&(!p.left_on||p.left_on>=day);
const roster=day=>S.players.filter(p=>activeOn(p,day)).sort((a,b)=>POS.indexOf(a.poste)-POS.indexOf(b.poste)||(a.num??99)-(b.num??99));

function draft(day=DATE){
  const d=S.drafts[day];
  const prevDays=Object.keys(S.drafts).filter(k=>k<day).sort(), base=prevDays.length?S.drafts[prevDays[prevDays.length-1]].players:{};
  const players={};
  roster(day).forEach(p=>{
    if(d&&d.players[p.id]){players[p.id]=d.players[p.id];return}
    const b=base[p.id]&&base[p.id].s!=='parti'?base[p.id]:blankP();
    players[p.id]={s:b.s,c:b.s==='ok'?'':b.c,r:b.s==='ok'?'':b.r,t:b.s==='ok'?'':b.t,m:0,chr:b.chr||'',aig:b.aig||'',aigd:b.aigd||'',aigz:b.aigz||'',chrz:b.chrz||'',w:!!b.w,...(b.tr?{tr:b.tr}:{})};
  });
  return {exists:!!d,carried:!d&&prevDays.length>0,players,match:d?d.match:{on:false,opp:'Sudão do Sul'}};
}
const pl=(id,day=DATE)=>draft(day).players[id]||blankP();
const sendsOf=day=>S.sends.filter(s=>s.day===day).sort((a,b)=>a.at<b.at?-1:1);
function lastSendUpTo(day){const l=S.sends.filter(s=>s.day<=day).sort((a,b)=>a.at<b.at?-1:1);return l[l.length-1]||null}
function prevSend(send){const l=S.sends.filter(s=>s.at<send.at).sort((a,b)=>a.at<b.at?-1:1);return l[l.length-1]||null}
function counts(players){const c={indispo:0,soins:0,reath:0,adapte:0,ok:0,absent:0,parti:0};Object.values(players).forEach(x=>c[x.s]=(c[x.s]||0)+1);c.n=Object.keys(players).length-c.parti-c.absent;return c}
function diff(a,b){ // a: ancien snap, b: nouveau
  return Object.keys(b).filter(id=>{const x=a&&a[id]||blankP(),y=b[id];return x.s!==y.s||x.c!==y.c||x.r!==y.r||!!x.w!==!!y.w}).map(id=>({p:byId(id),from:(a&&a[id])||blankP(),to:b[id]})).filter(x=>x.p);
}

/* ---------- stockage : Supabase ou démonstration locale ---------- */
const CFG=window.DISPO_CONFIG||{};
const DEMO=!(CFG.url&&CFG.key&&window.supabase);
let sb=null;
const Store={
  async loadAll(){
    if(DEMO){const s=JSON.parse(ls.get('dispo-demo')||'null')||demoSeed();Object.assign(S,s);S.me={role:ls.get('demo-role')||'medical',name:'Démo'};S.typeStats=localTypeStats();return}
    const role=S.me.role, q=[sb.from('players').select('*'),sb.from('sends').select('*')];
    q.push(role==='medical'?sb.from('drafts').select('*'):null);
    q.push(['medical','prepa'].includes(role)?sb.from('prepa_sessions').select('*'):null);
    q.push(role==='medical'?sb.from('staff').select('*'):null);
    q.push(['medical','direction'].includes(role)?sb.rpc('type_stats'):null);
    const [pl_,se,dr,pr,st,ty]=await Promise.all(q.map(x=>x||Promise.resolve({data:null})));
    for(const r of [pl_,se,dr,pr,st,ty])if(r&&r.error)throw r.error;
    S.players=pl_.data||[];S.sends=se.data||[];
    S.drafts=Object.fromEntries((dr.data||[]).map(d=>[d.day,d]));
    S.prepa=pr.data||[];S.staff=st.data||[];S.typeStats=ty.data||[];
    S.alerts=[];S.alertsMissing=false;
    if(['medical','coach','prepa'].includes(role)){const {data,error}=await sb.from('alerts').select('*');if(error)S.alertsMissing=true;else S.alerts=data||[]}
  },
  persistDemo(){if(DEMO){const {players,drafts,sends,prepa,staff,alerts}=S;ls.set('dispo-demo',JSON.stringify({players,drafts,sends,prepa,staff,alerts}));S.typeStats=localTypeStats()}},
  async patchDraft(day,patch){
    const d=S.drafts[day]||(S.drafts[day]={day,players:{},match:{on:false,opp:''}});
    Object.assign(d.players,patch.players||{});if(patch.match)d.match=patch.match;
    if(DEMO)return this.persistDemo();
    const {error}=await sb.rpc('draft_patch',{d:day,patch});if(error)throw error;
  },
  async checkDraft(day){
    const d=S.drafts[day]||(S.drafts[day]={day,players:{},match:{on:false,opp:''}});
    if(DEMO){d.checks=[...(d.checks||[]),{by:S.me.name||'Démo',at:new Date().toISOString()}];return this.persistDemo()}
    const {error}=await sb.rpc('draft_check',{d:day});if(error)throw error;
    const {data}=await sb.from('drafts').select('*').eq('day',day).maybeSingle();if(data)S.drafts[day]=data;
  },
  async addSend(row){
    if(DEMO){row.id=Date.now();S.sends.push(row);return this.persistDemo()}
    const {data,error}=await sb.from('sends').insert(row).select().single();if(error)throw error;S.sends.push(data);
  },
  async addAlert(row){
    if(DEMO){row.id=Date.now();row.at=new Date().toISOString();S.alerts=[...(S.alerts||[]),row];return this.persistDemo()}
    const {data,error}=await sb.from('alerts').insert(row).select().single();if(error)throw error;S.alerts.push(data);
  },
  async liftAlert(id){
    const a=S.alerts.find(x=>x.id===id);if(!a)return;const at=new Date().toISOString();
    if(DEMO){a.lifted_at=at;return this.persistDemo()}
    const {error}=await sb.from('alerts').update({lifted_at:at}).eq('id',id);if(error)throw error;a.lifted_at=at;
  },
  async addPrepa(row){
    if(DEMO){row.id=Date.now();row.at=new Date().toISOString();S.prepa.push(row);return this.persistDemo()}
    const {data,error}=await sb.from('prepa_sessions').insert(row).select().single();if(error)throw error;S.prepa.push(data);
  },
  async savePlayer(p){
    const i=S.players.findIndex(x=>x.id===p.id);if(i<0)S.players.push(p);else S.players[i]=p;
    if(DEMO)return this.persistDemo();
    const {error}=await sb.from('players').upsert(p);if(error)throw error;
  },
  async saveStaff(x){
    if(DEMO){if(!x.id)x.id='s'+Date.now();const i=S.staff.findIndex(y=>y.id===x.id);if(i<0)S.staff.push(x);else S.staff[i]=x;return this.persistDemo()}
    const row={...x};if(!row.id)delete row.id;if(!row.email)row.email=null;
    const {data,error}=await sb.from('staff').upsert(row).select().single();if(error)throw error;
    const i=S.staff.findIndex(y=>y.id===data.id);if(i<0)S.staff.push(data);else S.staff[i]=data;return data;
  },
  async delPlayer(id){if(DEMO){S.players=S.players.filter(x=>x.id!==id);return this.persistDemo()}const {error}=await sb.from('players').delete().eq('id',id);if(error)throw error;S.players=S.players.filter(x=>x.id!==id)},
  async delStaff(id){S.staff=S.staff.filter(x=>x.id!==id);if(DEMO)return this.persistDemo();const {error}=await sb.from('staff').delete().eq('id',id);if(error)throw error}
};
function localTypeStats(){const o=[];Object.values(S.drafts).forEach(d=>{const c={};Object.values(d.players).forEach(x=>{if(LOST.includes(x.s)&&x.t)c[x.t]=(c[x.t]||0)+1});Object.entries(c).forEach(([k,n])=>o.push({day:d.day,t:k,n}))});return o}
function demoSeed(){
  const raw=[[1,'Hugo','G','Atlético Petróleos'],[2,'Neblu','G','Atlético Petróleos'],[3,'Rui Honésimo','G','GD Interclube'],[4,'Buatu','D','Gil Vicente'],[5,'David Carmo','D','Olympiacos'],[6,'Gaspar','D','Lecce'],[7,'Jeovanni Dianganga','D','EA Guingamp'],[8,'Marsoni Sambu','D','FCV Dender EH'],[9,'Ruben Adrito','D','Atlético Petróleos'],[10,'Sandro Cruz','D','SK Slovan Bratislava'],[11,'Kinito','D','Atlético Petróleos'],[12,'Eddie Afonso','D','Atlético Petróleos'],[13,'Pedro Bondo','D','Famalicão'],[14,'To Carneiro','D','FAR Rabat'],[15,'Maestro','M','Alanyaspor'],[16,'Show','M','Kocaelispor'],[17,'Fernandinho','M','1.º de Agosto'],[18,'Mário','M','Atlético Petróleos'],[19,'Beni Mukendi','M','Vitória Guimarães'],[20,'Kelliano','M','FC Akhmat Grozny'],[21,'Milson','M','Al Jazira'],[22,'Zito Luvumbo','A','Mallorca'],[23,'Depu','A','Atlético Petróleos'],[24,'Miro','A','Dynamo Makhachkala'],[25,'Chico Banza','A','Zamalek SC'],[26,'Zini','A','AEK Atenas'],[27,'Mabululu','A','Wiliete de Benguela'],[28,'Gilberto','A','Wiliete de Benguela']];
  return {players:raw.map(([num,nom,poste,club])=>({id:'p'+num,num,nom,poste,club,added_on:'2026-11-01',left_on:null})),drafts:{},sends:[],prepa:[],
    staff:[{id:'s1',name:'Médecin',role:'medical',email:'',phone:'',lang:'pt'},{id:'s2',name:'Coach principal',role:'coach',email:'',phone:'',lang:'pt'},{id:'s3',name:'Vice-président',role:'direction',email:'',phone:'',lang:'pt'}]};
}
function fail(e){console.error(e);toast(t('err',{m:e&&(e.message||e.code)||e}))}

/* ---------- utilitaires d'affichage ---------- */
const V=document.getElementById('view');
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const LOCK='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';
const pill=(k,txt)=>`<span class="pill k-${k}"><i class="dot"></i>${txt}</span>`;
function toast(x){const e=document.getElementById('toast');e.textContent=x;e.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(()=>e.hidden=true,2800)}
const timers={};const debounced=(k,fn,ms=700)=>{clearTimeout(timers[k]);timers[k]=setTimeout(fn,ms)};
/* ---------- traduction des textes libres (FR <-> PT) ---------- */
const TR_ON=()=>!DEMO&&!!CFG.translate;
const PEND=new Set();
// texte k du joueur x dans la langue L : traduction si elle correspond au texte actuel, sinon l'original
const tx=(x,k,L=LANG)=>{const e=x&&x.tr&&x.tr[k];return e&&e.src===x[k]&&e[L]?e[L]:(x&&x[k])||''};
async function translateField(id,k,val){
  if(!TR_ON()||!val)return;
  const job=(async()=>{try{
    const {data,error}=await sb.functions.invoke('translate',{body:{texts:[val]}});
    if(error||!data||!data.items)throw error||new Error('translate');
    const x={...pl(id)};if(x[k]!==val)return;
    x.tr={...(x.tr||{}),[k]:{src:val,...data.items[0]}};await setPlayer(id,x);
  }catch(err){console.warn('traduction',err)}})();
  PEND.add(job);job.finally(()=>PEND.delete(job));return job;
}
// rattrape une fois par jour affiché les textes déjà saisis sans traduction
const BF=new Set();
async function backfill(){
  if(!TR_ON()||BF.has(DATE)||S.me?.role!=='medical')return;BF.add(DATE);
  const d=draft(),todo=[];
  Object.entries(d.players).forEach(([id,x])=>['c','chr','aig','pct','plt','awt'].forEach(k=>{const v=(x[k]||'').trim();if(v&&!(x.tr&&x.tr[k]&&x.tr[k].src===x[k]))todo.push({id,k,v:x[k]})}));
  if(!todo.length)return;
  try{const {data,error}=await sb.functions.invoke('translate',{body:{texts:todo.map(o=>o.v)}});if(error||!data||!data.items)throw error||new Error('translate');
    const by={};todo.forEach((o,i)=>{const x=by[o.id]||(by[o.id]={...pl(o.id)});if(x[o.k]===o.v)x.tr={...(x.tr||{}),[o.k]:{src:o.v,...data.items[i]}}});
    const d2=draft();await Store.patchDraft(DATE,d2.exists?{players:by}:{players:{...d2.players,...by},match:d2.match});render(true)
  }catch(err){console.warn('traduction',err)}
}
const dateBar=()=>`<div class="datebar"><button class="btn small" data-day="-1" aria-label="-1">‹</button><strong>${longD(DATE)}</strong><button class="btn small" data-day="1" aria-label="+1">›</button></div>`;
const head=(ti,le,withDate=true)=>`<div class="head"><div><h1>${ti}</h1><p class="lead">${le}</p></div>${withDate?dateBar():''}</div>${DEMO?`<div class="note warn">${t('demo')}</div>`:''}${['coach','prepa'].includes(curTab())?alertsBanner():''}`;
const sendLabel=s=>`${t('l_'+s.label)||s.label}`;

/* ---------- vue médicale ---------- */
function viewMedical(){
  const d=draft(), c=counts(d.players), sends=sendsOf(DATE), last=lastSendUpTo(DATE);
  const ch=diff(last?last.snap:null,d.players).filter(x=>!(x.to.s==='ok'&&!last));
  let lab=LABEL||defLabel(sends,d);if(!d.match?.on&&['avmatch','match'].includes(lab))lab=defLabel(sends,d);
  const MODE=d.match?.on&&['avmatch','match'].includes(lab)?lab:'';
  const played=Object.values(d.players).filter(x=>+x.m>0).length;
  const prepToday=S.prepa.filter(e=>e.day===DATE);
  const checks=(S.drafts[DATE]&&S.drafts[DATE].checks)||[];
  const rows=POS.map(k=>{const ps=roster(DATE).filter(p=>p.poste===k);if(!ps.length)return '';
    return `<div class="group-title">${t(k)}</div>`+ps.map(p=>{
    const x=d.players[p.id]||blankP(), s=last&&last.snap[p.id], chg=last&&s&&(s.s!==x.s||s.c!==x.c||s.r!==x.r||!!s.w!==!!x.w);
    const logs=prepToday.filter(e=>e.player_id===p.id);
    const showPath=!MODE&&x.s!=='parti'&&(OPEN.has(p.id)||hasPath(x)), showMain=!MODE&&x.s!=='ok'&&x.s!=='parti';
    if(MODE==='avmatch'){if(x.s==='parti')return '';const g=gOf(x);return `<div class="row" data-id="${p.id}"><div class="who"><span class="num">${p.num??''}</span>${av(p)}<span><span class="name">${esc(p.nom)}</span> <span class="club">${t('s_'+x.s)}</span></span></div>
      <div class="seg" role="group" aria-label="${esc(p.nom)}">${['ok','no'].map(k=>`<button class="k-${k==='ok'?'ok':'indispo'}" data-g="${k}" aria-pressed="${g===k}"><i class="dot"></i>${t('g_'+k)}</button>`).join('')}</div>
      ${g==='ok'?`<div class="details"><label class="f">${t('aw')}<select data-f="aw" id="aw-${p.id}">${['non','oui'].map(k=>`<option value="${k}"${k===(x.aw||'non')?' selected':''}>${t('pl_'+k)}</option>`).join('')}</select></label>${x.aw==='oui'?`<label class="f">${t('tl')}<select data-f="tl" id="tl-${p.id}">${['non','oui'].map(k=>`<option value="${k}"${k===(x.tl||'non')?' selected':''}>${t('pl_'+k)}</option>`).join('')}</select></label><label class="f wide">${t('awt')}<input type="text" data-f="awt" id="awt-${p.id}" value="${esc(x.awt||'')}" placeholder="${t('awtPh')}"></label>`:''}</div>`:''}</div>`}
    if(MODE==='match'&&x.s==='parti')return '';
    return `<div class="row${chg?' changed':''}" data-id="${p.id}">
      <div class="who"><span class="num">${p.num??''}</span>${av(p)}<span><span class="name">${esc(p.nom)}</span> <span class="club">${esc(p.club)}</span></span>${MODE==='match'&&x.s!=='parti'?`<label class="mins">${t('min')}<input type="number" min="0" max="130" id="m-${p.id}" data-m="1" value="${x.m||''}" placeholder="0"></label>`:''}${!MODE&&x.s!=='parti'?`<label class="watch" title="${t('watchT')}"><input type="checkbox" data-w="1"${x.w?' checked':''}> ${t('watch')}</label><button class="pbtn${hasPath(x)?' on':''}" data-path="${p.id}" aria-expanded="${showPath}">${t('pathBtn')}</button>`:''}</div>
      <div class="seg" role="group" aria-label="${esc(p.nom)}">${STS.map(k=>`<button class="k-${k}" data-st="${k}" aria-pressed="${x.s===k}"><i class="dot"></i>${t('s_'+k)}</button>`).join('')}</div>
      ${MODE==='match'?`<div class="details">${+x.m>0?`<label class="f">${t('sb')}<select data-f="sb" id="sb-${p.id}">${['non','oui'].map(k=>`<option value="${k}"${k===(x.sb||'non')?' selected':''}>${t('pl_'+k)}</option>`).join('')}</select></label>${x.sb==='oui'?`<label class="f wide">${t('sbt')}<input type="text" data-f="sbt" id="sbt-${p.id}" value="${esc(x.sbt||'')}" placeholder="${t('sbtPh')}"></label><span class="medonly">${t('sbHint')}</span>`:''}`:''}<label class="f">${t('pl')}<select data-f="pl" id="pl-${p.id}">${['non','oui'].map(k=>`<option value="${k}"${k===(x.pl||'non')?' selected':''}>${t('pl_'+k)}</option>`).join('')}</select></label>${!(+x.m>0)&&gOf(x)==='ok'?`<label class="f">${t('cp')}<select data-f="cp" id="cp-${p.id}">${['','non','oui'].map(k=>`<option value="${k}"${k===(x.cp||'')?' selected':''}>${k?t('pl_'+k):'—'}</option>`).join('')}</select></label>${x.cp==='oui'?`<label class="f">${t('cpm')}<input type="number" min="0" max="180" data-cpm="1" id="cpm-${p.id}" value="${x.cpm||''}"></label>`:''}`:''}${x.pl==='oui'?`<label class="f wide">${t('plt')}<input type="text" data-f="plt" id="plt-${p.id}" value="${esc(x.plt||'')}" placeholder="${t('pltPh')}"></label><span class="medonly">${t('medOnly')}</span>`:''}</div>`:''}
      ${!showMain&&!showPath?'':`<div class="details">${showMain?`
        <label class="f">${t('type')}<select data-f="t" id="t-${p.id}"><option value="">—</option>${TYPES.map(k=>`<option value="${k}"${k===x.t?' selected':''}>${t('t_'+k)}</option>`).join('')}</select></label>
        <label class="f">${t('ret')}<input type="date" data-f="r" id="r-${p.id}" value="${esc(x.r)}"></label>
        <label class="f wide">${t('cons')}<input type="text" data-f="c" id="c-${p.id}" value="${esc(x.c)}" placeholder="${t('consPh')}"></label>
        ${logs.length?`<div class="sync" style="grid-column:1/-1">${t('lastPrepa')} : ${logs.map(e=>`${e.dur}′ · RPE ${e.rpe} · ${e.gps} m · ${esc(e.exos)}`).join(' / ')}</div>`:''}`:''}
        ${showPath?`<div class="path"><span class="medonly">${t('medOnly')}</span>
          <label class="f wide">${t('chr')}<input type="text" data-f="chr" id="chr-${p.id}" value="${esc(x.chr||'')}" placeholder="${t('chrPh')}"></label>
          <label class="f">${t('zone')}<select data-f="chrz" id="chrz-${p.id}">${zoneOpts(x.chrz||'',x.chrz?'':guessZone(x.chr))}</select></label>
          <label class="f wide">${t('aig')}<input type="text" data-f="aig" id="aig-${p.id}" value="${esc(x.aig||'')}" placeholder="${t('aigPh')}"></label>
          <label class="f">${t('aigd')}<input type="date" data-f="aigd" id="aigd-${p.id}" value="${esc(x.aigd||'')}"></label>
          <label class="f">${t('zone')}<select data-f="aigz" id="aigz-${p.id}">${zoneOpts(x.aigz||'',x.aigz?'':guessZone(x.aig))}</select></label>
          <label class="f">${t('care')}<select data-f="pc" id="pc-${p.id}">${['','recup','soins'].map(k=>`<option value="${k}"${k===(x.pc||'')?' selected':''}>${t('c_'+k)}</option>`).join('')}</select></label>
          ${x.pc==='soins'?`<label class="f wide">${t('careTx')}<input type="text" data-f="pct" id="pct-${p.id}" value="${esc(x.pct||'')}" placeholder="${t('careTxPh')}"></label>`:''}
        </div>`:''}
      </div>`}
    </div>`}).join('')}).join('');
  const suivi=roster(DATE).map(p=>({p,x:d.players[p.id]||blankP()})).filter(o=>o.x.s!=='parti'&&hasPath(o.x));
  const prevDay=Object.keys(S.drafts).filter(k=>k<DATE).sort().pop(), pd=prevDay?S.drafts[prevDay].players:{};
  const veille=roster(DATE).filter(p=>pd[p.id]&&pd[p.id].pc==='soins').map(p=>({p,y:pd[p.id],x:d.players[p.id]||blankP()}));
  const alF=AL_FORM?`<form class="panel pad alertf" id="alertF"><h2>${t('al_t')}</h2><p class="sync">${t('al_l')}</p>
    <fieldset><legend>${t('al_pl')}</legend><div class="ckl">${roster(DATE).filter(p=>(d.players[p.id]||blankP()).s!=='parti').map(p=>`<label><input type="checkbox" name="pl" value="${p.id}"${(d.players[p.id]||{}).w?' checked':''}> ${esc(p.nom)}</label>`).join('')}</div></fieldset>
    <fieldset><legend>${t('al_z')}</legend><div class="ckl">${ZONES.map(z=>`<label><input type="checkbox" name="z" value="${z}"> ${t('z_'+z)}</label>`).join('')}</div></fieldset>
    <fieldset><legend>${t('al_lim')}</legend><div class="ckl">${LIMS.map(z=>`<label><input type="checkbox" name="x" value="${z}"> ${t('x_'+z)}</label>`).join('')}</div></fieldset>
    <label class="f wide">${t('al_note')}<input type="text" name="note" id="al-note" placeholder="${t('al_notePh')}"></label>
    <fieldset><legend>${t('al_urg')}</legend><div class="ckl">${['now','next'].map(u=>`<label><input type="radio" name="urg" value="${u}"${u==='next'?' checked':''}> ${t('u_'+u)}</label>`).join('')}</div></fieldset>
    <div class="bar"><button class="btn small" type="button" id="alertClose">${t('cancel')}</button><button class="btn primary">${t('al_send')}</button></div></form>`:'';
  const alAct=activeAlerts();
  V.innerHTML=head(t('med_t'),t('med_l'))+`
  ${S.alertsMissing&&CAN_SEND()?`<div class="note warn">${t('al_sql')}</div>`:''}
  ${CAN_SEND()&&!S.alertsMissing&&!AL_FORM?`<div class="bar" style="justify-content:flex-start"><button class="btn danger" id="alertOpen">${t('al_btn')}</button></div>`:''}${alF}
  ${alAct.length?`<div class="sync"><b>${t('al_act')}</b></div>${alAct.map(a=>alertBox(a,CAN_SEND())).join('')}`:''}
  <div class="tally">${['indispo','soins','reath','adapte','ok','absent','parti'].filter(k=>c[k]||!['absent','parti'].includes(k)).map(k=>`<button class="pill k-${k}" data-tally="${k}" aria-pressed="${TALLY===k}"${c[k]?'':' disabled'}><i class="dot"></i>${c[k]} ${t('s_'+k).toLowerCase()}</button>`).join('')}</div>
  ${TALLY&&c[TALLY]?`<div class="panel pad tlist"><b>${t('s_'+TALLY)} (${c[TALLY]})</b><ul>${roster(DATE).filter(p=>(d.players[p.id]||blankP()).s===TALLY).map(p=>{const x=d.players[p.id];return `<li><span class="name">${esc(p.nom)}</span> <span class="sync">${t(p.poste+'1')}${x.c?` · ${esc(tx(x,'c'))}`:''}${x.r?` · ${t('m_ret',{d:dm(x.r)})}`:''}${x.pc?` · ${t('c_'+x.pc)}`:''}</span></li>`}).join('')}</ul></div>`:''}
  <div class="banner${sends.length&&!ch.length?' ok':''}">
    <div style="display:grid;gap:4px;min-width:0"><b>${t('sendsToday')} : ${sends.length?sends.map(s=>`${sendLabel(s)} ${hmOf(s.at)}`).join(' · '):t('noneYet')}</b>
      <span class="sync">${!d.exists&&!sends.length?(d.carried?t('carry'):t('fresh'))+' ':''}${last?(ch.length?t('nChanges',{n:ch.length}):t('noChange')):''}</span>${checks.length?`<span class="sync"><b>${t('checks')}</b> : ${checks.map(c=>`${esc(c.by||'?')} ${hmOf(c.at)}`).join(' · ')}</span>`:''}</div>
    <div class="bar">${`<div class="chips" role="group" aria-label="${t('label')}">${LABELS.filter(l=>d.match?.on||!['avmatch','match'].includes(l)).map(l=>`<button data-label="${l}" aria-pressed="${l===lab}">${t('l_'+l)}</button>`).join('')}</div>`}
      ${CAN_SEND()?`<button class="btn primary" id="validate">${t('validate')}</button>`:`<button class="btn primary" id="validateMine">${t('validateMine')}</button>`}</div>
  </div>
  <div class="banner"><label style="display:flex;gap:8px;align-items:center;font-weight:600"><input type="checkbox" id="matchOn" ${d.match?.on?'checked':''}> ${t('matchDay')}</label>${d.match?.on?`<div class="bar"><label class="f" style="min-width:200px">${t('opp')}<input type="text" id="opp" value="${esc(d.match.opp)}"></label>${MODE==='match'?`<span class="sync">${t('played',{n:played})}</span>`:''}</div>`:`<span class="sync">${t('minHint')}</span>`}${MODE?`<span class="sync" style="flex-basis:100%">${t(MODE==='avmatch'?'avL':'apL')}</span>`:''}</div>
  ${!MODE&&(suivi.length||veille.length)?`<div class="banner suivi"><div style="display:grid;gap:6px;min-width:0"><b>${t('suiviV')} (${veille.length})</b><span class="sync">${prevDay?t(veille.length?'suiviVL':'suiviNone',{d:dm(prevDay)}):''} ${t('medOnly')}.</span>
    ${veille.length?`<ul>${veille.map(({p,y,x})=>`<li><span class="name">${esc(p.nom)}</span>${y.pct?` : ${esc(tx(y,'pct'))}`:''}${x.aig?` · ${esc(tx(x,'aig'))}`:''}</li>`).join('')}</ul>`:''}
    ${suivi.length?`<button class="btn small" id="suiviAll" style="justify-self:start">${SUIVI_ALL?t('suiviLess'):t('suiviAll',{n:suivi.length})}</button>`:''}
    ${SUIVI_ALL?`<ul>${suivi.map(({p,x})=>`<li><span class="name">${esc(p.nom)}</span>${x.aig?` · ${esc(tx(x,'aig'))}${x.aigd?` (${t('since',{d:dm(x.aigd)})})`:''}`:''}${x.chr?` · ${t('chrS')} : ${esc(tx(x,'chr'))}`:''}${x.pc?` · <b>${t('c_'+x.pc)}</b>${x.pc==='soins'&&x.pct?` : ${esc(tx(x,'pct'))}`:''}`:''}</li>`).join('')}</ul>`:''}</div></div>`:''}
  <div class="panel">${rows}
    <form class="addp" id="addP"><label class="f">${t('num')}<input type="number" name="num" id="ap-num" min="1"></label><label class="f">${t('nom')}<input type="text" name="nom" id="ap-nom" required></label>
    <label class="f">${t('poste')}<select name="poste" id="ap-poste">${POS.map(k=>`<option value="${k}">${t(k+'1')}</option>`).join('')}</select></label><label class="f">${t('club')}<input type="text" name="club" id="ap-club"></label>
    <button class="btn">${t('add')}</button></form>
  </div>`;
  backfill();
}
function setPlayer(id,x){
  const d=draft(), patch={players:{[id]:x}};
  if(!d.exists){patch.players={...d.players,[id]:x};patch.match=d.match}
  return Store.patchDraft(DATE,patch).catch(fail);
}

/* ---------- vue prépa ---------- */
function viewPrepa(){
  const s=lastSendUpTo(DATE), RO=!['medical','prepa'].includes(S.me.role);
  if(!s){V.innerHTML=head(t('prepa_t'),t('prepa_l'))+`<div class="panel empty">${t('noBrief')}</div>`;return}
  const list=Object.keys(s.snap).map(byId).filter(p=>p&&['reath','adapte'].includes(s.snap[p.id].s));
  const logs=S.prepa.filter(e=>e.day===DATE);
  const mp=Object.keys(s.snap).filter(id=>+s.snap[id].m>0&&byId(id));
  V.innerHTML=head(t('prepa_t'),t('prepa_l'))+`<div class="note">${LOCK}<span>${t('prepaLock')} ${t('from',{l:sendLabel(s),h:`${dm(s.day)} ${hmOf(s.at)}`})}</span></div>
  <div class="cards">${list.map(p=>{const x=s.snap[p.id], lg=logs.filter(e=>e.player_id===p.id);
    return `<form class="panel pad card" data-id="${p.id}">
      <div class="bar"><div><span class="name">${esc(p.nom)}</span><div class="sync">${t(p.poste+'1')} · n°${p.num??''}</div></div>${pill(x.s,t('s_'+x.s))}</div>
      <div class="consigne"><b>${t('consL')} :</b> ${esc(tx(x,'c'))||t('noneC')}${x.r?`<br><b>${t('retL')} :</b> ${dm(x.r)}`:''}</div>
      ${RO?'':`<div class="form4">
        <label class="f">${t('dur')}<input type="number" id="d-${p.id}" name="dur" min="0" value="40"></label>
        <label class="f">${t('rpe')}<input type="number" id="rp-${p.id}" name="rpe" min="0" max="10" value="5"></label>
        <label class="f">${t('gps')}<input type="number" id="g-${p.id}" name="gps" min="0" value="3500"></label>
        <label class="f full">${t('exos')}<input type="text" id="e-${p.id}" name="exos" placeholder="${t('exPh')}"></label></div>
      <div class="bar"><span class="sync">${t('load')} : <span class="ua" data-ua>200 UA</span></span><button class="btn primary">${t('save')}</button></div>`}
      ${lg.length?`<div class="log">${lg.map(e=>`<div><span>${hmOf(e.at)} · ${esc(e.exos)||'—'}</span><span class="ua">${e.dur}′ · RPE ${e.rpe} · ${e.gps} m · ${e.dur*e.rpe} UA</span></div>`).join('')}</div>`:''}
    </form>`}).join('')||`<div class="empty">${t('none_pr')}</div>`}</div>
  ${s.match?.on&&mp.length?`<div class="panel pad"><h2>${t('matchMin',{o:esc(s.match.opp)})}</h2><div class="tbl"><table><tbody>${mp.sort((a,b)=>s.snap[b].m-s.snap[a].m).map(id=>`<tr><td>${esc(byId(id).nom)}</td><td class="n">${s.snap[id].m}′</td></tr>`).join('')}</tbody></table></div></div>`:''}`;
}

/* ---------- vue coach ---------- */
function viewCoach(){
  const s=lastSendUpTo(DATE);
  if(!s){V.innerHTML=head(t('coach_t'),t('coach_l'))+`<div class="panel empty">${t('noBrief')}</div>`;return}
  const ids=Object.keys(s.snap).filter(byId), cat=k=>ids.filter(id=>CAT(s.snap[id].s)===k).map(byId);
  const col=k=>{const l=cat(k);return `<div class="panel pad col k-${k}"><h2>${t('c_'+k)} <em>${l.length}</em></h2>
    ${POS.map(po=>{const x=l.filter(p=>p.poste===po);return x.length?`<div class="pos"><small>${t(po)}</small><ul>${x.map(p=>{const y=s.snap[p.id];return `<li><span class="li-who">${av(p,'sm')}<span>${esc(p.nom)}</span></span>${y.s==='absent'?`<span>${t('s_absent')}</span>`:''}${k==='adapte'&&y.c?`<span>${esc(tx(y,'c'))}</span>`:''}${k!=='ok'&&y.r?`<span>${t('m_ret',{d:dm(y.r)})}</span>`:''}</li>`}).join('')}</ul></div>`:''}).join('')}</div>`};
  const left=cat('parti');
  const avs=sendsOf(DATE).filter(x=>x.label==='avmatch'&&Object.values(x.snap).some(y=>y.g)), av_=avs[avs.length-1];
  const avP=av_?(()=>{const ii=Object.keys(av_.snap).filter(id=>byId(id)&&av_.snap[id].g&&av_.snap[id].s!=='parti'),a=ii.filter(id=>av_.snap[id].g==='ok'),b=ii.filter(id=>av_.snap[id].g!=='ok');
    return `<div class="panel pad"><h2>${t('avT')}${av_.match?.opp?' · '+esc(av_.match.opp):''} <span class="sync">${hmOf(av_.at)}</span></h2><p style="margin:6px 0">${pill('ok',`${a.length} ${t('g_ok').toLowerCase()}`)} ${pill('indispo',`${b.length} ${t('g_no').toLowerCase()}`)}</p>${b.length?`<p class="sync" style="margin:0">${t('g_no')} : ${b.map(id=>esc(byId(id).nom)).join(', ')}</p>`:''}${S.me?.role!=='tm'&&a.some(id=>av_.snap[id].aw)?`<p style="margin:6px 0 0"><b>${t('aw')}</b> : ${a.filter(id=>av_.snap[id].aw).map(id=>esc(byId(id).nom)+(av_.snap[id].tl?` (${t('m_tl')})`:'')).join(', ')}</p>`:''}</div>`})():'';
  V.innerHTML=head(t('coach_t'),t('coach_l'))+avP+`<div class="note">${LOCK}<span>${t('coachLock')} ${t('from',{l:sendLabel(s),h:`${dm(s.day)} ${hmOf(s.at)}`})}</span></div>
  <div class="lineup">${POS.map(po=>{const all=ids.map(byId).filter(p=>p.poste===po&&s.snap[p.id].s!=='parti'),av=all.filter(p=>CAT(s.snap[p.id].s)!=='indispo');return `<div><small class="sync">${t(po)}</small><br><b>${av.length}/${all.length}</b> <span class="sync">${t('usable')}</span></div>`}).join('')}</div>
  <div class="cols">${col('ok')}${col('adapte')}${col('indispo')}</div>
  ${S.me?.role!=='tm'&&ids.some(id=>s.snap[id].pc&&s.snap[id].s!=='parti')?`<div class="note"><b>${t('care')}</b> : ${ids.filter(id=>s.snap[id].pc&&s.snap[id].s!=='parti').map(id=>`${esc(byId(id).nom)} (${t('c_'+s.snap[id].pc)})`).join(', ')}</div>`:''}
  ${S.me?.role!=='tm'&&ids.some(id=>s.snap[id].w&&s.snap[id].s!=='parti')?`<div class="note watchn"><b>${t('watch')}</b> : ${ids.filter(id=>s.snap[id].w&&s.snap[id].s!=='parti').map(id=>esc(byId(id).nom)).join(', ')}</div>`:''}
  ${left.length?`<div class="note">${t('c_parti')} : ${left.map(p=>esc(p.nom)).join(', ')}</div>`:''}`;
}

/* ---------- vue direction ---------- */
function viewDirection(){
  const daysAll=[...new Set(S.sends.map(s=>s.day))].filter(k=>k<=DATE).sort();
  const finals=Object.fromEntries(daysAll.map(k=>{const l=sendsOf(k);return [k,l[l.length-1]]}));
  const mdays=daysAll.filter(k=>finals[k].match?.on);
  const ids=[...new Set(daysAll.flatMap(k=>Object.keys(finals[k].snap)))].filter(byId);
  const rows=ids.map(id=>{let pres=0,lost=0,min=0,miss=0,mt=0;daysAll.forEach(k=>{const x=finals[k].snap[id];if(!x||x.s==='parti'||x.s==='absent')return;pres++;if(LOST.includes(x.s))lost++;min+=+x.m||0;if(finals[k].match?.on){mt++;if(LOST.includes(x.s))miss++}});
    return{p:byId(id),pres,lost,min,miss,mt,rate:pres?Math.round((pres-lost)/pres*100):null}}).sort((a,b)=>b.lost-a.lost||(a.p.num??99)-(b.p.num??99));
  const totP=rows.reduce((s,r)=>s+r.pres,0), tot=rows.reduce((s,r)=>s+r.lost,0);
  const cur=lastSendUpTo(DATE), c=cur?counts(cur.snap):{ok:0,adapte:0,n:0}, av=c.ok+c.adapte;
  const tmap={};S.typeStats.filter(x=>x.day<=DATE).forEach(x=>tmap[x.t]=(tmap[x.t]||0)+Number(x.n));
  const types=TYPES.map(k=>({k,n:tmap[k]||0})).sort((a,b)=>b.n-a.n), maxT=Math.max(1,...types.map(x=>x.n));
  if(!selP||!rows.find(r=>r.p.id===selP))selP=rows[0]?.p.id||null;
  const sr=rows.find(r=>r.p.id===selP);
  const snapOf=id=>cur&&cur.snap[id]||blankP();
  V.innerHTML=head(t('dir_t'),t('dir_l'))+`<div class="note">${LOCK}<span>${t('dirLock')}</span></div>
  <div class="kpis">
    <div class="panel pad kpi"><span>${t('k_today')}</span><b>${c.n?Math.round(av/c.n*100)+' %':'—'}</b><span>${t('k_of',{a:av,b:c.n,c:c.adapte})}</span></div>
    <div class="panel pad kpi"><span>${t('k_rate')}</span><b>${totP?Math.round((totP-tot)/totP*100)+' %':'—'}</b><span>${t('k_pd',{n:totP})}</span></div>
    <div class="panel pad kpi"><span>${t('k_lost')}</span><b>${tot}</b><span>${t('k_avg',{n:(ids.length?tot/ids.length:0).toFixed(1).replace('.',',')})}</span></div>
  </div>
  <div class="two">
    <div class="panel pad"><h2>${t('perPlayer')}</h2><p class="lead sync">${t('clickP')}</p><div class="tbl"><table><thead><tr><th>${t('h_player')}</th><th>${t('h_today')}</th><th class="n">${t('h_lost')}</th><th class="n">${t('h_rate')}</th><th class="n">${t('h_min')}</th><th class="n">${t('h_miss')}</th><th>${t('h_ret')}</th></tr></thead><tbody>
    ${rows.map(r=>{const x=snapOf(r.p.id);return `<tr class="pick${r.p.id===selP?' sel':''}" data-pid="${r.p.id}" tabindex="0"><td>${esc(r.p.nom)}</td><td class="st" title="${t('c_'+CAT(x.s))}">${pill(CAT(x.s),t('c_'+CAT(x.s)))}</td><td class="n">${r.lost}</td><td class="n">${r.rate??'—'} %</td><td class="n">${r.min}′</td><td class="n">${r.miss}/${r.mt}</td><td>${dm(x.r)}</td></tr>`}).join('')||`<tr><td colspan="7" class="sync">${t('noBrief')}</td></tr>`}
    </tbody></table></div></div>
    <div style="display:grid;gap:14px;align-content:start">
      ${sr?`<div class="panel pad"><h2>${t('sheet')} · ${esc(sr.p.nom)}</h2>
        <p class="lead sync">${t(sr.p.poste+'1')} · n°${sr.p.num??''} · ${esc(sr.p.club)}</p>
        <div class="strip">${daysAll.map(k=>{const x=finals[k].snap[selP];if(!x)return '';return `<i class="k-${CAT(x.s)}${finals[k].match?.on?' m':''}" title="${dm(k)} : ${t('c_'+CAT(x.s))}"></i>`}).join('')}</div>
        <div class="legend"><span><i class="dot k-ok"></i>${t('c_ok')}</span><span><i class="dot k-adapte"></i>${t('c_adapte')}</span><span><i class="dot k-indispo"></i>${t('c_indispo')}</span><span>${t('matchMark')}</span></div>
        <p style="margin:10px 0 0;font-size:13px">${t('sheetTxt',{l:sr.lost,d:sr.pres,r:sr.rate??'—',m:sr.min,x:sr.miss,y:sr.mt})}</p></div>`:''}
      <div class="panel pad"><h2>${t('byType')}</h2><div class="hbars">${types.map(x=>`<div class="hbar"><span>${t('t_'+x.k)}</span><div class="track"><div class="fill" style="width:${x.n/maxT*100}%"></div></div><span class="v">${x.n} j</span></div>`).join('')}</div></div>
    </div>
  </div>`;
}

/* ---------- messages WhatsApp ---------- */
function list(L,ids,snap,withC){return ids.map(id=>{const p=byId(id),x=snap[id],pa=[];if(!withC&&['reath','soins','absent'].includes(x.s))pa.push(tr(L,'s_'+x.s).toLowerCase());if(x.r)pa.push(tr(L,'m_ret',{d:dm(x.r)}));return `• ${p.nom}${withC&&x.c?` : ${tx(x,'c',L)}`:''}${pa.length?` (${pa.join(', ')})`:''}`}).join('\n')||tr(L,'m_none')}
let WA_LEN=(()=>{try{return localStorage.getItem('waLen')||'full'}catch(e){return 'full'}})();
const TAB_OF={medical:'medical',prepa:'prepa',coach:'coach',tm:'coach',direction:'direction'};
function buildShort(role,L,s){
  const snap=s.snap, ids=Object.keys(snap).filter(byId), c=counts(snap), nm=a=>a.map(id=>byId(id).nom).join(', ')||'—';
  const head=`${tr(L,'label')} ${tr(L,'l_'+s.label)||''} ${dm(s.day)} (${hmOf(s.at)})`;
  const SM=(T[L]||T.fr).sum, summary=['ok','adapte','reath','soins','indispo','absent'].filter(k=>k==='ok'||k==='adapte'||c[k]).map(k=>`${c[k]} ${SM[k]}`).join(', ')+'.';
  const prev=prevSend(s), left=ids.filter(id=>snap[id].s==='parti'&&!(prev&&prev.snap[id]&&prev.snap[id].s==='parti'));
  const wl=ids.filter(id=>snap[id].w&&snap[id].s!=='parti');
  const lines=[head+(L==='pt'?': ':' : ')+summary];
  if(role==='prepa')lines.push(tr(L,'m_pr2',{r:nm(ids.filter(id=>snap[id].s==='reath')),a:nm(ids.filter(id=>snap[id].s==='adapte'))}));
  if(role==='direction')lines.push(tr(L,'m_rate',{p:c.n?Math.round((c.ok+c.adapte)/c.n*100):0,a:c.ok+c.adapte,b:c.n}));
  if(role==='tm'){const ab=ids.filter(id=>CAT(snap[id].s)==='indispo');if(ab.length)lines.push(tr(L,'m_ab',{l:nm(ab)}))}
  if((role==='coach'||role==='direction')&&wl.length)lines.push(tr(L,'m_wl',{l:nm(wl)}));
  if(role!=='medical'&&left.length)lines.push(tr(L,'m_lf',{l:nm(left)}));
  lines.push(tr(L,'m_link',{u:location.origin+location.pathname+'#'+TAB_OF[role]}));
  return lines.join('\n');
}
const langsOf=role=>{const f=(CFG.waLang||{})[role];if(f)return [f];const l=[...new Set(S.staff.filter(x=>x.role===role).map(x=>x.lang==='fr'?'fr':'pt'))];return l.length?l.sort():['fr','pt']};
const activeAlerts=()=>(S.alerts||[]).filter(a=>!a.lifted_at&&a.day<=DATE).sort((a,b)=>a.at<b.at?1:-1);
function alertMsg(a,L){
  const nm=(a.players||[]).map(byId).filter(Boolean).map(p=>p.nom);
  const note=a.note?((a.tr&&a.tr.src===a.note&&a.tr[L])||a.note):'';
  return [tr(L,'m_al',{u:tr(L,a.urg==='now'?'u_now':'u_next')}),
    (a.zones||[]).length?tr(L,'m_alz',{l:a.zones.map(z=>tr(L,'z_'+z)).join(', ')}):'',
    (a.limits||[]).length?tr(L,'m_alx',{l:a.limits.map(z=>tr(L,'x_'+z).toLowerCase()).join(', ')}):'',
    note,
    tr(L,'m_alp',{n:nm.length,l:nm.join(', ')}),
    tr(L,'m_alby',{by:a.sent_by||'',d:dm(a.day),h:hmOf(a.at)})].filter(Boolean).join('\n');
}
const alertGroupTxt=(a,role)=>langsOf(role).map(L=>alertMsg(a,L)).join('\n\n— — —\n\n');
function alertBox(a,manage){
  return `<div class="panel pad alertbox"><pre class="msg">${esc(alertMsg(a,LANG))}</pre>${manage?`<div class="bar">${['coach','prepa','medical'].filter(r=>r==='medical'||S.staff.some(x=>x.role===r)||(CFG.waGroups||{})[r]).map(r=>{const g=(CFG.waGroups||{})[r],m=S.staff.filter(x=>x.role===r),h=g||(m.length===1&&m[0].name?m[0].name:t('r_'+r));
    return `<a class="btn wa" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(alertGroupTxt(a,r))}">${t('al_open',{g:esc(h)})}</a>`}).join('')}<button class="btn small" data-lift="${a.id}">${t('al_lift')}</button></div>`:''}</div>`;
}
const alertsBanner=()=>!['medical','coach','prepa'].includes(S.me?.role)?'':activeAlerts().map(a=>alertBox(a,false)).join('');
function avMsg(L,s,role){
  const snap=s.snap, ids=Object.keys(snap).filter(id=>byId(id)&&snap[id].s!=='parti'&&snap[id].g);
  const a=ids.filter(id=>snap[id].g==='ok'), b=ids.filter(id=>snap[id].g!=='ok');
  const al=POS.map(po=>{const x=a.filter(id=>byId(id).poste===po);return x.length?`${tr(L,po)} (${x.length}) : ${x.map(id=>byId(id).nom).join(', ')}`:''}).filter(Boolean).join('\n')||tr(L,'m_none');
  const head=tr(L,'m_head',{l:tr(L,'label')+' '+tr(L,'l_avmatch'),d:dm(s.day),h:hmOf(s.at),by:s.sent_by});
  const aw=a.filter(id=>snap[id].aw), dp=(S.drafts[s.day]&&S.drafts[s.day].players)||{}, why=['medical','coach','prepa'].includes(role);
  const awTxt=aw.length&&role!=='tm'?tr(L,'m_aw',{n:aw.length,l:aw.map(id=>{const d=dp[id],m=why&&d&&d.awt?tx(d,'awt',L):'',pa=[snap[id].tl?tr(L,'m_tl'):'',m].filter(Boolean);return `• ${byId(id).nom}${pa.length?' : '+pa.join(' · '):''}`}).join('\n')}):'';
  return head+'\n'+tr(L,'m_av',{o:s.match?.opp||'',a:a.length,al,b:b.length,bl:b.map(id=>'• '+byId(id).nom).join('\n')||tr(L,'m_none')})+awTxt;
}
function buildMsg(role,L,s){
  if(s.label==='avmatch'&&Object.values(s.snap).some(x=>x.g))return avMsg(L,s,role);
  if(WA_LEN==='short')return buildShort(role,L,s);
  const snap=s.snap, ids=Object.keys(snap).filter(byId), c=counts(snap);
  const f=k=>ids.filter(id=>snap[id].s===k), cc=k=>ids.filter(id=>CAT(snap[id].s)===k);
  const prev=prevSend(s), ch=diff(prev?prev.snap:null,snap).filter(x=>prev&&(x.from.s!==x.to.s||x.from.c!==x.to.c||x.from.r!==x.to.r));
  const lab=x=>(role==='medical'||role==='prepa'||['reath','soins','absent'].includes(x.s))?tr(L,'s_'+x.s):tr(L,'c_'+CAT(x.s));
  let chl=role==='medical'?ch:role==='prepa'?ch.filter(x=>['reath','adapte','parti'].includes(x.to.s)||['reath','adapte'].includes(x.from.s)):ch.filter(x=>CAT(x.from.s)!==CAT(x.to.s)||x.from.c!==x.to.c||x.from.r!==x.to.r);
  const chTxt=chl.length?tr(L,'m_ch',{l:chl.map(x=>`• ${x.p.nom} : ${lab(x.from)} → ${lab(x.to)}`).join('\n')}):'';
  const mp=ids.filter(id=>+snap[id].m>0), mins=s.match?.on&&mp.length&&role!=='medical'&&role!=='coach'&&role!=='tm'?tr(L,'m_min',{o:s.match.opp,l:mp.map(id=>`• ${byId(id).nom} : ${snap[id].m}′`).join('\n')}):'';
  const headL=tr(L,'m_head',{l:tr(L,'label')+' '+(tr(L,'l_'+s.label)||''),d:dm(s.day),h:hmOf(s.at),by:s.sent_by})+'\n';
  let body;
  if(role==='medical')body=tr(L,'m_med',{ok:c.ok,ad:c.adapte,re:c.reath,so:c.soins,in:c.indispo,ab:c.absent?`, ${c.absent} ${tr(L,'s_absent').toLowerCase()}`:''});
  else if(role==='prepa')body=tr(L,'m_pr',{re:list(L,f('reath'),snap,1),ad:list(L,f('adapte'),snap,1)});
  else if(role==='coach')body=tr(L,'m_co',{pos:POS.map(po=>{const a=ids.filter(id=>byId(id).poste===po&&!['parti','absent'].includes(snap[id].s));return `${tr(L,po)} : ${a.filter(id=>CAT(snap[id].s)!=='indispo').length}/${a.length}`}).join('\n'),adl:list(L,cc('adapte'),snap,1),inl:list(L,cc('indispo'),snap,0)});
  else body='';
  const left=f('parti').filter(id=>!(prev&&prev.snap[id]&&prev.snap[id].s==='parti'));
  const wl=ids.filter(id=>snap[id].w&&snap[id].s!=='parti'), watch=role==='coach'&&wl.length?tr(L,'m_watch',{l:wl.map(id=>'• '+byId(id).nom).join('\n')}):'';
  // soins : le détail vient du brouillon (lisible par le médical seulement), jamais du briefing envoyé
  const dp=(S.drafts[s.day]&&S.drafts[s.day].players)||{};
  const cl=ids.filter(id=>snap[id].pc&&snap[id].s!=='parti');
  const care=cl.length&&(role==='medical'||role==='coach')?tr(L,'m_care',{l:cl.map(id=>{const lab=tr(L,'c_'+snap[id].pc),d=dp[id];
    const det=role==='medical'&&d&&d.pc==='soins'&&d.pct?` (${tx(d,'pct',L)})`:'';return `• ${byId(id).nom} : ${lab}${det}`}).join('\n')}):'';
  const SM=(T[L]||T.fr).sum, summary=['ok','adapte','reath','soins','indispo','absent'].filter(k=>k==='ok'||k==='adapte'||c[k]).map(k=>`${c[k]} ${SM[k]}`).join(', ')+'.';
  // plaintes après-match : médical seulement, lues dans le brouillon
  const plL=role==='medical'&&s.label==='match'&&s.match?.on?ids.filter(id=>dp[id]&&dp[id].pl==='oui'&&snap[id].s!=='parti'):null;
  const plaintes=plL?(plL.length?tr(L,'m_pl',{l:plL.map(id=>`• ${byId(id).nom}${dp[id].plt?` : ${tx(dp[id],'plt',L)}`:''}`).join('\n')}):tr(L,'m_pl0')):'';
  const sbL=role==='medical'&&s.label==='match'&&s.match?.on?ids.filter(id=>dp[id]&&dp[id].sb==='oui'):[];
  const sorties=sbL.length?tr(L,'m_sb',{l:sbL.map(id=>`• ${byId(id).nom}${dp[id].sbt?' : '+tx(dp[id],'aig',L):''}`).join('\n')}):'';
  const minsMed=role==='medical'&&s.label==='match'&&s.match?.on&&mp.length?tr(L,'m_min',{o:s.match.opp,l:mp.map(id=>`• ${byId(id).nom} : ${snap[id].m}′`).join('\n')}):'';
  const cpL=s.label==='match'&&['medical','prepa','coach'].includes(role)?ids.filter(id=>snap[id].cp&&!(+snap[id].m>0)):[];
  const cpTxt=cpL.length?tr(L,'m_cp',{l:cpL.map(id=>`• ${byId(id).nom} : ${snap[id].cp==='oui'?(snap[id].cpm?snap[id].cpm+'′':tr(L,'pl_oui')):tr(L,'cpNo')}`).join('\n')}):'';
  const leftL=left.map(id=>'• '+byId(id).nom).join('\n');
  if(role==='coach'){const wl2=wl.length?tr(L,'m_watch',{l:wl.map(id=>'• '+byId(id).nom).join('\n')}).replace(/^\n/,''):'';
    return headL+summary+(wl2?'\n'+wl2:'')+(left.length?'\n'+tr(L,'m_left',{l:leftL}):'')+'\n'+body+care+cpTxt+(chTxt?'\n'+chTxt.trim():'')+mins}
  if(role==='direction'){const wl2=wl.length?tr(L,'m_watch',{l:wl.map(id=>'• '+byId(id).nom).join('\n')}):'';
    return headL+summary+'\n'+tr(L,'m_rate',{p:c.n?Math.round((c.ok+c.adapte)/c.n*100):0,a:c.ok+c.adapte,b:c.n})+wl2+(left.length?'\n'+tr(L,'m_left',{l:leftL}):'')+mins}
  if(role==='tm'){const ab=cc('indispo');return headL+summary+(ab.length?tr(L,'m_tmabs',{l:ab.map(id=>'• '+byId(id).nom).join('\n')}):'')+(left.length?'\n'+tr(L,'m_tmleft',{l:leftL}):'')}
  return headL+chTxt+body+care+sorties+plaintes+minsMed+cpTxt+(left.length&&role!=='medical'?'\n'+tr(L,'m_left',{l:leftL}):'')+mins;
}
let WA_SEND=null;
let SERIE=null, WA_ERR=[]; // {sendId, ids:[], i}
const sentKey=id=>'sent-'+id;
const sentSet=id=>{try{return new Set(JSON.parse(ls.get(sentKey(id))||'[]'))}catch(e){return new Set()}};
function markSent(sendId,staffId){const st=sentSet(sendId);st.add(staffId);ls.set(sentKey(sendId),JSON.stringify([...st]))}
const waLink=(x,s)=>{const L=x.lang==='fr'?'fr':'pt';return `https://wa.me/${String(x.phone||'').replace(/\D/g,'')}?text=${encodeURIComponent(buildMsg(x.role,L,s))}`};
let WA_MODE=(()=>{try{return localStorage.getItem('waMode')||'person'}catch(e){return 'person'}})();
// message d'un groupe : langue(s) des membres de ce rôle, les deux si le groupe est mixte
function groupMsg(role,s){
  const ls_=[...new Set(S.staff.filter(x=>x.role===role).map(x=>x.lang==='fr'?'fr':'pt'))];
  const fixed=(CFG.waLang||{})[role];
  const langs=fixed?[fixed]:ls_.length?ls_.sort():['fr','pt'];
  return langs.map(L=>buildMsg(role,L,s)).join('\n\n— — —\n\n');
}
function viewWA(){
  const sends=sendsOf(DATE), s=sends.find(x=>x.id===WA_SEND)||sends[sends.length-1];
  const staff=[...S.staff].sort((a,b)=>ROLES.indexOf(a.role)-ROLES.indexOf(b.role)||String(a.name).localeCompare(b.name));
  let body;
  if(!s)body=`<div class="panel empty">${t('waNone')}</div>`;
  else if(!staff.length)body=`<div class="panel empty">${t('noContacts')}</div>`;
  else{
    const sent=sentSet(s.id), withPh=staff.filter(x=>String(x.phone||'').replace(/\D/g,''));
    let serie='';
    if(SERIE&&SERIE.sendId===s.id){
      const cur=staff.find(x=>x.id===SERIE.ids[SERIE.i]);
      serie=cur?`<div class="banner ok"><div style="display:grid;gap:4px"><b>${t('serie',{i:SERIE.i+1,n:SERIE.ids.length})}</b><span class="sync">${t('serieL')}</span></div>
        <div class="bar"><a class="btn wa" id="serieGo" href="${waLink(cur,s)}" target="_blank" rel="noopener">${t('openFor',{x:esc(cur.name||'—')})}</a><button class="btn small" id="serieSkip">${t('skip')}</button><button class="btn small" id="serieStop">${t('stop')}</button></div></div>`
        :`<div class="banner ok"><b>${t('allSent')}</b><button class="btn small" id="serieStop">OK</button></div>`;
    }else if(withPh.length){const todo=withPh.filter(x=>!sent.has(x.id));serie=`<div class="bar"><span class="sync">${WA_ERR.map(esc).join(' · ')}</span><div class="bar">${CFG.waAuto&&!DEMO&&todo.length?`<button class="btn wa" id="autoAll">${t('autoAll',{n:todo.length})}</button>`:''}<button class="btn${CFG.waAuto?'':' wa'}" id="sendAll">${t('sendAll',{n:withPh.length})}</button></div></div>`}
    const modeBar=`<div class="bar" style="justify-content:flex-start"><div class="chips" role="group">${['person','group'].map(m=>`<button data-wamode="${m}" aria-pressed="${WA_MODE===m}">${t(m==='person'?'byPerson':'byGroup')}</button>`).join('')}</div><div class="chips" role="group">${['full','short'].map(m=>`<button data-walen="${m}" aria-pressed="${WA_LEN===m}">${t(m==='full'?'msgFull':'msgShort')}</button>`).join('')}</div></div>`;
    if(WA_MODE==='group'){
      const roles=ROLES.filter(r=>S.staff.some(x=>x.role===r));
      body=`<div class="chips">${sends.map(x=>`<button data-send="${x.id}" aria-pressed="${x.id===s.id}">${sendLabel(x)} ${hmOf(x.at)}</button>`).join('')}</div>${modeBar}<p class="sync">${t('grpL')}</p>
      <div class="walist">${(roles.length?roles:ROLES).map(r=>{const txt=groupMsg(r,s);
        return `<div class="panel pad card"><div class="bar"><div><span class="name">${t('grpName',{r:t('r_'+r)})}</span>${(()=>{const g=(CFG.waGroups||{})[r],m=S.staff.filter(x=>x.role===r);const h=g||(m.length===1&&m[0].name?m[0].name:'');return h?`<div class="sync">→ ${esc(h)}</div>`:''})()}</div>${sent.has('g-'+r)?pill('ok',t('sentMark')):''}</div>
        <pre class="msg">${esc(txt)}</pre>
        <div class="bar"><a class="btn wa" data-wag="${r}" href="https://wa.me/?text=${encodeURIComponent(txt)}" target="_blank" rel="noopener">${t('grpOpen')}</a><button class="btn small" data-copyg="${r}">${t('copy')}</button></div></div>`}).join('')}</div>`;
      V.innerHTML=head(t('wa_t'),t('wa_l'))+body;return;
    }
    body=`<div class="chips">${sends.map(x=>`<button data-send="${x.id}" aria-pressed="${x.id===s.id}">${sendLabel(x)} ${hmOf(x.at)}</button>`).join('')}</div>${modeBar}${serie}
  <div class="walist">${staff.map(x=>{const L=x.lang==='fr'?'fr':'pt',txt=buildMsg(x.role,L,s),ph=String(x.phone||'').replace(/\D/g,'');
    return `<div class="panel pad card"><div class="bar"><div><span class="name">${esc(x.name||'—')}</span><div class="sync">${t('r_'+x.role)} · ${L.toUpperCase()}</div></div>${sent.has(x.id)?pill('ok',t('sentMark')):''}</div>
    <pre class="msg">${esc(txt)}</pre>
    <div class="bar">${ph?`<a class="btn wa" data-wa="${x.id}" href="${waLink(x,s)}" target="_blank" rel="noopener">${t('open')}</a>`:`<span class="sync">${t('noPhone')}</span>`}<button class="btn small" data-copy="${x.id}">${t('copy')}</button></div></div>`}).join('')}</div>`;
  }
  V.innerHTML=head(t('wa_t'),t('wa_l'))+body;
}
function curSend(){const sends=sendsOf(DATE);return sends.find(x=>x.id===WA_SEND)||sends[sends.length-1]}
V.addEventListener('click',e=>{
  const a=e.target.closest('a');if(!a)return;const s=curSend();if(!s)return;
  if(a.dataset.wa){markSent(s.id,a.dataset.wa);setTimeout(()=>render(true),300)}
  if(a.dataset.ressent){try{const m=resSent();m[a.dataset.ressent]=new Date().toISOString();localStorage.setItem('res-sent',JSON.stringify(m))}catch(e){}return}
  if(a.dataset.wag){markSent(s.id,'g-'+a.dataset.wag);setTimeout(()=>render(true),300)}
  if(a.id==='serieGo'&&SERIE){markSent(s.id,SERIE.ids[SERIE.i]);SERIE.i++;setTimeout(()=>render(true),300)}
});

/* ---------- vue staff ---------- */
function viewStaff(){
  const staff=[...S.staff].sort((a,b)=>ROLES.indexOf(a.role)-ROLES.indexOf(b.role)||String(a.name).localeCompare(b.name));
  V.innerHTML=head(t('st_t'),t('st_l'),false)+`<div class="panel">${staff.map(x=>`<div class="ct" data-ct="${x.id}" style="grid-template-columns:minmax(0,1.1fr) minmax(0,1fr) minmax(0,1.4fr) minmax(0,1.1fr) 70px auto auto">
    <label class="f">${t('st_name')}<input type="text" id="sn-${x.id}" data-cf="name" value="${esc(x.name)}"></label>
    <label class="f">${t('st_role')}<select id="sr-${x.id}" data-cf="role">${ROLES.map(r=>`<option value="${r}"${r===x.role?' selected':''}>${t('r_'+r)}</option>`).join('')}</select></label>
    <label class="f">${t('st_email')}<input type="email" id="se-${x.id}" data-cf="email" value="${esc(x.email||'')}" autocomplete="off"></label>
    <label class="f">${t('st_phone')}<input type="tel" id="sp-${x.id}" data-cf="phone" inputmode="numeric" value="${esc(x.phone)}" placeholder="244…"></label>
    <label class="f">${t('st_lang')}<select id="sl-${x.id}" data-cf="lang"><option value="pt"${x.lang!=='fr'?' selected':''}>PT</option><option value="fr"${x.lang==='fr'?' selected':''}>FR</option></select></label>
    ${x.role==='medical'&&'can_send' in x?`<label class="watch" style="align-self:center"><input type="checkbox" data-cs="1"${x.can_send?' checked':''}> ${t('canSend')}</label>`:''}<button class="btn small" data-del="${x.id}">${t('st_del')}</button></div>`).join('')||`<div class="empty">${t('noContacts')}</div>`}
  <div class="pad"><button class="btn" id="stAdd">${t('st_add')}</button></div></div>`;
}

/* ---------- vue effectif ---------- */
function viewRoster(){
  const ps=[...S.players].sort((a,b)=>POS.indexOf(a.poste)-POS.indexOf(b.poste)||(a.num??99)-(b.num??99));
  V.innerHTML=head(t('ro_t'),t('ro_l'),false)+`<div class="panel">${ps.map(p=>`<div class="ct ctr" data-pl="${p.id}">
 <label class="phup" title="${t('photo')}">${av(p,'lg')}<input type="file" accept="image/*" data-photo="${p.id}" id="ph-${p.id}" hidden></label>
    <label class="f">${t('num')}<input type="number" id="rn-${p.id}" data-pf="num" value="${p.num??''}"></label>
    <label class="f">${t('nom')}<input type="text" id="rm-${p.id}" data-pf="nom" value="${esc(p.nom)}"></label>
    <label class="f">${t('poste')}<select id="rp-${p.id}" data-pf="poste">${POS.map(k=>`<option value="${k}"${k===p.poste?' selected':''}>${t(k+'1')}</option>`).join('')}</select></label>
    <label class="f">${t('club')}<input type="text" id="rc-${p.id}" data-pf="club" value="${esc(p.club)}"></label>
    <label class="f">${t('phone')}<input type="tel" id="rw-${p.id}" data-pf="phone" inputmode="numeric" value="${esc(p.phone||'')}" placeholder="244…"></label>
    <label class="f">${t('arr')}<input type="date" id="ra-${p.id}" data-pf="added_on" value="${p.added_on||''}"></label>
    <label class="f">${t('dep')}<input type="date" id="rd-${p.id}" data-pf="left_on" value="${p.left_on||''}"></label>
    <button class="btn small" data-delp="${p.id}">${t('del')}</button></div>`).join('')}
    <form class="addp" id="addP"><label class="f">${t('num')}<input type="number" name="num" id="ap-num" min="1"></label><label class="f">${t('nom')}<input type="text" name="nom" id="ap-nom" required></label>
    <label class="f">${t('poste')}<select name="poste" id="ap-poste">${POS.map(k=>`<option value="${k}">${t(k+'1')}</option>`).join('')}</select></label><label class="f">${t('club')}<input type="text" name="club" id="ap-club"></label>
    <button class="btn">${t('add')}</button></form></div>`;
}

/* ---------- connexion ---------- */
function viewLogin(msg){
  document.getElementById('nav').innerHTML='';
  V.innerHTML=`<form class="panel pad login" id="login"><h1>${t('li_t')}</h1><p class="lead">${t('li_l')}</p>
    ${msg?`<div class="note warn">${esc(msg)}</div>`:''}
    <label class="f">${t('email')}<input type="email" id="li-email" required autocomplete="username"></label>
    <label class="f">${t('pwd')}<input type="password" id="li-pwd" required minlength="6" autocomplete="current-password" style="font:inherit;padding:7px 9px;border:1px solid var(--line);border-radius:6px;background:var(--surface);color:var(--ink)"></label>
    <div class="bar"><button class="btn primary" data-auth="in">${t('signin')}</button><button class="btn" data-auth="up">${t('signup')}</button></div></form>`;
}

/* ---------- silhouette des pathologies ---------- */
// zone : [décalage horizontal depuis l'axe, hauteur, vue F (face) / B (dos), latéralisée]
const ZB={tete:[0,20,'F',0],cou:[0,40,'B',0],epaule:[22,52,'F',1],bras:[30,78,'F',1],coude:[32,98,'B',1],main:[37,126,'F',1],thorax:[0,66,'F',0],abdo:[0,98,'F',0],dos:[0,70,'B',0],lomb:[0,104,'B',0],
  hanche:[17,120,'F',1],pub:[0,130,'F',0],add:[6,148,'F',1],quad:[13,156,'F',1],isch:[12,158,'B',1],genou:[12,186,'F',1],tibia:[12,210,'F',1],mollet:[12,206,'B',1],achille:[11,232,'B',1],cheville:[11,238,'F',1],pied:[11,252,'F',1]};
const ZN={fr:{tete:'Tête',cou:'Cou / cervical',epaule:'Épaule',bras:'Bras',coude:'Coude',main:'Poignet / main',thorax:'Thorax / côtes',abdo:'Abdomen',dos:'Dos',lomb:'Lombaires',hanche:'Hanche',pub:'Pubis / aine',add:'Adducteurs',quad:'Quadriceps',isch:'Ischios',genou:'Genou',tibia:'Tibia / jambe',mollet:'Mollet',achille:'Tendon d\'Achille',cheville:'Cheville',pied:'Pied',G:'gauche',D:'droit'},
  pt:{tete:'Cabeça',cou:'Pescoço / cervical',epaule:'Ombro',bras:'Braço',coude:'Cotovelo',main:'Pulso / mão',thorax:'Tórax / costelas',abdo:'Abdómen',dos:'Costas',lomb:'Lombar',hanche:'Anca',pub:'Púbis / virilha',add:'Adutores',quad:'Quadríceps',isch:'Isquiotibiais',genou:'Joelho',tibia:'Tíbia / perna',mollet:'Gémeos',achille:'Tendão de Aquiles',cheville:'Tornozelo',pied:'Pé',G:'esquerdo',D:'direito'},
  en:{tete:'Head',cou:'Neck',epaule:'Shoulder',bras:'Arm',coude:'Elbow',main:'Wrist / hand',thorax:'Chest / ribs',abdo:'Abdomen',dos:'Back',lomb:'Lower back',hanche:'Hip',pub:'Pubis / groin',add:'Adductors',quad:'Quadriceps',isch:'Hamstrings',genou:'Knee',tibia:'Shin / leg',mollet:'Calf',achille:'Achilles tendon',cheville:'Ankle',pied:'Foot',G:'left',D:'right'}};
const zLabel=(z,L=LANG)=>{if(!z)return '';const [k,sd]=z.split('-'),N=ZN[L]||ZN.fr;return N[k]?N[k]+(sd?' '+N[sd]:''):''};
// zone déduite du texte libre (FR / PT) quand elle n'a pas été choisie
function guessZone(txt){
  const s=String(txt||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');if(!s)return '';
  const R=[[/commotion|comoc|concuss|cerebr|crani|\btc\b|\bko\b|traumatisme cr|tete|cabeca|visage|rosto|nez\b|nariz|oeil|olho|machoire|mandib|arcade|sourcil/,'tete'],[/ischio|isquio|biceps femoral|semi.?tend|semi.?membr/,'isch'],[/adduct|adut/,'add'],[/quadri|droit anterieur|reto femoral|cuisse|coxa/,'quad'],[/achille|aquiles/,'achille'],[/mollet|gastroc|soleaire|solear|jumeau|gemeo|panturr/,'mollet'],
    [/genou|rotul|menisq|menisc|lca|lcp|joelho|patel/,'genou'],[/cheville|tornozel|entorse lat/,'cheville'],[/pied|plantaire|orteil|metatars|hallux|pe\b|plantar/,'pied'],[/tibia|perone|perios|canela|fibula/,'tibia'],
    [/hanche|anca|coxo/,'hanche'],[/pubalg|pubi|aine|virilha|inguin/,'pub'],[/lomb|lombar|lumb|sacr/,'lomb'],[/dos\b|dorsal|rachis|costas/,'dos'],[/epaule|ombro/,'epaule'],[/coude|cotovel/,'coude'],[/poignet|main\b|doigt|pulso|mao\b|dedo/,'main'],
    [/bras\b|braco|biceps|triceps/,'bras'],[/cervic|cou\b|pescoc/,'cou'],[/thora|cote|costel/,'thorax'],[/abdo/,'abdo'],[/tete|cabeca|crani|commotion|concuss/,'tete']];
  const hit=R.find(([re])=>re.test(s));if(!hit)return '';const k=hit[1];
  if(!ZB[k][3])return k;
  const sd=/(\b|\s)(g|gche|gauche|esq|esquerd[oa])\b/.test(s)?'G':/(\b|\s)(d|dt|drt|droit|droite|dir|direit[oa])\b/.test(s)?'D':'';
  return sd?k+'-'+sd:k;
}
const zoneOf=(x,k)=>(x&&x[k+'z'])||guessZone(x&&x[k]);
const zoneOpts=(cur,guess)=>`<option value="">${guess?'auto : '+esc(zLabel(guess)):'—'}</option>`+Object.keys(ZB).flatMap(k=>ZB[k][3]?[k+'-G',k+'-D']:[k]).map(z=>`<option value="${z}"${z===cur?' selected':''}>${esc(zLabel(z))}</option>`).join('');
// silhouette anatomique (contour + repères musculaires face / dos), centrée sur x=60
const BODY_P='M64.5 31C66.2 32.3 64.6 36.9 65.5 39C66.4 41.1 67.9 42.4 70 43.5C72.1 44.6 75.4 44.7 78 45.5C80.6 46.3 83.6 46.9 85.5 48.5C87.4 50.1 88.8 52.6 89.5 55C90.3 57.4 89.8 59.8 90 63C90.3 66.2 90.7 70.2 91 74C91.3 77.8 91.6 82.2 92 86C92.4 89.8 92.9 93.3 93.5 97C94.1 100.7 95 104.5 95.5 108C96 111.5 96.2 115.3 96.5 118C96.8 120.7 97 122.2 97.5 124C98 125.8 99.1 127 99.5 129C99.9 131 100.3 134 100 136C99.7 138 98.5 140.3 97.5 141C96.5 141.7 94.9 141.2 94 140C93.1 138.8 92.5 136.2 92 134C91.5 131.8 91.5 130 91 127C90.5 124 89.8 119.8 89 116C88.2 112.2 86.8 107.3 86 104C85.2 100.7 84.5 99.3 84 96C83.5 92.7 83.3 88 83 84C82.7 80 82.4 75.3 82 72C81.6 68.8 81 66 80.5 64.5C80 63 79.5 63 79 63C78.5 63 77.8 62.7 77.5 64.5C77.2 66.3 77.3 70.1 77 74C76.7 77.9 76 83.7 75.5 88C75 92.3 73.8 96.3 74 100C74.2 103.7 75.8 106.5 76.5 110C77.3 113.5 78.3 116.3 78.5 121C78.8 125.7 78.4 131.8 78 138C77.6 144.2 76.8 151.7 76 158C75.3 164.3 74.1 171 73.5 176C72.9 181 72.3 184 72.5 188C72.8 192 75 194.7 75 200C75 205.3 73.4 214 72.5 220C71.6 226 69.9 232 69.5 236C69.1 240 69.3 241.7 70 244C70.8 246.3 73.3 248.2 74 250C74.8 251.8 75.2 253.8 74.5 255C73.8 256.2 71.9 256.8 70 257C68.1 257.3 64.3 257.7 63 256.5C61.7 255.3 61.9 252.8 62 250C62.1 247.3 63.3 244 63.5 240C63.8 236 63.5 230.7 63.5 226C63.5 221.3 63.7 216.7 63.5 212C63.3 207.3 62.5 203.3 62.5 198C62.5 192.7 63.4 186.3 63.5 180C63.6 173.7 63.3 166.3 63 160C62.8 153.7 62.5 146.3 62 142C61.5 137.7 60.7 134 60 134C59.3 134 58.5 137.7 58 142C57.5 146.3 57.3 153.7 57 160C56.8 166.3 56.4 173.7 56.5 180C56.6 186.3 57.5 192.7 57.5 198C57.5 203.3 56.7 207.3 56.5 212C56.3 216.7 56.5 221.3 56.5 226C56.5 230.7 56.3 236 56.5 240C56.8 244 57.9 247.3 58 250C58.1 252.8 58.3 255.3 57 256.5C55.7 257.7 51.9 257.3 50 257C48.1 256.8 46.2 256.2 45.5 255C44.8 253.8 45.3 251.8 46 250C46.8 248.2 49.3 246.3 50 244C50.8 241.7 50.9 240 50.5 236C50.1 232 48.4 226 47.5 220C46.6 214 45 205.3 45 200C45 194.7 47.3 192 47.5 188C47.8 184 47.1 181 46.5 176C45.9 171 44.8 164.3 44 158C43.3 151.7 42.4 144.2 42 138C41.6 131.8 41.3 125.7 41.5 121C41.8 116.3 42.8 113.5 43.5 110C44.3 106.5 45.8 103.7 46 100C46.2 96.3 45 92.3 44.5 88C44 83.7 43.3 77.9 43 74C42.7 70.1 42.8 66.3 42.5 64.5C42.2 62.7 41.5 63 41 63C40.5 63 40 63 39.5 64.5C39 66 38.4 68.8 38 72C37.6 75.3 37.3 80 37 84C36.7 88 36.5 92.7 36 96C35.5 99.3 34.8 100.7 34 104C33.2 107.3 31.8 112.2 31 116C30.2 119.8 29.5 124 29 127C28.5 130 28.5 131.8 28 134C27.5 136.2 26.9 138.8 26 140C25.1 141.2 23.5 141.7 22.5 141C21.5 140.3 20.3 138 20 136C19.7 134 20.1 131 20.5 129C20.9 127 22 125.8 22.5 124C23 122.2 23.2 120.7 23.5 118C23.8 115.3 24 111.5 24.5 108C25 104.5 25.9 100.7 26.5 97C27.1 93.3 27.6 89.8 28 86C28.4 82.2 28.7 77.8 29 74C29.3 70.2 29.8 66.2 30 63C30.3 59.8 29.8 57.4 30.5 55C31.3 52.6 32.6 50.1 34.5 48.5C36.4 46.9 39.4 46.3 42 45.5C44.6 44.7 47.9 44.6 50 43.5C52.1 42.4 53.6 41.1 54.5 39C55.4 36.9 53.8 32.3 55.5 31C57.2 29.7 62.8 29.7 64.5 31Z',BODY_F='M52 44C52 44 58 46.5 58 46.5M68 44C68 44 62 46.5 62 46.5M60 66C58.8 66.7 64.7 70 67 70C69.3 70 75.2 66.7 74 66M60 66C61.2 66.7 55.3 70 53 70C50.7 70 44.8 66.7 46 66M60 70C60 70 60 112 60 112M60 82C60 82 67 81 67 81M60 82C60 82 53 81 53 81M60 94C60 94 67 93 67 93M60 94C60 94 53 93 53 93M73 104C74 102.7 69 116 67 120C65 124 60 130.7 61 128M47 104C46 102.7 51 116 53 120C55 124 60 130.7 59 128M66 182C66.5 182.7 68.8 184.5 69 186C69.3 187.5 68.3 190.3 67.5 191C66.8 191.7 65 191 64.5 190C64 189 64.3 186.3 64.5 185C64.8 183.7 65.8 182.5 66 182M54 182C53.5 182.7 51.3 184.5 51 186C50.8 187.5 51.8 190.3 52.5 191C53.3 191.7 55 191 55.5 190C56 189 55.8 186.3 55.5 185C55.3 183.7 54.3 182.5 54 182M66 140C66 140 71 160 71 160M54 140C54 140 49 160 49 160',BODY_B='M60 42C60 42 60 118 60 118M65 54C66.3 51 73 50.3 74 52C75 53.7 72.3 61 71 64C69.7 67 67 71.7 66 70M55 54C53.7 51 47 50.3 46 52C45 53.7 47.7 61 49 64C50.3 67 53 71.7 54 70M60 124C58.3 124.3 63.3 131.8 66 133C68.7 134.2 77 132.5 76 131M60 124C61.7 124.3 56.7 131.8 54 133C51.3 134.2 43 132.5 44 131M61 108C59.8 106.8 67.3 106.8 70 108C72.7 109.2 78.5 115 77 115M59 108C60.2 106.8 52.7 106.8 50 108C47.3 109.2 41.5 115 43 115M64 186C64 186 71 186 71 186M56 186C56 186 49 186 49 186M67.5 194C67.8 192 69.4 202 69.5 206C69.6 210 68.3 220 68 218M52.5 194C52.3 192 50.6 202 50.5 206C50.4 210 51.7 220 52 218';
// marks : [{z, c:'cur'|'old'|'chr', n}] -> deux silhouettes (face, dos)
function bodySVG(marks,L=LANG){
  const N={fr:['Face','Dos','En cours','Guérie','Chronique'],pt:['Frente','Costas','Em curso','Curada','Crónica'],en:['Front','Back','Ongoing','Healed','Chronic']}[L]||['Face','Dos','En cours','Guérie','Chronique'];
  const fig=(view,ox)=>{const pts=[],seen={};
    marks.forEach(m=>{const [k,sd]=String(m.z).split('-'),b=ZB[k];if(!b)return;
      if(b[2]!==view)return;
      // vue de face : la droite du joueur est à gauche de l'image ; de dos, à droite
      const sgn=!b[3]||!sd?0:(view==='F'?(sd==='D'?-1:1):(sd==='D'?1:-1));
      const key=k+sgn,sh=(seen[key]=(seen[key]||0)+1)-1,cx=ox+60+sgn*b[0]+(sh%2?1:-1)*Math.ceil(sh/2)*12;
      pts.push(`<circle cx="${cx}" cy="${b[1]}" r="${m.n>1?8:6.5}" class="bz ${m.c}"/>${m.n>1?`<text x="${cx}" y="${b[1]+3.5}" class="bzn">${m.n}</text>`:''}`)});
    const x=ox;
    return `<g class="bd" transform="translate(${x} 0)"><ellipse cx="60" cy="19" rx="10" ry="12.5"/><path d="${BODY_P}" stroke-linejoin="round"/><path class="bdl" d="${view==='F'?BODY_F:BODY_B}"/></g>
      <text x="${x+60}" y="272" class="bzl">${view==='F'?N[0]:N[1]}</text>${pts.join('')}`};
  const used=new Set(marks.map(m=>m.c));
  return `<div class="body"><svg viewBox="0 0 250 280" role="img" aria-label="${N[0]} / ${N[1]}">${fig('F',0)}${fig('B',130)}</svg>
    <div class="legend">${['cur','old','chr'].filter(c=>used.has(c)).map((c,i)=>`<span><i class="bz ${c}"></i>${N[2+['cur','old','chr'].indexOf(c)]}</span>`).join('')}</div></div>`;
}

/* ---------- fiches fin de stage ---------- */
const FT={
fr:{tab_fiches:'Fiches fin de stage',fi_t:'Fiches fin de stage',fi_l:'Bilan du rassemblement, tiré des briefings validés et des séances saisies. Rien à ressaisir.',fi_period:'Du {a} au {b} · {n} jour(s) · {m} match(s)',fi_print:'Imprimer / PDF',fi_send:'Envoyer les liens',fi_sendL:'Message court avec le lien de la fiche, pour chaque groupe.',fi_none:'Aucun briefing validé pour l\'instant.',
 f_medical:'Médical',f_coach:'Staff technique',f_prepa:'Prépa physique',f_tm:'Team manager',f_direction:'Direction',
 fi_medOnly:'Fiche réservée au staff médical, à relire et valider par le médecin.',
 h_global:'Bilan global',h_player:'Par joueur',h_aig:'Pathologies aiguës apparues pendant le stage',h_chr:'Pathologies chroniques suivies',h_care:'Soins et récupération',h_pl:'Plaintes après-match',h_watchEnd:'À surveiller au retour en club',h_res:'Résumés individuels',h_day:'Effectif par jour',h_match:'Matchs',h_watch:'Joueurs à surveiller',h_mov:'Mouvements',h_load:'Charge par joueur',h_ra:'Réathlé et adapté',h_end:'Au départ du stage',h_pres:'Présence',h_abs:'Absences à l\'entraînement',h_left:'Départs anticipés',h_fin:'Fin de stage : joueurs libérés',h_avail:'Disponibilité',h_lost:'Jours perdus',h_eff:'Effectif',h_follow:'À suivre',
 c_player:'Joueur',c_pos:'Poste',c_pres:'Présent',c_full:'Complets',c_ad:'Adapté',c_lost:'Manqués',c_rate:'Dispo',c_min:'Minutes',c_abs:'Absent',c_end:'Au départ',c_day:'Jour',c_soins:'Soins',c_recup:'Récup',c_sess:'Séances',c_dur:'Durée',c_ua:'Charge (UA)',c_gps:'GPS (m)',c_reath:'Réathlé',c_ret:'Retour complet',c_comp:'Compensation',c_club:'Club',c_date:'Date',c_n:'Effectif',c_names:'Joueurs',c_ind:'Indispo',c_ok:'Dispo',
 k_rate:'Taux de disponibilité',k_lost:'Jours perdus',k_mean:'Moyenne par joueur',k_conv:'Joueurs convoqués',k_arr:'Arrivés en cours de stage',k_left:'Partis avant la fin',k_absP:'Joueurs absents au moins un jour',k_mrate:'Disponibles le jour du match',k_miss:'Indisponibles pour le match',
 fi_since:'depuis le {d}',fi_noData:'Rien à signaler.',fi_watchD:'{n} jour(s) signalé',fi_stillW:'encore signalé au départ',fi_arr:'arrivé le {d}',fi_dep:'parti le {d}',fi_absD:'absent {n} jour(s)',fi_res:'Résumé',fi_wa:'WhatsApp',fi_noPh:'Numéro du joueur manquant (onglet Effectif)',fi_back:'Retour aux fiches',h_curve:'Disponibilité jour par jour',h_types:'Jours perdus par type',h_paths:'Pathologies du stage',c_path:'Pathologie',c_zone:'Zone',c_src:'Origine',c_lostD:'Jours perdus',c_state:'État',src_aig:'Aiguë',src_pl:'Plainte de match',src_sb:'Sortie sur blessure',src_chr:'Chronique',fi_others:'{n} autre(s) joueur(s) sans aucun jour perdu ni prise en charge.',k_careS:'Séances de soins',k_recS:'Séances de récupération',k_careP:'Joueurs pris en charge',h_club:'Retour en club',c_cons:'Consigne',c_rec:'Recommandations',res_ph:'WhatsApp',res_sent:'envoyé',res_noph:'sans numéro',fi_doc:'Bilan du rassemblement',fi_int:'Document interne au staff de la sélection.',fi_conf:'Document médical confidentiel, réservé au staff médical.',k_players:'Joueurs',k_matches:'Matchs',k_days:'Jours de stage',fi_heal:'État des pathologies (pour la silhouette)',h_cur:'En cours',h_old:'Guérie',fi_rec:'Recommandations pour la reprise en club (texte libre, traduit)',fi_recPh:'Ex. reprise progressive, pas de sprint maximal avant 5 jours',fi_missH:'Matchs manqués',care:'Détail des soins',phone:'WhatsApp du joueur',fi_linkMsg:'Fiche fin de stage — {r} ({p}) :\n{u}'},
pt:{tab_fiches:'Fichas fim de estágio',fi_t:'Fichas fim de estágio',fi_l:'Balanço do estágio, a partir dos briefings validados e das sessões registadas. Nada a voltar a registar.',fi_period:'De {a} a {b} · {n} dia(s) · {m} jogo(s)',fi_print:'Imprimir / PDF',fi_send:'Enviar os links',fi_sendL:'Mensagem curta com o link da ficha, para cada grupo.',fi_none:'Ainda não há briefing validado.',
 f_medical:'Médico',f_coach:'Equipa técnica',f_prepa:'Preparação física',f_tm:'Team manager',f_direction:'Direção',
 fi_medOnly:'Ficha reservada à equipa médica, a rever e validar pelo médico.',
 h_global:'Balanço global',h_player:'Por jogador',h_aig:'Patologias agudas surgidas durante o estágio',h_chr:'Patologias crónicas acompanhadas',h_care:'Tratamentos e recuperação',h_pl:'Queixas pós-jogo',h_watchEnd:'A vigiar no regresso ao clube',h_res:'Resumos individuais',h_day:'Efetivo por dia',h_match:'Jogos',h_watch:'Jogadores a vigiar',h_mov:'Movimentos',h_load:'Carga por jogador',h_ra:'Readaptação e treino adaptado',h_end:'À saída do estágio',h_pres:'Presença',h_abs:'Ausências ao treino',h_left:'Saídas antecipadas',h_fin:'Fim de estágio: jogadores libertados',h_avail:'Disponibilidade',h_lost:'Dias perdidos',h_eff:'Efetivo',h_follow:'A acompanhar',
 c_player:'Jogador',c_pos:'Posição',c_pres:'Presente',c_full:'Completos',c_ad:'Adaptado',c_lost:'Perdidos',c_rate:'Disp.',c_min:'Minutos',c_abs:'Ausente',c_end:'À saída',c_day:'Dia',c_soins:'Trat.',c_recup:'Recup.',c_sess:'Sessões',c_dur:'Duração',c_ua:'Carga (UA)',c_gps:'GPS (m)',c_reath:'Readapt.',c_ret:'Regresso completo',c_comp:'Compensação',c_club:'Clube',c_date:'Data',c_n:'Efetivo',c_names:'Jogadores',c_ind:'Indisp.',c_ok:'Disp.',
 k_rate:'Taxa de disponibilidade',k_lost:'Dias perdidos',k_mean:'Média por jogador',k_conv:'Jogadores convocados',k_arr:'Chegaram durante o estágio',k_left:'Saíram antes do fim',k_absP:'Jogadores ausentes pelo menos um dia',k_mrate:'Disponíveis no dia do jogo',k_miss:'Indisponíveis para o jogo',
 fi_since:'desde {d}',fi_noData:'Nada a assinalar.',fi_watchD:'{n} dia(s) assinalado',fi_stillW:'ainda assinalado à saída',fi_arr:'chegou a {d}',fi_dep:'saiu a {d}',fi_absD:'ausente {n} dia(s)',fi_res:'Resumo',fi_wa:'WhatsApp',fi_noPh:'Número do jogador em falta (separador Efetivo)',fi_back:'Voltar às fichas',h_curve:'Disponibilidade dia a dia',h_types:'Dias perdidos por tipo',h_paths:'Patologias do estágio',c_path:'Patologia',c_zone:'Zona',c_src:'Origem',c_lostD:'Dias perdidos',c_state:'Estado',src_aig:'Aguda',src_pl:'Queixa de jogo',src_sb:'Saída por lesão',src_chr:'Crónica',fi_others:'{n} outro(s) jogador(es) sem dias perdidos nem tratamento.',k_careS:'Sessões de tratamento',k_recS:'Sessões de recuperação',k_careP:'Jogadores tratados',h_club:'Regresso ao clube',c_cons:'Indicação',c_rec:'Recomendações',res_ph:'WhatsApp',res_sent:'enviado',res_noph:'sem número',fi_doc:'Balanço do estágio',fi_int:'Documento interno da equipa da seleção.',fi_conf:'Documento médico confidencial, reservado à equipa médica.',k_players:'Jogadores',k_matches:'Jogos',k_days:'Dias de estágio',fi_heal:'Estado das patologias (para a silhueta)',h_cur:'Em curso',h_old:'Curada',fi_rec:'Recomendações para o regresso ao clube (texto livre, traduzido)',fi_recPh:'Ex. regresso progressivo, sem sprint máximo antes de 5 dias',fi_missH:'Jogos falhados',care:'Detalhe dos tratamentos',phone:'WhatsApp do jogador',fi_linkMsg:'Ficha fim de estágio — {r} ({p}):\n{u}'}};
Object.keys(FT).forEach(L=>Object.assign(T[L],FT[L]));
// résumé individuel : FR / PT / EN
const RT={
fr:{t:'Résumé médical du rassemblement',per:'Rassemblement du {a} au {b}',avail:'Disponibilité',pres:'{n} jour(s) présent',full:'{n} jour(s) d\'entraînement complet',ad:'{n} jour(s) en entraînement adapté',lost:'{n} jour(s) indisponible',rate:'Taux de disponibilité : {r} %',match:'Matchs',vs:'vs {o} ({d}) : {m} min',nomatch:'Aucun match pendant sa présence.',aig:'Pathologies apparues',chr:'Pathologies chroniques suivies',care:'Soins reçus',recup:'{n} séance(s) de récupération',end:'Statut au départ',cons:'Consigne',none:'Rien à signaler.',sig:'{n}, staff médical de la sélection',rec:'Recommandations pour la reprise en club',kp:'Jours présent',kf:'Entraînement complet',kl:'Jours indisponible',kr:'Disponibilité',km:'Minutes jouées',conf:'Document médical confidentiel, remis au joueur. Il peut le transmettre au staff médical de son club.',doc:'Médecin de la sélection',stat:'Pathologie',when:'Date',st_cur:'en cours',st_old:'guérie',chrL:'chronique',contact:'Contact du médecin de la sélection : {n}{p}',G:'Gardien',D:'Défenseur',M:'Milieu',A:'Attaquant',s_indispo:'Indisponible',s_soins:'En soins',s_reath:'En réathlé',s_adapte:'Entraînement adapté',s_ok:'Sans restriction',s_absent:'Absent',s_parti:'A quitté le rassemblement'},
pt:{t:'Resumo médico do estágio',per:'Estágio de {a} a {b}',avail:'Disponibilidade',pres:'{n} dia(s) presente',full:'{n} dia(s) de treino completo',ad:'{n} dia(s) de treino adaptado',lost:'{n} dia(s) indisponível',rate:'Taxa de disponibilidade: {r} %',match:'Jogos',vs:'vs {o} ({d}): {m} min',nomatch:'Nenhum jogo durante a presença.',aig:'Patologias surgidas',chr:'Patologias crónicas acompanhadas',care:'Tratamentos recebidos',recup:'{n} sessão(ões) de recuperação',end:'Estado à saída',cons:'Indicação',none:'Nada a assinalar.',sig:'{n}, equipa médica da seleção',rec:'Recomendações para o regresso ao clube',kp:'Dias presente',kf:'Treino completo',kl:'Dias indisponível',kr:'Disponibilidade',km:'Minutos jogados',conf:'Documento médico confidencial, entregue ao jogador. Pode transmiti-lo à equipa médica do seu clube.',doc:'Médico da seleção',stat:'Patologia',when:'Data',st_cur:'em curso',st_old:'curada',chrL:'crónica',contact:'Contacto do médico da seleção: {n}{p}',G:'Guarda-redes',D:'Defesa',M:'Médio',A:'Avançado',s_indispo:'Indisponível',s_soins:'Em tratamento',s_reath:'Em readaptação',s_adapte:'Treino adaptado',s_ok:'Sem restrição',s_absent:'Ausente',s_parti:'Deixou o estágio'},
en:{t:'Medical summary of the national team camp',per:'Camp from {a} to {b}',avail:'Availability',pres:'{n} day(s) present',full:'{n} day(s) of full training',ad:'{n} day(s) of modified training',lost:'{n} day(s) unavailable',rate:'Availability rate: {r} %',match:'Matches',vs:'vs {o} ({d}): {m} min',nomatch:'No match during his stay.',aig:'Injuries / complaints during the camp',chr:'Chronic conditions followed',care:'Treatments received',recup:'{n} recovery session(s)',end:'Status at departure',cons:'Recommendation',none:'Nothing to report.',sig:'{n}, national team medical staff',rec:'Recommendations for the return to club',kp:'Days present',kf:'Full training',kl:'Days unavailable',kr:'Availability',km:'Minutes played',conf:'Confidential medical document, given to the player. He may pass it on to his club\'s medical staff.',doc:'National team doctor',stat:'Condition',when:'Date',st_cur:'ongoing',st_old:'healed',chrL:'chronic',contact:'National team doctor contact: {n}{p}',G:'Goalkeeper',D:'Defender',M:'Midfielder',A:'Forward',s_indispo:'Unavailable',s_soins:'Under treatment',s_reath:'Return to play',s_adapte:'Modified training',s_ok:'No restriction',s_absent:'Absent',s_parti:'Left the camp'}};
const rt=(L,k,v={})=>String(RT[L][k]??k).replace(/\{(\w+)\}/g,(_,x)=>v[x]??'');
const FICHES_OF={medical:['medical','coach','prepa','tm','direction'],prepa:['prepa'],coach:['coach'],tm:['tm'],direction:['direction']};
let FICHE=null, RES_P=null, RES_L='pt';
const pct=(a,b)=>b?Math.round(a/b*100):0;
// regroupe les jours de soins successifs au même texte : 12/11 → 18/11 (7 j) : massage
function careRuns(list,ft){const r=[];list.forEach(x=>{const txt=ft(x.d),l=r[r.length-1];if(l&&l.txt===txt&&addDays(l.b,1)===x.k){l.b=x.k;l.n++}else r.push({a:x.k,b:x.k,n:1,txt})});
  return r.map(x=>`${dm(x.a)}${x.n>1?` → ${dm(x.b)} (${x.n} j)`:''}${x.txt?' : '+x.txt:''}`)}

function campStats(){
  const cp=CFG.camp||{};
  const days=[...new Set(S.sends.map(s=>s.day))].filter(k=>(!cp.from||k>=cp.from)&&(!cp.to||k<=cp.to)).sort();
  const fin={};days.forEach(k=>{const l=sendsOf(k);fin[k]=l[l.length-1]});
  const mdays=days.filter(k=>sendsOf(k).some(s=>s.match?.on));
  const M={};mdays.forEach(k=>{const l=sendsOf(k),any=l.filter(s=>s.match?.on),post=l.filter(s=>s.label==='match'),av_=l.filter(s=>s.label==='avmatch'&&Object.values(s.snap).some(x=>x.g));
    M[k]={opp:(any[any.length-1]||{}).match?.opp||'',post:post[post.length-1]||null,av:av_[av_.length-1]||null,all:l}});
  const ids=[...new Set(days.flatMap(k=>Object.keys(fin[k].snap)))].filter(byId);
  const P={};
  ids.forEach(id=>{
    const o={p:byId(id),dayS:{},pres:0,st:{},abs:0,first:null,last:null,lastX:null,left:null,mins:0,mt:0,miss:0,per:{},cp:{},watch:0,soins:[],recup:0,aig:{},chr:'',pl:[],ra:false,ret:null,raD:{reath:0,adapte:0}};
    days.forEach(k=>{const x=fin[k].snap[id];if(!x)return;
      if(x.s==='parti'){if(!o.left)o.left=k;return}
      if(x.s==='absent'){o.abs++;return}
      o.left=null;o.dayS[k]=x.s;o.pres++;o.st[x.s]=(o.st[x.s]||0)+1;if(!o.first)o.first=k;o.last=k;o.lastX=x;if(x.w)o.watch++;
      if(['reath','adapte'].includes(x.s)){o.ra=true;o.ret=null;o.raD[x.s]++}else if(x.s==='ok'&&o.ra&&!o.ret)o.ret=k;
      if(M[k]){const m=Math.max(0,...M[k].all.map(s=>+(s.snap[id]&&s.snap[id].m)||0));o.mt++;o.per[k]=m;o.mins+=m;
        const g=M[k].av&&M[k].av.snap[id]&&M[k].av.snap[id].g;if(!m&&(g==='no'||LOST.includes(x.s)))o.miss++;
        const c=M[k].post&&M[k].post.snap[id];if(c&&c.cp)o.cp[k]=c.cp==='oui'?(+c.cpm||0):0}
    });
    if(o.p.left_on&&!o.left)o.left=o.p.left_on;
    o.full=o.st.ok||0;o.ad=o.st.adapte||0;o.lost=LOST.reduce((a,s)=>a+(o.st[s]||0),0);o.rate=o.pres?pct(o.pres-o.lost,o.pres):null;
    Object.keys(S.drafts||{}).sort().filter(k=>!days.length||(k>=days[0]&&k<=days[days.length-1])).forEach(k=>{const d=S.drafts[k].players[id];if(!d)return;
      if(d.pc==='soins')o.soins.push({k,d});if(d.pc==='recup'){o.recup++;(o.recD=o.recD||[]).push(k)}
      if(d.aig&&!o.aig[d.aig])o.aig[d.aig]={d,since:d.aigd||k};if(d.chr)o.chr=d;
      if(d.pl==='oui')o.pl.push({k,d});if(d.rec){o.rec=d;o.recDay=k}});
    const ld=o.last&&S.drafts&&S.drafts[o.last]&&S.drafts[o.last].players[id];o.aigCur=ld&&ld.aig||'';
    const curBad=o.lastX&&o.lastX.s!=='ok', heal=(ld&&ld.heal)||{};
    // « en cours » : pathologie encore inscrite au dernier jour, ou la plus récente si le joueur n'est pas « sans restriction » au départ
    const evs=[...Object.entries(o.aig).map(([txt,a])=>({txt,day:a.since,z:zoneOf(a.d,'aig'),aig:true})),...o.pl.filter(x=>x.d.plt&&!Object.keys(o.aig).includes(x.d.plt)).map(x=>({txt:x.d.plt,day:x.k,z:guessZone(x.d.plt)}))];
    const latest=evs.reduce((m,e)=>!m||e.day>=m.day?e:m,null);
    evs.forEach(e=>e.c=heal[e.txt]||(((e.aig&&e.txt===o.aigCur)||(curBad&&e===latest))?'cur':'old'));o.evs=evs;
    o.marks=[...evs.map(e=>({z:e.z,c:e.c,n:1})),...(o.chr?[{z:zoneOf(o.chr,'chr'),c:'chr',n:1}]:[])].filter(m=>m.z);
    P[id]=o;
  });
  const list=ids.map(id=>P[id]).sort((a,b)=>POS.indexOf(a.p.poste)-POS.indexOf(b.p.poste)||(a.p.num??99)-(b.p.num??99));
  const tot={pres:0,lost:0};list.forEach(o=>{tot.pres+=o.pres;tot.lost+=o.lost});
  return {days,fin,mdays,M,P,list,tot,first:days[0],last:days[days.length-1]};
}
const tbl=(hd,rows,num=[])=>`<div class="tbl"><table><thead><tr>${hd.map((h,i)=>`<th${num.includes(i)?' class="n"':''}>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map((c,i)=>`<td${num.includes(i)?' class="n"':''}>${c}</td>`).join('')}</tr>`).join('')||`<tr><td colspan="${hd.length}" class="sync">${t('fi_noData')}</td></tr>`}</tbody></table></div>`;
const sec=(h,body)=>`<section class="rsec fsec2"><h3>${h}</h3>${body}</section>`;
const kpis=a=>`<div class="fkpis">${a.map(([k,v])=>`<div><b>${v}</b><span class="sync">${k}</span></div>`).join('')}</div>`;
const rateCl=r=>r>=90?'k-ok':r>=75?'k-adapte':'k-indispo';
const ul=a=>a.length?`<ul class="fl">${a.map(x=>`<li>${x}</li>`).join('')}</ul>`:`<p class="sync">${t('fi_noData')}</p>`;
const nmP=o=>esc(o.p.nom);
const matchName=(C,k)=>`${esc(C.M[k].opp||t('h_match'))} · ${dm(k)}`;

const resSent=()=>{try{return JSON.parse(localStorage.getItem('res-sent')||'{}')}catch(e){return {}}};
function ficheMedical(C){
  const types={};Object.keys(S.drafts||{}).filter(k=>k>=C.first&&k<=C.last).forEach(k=>Object.values(S.drafts[k].players).forEach(x=>{if(LOST.includes(x.s)&&x.t)types[x.t]=(types[x.t]||0)+1}));
  // courbe : une barre empilée par jour
  const curve=(()=>{const W=Math.max(320,C.days.length*60),H=150,bw=Math.min(30,W/C.days.length-10);
    const bars=C.days.map((k,i)=>{const sn=C.fin[k].snap,ids=Object.keys(sn).filter(id=>byId(id)&&!['parti','absent'].includes(sn[id].s)),n=ids.length||1;
      const ok=ids.filter(id=>sn[id].s==='ok').length,ad=ids.filter(id=>sn[id].s==='adapte').length,ind=ids.length-ok-ad,x=20+i*(W-30)/C.days.length,h=v=>v/n*(H-40);
      let y=H-20;const seg=(v,c)=>{if(!v)return '';y-=h(v);return `<rect x="${x}" y="${y}" width="${bw}" height="${h(v)}" fill="var(--s-${c})"/>`};
      return seg(ok,'ok')+seg(ad,'adapte')+seg(ind,'indispo')+`<text x="${x+bw/2}" y="${H-6}" class="cvl">${dm(k)}${C.M[k]?' ⚽':''}</text><text x="${x+bw/2}" y="${H-24-h(n)}" class="cvv">${pct(ok+ad,ids.length)}%</text>`}).join('');
    return `<div class="tbl"><svg class="curve" viewBox="0 0 ${W} ${H}" style="min-width:${Math.min(W,640)}px">${bars}</svg></div><div class="legend"><span><i class="dot" style="background:var(--s-ok)"></i>${t('c_ok')}</span><span><i class="dot" style="background:var(--s-adapte)"></i>${t('c_ad')}</span><span><i class="dot" style="background:var(--s-indispo)"></i>${t('c_ind')}</span></div>`})();
  const tmax=Math.max(1,...Object.values(types));
  const typeBars=Object.entries(types).sort((a,b)=>b[1]-a[1]).map(([k,n])=>`<div class="hb"><span>${t('t_'+k)}</span><i style="--w:${Math.round(n/tmax*100)}%"></i><b>${n}</b></div>`).join('');
  // tableau unique des pathologies
  const rows=[];
  C.list.forEach(o=>{const ev=new Map((o.evs||[]).map(e=>[e.txt,e.c]));
    const ents=[...Object.entries(o.aig).map(([txt,a])=>({txt,t:tx(a.d,'aig'),z:zoneOf(a.d,'aig'),d:a.since,src:Object.keys(S.drafts).some(k=>S.drafts[k].players[o.p.id]&&S.drafts[k].players[o.p.id].sbt===txt)?'sb':'aig'})),
      ...o.pl.filter(x=>x.d.plt&&!Object.keys(o.aig).includes(x.d.plt)).map(x=>({txt:x.d.plt,t:tx(x.d,'plt'),z:guessZone(x.d.plt),d:x.k,src:'pl'}))].sort((a,b)=>a.d<b.d?-1:1);
    ents.forEach((e,i)=>{const nx=ents[i+1],lost=Object.entries(o.dayS).filter(([k,st])=>k>=e.d&&(!nx||k<nx.d)&&LOST.includes(st)).length,c=ev.get(e.txt)||'old';
      rows.push([nmP(o),esc(e.t),e.z?esc(zLabel(e.z)):'—',dm(e.d),t('src_'+e.src),lost,`<span class="st-${c}"><i class="bz ${c}"></i> ${t('h_'+c)}</span>`])});
    if(o.chr)rows.push([nmP(o),esc(tx(o.chr,'chr')),zoneOf(o.chr,'chr')?esc(zLabel(zoneOf(o.chr,'chr'))):'—','',t('src_chr'),'',`<span><i class="bz chr"></i> ${t('src_chr')}</span>`]);
  });
  const g={};C.list.forEach(o=>o.marks.forEach(m=>{const k=m.z+'|'+m.c;g[k]=g[k]||{z:m.z,c:m.c,n:0};g[k].n++}));const ms=Object.values(g);
  // joueurs concernés seulement
  const concerned=C.list.filter(o=>o.lost||o.ad||o.abs||o.soins.length||o.recup||Object.keys(o.aig).length||o.pl.length||o.chr||o.left);
  const others=C.list.length-concerned.length;
  // soins
  const careP=C.list.filter(o=>o.soins.length||o.recup),careRows=careP.map(o=>[nmP(o),o.soins.length,o.recup,careRuns(o.soins,d=>d.pct?esc(tx(d,'pct')):'').join('<br>')||'—']);
  // retour en club
  const club=C.list.filter(o=>o.lastX&&(o.lastX.s!=='ok'||o.lastX.w||o.rec||(o.evs||[]).some(e=>e.c==='cur'))).map(o=>[nmP(o),pill(CAT(o.lastX.s),t('s_'+o.lastX.s)),o.lastX.c?esc(tx(o.lastX,'c')):'—',o.rec&&o.rec.rec?esc(tx(o.rec,'rec')):'—']);
  const sent=resSent();
  return `<div class="note">${LOCK}<span>${t('fi_medOnly')}</span></div>`+
  sec(t('h_curve'),curve)+
  (typeBars?sec(t('h_types'),`<div class="hbars">${typeBars}</div>`):'')+
  sec(t('h_paths'),`<div class="mapgrid">${ms.length?`<div>${bodySVG(ms)}</div>`:''}<div>${tbl([t('c_player'),t('c_path'),t('c_zone'),t('c_date'),t('c_src'),t('c_lostD'),t('c_state')],rows,[5])}</div></div>`)+
  sec(t('h_player'),tbl([t('c_player'),t('c_pres'),t('s_indispo'),t('s_soins'),t('s_reath'),t('c_ad'),t('c_full'),t('c_abs'),t('c_end')],
    concerned.map(o=>[nmP(o),o.pres,o.st.indispo||0,o.st.soins||0,o.st.reath||0,o.ad,o.full,o.abs,o.left?t('fi_dep',{d:dm(o.left)}):o.lastX?t('s_'+o.lastX.s):'—']),[1,2,3,4,5,6,7])+(others?`<p class="sync">${t('fi_others',{n:others})}</p>`:''))+
  sec(t('h_care'),(()=>{const nS=careP.reduce((a,o)=>a+o.soins.length,0),nR=careP.reduce((a,o)=>a+o.recup,0),mx=Math.max(1,...careP.map(o=>o.soins.length+o.recup));
    const tiles=`<div class="ctiles"><div class="ctile soins"><span class="ci">✚</span><b>${nS}</b><small>${t('k_careS')}</small></div><div class="ctile recup"><span class="ci">↻</span><b>${nR}</b><small>${t('k_recS')}</small></div><div class="ctile"><span class="ci">●</span><b>${careP.length}</b><small>${t('k_careP')}</small></div></div>`;
    const head=`<div class="crow chead"><span></span><div class="cdays">${C.days.map(k=>`<i title="${dm(k)}">${k.slice(8)}</i>`).join('')}</div><span></span><span></span><span></span></div>`;
    const rows=careP.sort((a,b)=>(b.soins.length+b.recup)-(a.soins.length+a.recup)).map(o=>{const sd=new Set(o.soins.map(x=>x.k)),rd=new Set(o.recD||[]);
      return `<div class="crow"><b>${nmP(o)}</b><div class="cdays">${C.days.map(k=>`<i class="${sd.has(k)?'cs':rd.has(k)?'cr':!(k in o.dayS)?'cx':''}"></i>`).join('')}</div>
      <div class="cbar"><i class="cs" style="width:${o.soins.length/mx*100}%"></i><i class="cr" style="width:${o.recup/mx*100}%"></i></div><span class="cnum">${o.soins.length?`<em class="s">✚ ${o.soins.length}</em>`:''}${o.recup?`<em class="r">↻ ${o.recup}</em>`:''}</span>
      <small>${careRuns(o.soins,d=>d.pct?esc(tx(d,'pct')):'').join('<br>')}</small></div>`}).join('');
    return tiles+(careP.length?`<div class="cgrid">${head}${rows}</div><div class="legend"><span><i class="dot" style="background:var(--s-soins)"></i>${t('c_soins')}</span><span><i class="dot" style="background:var(--s-reath)"></i>${t('c_recup')}</span></div>`:`<p class="sync">${t('fi_noData')}</p>`)})())+
  sec(t('h_club'),tbl([t('c_player'),t('c_end'),t('c_cons'),t('c_rec')],club))+
  sec(t('h_res'),`<div class="resgrid noprint-btn">${C.list.map(o=>{const ph=String(o.p.phone||'').replace(/\D/g,''),st=o.lastX?CAT(o.lastX.s):'ok';
    return `<button class="rescard k-${st}" data-res="${o.p.id}">${av(o.p,'sm')}<span><b>${nmP(o)}</b><small>${o.lastX?t('s_'+o.lastX.s):''}</small></span><em>${sent[o.p.id]?'✓ '+t('res_sent'):ph?t('res_ph'):t('res_noph')}</em></button>`}).join('')}</div>`);
}
function ficheCoach(C){
  const day=C.days.map(k=>{const sn=C.fin[k].snap,ids=Object.keys(sn).filter(id=>byId(id)&&!['parti','absent'].includes(sn[id].s));
    return [dm(k)+(C.M[k]?' ⚽':''),...POS.map(po=>{const a=ids.filter(id=>byId(id).poste===po);return `${a.filter(id=>CAT(sn[id].s)!=='indispo').length}/${a.length}`}),ids.filter(id=>sn[id].s==='ok').length,ids.filter(id=>sn[id].s==='adapte').length,ids.filter(id=>CAT(sn[id].s)==='indispo').length]});
  const byPos=POS.map(po=>{const l=C.list.filter(o=>o.p.poste===po);return l.length?`<h3>${t(po)}</h3>`+tbl([t('c_player'),t('c_full'),t('c_ad'),t('c_lost'),t('c_rate'),t('c_min')],l.map(o=>[nmP(o),o.full,o.ad,o.lost,(o.rate??'—')+' %',o.mins+'′']),[1,2,3,4,5]):''}).join('');
  const matches=C.mdays.map(k=>{const pl_=C.list.filter(o=>o.per[k]>0).sort((a,b)=>b.per[k]-a.per[k]),un=C.list.filter(o=>k in o.per&&!o.per[k]&&((C.M[k].av&&C.M[k].av.snap[o.p.id]&&C.M[k].av.snap[o.p.id].g==='no')||LOST.includes(C.fin[k].snap[o.p.id].s)));
    return `<h3>${matchName(C,k)}</h3>${pl_.length?`<p>${pl_.map(o=>`${nmP(o)} ${o.per[k]}′`).join(' · ')}</p>`:''}${un.length?`<p class="sync">${t('k_miss')} : ${un.map(nmP).join(', ')}</p>`:''}`}).join('')||`<p class="sync">${t('fi_noData')}</p>`;
  const w=C.list.filter(o=>o.watch).map(o=>`<b>${nmP(o)}</b> · ${t('fi_watchD',{n:o.watch})}${o.lastX&&o.lastX.w&&!o.left?' · '+t('fi_stillW'):''}`);
  return sec(t('h_day'),tbl([t('c_day'),...POS.map(po=>po),t('c_ok'),t('c_ad'),t('c_ind')],day,[1,2,3,4,5,6,7]))+sec(t('h_player'),byPos)+sec(t('h_match'),matches)+sec(t('h_watch'),ul(w))+sec(t('h_mov'),ul(movements(C)));
}
function movements(C){
  return C.list.flatMap(o=>{const a=[];if(o.p.added_on&&o.p.added_on>C.first)a.push(`<b>${nmP(o)}</b> · ${t('fi_arr',{d:dm(o.p.added_on)})}`);if(o.abs)a.push(`<b>${nmP(o)}</b> · ${t('fi_absD',{n:o.abs})}`);if(o.left)a.push(`<b>${nmP(o)}</b> · ${t('fi_dep',{d:dm(o.left)})}`);return a});
}
function fichePrepa(C){
  const load=C.list.map(o=>{const l=(S.prepa||[]).filter(e=>e.player_id===o.p.id&&e.day>=C.first&&e.day<=C.last);return l.length?[nmP(o),l.length,l.reduce((a,e)=>a+(+e.dur||0),0)+'′',l.reduce((a,e)=>a+(+e.dur||0)*(+e.rpe||0),0),l.reduce((a,e)=>a+(+e.gps||0),0)]:null}).filter(Boolean);
  const ra=C.list.filter(o=>o.raD.reath||o.raD.adapte).map(o=>[nmP(o),o.raD.reath,o.raD.adapte,o.ret?dm(o.ret):(o.lastX&&['reath','adapte'].includes(o.lastX.s)?'—':'')]);
  const m=C.list.filter(o=>o.mt).map(o=>[nmP(o),...C.mdays.map(k=>k in o.per?(o.per[k]?o.per[k]+'′':(k in o.cp?(o.cp[k]?`${t('c_comp')} ${o.cp[k]}′`:t('c_comp')+' —'):'0')):''),o.mins+'′']);
  const end=C.list.filter(o=>o.lastX&&!o.left&&['reath','adapte'].includes(o.lastX.s)).map(o=>`<b>${nmP(o)}</b> · ${t('s_'+o.lastX.s)}${o.lastX.c?' · '+esc(tx(o.lastX,'c')):''}`);
  return sec(t('h_load'),tbl([t('c_player'),t('c_sess'),t('c_dur'),t('c_ua'),t('c_gps')],load,[1,2,3,4]))+sec(t('h_ra'),tbl([t('c_player'),t('c_reath'),t('c_ad'),t('c_ret')],ra,[1,2]))+
    (C.mdays.length?sec(t('h_match'),tbl([t('c_player'),...C.mdays.map(k=>matchName(C,k)),t('c_min')],m,[...C.mdays.map((_,i)=>i+1),C.mdays.length+1])):'')+sec(t('h_end'),ul(end));
}
function ficheTM(C){
  const pres=C.days.map(k=>{const sn=C.fin[k].snap,ids=Object.keys(sn).filter(byId);return [dm(k)+(C.M[k]?' ⚽':''),ids.filter(id=>!['parti','absent'].includes(sn[id].s)).length,ids.filter(id=>byId(id).added_on===k&&k>C.first).map(id=>esc(byId(id).nom)).join(', '),ids.filter(id=>sn[id].s==='parti'&&!(C.days.indexOf(k)>0&&C.fin[C.days[C.days.indexOf(k)-1]].snap[id]&&C.fin[C.days[C.days.indexOf(k)-1]].snap[id].s==='parti')).map(id=>esc(byId(id).nom)).join(', ')]});
  const abs=C.days.map(k=>{const sn=C.fin[k].snap,l=Object.keys(sn).filter(id=>byId(id)&&CAT(sn[id].s)==='indispo');return l.length?`<b>${dm(k)}</b> · ${l.map(id=>esc(byId(id).nom)).join(', ')}`:''}).filter(Boolean);
  const left=C.list.filter(o=>o.left).map(o=>`<b>${nmP(o)}</b> · ${t('fi_dep',{d:dm(o.left)})} · ${esc(o.p.club||'')}`);
  const fin=C.list.filter(o=>!o.left).map(o=>[nmP(o),t(o.p.poste+'1'),esc(o.p.club||'')]);
  return sec(t('h_pres'),tbl([t('c_day'),t('c_n'),t('k_arr'),t('k_left')],pres,[1]))+sec(t('h_abs'),ul(abs))+sec(t('h_left'),ul(left))+sec(t('h_fin'),tbl([t('c_player'),t('c_pos'),t('c_club')],fin));
}
function ficheDirection(C){
  const tmap={};(S.typeStats||[]).filter(x=>x.day>=C.first&&x.day<=C.last).forEach(x=>tmap[x.t]=(tmap[x.t]||0)+Number(x.n));
  const mrows=C.mdays.map(k=>{const sn=C.fin[k].snap,ids=Object.keys(sn).filter(id=>byId(id)&&!['parti','absent'].includes(sn[id].s));const av_=C.M[k].av;
    const ok=av_?ids.filter(id=>av_.snap[id]&&av_.snap[id].g==='ok'):ids.filter(id=>!LOST.includes(sn[id].s));const no=ids.filter(id=>!ok.includes(id));
    return [matchName(C,k),`${ok.length}/${ids.length} (${pct(ok.length,ids.length)} %)`,no.map(id=>esc(byId(id).nom)).join(', ')||'—']});
  const mins=C.list.filter(o=>o.mt).sort((a,b)=>b.mins-a.mins).map(o=>[nmP(o),...C.mdays.map(k=>k in o.per?o.per[k]+'′':''),o.mins+'′',o.miss]);
  const follow=C.list.filter(o=>o.lastX&&!o.left&&o.lastX.w).map(nmP);
  return sec(t('h_avail'),kpis([[t('k_rate'),pct(C.tot.pres-C.tot.lost,C.tot.pres)+' %'],[t('h_match'),C.mdays.length]])+(mrows.length?tbl([t('h_match'),t('k_mrate'),t('k_miss')],mrows):''))+
    sec(t('h_lost'),kpis([[t('k_lost'),C.tot.lost],[t('k_mean'),(C.list.length?(C.tot.lost/C.list.length).toFixed(1):'0')]])+(Object.keys(tmap).length?`<p class="sync">${t('byType')} : ${Object.entries(tmap).sort((a,b)=>b[1]-a[1]).map(([k,n])=>`${t('t_'+k)} ${n}`).join(' · ')}</p>`:''))+
    (C.mdays.length?sec(t('h_match'),tbl([t('c_player'),...C.mdays.map(k=>matchName(C,k)),t('c_min'),t('fi_missH')],mins,[...C.mdays.map((_,i)=>i+1),C.mdays.length+1,C.mdays.length+2])):'')+
    sec(t('h_eff'),kpis([[t('k_conv'),C.list.length],[t('k_arr'),C.list.filter(o=>o.p.added_on&&o.p.added_on>C.first).length],[t('k_left'),C.list.filter(o=>o.left).length],[t('k_absP'),C.list.filter(o=>o.abs).length]]))+
    sec(t('h_follow'),follow.length?`<p>${follow.join(', ')}</p>`:`<p class="sync">${t('fi_noData')}</p>`);
}
// résumé individuel d'un joueur, dans la langue L (fr, pt, en) ; textes libres traduits en fr/pt, originaux en anglais
// traductions à la demande pour le résumé (anciens textes sans traduction, et anglais)
const TC={fr:{},pt:{},en:{}}, TC_ASKED=new Set();
const ftr=(x,k,L)=>{const v=(x&&x[k])||'';if(!v)return '';if(L!=='en'){const a=tx(x,k,L);if(a!==v)return a}return TC[L][v]||v};
function resumeTexts(o){return [...o.pl.map(x=>[x.d,'plt']),...Object.values(o.aig).map(a=>[a.d,'aig']),...(o.chr?[[o.chr,'chr']]:[]),...o.soins.map(s=>[s.d,'pct']),...(o.lastX?[[o.lastX,'c']]:[]),...(o.rec?[[o.rec,'rec']]:[])]}
async function fillTC(o,L){
  if(!TR_ON())return;const need=[...new Set(resumeTexts(o).filter(([x,k])=>x&&x[k]&&ftr(x,k,L)===x[k]&&!TC_ASKED.has(L+'|'+x[k])).map(([x,k])=>x[k]))].slice(0,40);
  if(!need.length)return;need.forEach(v=>TC_ASKED.add(L+'|'+v));
  try{const {data,error}=await sb.functions.invoke('translate',{body:L==='en'?{texts:need,to:'en'}:{texts:need}});if(error||!data||!data.items)throw error||new Error('translate');
    need.forEach((v,i)=>{const it=data.items[i]||{};if(it[L])TC[L][v]=it[L];if(it.fr)TC.fr[v]=it.fr;if(it.pt)TC.pt[v]=it.pt});render(true)}catch(err){console.warn('traduction',err)}
}
function resumeText(C,o,L,html){
  const TL_=L, ft=(x,k)=>ftr(x,k,L);
  const H=s=>html?`<h3>${s}</h3>`:`\n*${s}*`, li=a=>a.length?(html?`<ul class="fl">${a.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:a.map(x=>'• '+x).join('\n')):(html?`<p class="sync">${rt(L,'none')}</p>`:rt(L,'none'));
  const out=[];
  out.push(html?`<h2>${rt(L,'t')}</h2><p><b>${esc(o.p.nom)}</b> · ${rt(L,o.p.poste)}${o.p.club?' · '+esc(o.p.club):''}<br><span class="sync">${rt(L,'per',{a:dm(o.first||C.first),b:dm(o.left||o.last||C.last)})}</span></p>`
    :`*${rt(L,'t')}*\n${o.p.nom} · ${rt(L,o.p.poste)}${o.p.club?' · '+o.p.club:''}\n${rt(L,'per',{a:dm(o.first||C.first),b:dm(o.left||o.last||C.last)})}`);
  out.push(H(rt(L,'avail')));out.push(li([rt(L,'pres',{n:o.pres}),rt(L,'full',{n:o.full}),...(o.ad?[rt(L,'ad',{n:o.ad})]:[]),...(o.lost?[rt(L,'lost',{n:o.lost})]:[]),rt(L,'rate',{r:o.rate??'—'})]));
  out.push(H(rt(L,'match')));out.push(o.mt?li(C.mdays.filter(k=>k in o.per).map(k=>rt(L,'vs',{o:C.M[k].opp,d:dm(k),m:o.per[k]}))):(html?`<p class="sync">${rt(L,'nomatch')}</p>`:rt(L,'nomatch')));
  out.push(H(rt(L,'aig')));if(html&&o.marks.length)out.push(bodySVG(o.marks,L));out.push(li([...Object.values(o.aig).map(a=>`${ft(a.d,'aig')}${zoneOf(a.d,'aig')?' — '+zLabel(zoneOf(a.d,'aig'),L):''} (${dm(a.since)})`),...o.pl.filter(x=>x.d.plt&&!Object.keys(o.aig).includes(x.d.plt)).map(x=>`${ft(x.d,'plt')}${guessZone(x.d.plt)?' — '+zLabel(guessZone(x.d.plt),L):''} (${dm(x.k)})`)]));
  if(o.chr){out.push(H(rt(L,'chr')));out.push(li([ft(o.chr,'chr')]))}
  out.push(H(rt(L,'care')));out.push(li([...careRuns(o.soins,d=>d.pct?ft(d,'pct'):''),...(o.recup?[rt(L,'recup',{n:o.recup})]:[])]));
  const x=o.lastX;out.push(H(rt(L,'end')));out.push(li(x?[rt(L,'s_'+x.s),...(x.c?[`${rt(L,'cons')} : ${ft(x,'c')}`]:[]),...(x.r?[`→ ${dm(x.r)}`]:[])]:[]));
  if(o.rec&&o.rec.rec){out.push(H(rt(L,'rec')));out.push(html?`<p>${esc(ft(o.rec,'rec'))}</p>`:ft(o.rec,'rec'))}
  const me=(S.staff||[]).find(x=>x.name&&x.name===S.me.name), ph=me&&String(me.phone||'').replace(/\D/g,''), em=me&&me.email?' · '+me.email:'';
  out.push(html?`<p class="sig">${esc(rt(L,'sig',{n:S.me.name||''}))}<br>${esc(rt(L,'contact',{n:S.me.name||'',p:ph?' · +'+ph:''}))}</p>`:'\n'+rt(L,'sig',{n:S.me.name||''})+'\n'+rt(L,'contact',{n:S.me.name||'',p:(ph?' · +'+ph:'')+em}));
  return out.join(html?'':'\n');
}
function resumeHTML(C,o,L){
  const ft=(x,k)=>ftr(x,k,L), x=o.lastX, me=(S.staff||[]).find(y=>y.name&&y.name===S.me.name)||{}, ph=String(me.phone||'').replace(/\D/g,'');
  const ev=new Map((o.evs||[]).map(e=>[e.txt,e.c]));
  const paths=[...Object.entries(o.aig).map(([txt,a])=>({t:ft(a.d,'aig'),z:zoneOf(a.d,'aig'),d:a.since,c:ev.get(txt)||'old'})),...o.pl.filter(p=>p.d.plt&&!Object.keys(o.aig).includes(p.d.plt)).map(p=>({t:ft(p.d,'plt'),z:guessZone(p.d.plt),d:p.k,c:ev.get(p.d.plt)||'old'}))].sort((a,b)=>a.d<b.d?-1:1);
  const care=[...careRuns(o.soins,d=>d.pct?ft(d,'pct'):''),...(o.recup?[rt(L,'recup',{n:o.recup})]:[])];
  const kpi=(v,k,cls='')=>`<div class="rk ${cls}"><b>${v}</b><span>${rt(L,k)}</span></div>`;
  const rateCls=o.rate==null?'':o.rate>=90?'k-ok':o.rate>=70?'k-adapte':'k-indispo';
  return `<header class="rh"><div class="rh-top"><span class="rh-brand">DISPO <em>STAFF</em></span><span>${rt(L,'t')}</span></div>
    <div class="rh-id">${av(o.p,'xl')}<div><h2>${esc(o.p.nom)}</h2><p>${rt(L,o.p.poste)}${o.p.club?' · '+esc(o.p.club):''}</p><p class="rh-per">${rt(L,'per',{a:dm(o.first||C.first),b:dm(o.left||o.last||C.last)})}${C.mdays.length?' · '+C.mdays.map(k=>`${esc(C.M[k].opp)} ${dm(k)}`).join(', '):''}</p></div>
    ${x?`<span class="pill k-${CAT(x.s)} rh-st"><i class="dot"></i>${rt(L,'s_'+x.s)}</span>`:''}</div></header>
  <div class="rkpis">${kpi(o.pres,'kp')}${kpi(o.full,'kf')}${kpi(o.lost,'kl')}${kpi((o.rate??'—')+' %','kr',rateCls)}${kpi(o.mins+'′','km')}</div>
  ${o.mt?`<div class="rsec"><h3>${rt(L,'match')}</h3><div class="rmatch">${C.mdays.filter(k=>k in o.per).map(k=>`<div><span>vs ${esc(C.M[k].opp)} · ${dm(k)}</span><b>${o.per[k]}′</b><i style="--w:${Math.min(100,Math.round(o.per[k]/90*100))}%"></i></div>`).join('')}</div></div>`:''}
  <div class="rsec rgrid"><div>${o.marks.length?bodySVG(o.marks,L):''}</div><div><h3>${rt(L,'aig')}</h3>
    ${paths.length?`<ul class="rpl">${paths.map(p=>`<li><i class="bz ${p.c}"></i><div><b>${esc(p.t)}</b><span>${p.z?esc(zLabel(p.z,L))+' · ':''}${dm(p.d)} · ${rt(L,'st_'+p.c)}</span></div></li>`).join('')}${o.chr?`<li><i class="bz chr"></i><div><b>${esc(ft(o.chr,'chr'))}</b><span>${rt(L,'chrL')}</span></div></li>`:''}</ul>`:`<p class="sync">${rt(L,'none')}</p>`}
    <h3>${rt(L,'care')}</h3>${care.length?`<ul class="rcare">${care.map(c=>`<li>${esc(c)}</li>`).join('')}</ul>`:`<p class="sync">${rt(L,'none')}</p>`}</div></div>
  ${x&&x.c?`<div class="rsec"><h3>${rt(L,'cons')}</h3><p>${esc(ft(x,'c'))}${x.r?` → ${dm(x.r)}`:''}</p></div>`:''}
  ${o.rec&&o.rec.rec?`<div class="rsec rrec"><h3>${rt(L,'rec')}</h3><p>${esc(ft(o.rec,'rec'))}</p></div>`:''}
  <footer class="rf"><div><b>${esc(S.me.name||'')}</b><span>${rt(L,'doc')}</span>${ph?`<span>+${ph}</span>`:''}${me.email?`<span>${esc(me.email)}</span>`:''}</div><p>${rt(L,'conf')}</p></footer>`;
}
function viewFiches(){
  const C=campStats(), mine=FICHES_OF[S.me.role]||[];
  if(!C.days.length){V.innerHTML=head(t('fi_t'),t('fi_l'),false)+`<div class="panel empty">${t('fi_none')}</div>`;return}
  const per=t('fi_period',{a:dm(C.first),b:dm(C.last),n:C.days.length,m:C.mdays.length});
  if(RES_P&&S.me.role==='medical'&&C.P[RES_P]){const o=C.P[RES_P];fillTC(o,RES_L);const ph=String(o.p.phone||'').replace(/\D/g,'');
    V.innerHTML=`<div class="bar noprint"><button class="btn small" id="resBack">← ${t('fi_back')}</button><div class="chips" role="group">${['pt','fr','en'].map(L=>`<button data-resl="${L}" aria-pressed="${RES_L===L}">${L.toUpperCase()}</button>`).join('')}</div>
      <div class="bar"><button class="btn small" id="fiPrint">${t('fi_print')}</button>${ph?`<a class="btn wa" data-ressent="${o.p.id}" target="_blank" rel="noopener" href="https://wa.me/${ph}?text=${encodeURIComponent(resumeText(C,o,RES_L,false))}">${t('fi_wa')}</a>`:`<span class="sync">${t('fi_noPh')}</span>`}</div></div>
      ${o.evs&&o.evs.length?`<div class="panel pad noprint"><b>${t('fi_heal')}</b>${o.evs.map((e,i)=>`<div class="bar" style="justify-content:space-between"><span>${esc(e.txt)} <span class="sync">${dm(e.day)}</span></span><div class="chips">${['cur','old'].map(c=>`<button data-heal="${i}" data-hc="${c}" aria-pressed="${e.c===c}">${t('h_'+c)}</button>`).join('')}</div></div>`).join('')}</div>`:''}
      <label class="f wide noprint">${t('fi_rec')}<textarea id="recTx" data-rec="${o.p.id}" rows="3" placeholder="${t('fi_recPh')}" style="font:inherit;padding:8px;border:1px solid var(--line);border-radius:6px;background:var(--surface);color:var(--ink)">${esc(o.rec?o.rec.rec:'')}</textarea></label>
      <article class="resume2">${resumeHTML(C,o,RES_L)}</article>`;return}
  const f=mine.includes(FICHE)?FICHE:mine[0];
  const build={medical:ficheMedical,coach:ficheCoach,prepa:fichePrepa,tm:ficheTM,direction:ficheDirection}[f];
  const url=location.origin+location.pathname+'#fiches';
  const sendP=S.me.role==='medical'&&CAN_SEND()?`<details class="panel pad noprint"><summary><b>${t('fi_send')}</b></summary><p class="sync">${t('fi_sendL')}</p><div class="bar" style="justify-content:flex-start">${['medical','coach','prepa','tm','direction'].filter(r=>r==='medical'||S.staff.some(x=>x.role===r)).map(r=>{const g=(CFG.waGroups||{})[r],m=S.staff.filter(x=>x.role===r),h=g||(m.length===1&&m[0].name?m[0].name:t('r_'+r));
    const txt=langsOf(r).map(L=>tr(L,'fi_linkMsg',{r:tr(L,'f_'+r),p:`${dm(C.first)}–${dm(C.last)}`,u:url})).join('\n\n');return `<a class="btn wa" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(txt)}">${esc(h)}</a>`}).join('')}</div></details>`:'';
  V.innerHTML=head(t('fi_t'),per,false)+`<div class="bar noprint">${mine.length>1?`<div class="chips" role="group">${mine.map(k=>`<button data-fiche="${k}" aria-pressed="${k===f}">${t('f_'+k)}</button>`).join('')}</div>`:'<span></span>'}<button class="btn small" id="fiPrint">${t('fi_print')}</button></div>${sendP}
  ${(()=>{const rate=pct(C.tot.pres-C.tot.lost,C.tot.pres),me=(S.staff||[]).find(y=>y.name&&y.name===S.me.name)||{},ph=String(me.phone||'').replace(/\D/g,'');
    return `<article class="resume2 fdoc"><header class="rh"><div class="rh-top"><span class="rh-brand">DISPO <em>STAFF</em></span><span>${t('fi_doc')}</span></div>
    <div class="rh-id"><div><h2>${t('f_'+f)}</h2><p class="rh-per">${t('fi_period',{a:dm(C.first),b:dm(C.last),n:C.days.length,m:C.mdays.length})}${C.mdays.length?' · '+C.mdays.map(k=>`${esc(C.M[k].opp)} ${dm(k)}`).join(', '):''}</p></div></div></header>
    <div class="rkpis"><div class="rk"><b>${C.list.length}</b><span>${t('k_players')}</span></div><div class="rk"><b>${C.days.length}</b><span>${t('k_days')}</span></div><div class="rk ${rateCl(rate)}"><b>${rate} %</b><span>${t('k_rate')}</span></div>${f==='tm'?'':`<div class="rk"><b>${C.tot.lost}</b><span>${t('k_lost')}</span></div>`}<div class="rk"><b>${C.mdays.length}</b><span>${t('k_matches')}</span></div></div>
    ${build(C)}
    <footer class="rf"><div><b>${esc(S.me.name||'')}</b><span>${t('r_medical')}</span>${ph?`<span>+${ph}</span>`:''}${me.email?`<span>${esc(me.email)}</span>`:''}</div><p>${t(f==='medical'?'fi_conf':'fi_int')}</p></footer></article>`})()}`;
}

/* ---------- rendu ---------- */
const VIEWS={fiches:viewFiches,medical:viewMedical,prepa:viewPrepa,coach:viewCoach,direction:viewDirection,wa:viewWA,staff:viewStaff,roster:viewRoster};
const TL={fiches:'tab_fiches',medical:'tab_medical',prepa:'tab_prepa',coach:'tab_coach',direction:'tab_direction',wa:'tab_wa',staff:'tab_staff',roster:'tab_roster'};
const CAN_SEND=()=>DEMO||S.me?.can_send!==false;
const myTabs=()=>TABS[S.me.role].filter(k=>CAN_SEND()||(k!=='wa'&&k!=='staff'));
const curTab=()=>{const h=location.hash.slice(1),ok=myTabs();return ok.includes(h)?h:ok[0]};
let pending=false;
function render(force){
  document.documentElement.lang=LANG;
  document.getElementById('sub').textContent=t('sub');
  document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===LANG));
  const who=document.getElementById('who');
  if(!S.me){who.innerHTML='';return}
  if(!S.ready){V.innerHTML=`<div class="empty">${t('loading')}</div>`;return}
  const a=document.activeElement;
  if(!force&&a&&V.contains(a)&&/INPUT|SELECT|TEXTAREA/.test(a.tagName)&&!['checkbox','date','submit'].includes(a.type)){pending=true;return}
  pending=false;
  who.innerHTML=DEMO?`<label class="f" style="display:flex;align-items:center;gap:6px">${t('demoRole')}<select id="demoRole" style="width:auto">${ROLES.map(r=>`<option value="${r}"${r===S.me.role?' selected':''}>${t('r_'+r)}</option>`).join('')}</select></label>`
    :`<span class="sync">${esc(S.me.name||'')} · ${t('r_'+S.me.role)}</span> <button class="btn small" id="signout">${t('signout')}</button>`;
  const v=curTab();
  document.getElementById('nav').innerHTML=myTabs().map(k=>`<a href="#${k}"${k===v?' aria-current="page"':''}>${t(TL[k])}</a>`).join('');
  const y=scrollY;VIEWS[v]();scrollTo(0,y);
}
V.addEventListener('focusout',()=>setTimeout(()=>{if(pending)render()},0));
addEventListener('hashchange',()=>{render(true);scrollTo(0,0)});
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{LANG=b.dataset.lang;ls.set('lang',LANG);S.me?render(true):viewLogin()}));
document.getElementById('who').addEventListener('change',e=>{if(e.target.id==='demoRole'){S.me.role=e.target.value;ls.set('demo-role',S.me.role);render(true)}});
document.getElementById('who').addEventListener('click',async e=>{if(e.target.id==='signout'){await sb.auth.signOut();location.reload()}});

/* ---------- interactions ---------- */
V.addEventListener('click',async e=>{
  const el=e.target.closest('button,[data-pid]');if(!el)return;
  if(el.dataset.auth){e.preventDefault();return auth(el.dataset.auth)}
  if(el.dataset.day){DATE=addDays(DATE,+el.dataset.day);LABEL=null;WA_SEND=null;return render(true)}
  if(el.dataset.label){LABEL=el.dataset.label;return render(true)}
  if(el.dataset.tally){TALLY=TALLY===el.dataset.tally?null:el.dataset.tally;return render(true)}
  if(el.dataset.walen){WA_LEN=el.dataset.walen;try{localStorage.setItem('waLen',WA_LEN)}catch(e){}return render(true)}
  if(el.dataset.wamode){WA_MODE=el.dataset.wamode;SERIE=null;try{localStorage.setItem('waMode',WA_MODE)}catch(e){}return render(true)}
  if(el.dataset.copyg){const txt=groupMsg(el.dataset.copyg,curSend());try{await navigator.clipboard.writeText(txt);toast(t('copied'))}catch(err){}return}
  if(el.dataset.send){WA_SEND=+el.dataset.send||el.dataset.send;return render(true)}
  if(el.dataset.path){const id=el.dataset.path;OPEN.has(id)?OPEN.delete(id):OPEN.add(id);return render(true)}
  if(el.dataset.fiche){FICHE=el.dataset.fiche;return render(true)}
  if(el.dataset.res){RES_P=el.dataset.res;scrollTo(0,0);return render(true)}
  if(el.dataset.resl){RES_L=el.dataset.resl;return render(true)}
  if(el.dataset.heal){const C=campStats(),o=C.P[RES_P],e=o&&o.evs[+el.dataset.heal];if(!e)return;const k=o.last,d=S.drafts[k];const x={...((d&&d.players[RES_P])||{})};x.heal={...(x.heal||{}),[e.txt]:el.dataset.hc};
    try{await Store.patchDraft(k,{players:{[RES_P]:x}})}catch(err){fail(err)}return render(true)}
  if(el.id==='resBack'){RES_P=null;return render(true)}
  if(el.id==='fiPrint'){window.print();return}
  if(el.id==='suiviAll'){SUIVI_ALL=!SUIVI_ALL;return render(true)}
  if(el.id==='alertOpen'){AL_FORM=true;return render(true)}
  if(el.id==='alertClose'){AL_FORM=false;return render(true)}
  if(el.dataset.lift){if(!confirm(t('al_lift')+' ?'))return;try{await Store.liftAlert(+el.dataset.lift||el.dataset.lift);toast(t('al_lifted'))}catch(err){fail(err)}return render(true)}
  if(el.dataset.g){const id=el.closest('[data-id]').dataset.id,x={...pl(id)};x.g=el.dataset.g;setPlayer(id,x);return render(true)}
  if(el.dataset.st){
    const id=el.closest('[data-id]').dataset.id,x={...pl(id)},p=byId(id);x.s=el.dataset.st;if(x.s==='ok'||x.s==='parti'){x.c='';x.r='';x.t='';}if(x.s==='parti')x.w=false;
    if(x.s==='parti'&&p.left_on!==DATE)Store.savePlayer({...p,left_on:DATE}).catch(fail);
    if(x.s!=='parti'&&p.left_on)Store.savePlayer({...p,left_on:null}).catch(fail);
    setPlayer(id,x);return render(true)}
  if(el.id==='validateMine'){el.disabled=true;
    try{if(PEND.size)await Promise.all([...PEND]);const d=draft();if(!d.exists)await Store.patchDraft(DATE,{players:d.players,match:d.match});await Store.checkDraft(DATE);toast(t('mineOk'))}catch(err){fail(err)}
    return render(true)}
  if(el.id==='validate'){
    if(PEND.size){el.disabled=true;await Promise.all([...PEND]);el.disabled=false}
    const d=draft(), sends=sendsOf(DATE);let lab=LABEL||defLabel(sends,d);if(!d.match?.on&&['avmatch','match'].includes(lab))lab=defLabel(sends,d);
    const snap={};Object.entries(d.players).forEach(([id,x])=>snap[id]={s:x.s,...(lab==='avmatch'&&x.s!=='parti'?{g:gOf(x),...(gOf(x)==='ok'&&x.aw==='oui'?{aw:true,tl:x.tl==='oui'}:{})}:{}),...(lab==='match'&&x.cp&&!(+x.m>0)?{cp:x.cp,cpm:+x.cpm||0}:{}),c:x.c,r:x.r,m:+x.m||0,w:!!x.w,...(x.pc?{pc:x.pc}:{}),...(x.c&&x.tr&&x.tr.c&&x.tr.c.src===x.c?{tr:{c:x.tr.c}}:{})});
    if(!d.exists)await Store.patchDraft(DATE,{players:d.players,match:d.match}).catch(fail);
    el.disabled=true;
    try{await Store.addSend({day:DATE,at:new Date().toISOString(),label:lab,sent_by:S.me.name||t('r_medical'),snap,match:d.match});LABEL=null;WA_SEND=null;toast(t('validated'));location.hash='wa';render(true)}catch(err){el.disabled=false;fail(err)}
    return}
  if(el.id==='sendAll'){const s=curSend(),sent=sentSet(s.id);const ids=[...S.staff].sort((a,b)=>ROLES.indexOf(a.role)-ROLES.indexOf(b.role)||String(a.name).localeCompare(b.name)).filter(x=>String(x.phone||'').replace(/\D/g,'')).map(x=>x.id);SERIE={sendId:s.id,ids:[...ids.filter(i=>!sent.has(i)),...ids.filter(i=>sent.has(i))],i:0};if(ids.every(i=>sent.has(i)))SERIE.ids=ids;return render(true)}
  if(el.id==='autoAll'){const s=curSend(),sent=sentSet(s.id);const todo=S.staff.filter(x=>String(x.phone||'').replace(/\D/g,'')&&!sent.has(x.id));
    el.disabled=true;el.textContent=t('autoBusy');WA_ERR=[];
    try{const {data,error}=await sb.functions.invoke('send-whatsapp',{body:{messages:todo.map(x=>({staff_id:x.id,text:buildMsg(x.role,x.lang==='fr'?'fr':'pt',s)}))}});
      if(error)throw error;const res=data.results||[];res.filter(r=>r.ok).forEach(r=>markSent(s.id,r.staff_id));
      WA_ERR=res.filter(r=>!r.ok).map(r=>`${(S.staff.find(x=>x.id===r.staff_id)||{}).name||'?'} : ${r.error}`);
      toast(t('autoRes',{ok:res.filter(r=>r.ok).length,ko:WA_ERR.length}))}catch(err){fail(err)}
    return render(true)}
  if(el.id==='serieSkip'){SERIE.i++;return render(true)}
  if(el.id==='serieStop'){SERIE=null;return render(true)}
  if(el.dataset.copy){const x=S.staff.find(y=>y.id===el.dataset.copy),sends=sendsOf(DATE),s=sends.find(y=>y.id===WA_SEND)||sends[sends.length-1];
    const txt=buildMsg(x.role,x.lang==='fr'?'fr':'pt',s);
    try{await navigator.clipboard.writeText(txt);toast(t('copied'))}catch(err){const r=document.createRange();r.selectNodeContents(el.closest('.card').querySelector('pre'));getSelection().removeAllRanges();getSelection().addRange(r)}return}
  if(el.id==='stAdd'){try{await Store.saveStaff({name:'',role:'coach',email:'',phone:'',lang:'pt'})}catch(err){fail(err)}return render(true)}
  if(el.dataset.delp){try{await Store.delPlayer(el.dataset.delp);toast(t('delOk'))}catch(err){toast(t('delKo'))}return render(true)}
  if(el.dataset.del){try{await Store.delStaff(el.dataset.del)}catch(err){fail(err)}return render(true)}
  if(el.dataset.pid){selP=el.dataset.pid;render(true)}
});
V.addEventListener('keydown',e=>{const r=e.target.closest('tr.pick');if(r&&(e.key==='Enter'||e.key===' ')){e.preventDefault();selP=r.dataset.pid;render(true);V.querySelector(`tr[data-pid="${selP}"]`)?.focus()}});
V.addEventListener('change',e=>{
  const el=e.target;
  if(el.id==='matchOn'){const d=draft(),m={on:el.checked,opp:d.match?.opp||'Sudão do Sul'};const patch={match:m};if(!d.exists)patch.players=d.players;Store.patchDraft(DATE,patch).catch(fail);return render(true)}
  if(el.dataset.w){const id=el.closest('[data-id]').dataset.id,x={...pl(id)};x.w=el.checked;setPlayer(id,x);return render(true)}
  if(el.dataset.f==='cp'){const id=el.closest('[data-id]').dataset.id,x={...pl(id)};x.cp=el.value;if(el.value!=='oui')x.cpm=0;setPlayer(id,x);return render(true)}
  if(el.dataset.f==='aw'||el.dataset.f==='tl'){const id=el.closest('[data-id]').dataset.id,x={...pl(id)};x[el.dataset.f]=el.value;if(el.dataset.f==='aw'&&el.value!=='oui'){x.tl='non';x.awt=''}setPlayer(id,x);return render(true)}
  if(el.dataset.f==='sb'){const id=el.closest('[data-id]').dataset.id,x={...pl(id)};x.sb=el.value;if(el.value!=='oui'){if(x.sbt&&x.aig===x.sbt){x.aig='';x.aigd=''}x.sbt=''}setPlayer(id,x);return render(true)}
  if(el.dataset.f==='pl'){const id=el.closest('[data-id]').dataset.id,x={...pl(id)};x.pl=el.value;if(el.value!=='oui')x.plt='';setPlayer(id,x);return render(true)}
  if(el.dataset.f==='aigz'||el.dataset.f==='chrz'){const id=el.closest('[data-id]').dataset.id,x={...pl(id)};x[el.dataset.f]=el.value;setPlayer(id,x);return}
  if(el.dataset.f==='aigd'||el.dataset.f==='pc'){const id=el.closest('[data-id]').dataset.id,x={...pl(id)};x[el.dataset.f]=el.value;if(el.dataset.f==='pc'&&el.value!=='soins')x.pct='';setPlayer(id,x);if(el.dataset.f==='pc')render(true);return}
  if(el.dataset.f==='t'||el.dataset.f==='r'){const id=el.closest('[data-id]').dataset.id,x={...pl(id)};x[el.dataset.f]=el.value;setPlayer(id,x);return}
  if(el.dataset.photo&&el.files[0]){const p={...byId(el.dataset.photo)};const f=el.files[0];el.value='';cropDialog(f).then(u=>{if(!u)return null;p.photo=u;return Store.savePlayer(p).then(()=>{toast(t('photoOk'));render(true)})}).catch(()=>toast(t('photoKo')));return}
  if(el.dataset.pf){const k=el.closest('[data-pl]').dataset.pl,p={...byId(k)};let v=el.value.trim();if(el.dataset.pf==='num')v=v?+v:null;if(el.dataset.pf==='left_on'||el.dataset.pf==='added_on')v=v||null;if(el.dataset.pf==='added_on'&&!v)return;if(el.dataset.pf==='nom'&&!v)return;p[el.dataset.pf]=v;Store.savePlayer(p).catch(fail);return}
  if(el.dataset.cs){const k=el.closest('[data-ct]').dataset.ct,x=S.staff.find(y=>y.id===k);x.can_send=el.checked;Store.saveStaff({...x}).catch(fail);return}
  if(el.dataset.cf==='role'||el.dataset.cf==='lang'){const k=el.closest('[data-ct]').dataset.ct,x=S.staff.find(y=>y.id===k);x[el.dataset.cf]=el.value;Store.saveStaff({...x}).catch(fail)}
});
V.addEventListener('input',e=>{
  const el=e.target;
  if(el.dataset.rec){const id=el.dataset.rec,v=el.value.trim();debounced('rec'+id,async()=>{
    const C=campStats(),o=C.P[id];if(!o)return;const k=o.recDay||o.last||C.last;const d=S.drafts[k];const x={...((d&&d.players[id])||{}),rec:v};
    if(v&&TR_ON()){try{const {data}=await sb.functions.invoke('translate',{body:{texts:[v]}});if(data&&data.items)x.tr={...(x.tr||{}),rec:{src:v,...data.items[0]}}}catch(err){console.warn(err)}}
    try{await Store.patchDraft(k,{players:{[id]:x}});render()}catch(err){fail(err)}},900);return}
  if(el.dataset.f==='sbt'){const id=el.closest('[data-id]').dataset.id;debounced('sbt'+id,async()=>{const x={...pl(id)},v=el.value.trim();
    if(!x.aig||x.aig===x.sbt){x.aig=v;x.aigd=x.aigd||DATE}x.sbt=v;await setPlayer(id,x);translateField(id,'aig',v)});return}
  if(['chr','aig','pct','plt','awt'].includes(el.dataset.f)){const id=el.closest('[data-id]').dataset.id,k=el.dataset.f;debounced(k+id,async()=>{const x={...pl(id)},v=el.value.trim();x[k]=v;await setPlayer(id,x);translateField(id,k,v)});return}
  if(el.dataset.f==='c'){const id=el.closest('[data-id]').dataset.id;debounced('c'+id,async()=>{const x={...pl(id)};x.c=el.value;await setPlayer(id,x);translateField(id,'c',el.value.trim())},900);return}
  if(el.dataset.cpm){const id=el.closest('[data-id]').dataset.id;debounced('cpm'+id,()=>{const x={...pl(id)};x.cpm=Math.min(180,Math.max(0,+el.value||0));setPlayer(id,x)});return}
  if(el.dataset.m){const id=el.closest('[data-id]').dataset.id;debounced('m'+id,()=>{const x={...pl(id)};x.m=Math.min(130,Math.max(0,+el.value||0));setPlayer(id,x)});return}
  if(el.id==='opp'){debounced('opp',()=>{const d=draft();Store.patchDraft(DATE,{match:{on:true,opp:el.value}}).catch(fail)});return}
  if(el.dataset.cf){const k=el.closest('[data-ct]').dataset.ct,x=S.staff.find(y=>y.id===k);x[el.dataset.cf]=el.value.trim();debounced('st'+k,()=>Store.saveStaff({...x}).catch(fail),900);return}
  const form=el.closest('form.card');if(form&&form.dur)form.querySelector('[data-ua]').textContent=`${(+form.dur.value||0)*(+form.rpe.value||0)} UA`;
});
V.addEventListener('submit',async e=>{
  e.preventDefault();const f=e.target;
  if(f.id==='login')return auth('in');
  if(f.id==='alertF'){
    const vals=n=>[...f.querySelectorAll(`[name="${n}"]:checked`)].map(x=>x.value);
    const row={day:DATE,sent_by:S.me.name||t('r_medical'),players:vals('pl'),zones:vals('z'),limits:vals('x'),note:f.note.value.trim(),urg:(vals('urg')[0]||'next')};
    if(!row.players.length)return toast(t('al_none'));
    const btn=f.querySelector('.primary');btn.disabled=true;
    if(row.note&&TR_ON()){try{const {data}=await sb.functions.invoke('translate',{body:{texts:[row.note]}});if(data&&data.items)row.tr={src:row.note,...data.items[0]}}catch(err){console.warn(err)}}
    try{await Store.addAlert(row);AL_FORM=false;toast(t('al_ok'))}catch(err){btn.disabled=false;return fail(err)}
    return render(true)}
  if(f.id==='addP'){const nom=f.nom.value.trim();if(!nom)return;const num=+f.num.value||null;
    const p={id:'n'+Date.now().toString(36),num,nom,poste:f.poste.value,club:f.club.value.trim(),added_on:DATE,left_on:null};
    try{await Store.savePlayer(p);toast(t('added'))}catch(err){fail(err)}return render(true)}
  if(f.classList.contains('card')){
    const row={day:DATE,player_id:f.dataset.id,dur:+f.dur.value||0,rpe:Math.min(10,+f.rpe.value||0),gps:+f.gps.value||0,exos:f.exos.value.trim()};
    try{await Store.addPrepa(row);toast(t('saved'))}catch(err){fail(err)}render(true)}
});

/* ---------- démarrage ---------- */
async function auth(kind){
  const email=document.getElementById('li-email').value.trim(),password=document.getElementById('li-pwd').value;
  if(!email||password.length<6)return;
  if(kind==='up'){const {error}=await sb.auth.signUp({email,password});return viewLogin(error?error.message:t('li_made'))}
  const {error}=await sb.auth.signInWithPassword({email,password});
  if(error)return viewLogin(t('li_bad'));
  start();
}
async function refresh(){try{await Store.loadAll();S.ready=true;render()}catch(e){fail(e)}}
async function start(){
  if(DEMO){S.me={role:'medical'};await Store.loadAll();S.ready=true;return render(true)}
  const {data:{session}}=await sb.auth.getSession();
  if(!session)return viewLogin();
  const {data:me,error}=await sb.rpc('whoami');
  if(error||!me){await sb.auth.signOut();return viewLogin(t('noRole'))}
  S.me=me;render();await refresh();
  sb.channel('dispo').on('postgres_changes',{event:'*',schema:'public'},()=>debounced('rt',refresh,400)).subscribe();
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh()});
}
if(!DEMO)sb=window.supabase.createClient(CFG.url,CFG.key);
render();start();
