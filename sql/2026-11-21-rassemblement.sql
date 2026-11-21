-- Rassemblement : fiche par joueur à l'annonce de la liste (pre) et à l'arrivée (arr), une ligne par rassemblement.
-- Données médicales : lecture et écriture réservées au staff médical.
create table if not exists intake (
  id bigserial primary key,
  camp date not null,
  player_id text not null,
  phase text not null check (phase in ('pre','arr')),
  data jsonb not null default '{}',
  by_name text,
  at timestamptz not null default now(),
  validated_at timestamptz,
  validated_by text,
  unique (camp, player_id, phase)
);
alter table intake enable row level security;
drop policy if exists intake_read on intake;
create policy intake_read on intake for select to authenticated using (my_role() = 'medical');
drop policy if exists intake_insert on intake;
create policy intake_insert on intake for insert to authenticated with check (my_role() = 'medical');
drop policy if exists intake_update on intake;
create policy intake_update on intake for update to authenticated using (my_role() = 'medical') with check (my_role() = 'medical');
