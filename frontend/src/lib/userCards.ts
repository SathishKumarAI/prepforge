/**
 * Cards you wrote yourself, out of a passage you were reading.
 *
 * Reading and recalling have been two separate acts in this app: the bank is
 * fixed, so the moment you read something worth remembering the only thing you
 * could do with it was bookmark the page it was on. A highlight becomes an
 * answer, you supply the question, and it joins the same SM-2 deck as everything
 * else — same ratings, same due dates, same Progress rows.
 *
 * Owns: the card shape, ids that cannot collide with the bank's, cleaning a
 * selection, and turning a card into the `Question` the study surface renders.
 * Does NOT own: storage or React state — `hooks/useUserCards.ts`. As with
 * `lib/backup.ts`, every import here is `import type`, which is what keeps the
 * module loadable in plain Node for `scripts/test-usercards.mjs`.
 */
import type { Question } from "./types";

/**
 * Their own topic, so every topic filter in the app already handles them and
 * none of them had to learn about a new kind of card. It reads as a topic on
 * Study's chip row and as a row on Progress, which is exactly what it is.
 */
export const USER_CARD_TOPIC = "My cards";

/** A selection shorter than this is a phrase, not an answer worth a card. */
export const MIN_HIGHLIGHT = 12;
/** And past this it is a page, which makes a card you will never recall. */
export const MAX_HIGHLIGHT = 1200;
export const MAX_QUESTION = 300;

export interface UserCard {
  id: string;
  question: string;
  answer: string;
  /** Where the highlight came from, so the card can be traced back. */
  source?: { title: string; href?: string };
  created: string;
}

/**
 * `u-` prefixed, and nothing in the bank starts with it: ids there are `q001`,
 * or a slug from ingest. This matters because a user card shares one namespace
 * with 18,284 others — `progress.srs` is keyed by id, so a collision would not
 * be a duplicate card, it would be your schedule for someone else's question.
 */
export function isUserCardId(id: string): boolean {
  return id.startsWith("u-");
}

/** Monotonic within a session, and stamped, so two cards made in the same
 *  second from two tabs still differ. Same approach as `nextNoteId`. */
export function nextUserCardId(existing: UserCard[], now: string): string {
  const stamp = now.replace(/[^0-9]/g, "").slice(-10);
  return `u-${stamp}-${existing.length}`;
}

/**
 * A selection carries the layout with it: soft-wrapped lines, the newline a
 * `<p>` boundary leaves, whatever indentation the markdown had. Left alone that
 * arrives in the card as ragged text with hard breaks where the browser window
 * happened to be.
 */
export function cleanHighlight(raw: string): string {
  return raw.replace(/\s+/g, " ").trim().slice(0, MAX_HIGHLIGHT);
}

export function isUsableHighlight(raw: string): boolean {
  const text = cleanHighlight(raw);
  return text.length >= MIN_HIGHLIGHT;
}

export function makeUserCard(
  existing: UserCard[],
  fields: { question: string; answer: string; source?: UserCard["source"] },
  now: string,
): UserCard {
  return {
    id: nextUserCardId(existing, now),
    question: fields.question.trim().slice(0, MAX_QUESTION),
    answer: cleanHighlight(fields.answer),
    source: fields.source,
    created: now,
  };
}

export function removeUserCard(cards: UserCard[], id: string): UserCard[] {
  return cards.filter((c) => c.id !== id);
}

/**
 * The study surface renders `Question`s and knows nothing about where they came
 * from. Difficulty is "medium" because the field is not optional and a card you
 * wrote has no rated difficulty — nothing reads it for a user card, and
 * pretending it is "easy" would skew the difficulty filter.
 */
export function toQuestion(card: UserCard): Question {
  return {
    id: card.id,
    topic: USER_CARD_TOPIC,
    difficulty: "medium",
    tags: [],
    question: card.question,
    answer: card.answer,
    origin: { kind: "library", label: card.source?.title ?? "Your highlight" },
    reading: card.source?.href
      ? [{ title: card.source.title, url: card.source.href }]
      : undefined,
  };
}
