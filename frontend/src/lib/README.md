# `lib` — pure modules: types, storage, scheduling, planning, helpers

No React in here. Anything that renders lives in `components/`; anything that
holds React state lives in `hooks/`. A file here is importable from a test
script with no DOM.

## Change → file

| Change | File |
|---|---|
| The API: endpoints, request shapes, the five ways the bank is fetched | `api.ts` |
| A question / link / source type | `types.ts` |
| What is persisted locally and its shape (`Progress`, quiz results, day keys) | `storage.ts` |
| Spaced repetition: SM-2 grading, due dates, leeches, the forecast | `srs.ts` |
| Which cards a study session contains and in what order | `studyPlan.ts` |
| A study mode: its label, eligibility, readiness, ratings, where grades land | `studyModes.ts` |
| Profile + appearance settings, theme migrations | `settings.ts` |
| Applying theme / text size / line height / density / reduce-motion to `<html>` | `theme.ts` |
| The product's name | `brand.ts` |
| The cursor highlight on glass chrome | `glass.ts` |
| Cards you wrote from a highlight | `userCards.ts` |
| Notes model and ids | `notes.ts` |
| Voice-note audio blobs (IndexedDB) | `audio.ts` |
| Download / restore of everything personal | `backup.ts` |
| The question index kept across reloads (IndexedDB + ETag) | `indexCache.ts` |
| Lazy route chunks and prefetching | `routeChunks.ts` |
| "What should I do right now", ranked | `nextAction.ts` |
| Notes graph / learning graph and the force layout | `graph.ts` |
| Topic → colour | `topics.ts` |
| Markdown → one-line preview text | `stripMd.ts` |
| Which code grammars the highlighter loads | `rehype-highlight-lite.ts` |
| Scrolling that respects reduced motion | `scroll.ts` |
| `cn()` | `utils.ts` |

## Rules

- **One day boundary.** `srs.dayKey` is the only way a date becomes a key; every
  streak, due date and forecast goes through it.
- **The bank is never fetched whole.** `api.ts` documents the five narrower shapes;
  a component that wants "all questions" wants one of those.
- **Colours are tokens.** `topics.ts` resolves to CSS variables; nothing here holds a hex.
