-- Dispo Staff : schéma Supabase
-- À coller une seule fois dans Supabase > SQL Editor > New query, puis Run.
-- Remplacez VOTRE_EMAIL (dernière section) par l'e-mail de la personne qui administre l'app.

-- ===== Tables =====
create table if not exists staff (
  id uuid primary key default gen_random_uuid(),
  name text not null default '',
  role text not null check (role in ('medical','prepa','coach','tm','direction')),
  email text unique,
  phone text not null default '',
  lang text not null default 'pt' check (lang in ('pt','fr'))
);

create table if not exists players (
  id text primary key,
  num int,
  nom text not null,
  poste text not null check (poste in ('G','D','M','A')),
  club text not null default '',
  added_on date not null default '2026-11-07',
  left_on date
);

-- Brouillon du briefing du jour (statut, consigne, retour, type, minutes). Médical uniquement.
create table if not exists drafts (
  day date primary key,
  players jsonb not null default '{}'::jsonb,
  match jsonb not null default '{"on":false,"opp":""}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Briefings validés (plusieurs possibles par jour). Sans le type de blessure.
create table if not exists sends (
  id bigint generated always as identity primary key,
  day date not null,
  at timestamptz not null default now(),
  label text not null default '',
  sent_by text not null default '',
  snap jsonb not null,
  match jsonb not null default '{"on":false,"opp":""}'::jsonb
);

create table if not exists prepa_sessions (
  id bigint generated always as identity primary key,
  day date not null,
  player_id text not null references players(id),
  at timestamptz not null default now(),
  dur int not null default 0,
  rpe int not null default 0,
  gps int not null default 0,
  exos text not null default ''
);

-- ===== Rôle de la personne connectée =====
create or replace function my_role() returns text
language sql stable security definer set search_path = public as $$
  select role from staff where lower(email) = lower(auth.jwt() ->> 'email') limit 1
$$;

create or replace function whoami() returns json
language sql stable security definer set search_path = public as $$
  select json_build_object('role', role, 'name', name)
  from staff where lower(email) = lower(auth.jwt() ->> 'email') limit 1
$$;

-- Modifie le brouillon joueur par joueur, sans écraser ce que saisit un collègue.
create or replace function draft_patch(d date, patch jsonb) returns void
language plpgsql security definer set search_path = public as $$
begin
  if coalesce(my_role(), '') <> 'medical' then raise exception 'forbidden'; end if;
  insert into drafts(day, players, match)
  values (d, coalesce(patch -> 'players', '{}'::jsonb), coalesce(patch -> 'match', '{"on":false,"opp":""}'::jsonb))
  on conflict (day) do update
    set players = drafts.players || coalesce(patch -> 'players', '{}'::jsonb),
        match = case when patch ? 'match' then patch -> 'match' else drafts.match end,
        updated_at = now();
end $$;

-- Statistiques par type de blessure, agrégées (la direction ne voit jamais le type par joueur).
create or replace function type_stats() returns table(day date, t text, n bigint)
language sql stable security definer set search_path = public as $$
  select d.day, p.value ->> 't', count(*)
  from drafts d, jsonb_each(d.players) p
  where coalesce(my_role(), '') in ('medical', 'direction')
    and p.value ->> 's' in ('indispo', 'soins', 'reath')
    and coalesce(p.value ->> 't', '') <> ''
  group by 1, 2
$$;

revoke all on function draft_patch(date, jsonb) from public, anon;
revoke all on function type_stats() from public, anon;
grant execute on function my_role(), whoami(), draft_patch(date, jsonb), type_stats() to authenticated;

-- ===== Sécurité par rôle (Row Level Security) =====
alter table staff enable row level security;
alter table players enable row level security;
alter table drafts enable row level security;
alter table sends enable row level security;
alter table prepa_sessions enable row level security;

drop policy if exists staff_medical on staff;
create policy staff_medical on staff for all to authenticated
  using (my_role() = 'medical') with check (my_role() = 'medical');

drop policy if exists players_read on players;
create policy players_read on players for select to authenticated using (my_role() is not null);
drop policy if exists players_write on players;
create policy players_write on players for all to authenticated
  using (my_role() = 'medical') with check (my_role() = 'medical');

drop policy if exists drafts_medical on drafts;
create policy drafts_medical on drafts for select to authenticated using (my_role() = 'medical');

drop policy if exists sends_read on sends;
create policy sends_read on sends for select to authenticated using (my_role() is not null);
drop policy if exists sends_insert on sends;
create policy sends_insert on sends for insert to authenticated with check (my_role() = 'medical');

drop policy if exists prepa_read on prepa_sessions;
create policy prepa_read on prepa_sessions for select to authenticated using (my_role() in ('medical', 'prepa'));
drop policy if exists prepa_insert on prepa_sessions;
create policy prepa_insert on prepa_sessions for insert to authenticated with check (my_role() in ('medical', 'prepa'));

-- ===== Temps réel =====
do $$ begin
  alter publication supabase_realtime add table drafts, sends, prepa_sessions, players, staff;
exception when others then null; end $$;

-- ===== Effectif : convocatória novembre 2026 =====
insert into players (id, num, nom, poste, club) values
 ('p1',1,'Hugo','G','Atlético Petróleos'),('p2',2,'Neblu','G','Atlético Petróleos'),('p3',3,'Rui Honésimo','G','GD Interclube'),
 ('p4',4,'Buatu','D','Gil Vicente'),('p5',5,'David Carmo','D','Olympiacos'),('p6',6,'Gaspar','D','Lecce'),
 ('p7',7,'Jeovanni Dianganga','D','EA Guingamp'),('p8',8,'Marsoni Sambu','D','FCV Dender EH'),('p9',9,'Ruben Adrito','D','Atlético Petróleos'),
 ('p10',10,'Sandro Cruz','D','SK Slovan Bratislava'),('p11',11,'Kinito','D','Atlético Petróleos'),('p12',12,'Eddie Afonso','D','Atlético Petróleos'),
 ('p13',13,'Pedro Bondo','D','Famalicão'),('p14',14,'To Carneiro','D','FAR Rabat'),
 ('p15',15,'Maestro','M','Alanyaspor'),('p16',16,'Show','M','Kocaelispor'),('p17',17,'Fernandinho','M','1.º de Agosto'),
 ('p18',18,'Mário','M','Atlético Petróleos'),('p19',19,'Beni Mukendi','M','Vitória Guimarães'),('p20',20,'Kelliano','M','FC Akhmat Grozny'),
 ('p21',21,'Milson','M','Al Jazira'),
 ('p22',22,'Zito Luvumbo','A','Mallorca'),('p23',23,'Depu','A','Atlético Petróleos'),('p24',24,'Miro','A','Dynamo Makhachkala'),
 ('p25',25,'Chico Banza','A','Zamalek SC'),('p26',26,'Zini','A','AEK Atenas'),('p27',27,'Mabululu','A','Wiliete de Benguela'),
 ('p28',28,'Gilberto','A','Wiliete de Benguela')
on conflict (id) do nothing;

-- ===== Premier administrateur (rôle médical : gère l'effectif et les destinataires) =====
insert into staff (name, role, email, lang) values ('Administrateur', 'medical', 'VOTRE_EMAIL', 'fr')
on conflict (email) do nothing;
