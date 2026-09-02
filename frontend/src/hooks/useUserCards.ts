import { useCallback, useEffect, useState } from "react";
import { load, save } from "../lib/storage";
import { makeUserCard, removeUserCard, type UserCard } from "../lib/userCards";

/**
 * The store behind cards you wrote yourself. Same shape as `useNotes`: one
 * module-level copy shared by every screen, so a card made in the Reader is in
 * Study's deck without a reload.
 *
 * Their own localStorage key rather than a field on `progress`: `progress` is
 * the record of what you have DONE with cards, and this is the cards. Keeping
 * them apart is also what lets a backup carry them without the two merging into
 * each other — see `lib/backup.ts`.
 */
const KEY = "cards";

function read(): UserCard[] {
  const raw = load<UserCard[]>(KEY, []);
  return Array.isArray(raw) ? raw : [];
}

let shared: UserCard[] = read();
const listeners = new Set<(c: UserCard[]) => void>();

function set(next: UserCard[]) {
  shared = next;
  save(KEY, next);
  listeners.forEach((l) => l(next));
}

export function useUserCards() {
  const [cards, setLocal] = useState<UserCard[]>(shared);

  useEffect(() => {
    const l = (c: UserCard[]) => setLocal(c);
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);

  const create = useCallback(
    (fields: { question: string; answer: string; source?: UserCard["source"] }): UserCard => {
      const card = makeUserCard(shared, fields, new Date().toISOString());
      set([...shared, card]);
      return card;
    },
    [],
  );

  const remove = useCallback((id: string) => set(removeUserCard(shared, id)), []);

  return { cards, create, remove };
}
