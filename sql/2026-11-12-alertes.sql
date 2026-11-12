-- Alerte staff : message urgent du médical vers coachs et prépa (zone + consignes, sans diagnostic détaillé)
create table if not exists alerts (
  id bigserial primary key,
  day date not null,
  at timestamptz not null default now(),
  sent_by text,
  players jsonb not null default '[]',
  zones jsonb not null default '[]',
  limits jsonb not null default '[]',
  note text default '',
  tr jsonb,
  urg text default 'next',
  lifted_at timestamptz
);
alter table alerts enable row level security;
drop policy if exists alerts_read on alerts;
create policy alerts_read on alerts for select to authenticated using (my_role() in ('medical','coach','prepa'));
drop policy if exists alerts_insert on alerts;
create policy alerts_insert on alerts for insert to authenticated with check (my_role() = 'medical' and my_can_send());
drop policy if exists alerts_update on alerts;
create policy alerts_update on alerts for update to authenticated using (my_role() = 'medical' and my_can_send()) with check (my_role() = 'medical' and my_can_send());
do $$ begin
  alter publication supabase_realtime add table alerts;
exception when duplicate_object then null; end $$;
