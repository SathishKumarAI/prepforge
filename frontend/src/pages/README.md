# `pages` — one route each, on the three-zone contract

Every page is `Page` from `components/page` with at most three zones (orient,
act, review). Each file opens with a slot table saying what fills each zone
and what was deliberately left out. Routes are listed in `../App.tsx`; the nav
and breadcrumb read `../components/shell/nav.ts`.

## Change → file

| Change | File |
|---|---|
| `/` — what to do right now, the fortnight strip | `Today.tsx` |
| `/study` — session setup and the two screens (session engine: `../hooks/useStudySession.ts`; plan: `../lib/studyPlan.ts`) | `Study.tsx` |
| `/library` — the four views, header counts, session timer | `Library.tsx` (views in `components/library/`) |
| `/progress` — where recall is weak, leeches, forecast | `Dashboard.tsx` |
| `/notes` — capture and link | `Notes.tsx` (graph in `components/notes/`) |
| `/reader` — local files and web pages | `Reader.tsx` |

## Rules

- **≤ 4 facts in orient**, each one that changes the next 30 seconds.
- **One primary button per page**, in the act zone.
- **Render `—`, not `0`, for a value nobody has reported yet.**
