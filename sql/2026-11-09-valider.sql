-- Dispo Staff : séparer « Valider ma saisie » (tous les médicaux) et « Valider et envoyer » (réservé).
-- À coller dans Supabase > SQL Editor, remplacer VOTRE_EMAIL (dernière ligne) par l'e-mail de celui qui envoie, puis Run.

alter table staff add column if not exists can_send boolean not null default false;
alter table drafts add column if not exists checks jsonb not null default '[]'::jsonb;

create or replace function my_can_send() returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce((select can_send from staff where lower(email) = lower(auth.jwt() ->> 'email') limit 1), false)
$$;

create or replace function whoami() returns json
language sql stable security definer set search_path = public as $$
  select json_build_object('role', role, 'name', name, 'can_send', can_send)
  from staff where lower(email) = lower(auth.jwt() ->> 'email') limit 1
$$;

-- Un kiné valide sa saisie : on note qui et quand, sans rien envoyer.
create or replace function draft_check(d date) returns void
language plpgsql security definer set search_path = public as $$
declare who text;
begin
  if coalesce(my_role(), '') <> 'medical' then raise exception 'forbidden'; end if;
  select coalesce(nullif(name, ''), email) into who from staff where lower(email) = lower(auth.jwt() ->> 'email') limit 1;
  insert into drafts(day, checks) values (d, jsonb_build_array(jsonb_build_object('by', who, 'at', now())))
  on conflict (day) do update set checks = drafts.checks || excluded.checks, updated_at = now();
end $$;

revoke all on function draft_check(date) from public, anon;
grant execute on function my_can_send(), whoami(), draft_check(date) to authenticated;

-- Seuls ceux qui peuvent envoyer créent un briefing envoyé et gèrent la liste du staff.
drop policy if exists sends_insert on sends;
create policy sends_insert on sends for insert to authenticated with check (my_role() = 'medical' and my_can_send());

drop policy if exists staff_medical on staff;
drop policy if exists staff_read on staff;
create policy staff_read on staff for select to authenticated using (my_role() = 'medical');
drop policy if exists staff_write on staff;
create policy staff_write on staff for all to authenticated
  using (my_role() = 'medical' and my_can_send()) with check (my_role() = 'medical' and my_can_send());

update staff set can_send = true where lower(email) = lower('VOTRE_EMAIL');
