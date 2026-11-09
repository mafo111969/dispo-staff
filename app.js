/* Dispo Staff : briefing médical quotidien et diffusion filtrée par rôle */
'use strict';

/* ---------- textes FR / PT ---------- */
const T={
fr:{sub:'Sélection nationale · stage du 9 au 18 novembre 2026',
 tab_medical:'Médical',tab_prepa:'Prépa physique',tab_coach:'Staff technique',tab_direction:'Direction',tab_wa:'Envoi WhatsApp',tab_staff:'Staff et accès',tab_roster:'Effectif',ro_t:'Effectif du rassemblement',ro_l:'Corrigez un joueur, réglez sa date d\'arrivée ou retirez-le. Un joueur n\'apparaît dans le briefing qu\'à partir de sa date d\'arrivée.',arr:'Arrivée',dep:'Départ',del:'Retirer',delOk:'Joueur retiré',delKo:'Ce joueur a déjà des données ; marquez plutôt son départ.',
 r_medical:'Médical',r_prepa:'Prépa physique',r_coach:'Coach',r_tm:'Team manager',r_direction:'Direction',
 s_indispo:'Indisponible',s_soins:'En soins',s_reath:'En réathlé',s_adapte:'Entraînement adapté',s_ok:'Sans restriction',s_parti:'A quitté le rassemblement',
 c_ok:'Disponible',c_adapte:'Disponible avec adaptation',c_indispo:'Indisponible',c_parti:'A quitté le rassemblement',
 G:'Gardiens',D:'Défenseurs',M:'Milieux',A:'Attaquants',G1:'Gardien',D1:'Défenseur',M1:'Milieu',A1:'Attaquant',
 t_mus:'Musculaire',t_art:'Articulaire / ligamentaire',t_ten:'Tendineuse',t_tra:'Traumatique / contusion',t_mal:'Maladie',t_aut:'Autre',
 l_matin:'Matin',l_aprem:'Après-midi',l_soir:'Soir',l_match:'Après-match',
 med_t:'Briefing médical',med_l:'Passez l\'effectif en revue joueur par joueur. Seuls le statut, la consigne et la date de retour sont partagés. Pathologies et soins restent visibles du seul staff médical, jamais envoyés.',
 carry:'Statuts repris du jour précédent. Modifiez ce qui a changé.',fresh:'Premier briefing : tout l\'effectif démarre sans restriction.',
 sendsToday:'Briefings validés ce jour',noneYet:'aucun pour l\'instant',
 nChanges:'{n} changement(s) depuis le dernier briefing validé.',noChange:'Aucun changement depuis le dernier briefing validé.',
 label:'Briefing',validate:'Valider et envoyer',validated:'Briefing validé',
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
 noPhone:'Numéro manquant',sendAll:'Envoyer à tous ({n})',autoAll:'Envoi automatique ({n})',autoRes:'{ok} envoyé(s), {ko} échec(s)',autoBusy:'Envoi en cours…',serie:'Envoi {i} sur {n}',serieL:'Touchez le bouton, envoyez dans WhatsApp, puis revenez ici pour le suivant.',openFor:'Ouvrir WhatsApp pour {x}',skip:'Passer',stop:'Arrêter',allSent:'Tous les messages ont été ouverts.',sentMark:'Envoyé',open:'Ouvrir WhatsApp',copy:'Copier',copied:'Message copié',
 waNone:'Aucun briefing validé ce jour. Validez-le dans l\'onglet Médical.',noContacts:'Aucun destinataire. Ajoutez-les dans l\'onglet Staff et accès.',
 st_t:'Staff et accès',st_l:'Chaque personne se connecte avec son e-mail et reçoit la vue de son rôle. Le numéro WhatsApp est au format international, sans + ni espaces (ex. 244923000000).',
 st_name:'Nom',st_role:'Rôle',st_email:'E-mail de connexion',st_phone:'Numéro WhatsApp',st_lang:'Langue',st_add:'Ajouter une personne',st_del:'Retirer',
 demo:'Démonstration : rien n\'est partagé, les données restent sur cet appareil.',demoRole:'Voir comme',
 loading:'Chargement…',err:'Enregistrement impossible : {m}',
 li_t:'Connexion',li_l:'Utilisez l\'e-mail enregistré par le staff médical. À la première connexion, choisissez un mot de passe avec « Créer mon accès ».',
 email:'E-mail',pwd:'Mot de passe (6 caractères minimum)',signin:'Se connecter',signup:'Créer mon accès',signout:'Se déconnecter',
 li_bad:'E-mail ou mot de passe incorrect.',li_made:'Accès créé. Connectez-vous.',noRole:'Cet e-mail n\'est pas enregistré dans le staff. Demandez au staff médical de l\'ajouter.',
 m_head:'{l} du {d} ({h}), validé par {by}.',
 m_med:'{ok} sans restriction, {ad} adaptés, {re} en réathlé, {so} en soins, {in} indisponibles.',
 m_pr:'En réathlé :\n{re}\nEntraînement adapté :\n{ad}',
 m_co:'{ok} dispo, {ad} adaptés, {in} indispo.\n{pos}\nAdaptés :\n{adl}\nIndisponibles :\n{inl}',
 m_di:'Disponibilité : {p} % ({a}/{b}).\nIndisponibles :\n{inl}',
 m_ch:'Changements :\n{l}\n',m_left:'A quitté le rassemblement :\n{l}',m_watch:'\nJoueurs à surveiller :\n{l}',watch:'À surveiller',watchT:'Partagé avec les coachs, sans détail médical',
 m_min:'\nMinutes vs {o} :\n{l}',m_none:'• aucun',m_ret:'retour {d}'},
pt:{sub:'Seleção Nacional · estágio de 9 a 18 de novembro de 2026',
 tab_medical:'Médico',tab_prepa:'Preparação física',tab_coach:'Equipa técnica',tab_direction:'Direção',tab_wa:'Envio WhatsApp',tab_staff:'Staff e acessos',tab_roster:'Plantel',ro_t:'Plantel do estágio',ro_l:'Corrija um jogador, ajuste a data de chegada ou retire-o. Um jogador só aparece no briefing a partir da data de chegada.',arr:'Chegada',dep:'Saída',del:'Retirar',delOk:'Jogador retirado',delKo:'Este jogador já tem dados; registe antes a sua saída.',
 r_medical:'Departamento médico',r_prepa:'Preparação física',r_coach:'Treinador',r_tm:'Team manager',r_direction:'Direção',
 s_indispo:'Indisponível',s_soins:'Em tratamento',s_reath:'Em readaptação',s_adapte:'Treino adaptado',s_ok:'Sem restrições',s_parti:'Deixou o estágio',
 c_ok:'Disponível',c_adapte:'Disponível com adaptação',c_indispo:'Indisponível',c_parti:'Deixou o estágio',
 G:'Guarda-redes',D:'Defesas',M:'Médios',A:'Avançados',G1:'Guarda-redes',D1:'Defesa',M1:'Médio',A1:'Avançado',
 t_mus:'Muscular',t_art:'Articular / ligamentar',t_ten:'Tendinosa',t_tra:'Traumática / contusão',t_mal:'Doença',t_aut:'Outro',
 l_matin:'Manhã',l_aprem:'Tarde',l_soir:'Noite',l_match:'Pós-jogo',
 med_t:'Briefing médico',med_l:'Passe o plantel em revista jogador a jogador. Só o estado, a indicação e a data de regresso são partilhados. Patologias e tratamentos ficam visíveis só para o staff médico, nunca enviados.',
 carry:'Estados retomados do dia anterior. Altere o que mudou.',fresh:'Primeiro briefing: todo o plantel começa sem restrições.',
 sendsToday:'Briefings validados hoje',noneYet:'nenhum por enquanto',
 nChanges:'{n} alteração(ões) desde o último briefing validado.',noChange:'Nenhuma alteração desde o último briefing validado.',
 label:'Briefing',validate:'Validar e enviar',validated:'Briefing validado',
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
 noPhone:'Número em falta',sendAll:'Enviar a todos ({n})',autoAll:'Envio automático ({n})',autoRes:'{ok} enviado(s), {ko} falha(s)',autoBusy:'A enviar…',serie:'Envio {i} de {n}',serieL:'Toque no botão, envie no WhatsApp e volte aqui para o seguinte.',openFor:'Abrir WhatsApp para {x}',skip:'Saltar',stop:'Parar',allSent:'Todas as mensagens foram abertas.',sentMark:'Enviado',open:'Abrir WhatsApp',copy:'Copiar',copied:'Mensagem copiada',
 waNone:'Nenhum briefing validado hoje. Valide-o no separador Médico.',noContacts:'Nenhum destinatário. Adicione-os no separador Staff e acessos.',
 st_t:'Staff e acessos',st_l:'Cada pessoa entra com o seu e-mail e recebe a vista da sua função. O número WhatsApp está em formato internacional, sem + nem espaços (ex. 244923000000).',
 st_name:'Nome',st_role:'Função',st_email:'E-mail de acesso',st_phone:'Número WhatsApp',st_lang:'Língua',st_add:'Adicionar uma pessoa',st_del:'Retirar',
 demo:'Demonstração: nada é partilhado, os dados ficam neste aparelho.',demoRole:'Ver como',
 loading:'A carregar…',err:'Não foi possível guardar: {m}',
 li_t:'Entrar',li_l:'Use o e-mail registado pelo departamento médico. Na primeira vez, escolha uma palavra-passe com «Criar o meu acesso».',
 email:'E-mail',pwd:'Palavra-passe (mínimo 6 caracteres)',signin:'Entrar',signup:'Criar o meu acesso',signout:'Sair',
 li_bad:'E-mail ou palavra-passe incorretos.',li_made:'Acesso criado. Entre agora.',noRole:'Este e-mail não está registado no staff. Peça ao departamento médico para o adicionar.',
 m_head:'{l} de {d} ({h}), validado por {by}.',
 m_med:'{ok} sem restrições, {ad} adaptados, {re} em readaptação, {so} em tratamento, {in} indisponíveis.',
 m_pr:'Em readaptação:\n{re}\nTreino adaptado:\n{ad}',
 m_co:'{ok} disponíveis, {ad} adaptados, {in} indisponíveis.\n{pos}\nAdaptados:\n{adl}\nIndisponíveis:\n{inl}',
 m_di:'Disponibilidade: {p} % ({a}/{b}).\nIndisponíveis:\n{inl}',
 m_ch:'Alterações:\n{l}\n',m_left:'Deixou o estágio:\n{l}',m_watch:'\nJogadores a vigiar:\n{l}',watch:'A vigiar',watchT:'Partilhado com os treinadores, sem detalhe médico',
 m_min:'\nMinutos vs {o}:\n{l}',m_none:'• nenhum',m_ret:'regresso {d}'}
};
const ls={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
let LANG=ls.get('lang')||((navigator.language||'').startsWith('fr')?'fr':'pt');
const tr=(L,k,v={})=>String(T[L][k]??T.fr[k]??k).replace(/\{(\w+)\}/g,(_,x)=>v[x]??'');
const t=(k,v)=>tr(LANG,k,v);

/* ---------- constantes ---------- */
const STS=['indispo','soins','reath','adapte','ok','parti'], LOST=['indispo','soins','reath'];
const CAT=s=>LOST.includes(s)?'indispo':s;
const TYPES=['mus','art','ten','tra','mal','aut'], POS=['G','D','M','A'];
const ROLES=['medical','prepa','coach','tm','direction'], LABELS=['matin','aprem','soir','match'];
const TABS={medical:['medical','wa','prepa','coach','direction','roster','staff'],prepa:['prepa','coach'],coach:['coach'],tm:['coach'],direction:['direction','coach']};

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
const S={players:[],drafts:{},sends:[],prepa:[],staff:[],typeStats:[],me:null,ready:false};
let selP=null, LABEL=null;
const OPEN=new Set();
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
    players[p.id]={s:b.s,c:b.s==='ok'?'':b.c,r:b.s==='ok'?'':b.r,t:b.s==='ok'?'':b.t,m:0,chr:b.chr||'',aig:b.aig||'',aigd:b.aigd||'',w:!!b.w};
  });
  return {exists:!!d,carried:!d&&prevDays.length>0,players,match:d?d.match:{on:false,opp:'Sudão do Sul'}};
}
const pl=(id,day=DATE)=>draft(day).players[id]||blankP();
const sendsOf=day=>S.sends.filter(s=>s.day===day).sort((a,b)=>a.at<b.at?-1:1);
function lastSendUpTo(day){const l=S.sends.filter(s=>s.day<=day).sort((a,b)=>a.at<b.at?-1:1);return l[l.length-1]||null}
function prevSend(send){const l=S.sends.filter(s=>s.at<send.at).sort((a,b)=>a.at<b.at?-1:1);return l[l.length-1]||null}
function counts(players){const c={indispo:0,soins:0,reath:0,adapte:0,ok:0,parti:0};Object.values(players).forEach(x=>c[x.s]=(c[x.s]||0)+1);c.n=Object.keys(players).length-c.parti;return c}
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
  },
  persistDemo(){if(DEMO){const {players,drafts,sends,prepa,staff}=S;ls.set('dispo-demo',JSON.stringify({players,drafts,sends,prepa,staff}));S.typeStats=localTypeStats()}},
  async patchDraft(day,patch){
    const d=S.drafts[day]||(S.drafts[day]={day,players:{},match:{on:false,opp:''}});
    Object.assign(d.players,patch.players||{});if(patch.match)d.match=patch.match;
    if(DEMO)return this.persistDemo();
    const {error}=await sb.rpc('draft_patch',{d:day,patch});if(error)throw error;
  },
  async addSend(row){
    if(DEMO){row.id=Date.now();S.sends.push(row);return this.persistDemo()}
    const {data,error}=await sb.from('sends').insert(row).select().single();if(error)throw error;S.sends.push(data);
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
const dateBar=()=>`<div class="datebar"><button class="btn small" data-day="-1" aria-label="-1">‹</button><strong>${longD(DATE)}</strong><button class="btn small" data-day="1" aria-label="+1">›</button></div>`;
const head=(ti,le,withDate=true)=>`<div class="head"><div><h1>${ti}</h1><p class="lead">${le}</p></div>${withDate?dateBar():''}</div>${DEMO?`<div class="note warn">${t('demo')}</div>`:''}`;
const sendLabel=s=>`${t('l_'+s.label)||s.label}`;

/* ---------- vue médicale ---------- */
function viewMedical(){
  const d=draft(), c=counts(d.players), sends=sendsOf(DATE), last=lastSendUpTo(DATE);
  const ch=diff(last?last.snap:null,d.players).filter(x=>!(x.to.s==='ok'&&!last));
  const lab=LABEL||LABELS[Math.min(sends.length,2)];
  const played=Object.values(d.players).filter(x=>+x.m>0).length;
  const prepToday=S.prepa.filter(e=>e.day===DATE);
  const rows=POS.map(k=>{const ps=roster(DATE).filter(p=>p.poste===k);if(!ps.length)return '';
    return `<div class="group-title">${t(k)}</div>`+ps.map(p=>{
    const x=d.players[p.id]||blankP(), s=last&&last.snap[p.id], chg=last&&s&&(s.s!==x.s||s.c!==x.c||s.r!==x.r||!!s.w!==!!x.w);
    const logs=prepToday.filter(e=>e.player_id===p.id);
    const showPath=x.s!=='parti'&&(OPEN.has(p.id)||hasPath(x)), showMain=x.s!=='ok'&&x.s!=='parti';
    return `<div class="row${chg?' changed':''}" data-id="${p.id}">
      <div class="who"><span class="num">${p.num??''}</span><span><span class="name">${esc(p.nom)}</span> <span class="club">${esc(p.club)}</span></span>${d.match?.on&&x.s!=='parti'?`<label class="mins">${t('min')}<input type="number" min="0" max="130" id="m-${p.id}" data-m="1" value="${x.m||''}" placeholder="0"></label>`:''}${x.s!=='parti'?`<label class="watch" title="${t('watchT')}"><input type="checkbox" data-w="1"${x.w?' checked':''}> ${t('watch')}</label><button class="pbtn${hasPath(x)?' on':''}" data-path="${p.id}" aria-expanded="${showPath}">${t('pathBtn')}</button>`:''}</div>
      <div class="seg" role="group" aria-label="${esc(p.nom)}">${STS.map(k=>`<button class="k-${k}" data-st="${k}" aria-pressed="${x.s===k}"><i class="dot"></i>${t('s_'+k)}</button>`).join('')}</div>
      ${!showMain&&!showPath?'':`<div class="details">${showMain?`
        <label class="f">${t('type')}<select data-f="t" id="t-${p.id}"><option value="">—</option>${TYPES.map(k=>`<option value="${k}"${k===x.t?' selected':''}>${t('t_'+k)}</option>`).join('')}</select></label>
        <label class="f">${t('ret')}<input type="date" data-f="r" id="r-${p.id}" value="${esc(x.r)}"></label>
        <label class="f wide">${t('cons')}<input type="text" data-f="c" id="c-${p.id}" value="${esc(x.c)}" placeholder="${t('consPh')}"></label>
        ${logs.length?`<div class="sync" style="grid-column:1/-1">${t('lastPrepa')} : ${logs.map(e=>`${e.dur}′ · RPE ${e.rpe} · ${e.gps} m · ${esc(e.exos)}`).join(' / ')}</div>`:''}`:''}
        ${showPath?`<div class="path"><span class="medonly">${t('medOnly')}</span>
          <label class="f wide">${t('chr')}<input type="text" data-f="chr" id="chr-${p.id}" value="${esc(x.chr||'')}" placeholder="${t('chrPh')}"></label>
          <label class="f wide">${t('aig')}<input type="text" data-f="aig" id="aig-${p.id}" value="${esc(x.aig||'')}" placeholder="${t('aigPh')}"></label>
          <label class="f">${t('aigd')}<input type="date" data-f="aigd" id="aigd-${p.id}" value="${esc(x.aigd||'')}"></label>
          <label class="f">${t('care')}<select data-f="pc" id="pc-${p.id}">${['','recup','soins'].map(k=>`<option value="${k}"${k===(x.pc||'')?' selected':''}>${t('c_'+k)}</option>`).join('')}</select></label>
          ${x.pc==='soins'?`<label class="f wide">${t('careTx')}<input type="text" data-f="pct" id="pct-${p.id}" value="${esc(x.pct||'')}" placeholder="${t('careTxPh')}"></label>`:''}
        </div>`:''}
      </div>`}
    </div>`}).join('')}).join('');
  const suivi=roster(DATE).map(p=>({p,x:d.players[p.id]||blankP()})).filter(o=>o.x.s!=='parti'&&hasPath(o.x));
  V.innerHTML=head(t('med_t'),t('med_l'))+`
  <div class="tally">${['indispo','soins','reath','adapte','ok'].map(k=>pill(k,`${c[k]} ${t('s_'+k).toLowerCase()}`)).join('')}${c.parti?pill('parti',`${c.parti} ${t('s_parti').toLowerCase()}`):''}</div>
  <div class="banner${sends.length&&!ch.length?' ok':''}">
    <div style="display:grid;gap:4px;min-width:0"><b>${t('sendsToday')} : ${sends.length?sends.map(s=>`${sendLabel(s)} ${hmOf(s.at)}`).join(' · '):t('noneYet')}</b>
      <span class="sync">${!d.exists&&!sends.length?(d.carried?t('carry'):t('fresh'))+' ':''}${last?(ch.length?t('nChanges',{n:ch.length}):t('noChange')):''}</span></div>
    <div class="bar"><div class="chips" role="group" aria-label="${t('label')}">${LABELS.map(l=>`<button data-label="${l}" aria-pressed="${l===lab}">${t('l_'+l)}</button>`).join('')}</div>
      <button class="btn primary" id="validate">${t('validate')}</button></div>
  </div>
  <div class="banner"><label style="display:flex;gap:8px;align-items:center;font-weight:600"><input type="checkbox" id="matchOn" ${d.match?.on?'checked':''}> ${t('matchDay')}</label>${d.match?.on?`<div class="bar"><label class="f" style="min-width:200px">${t('opp')}<input type="text" id="opp" value="${esc(d.match.opp)}"></label><span class="sync">${t('played',{n:played})}</span></div>`:`<span class="sync">${t('minHint')}</span>`}</div>
  ${suivi.length?`<div class="banner suivi"><div style="display:grid;gap:6px;min-width:0"><b>${t('suivi')} (${suivi.length})</b><span class="sync">${t('suiviL')} ${t('medOnly')}.</span>
    <ul>${suivi.map(({p,x})=>`<li><span class="name">${esc(p.nom)}</span>${x.aig?` · ${esc(x.aig)}${x.aigd?` (${t('since',{d:dm(x.aigd)})})`:''}`:''}${x.chr?` · ${t('chrS')} : ${esc(x.chr)}`:''}${x.pc?` · <b>${t('c_'+x.pc)}</b>${x.pc==='soins'&&x.pct?` : ${esc(x.pct)}`:''}`:''}</li>`).join('')}</ul></div></div>`:''}
  <div class="panel">${rows}
    <form class="addp" id="addP"><label class="f">${t('num')}<input type="number" name="num" id="ap-num" min="1"></label><label class="f">${t('nom')}<input type="text" name="nom" id="ap-nom" required></label>
    <label class="f">${t('poste')}<select name="poste" id="ap-poste">${POS.map(k=>`<option value="${k}">${t(k+'1')}</option>`).join('')}</select></label><label class="f">${t('club')}<input type="text" name="club" id="ap-club"></label>
    <button class="btn">${t('add')}</button></form>
  </div>`;
}
function setPlayer(id,x){
  const d=draft(), patch={players:{[id]:x}};
  if(!d.exists){patch.players={...d.players,[id]:x};patch.match=d.match}
  Store.patchDraft(DATE,patch).catch(fail);
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
      <div class="consigne"><b>${t('consL')} :</b> ${esc(x.c)||t('noneC')}${x.r?`<br><b>${t('retL')} :</b> ${dm(x.r)}`:''}</div>
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
    ${POS.map(po=>{const x=l.filter(p=>p.poste===po);return x.length?`<div class="pos"><small>${t(po)}</small><ul>${x.map(p=>{const y=s.snap[p.id];return `<li>${esc(p.nom)}${k==='adapte'&&y.c?`<span>${esc(y.c)}</span>`:''}${k!=='ok'&&y.r?`<span>${t('m_ret',{d:dm(y.r)})}</span>`:''}</li>`}).join('')}</ul></div>`:''}).join('')}</div>`};
  const left=cat('parti');
  V.innerHTML=head(t('coach_t'),t('coach_l'))+`<div class="note">${LOCK}<span>${t('coachLock')} ${t('from',{l:sendLabel(s),h:`${dm(s.day)} ${hmOf(s.at)}`})}</span></div>
  <div class="lineup">${POS.map(po=>{const all=ids.map(byId).filter(p=>p.poste===po&&s.snap[p.id].s!=='parti'),av=all.filter(p=>CAT(s.snap[p.id].s)!=='indispo');return `<div><small class="sync">${t(po)}</small><br><b>${av.length}/${all.length}</b> <span class="sync">${t('usable')}</span></div>`}).join('')}</div>
  <div class="cols">${col('ok')}${col('adapte')}${col('indispo')}</div>
  ${S.me?.role!=='tm'&&ids.some(id=>s.snap[id].w&&s.snap[id].s!=='parti')?`<div class="note watchn"><b>${t('watch')}</b> : ${ids.filter(id=>s.snap[id].w&&s.snap[id].s!=='parti').map(id=>esc(byId(id).nom)).join(', ')}</div>`:''}
  ${left.length?`<div class="note">${t('c_parti')} : ${left.map(p=>esc(p.nom)).join(', ')}</div>`:''}`;
}

/* ---------- vue direction ---------- */
function viewDirection(){
  const daysAll=[...new Set(S.sends.map(s=>s.day))].filter(k=>k<=DATE).sort();
  const finals=Object.fromEntries(daysAll.map(k=>{const l=sendsOf(k);return [k,l[l.length-1]]}));
  const mdays=daysAll.filter(k=>finals[k].match?.on);
  const ids=[...new Set(daysAll.flatMap(k=>Object.keys(finals[k].snap)))].filter(byId);
  const rows=ids.map(id=>{let pres=0,lost=0,min=0,miss=0,mt=0;daysAll.forEach(k=>{const x=finals[k].snap[id];if(!x||x.s==='parti')return;pres++;if(LOST.includes(x.s))lost++;min+=+x.m||0;if(finals[k].match?.on){mt++;if(LOST.includes(x.s))miss++}});
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
    ${rows.map(r=>{const x=snapOf(r.p.id);return `<tr class="pick${r.p.id===selP?' sel':''}" data-pid="${r.p.id}" tabindex="0"><td>${esc(r.p.nom)}</td><td>${pill(CAT(x.s),t('c_'+CAT(x.s)))}</td><td class="n">${r.lost}</td><td class="n">${r.rate??'—'} %</td><td class="n">${r.min}′</td><td class="n">${r.miss}/${r.mt}</td><td>${dm(x.r)}</td></tr>`}).join('')||`<tr><td colspan="7" class="sync">${t('noBrief')}</td></tr>`}
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
function list(L,ids,snap,withC){return ids.map(id=>{const p=byId(id),x=snap[id];return `• ${p.nom}${withC&&x.c?` : ${x.c}`:''}${x.r?` (${tr(L,'m_ret',{d:dm(x.r)})})`:''}`}).join('\n')||tr(L,'m_none')}
function buildMsg(role,L,s){
  const snap=s.snap, ids=Object.keys(snap).filter(byId), c=counts(snap);
  const f=k=>ids.filter(id=>snap[id].s===k), cc=k=>ids.filter(id=>CAT(snap[id].s)===k);
  const prev=prevSend(s), ch=diff(prev?prev.snap:null,snap).filter(x=>prev&&(x.from.s!==x.to.s||x.from.c!==x.to.c||x.from.r!==x.to.r));
  const lab=x=>(role==='medical'||role==='prepa')?tr(L,'s_'+x.s):tr(L,'c_'+CAT(x.s));
  let chl=role==='medical'?ch:role==='prepa'?ch.filter(x=>['reath','adapte','parti'].includes(x.to.s)||['reath','adapte'].includes(x.from.s)):ch.filter(x=>CAT(x.from.s)!==CAT(x.to.s)||x.from.c!==x.to.c||x.from.r!==x.to.r);
  const chTxt=chl.length?tr(L,'m_ch',{l:chl.map(x=>`• ${x.p.nom} : ${lab(x.from)} → ${lab(x.to)}`).join('\n')}):'';
  const mp=ids.filter(id=>+snap[id].m>0), mins=s.match?.on&&mp.length&&role!=='medical'&&role!=='coach'&&role!=='tm'?tr(L,'m_min',{o:s.match.opp,l:mp.map(id=>`• ${byId(id).nom} : ${snap[id].m}′`).join('\n')}):'';
  const headL=tr(L,'m_head',{l:tr(L,'label')+' '+(tr(L,'l_'+s.label)||''),d:dm(s.day),h:hmOf(s.at),by:s.sent_by})+'\n';
  let body;
  if(role==='medical')body=tr(L,'m_med',{ok:c.ok,ad:c.adapte,re:c.reath,so:c.soins,in:c.indispo});
  else if(role==='prepa')body=tr(L,'m_pr',{re:list(L,f('reath'),snap,1),ad:list(L,f('adapte'),snap,1)});
  else if(role==='coach'||role==='tm')body=tr(L,'m_co',{ok:cc('ok').length,ad:cc('adapte').length,in:cc('indispo').length,pos:POS.map(po=>{const a=ids.filter(id=>byId(id).poste===po&&snap[id].s!=='parti');return `${tr(L,po)} : ${a.filter(id=>CAT(snap[id].s)!=='indispo').length}/${a.length}`}).join('\n'),adl:list(L,cc('adapte'),snap,1),inl:list(L,cc('indispo'),snap,0)});
  else body=tr(L,'m_di',{p:c.n?Math.round((c.ok+c.adapte)/c.n*100):0,a:c.ok+c.adapte,b:c.n,inl:list(L,cc('indispo'),snap,0)});
  const left=f('parti').filter(id=>!(prev&&prev.snap[id]&&prev.snap[id].s==='parti'));
  const wl=ids.filter(id=>snap[id].w&&snap[id].s!=='parti'), watch=role==='coach'&&wl.length?tr(L,'m_watch',{l:wl.map(id=>'• '+byId(id).nom).join('\n')}):'';
  return headL+chTxt+body+watch+(left.length&&role!=='medical'?'\n'+tr(L,'m_left',{l:left.map(id=>'• '+byId(id).nom).join('\n')}):'')+mins;
}
let WA_SEND=null;
let SERIE=null, WA_ERR=[]; // {sendId, ids:[], i}
const sentKey=id=>'sent-'+id;
const sentSet=id=>{try{return new Set(JSON.parse(ls.get(sentKey(id))||'[]'))}catch(e){return new Set()}};
function markSent(sendId,staffId){const st=sentSet(sendId);st.add(staffId);ls.set(sentKey(sendId),JSON.stringify([...st]))}
const waLink=(x,s)=>{const L=x.lang==='fr'?'fr':'pt';return `https://wa.me/${String(x.phone||'').replace(/\D/g,'')}?text=${encodeURIComponent(buildMsg(x.role,L,s))}`};
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
    body=`<div class="chips">${sends.map(x=>`<button data-send="${x.id}" aria-pressed="${x.id===s.id}">${sendLabel(x)} ${hmOf(x.at)}</button>`).join('')}</div>${serie}
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
  if(a.id==='serieGo'&&SERIE){markSent(s.id,SERIE.ids[SERIE.i]);SERIE.i++;setTimeout(()=>render(true),300)}
});

/* ---------- vue staff ---------- */
function viewStaff(){
  const staff=[...S.staff].sort((a,b)=>ROLES.indexOf(a.role)-ROLES.indexOf(b.role)||String(a.name).localeCompare(b.name));
  V.innerHTML=head(t('st_t'),t('st_l'),false)+`<div class="panel">${staff.map(x=>`<div class="ct" data-ct="${x.id}" style="grid-template-columns:minmax(0,1.1fr) minmax(0,1fr) minmax(0,1.4fr) minmax(0,1.1fr) 70px auto">
    <label class="f">${t('st_name')}<input type="text" id="sn-${x.id}" data-cf="name" value="${esc(x.name)}"></label>
    <label class="f">${t('st_role')}<select id="sr-${x.id}" data-cf="role">${ROLES.map(r=>`<option value="${r}"${r===x.role?' selected':''}>${t('r_'+r)}</option>`).join('')}</select></label>
    <label class="f">${t('st_email')}<input type="email" id="se-${x.id}" data-cf="email" value="${esc(x.email||'')}" autocomplete="off"></label>
    <label class="f">${t('st_phone')}<input type="tel" id="sp-${x.id}" data-cf="phone" inputmode="numeric" value="${esc(x.phone)}" placeholder="244…"></label>
    <label class="f">${t('st_lang')}<select id="sl-${x.id}" data-cf="lang"><option value="pt"${x.lang!=='fr'?' selected':''}>PT</option><option value="fr"${x.lang==='fr'?' selected':''}>FR</option></select></label>
    <button class="btn small" data-del="${x.id}">${t('st_del')}</button></div>`).join('')||`<div class="empty">${t('noContacts')}</div>`}
  <div class="pad"><button class="btn" id="stAdd">${t('st_add')}</button></div></div>`;
}

/* ---------- vue effectif ---------- */
function viewRoster(){
  const ps=[...S.players].sort((a,b)=>POS.indexOf(a.poste)-POS.indexOf(b.poste)||(a.num??99)-(b.num??99));
  V.innerHTML=head(t('ro_t'),t('ro_l'),false)+`<div class="panel">${ps.map(p=>`<div class="ct" data-pl="${p.id}" style="grid-template-columns:60px minmax(0,1.3fr) minmax(0,1fr) minmax(0,1.2fr) minmax(0,1fr) minmax(0,1fr) auto">
    <label class="f">${t('num')}<input type="number" id="rn-${p.id}" data-pf="num" value="${p.num??''}"></label>
    <label class="f">${t('nom')}<input type="text" id="rm-${p.id}" data-pf="nom" value="${esc(p.nom)}"></label>
    <label class="f">${t('poste')}<select id="rp-${p.id}" data-pf="poste">${POS.map(k=>`<option value="${k}"${k===p.poste?' selected':''}>${t(k+'1')}</option>`).join('')}</select></label>
    <label class="f">${t('club')}<input type="text" id="rc-${p.id}" data-pf="club" value="${esc(p.club)}"></label>
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

/* ---------- rendu ---------- */
const VIEWS={medical:viewMedical,prepa:viewPrepa,coach:viewCoach,direction:viewDirection,wa:viewWA,staff:viewStaff,roster:viewRoster};
const TL={medical:'tab_medical',prepa:'tab_prepa',coach:'tab_coach',direction:'tab_direction',wa:'tab_wa',staff:'tab_staff',roster:'tab_roster'};
const curTab=()=>{const h=location.hash.slice(1),ok=TABS[S.me.role];return ok.includes(h)?h:ok[0]};
let pending=false;
function render(force){
  document.documentElement.lang=LANG;
  document.getElementById('sub').textContent=t('sub');
  document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===LANG));
  const who=document.getElementById('who');
  if(!S.me){who.innerHTML='';return}
  if(!S.ready){V.innerHTML=`<div class="empty">${t('loading')}</div>`;return}
  const a=document.activeElement;
  if(!force&&a&&V.contains(a)&&/INPUT|SELECT/.test(a.tagName)&&!['checkbox','date','submit'].includes(a.type)){pending=true;return}
  pending=false;
  who.innerHTML=DEMO?`<label class="f" style="display:flex;align-items:center;gap:6px">${t('demoRole')}<select id="demoRole" style="width:auto">${ROLES.map(r=>`<option value="${r}"${r===S.me.role?' selected':''}>${t('r_'+r)}</option>`).join('')}</select></label>`
    :`<span class="sync">${esc(S.me.name||'')} · ${t('r_'+S.me.role)}</span> <button class="btn small" id="signout">${t('signout')}</button>`;
  const v=curTab();
  document.getElementById('nav').innerHTML=TABS[S.me.role].map(k=>`<a href="#${k}"${k===v?' aria-current="page"':''}>${t(TL[k])}</a>`).join('');
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
  if(el.dataset.send){WA_SEND=+el.dataset.send||el.dataset.send;return render(true)}
  if(el.dataset.path){const id=el.dataset.path;OPEN.has(id)?OPEN.delete(id):OPEN.add(id);return render(true)}
  if(el.dataset.st){
    const id=el.closest('[data-id]').dataset.id,x={...pl(id)},p=byId(id);x.s=el.dataset.st;if(x.s==='ok'||x.s==='parti'){x.c='';x.r='';x.t='';}if(x.s==='parti')x.w=false;
    if(x.s==='parti'&&p.left_on!==DATE)Store.savePlayer({...p,left_on:DATE}).catch(fail);
    if(x.s!=='parti'&&p.left_on)Store.savePlayer({...p,left_on:null}).catch(fail);
    setPlayer(id,x);return render(true)}
  if(el.id==='validate'){
    const d=draft(), sends=sendsOf(DATE), lab=LABEL||LABELS[Math.min(sends.length,2)];
    const snap={};Object.entries(d.players).forEach(([id,x])=>snap[id]={s:x.s,c:x.c,r:x.r,m:+x.m||0,w:!!x.w});
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
  if(el.dataset.f==='aigd'||el.dataset.f==='pc'){const id=el.closest('[data-id]').dataset.id,x={...pl(id)};x[el.dataset.f]=el.value;if(el.dataset.f==='pc'&&el.value!=='soins')x.pct='';setPlayer(id,x);if(el.dataset.f==='pc')render(true);return}
  if(el.dataset.f==='t'||el.dataset.f==='r'){const id=el.closest('[data-id]').dataset.id,x={...pl(id)};x[el.dataset.f]=el.value;setPlayer(id,x);return}
  if(el.dataset.pf){const k=el.closest('[data-pl]').dataset.pl,p={...byId(k)};let v=el.value.trim();if(el.dataset.pf==='num')v=v?+v:null;if(el.dataset.pf==='left_on'||el.dataset.pf==='added_on')v=v||null;if(el.dataset.pf==='added_on'&&!v)return;if(el.dataset.pf==='nom'&&!v)return;p[el.dataset.pf]=v;Store.savePlayer(p).catch(fail);return}
  if(el.dataset.cf==='role'||el.dataset.cf==='lang'){const k=el.closest('[data-ct]').dataset.ct,x=S.staff.find(y=>y.id===k);x[el.dataset.cf]=el.value;Store.saveStaff({...x}).catch(fail)}
});
V.addEventListener('input',e=>{
  const el=e.target;
  if(['chr','aig','pct'].includes(el.dataset.f)){const id=el.closest('[data-id]').dataset.id,k=el.dataset.f;debounced(k+id,()=>{const x={...pl(id)};x[k]=el.value.trim();setPlayer(id,x)});return}
  if(el.dataset.f==='c'){const id=el.closest('[data-id]').dataset.id;debounced('c'+id,()=>{const x={...pl(id)};x.c=el.value;setPlayer(id,x)});return}
  if(el.dataset.m){const id=el.closest('[data-id]').dataset.id;debounced('m'+id,()=>{const x={...pl(id)};x.m=Math.min(130,Math.max(0,+el.value||0));setPlayer(id,x)});return}
  if(el.id==='opp'){debounced('opp',()=>{const d=draft();Store.patchDraft(DATE,{match:{on:true,opp:el.value}}).catch(fail)});return}
  if(el.dataset.cf){const k=el.closest('[data-ct]').dataset.ct,x=S.staff.find(y=>y.id===k);x[el.dataset.cf]=el.value.trim();debounced('st'+k,()=>Store.saveStaff({...x}).catch(fail),900);return}
  const form=el.closest('form.card');if(form&&form.dur)form.querySelector('[data-ua]').textContent=`${(+form.dur.value||0)*(+form.rpe.value||0)} UA`;
});
V.addEventListener('submit',async e=>{
  e.preventDefault();const f=e.target;
  if(f.id==='login')return auth('in');
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
