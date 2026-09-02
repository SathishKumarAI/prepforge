# PrepForge — Architecture

**What it is.** A local-first interview-prep platform for AI, Machine Learning, Data Science, and
Data Analytics roles. It combines a curated question bank, a spaced-repetition study pipeline, a
quiz engine, and a live web-resource aggregator — all running on your own machine.

**Why local-first.** Your study progress and private notes are yours. Progress never leaves the
browser; your ingested books/notes never leave `backend/content/library/`. There is no login, no
account, no server-side user data.

## Pieces at a glance

| Layer | Tech | Responsibility |
|---|---|---|
| Frontend | React 18 + Vite 6 + TypeScript, Tailwind (two measured themes, `docs/DESIGN-THEMES.md`), Radix primitives, framer-motion, react-markdown + remark-gfm (lazy), fuse.js | Six routes, the study session, the reader, the graph |
| Backend | Python + FastAPI | Serves the Q&A bank in five shapes, runs scrapers, ingests markdown |
| Content | Flat JSON + Markdown files | `questions.json` (curated) + `generated.json` (ingested) + `vault_questions.json` |
| Scrapers | httpx, BeautifulSoup, feedparser, YouTube Data API | Pull articles/videos into the resource feed |
| Progress | Browser `localStorage` | Flashcard state, SM-2 schedule, bookmarks, notes, quiz history |
| Cards you wrote | Browser `localStorage` | A highlight plus your question, in the same SM-2 deck as the bank — `u-` ids, so they can never collide with it |
| The way out | A JSON file | `lib/backup.ts` exports every local store and reads one back — the only copy of your history that survives clearing site data |
| Question index | Browser `IndexedDB` | The whole bank's titles, so the app paints before the network answers |

There is no charting library. The one chart — the quiz-score trend on Progress — is hand-drawn SVG,
because recharts was 397 kB to draw it, which was 96% of that route's JavaScript.

## The bank is fetched in five shapes, and they are not interchangeable

This is the single most important thing to know before adding a screen. **`GET /questions` is
38.6 MB and no page in the app requests it.** Every surface uses the narrowest shape that answers
its question. Sizes are what the wire carries with gzip on.

| Endpoint | Carries | Who asks |
|---|---|---|
| `GET /questions` | everything — **9.19 MB** gzipped, 38.6 MB raw | **nobody in the app.** Kept because it is useful from a script. Reaching for it from a component is almost always the wrong shape. |
| `GET /questions/index` | id, title, topic, difficulty, `has_answer`, `has_quiz` — **495 kB** gzipped | Today, the Ctrl+K palette, Settings, Progress, Study's setup screen. One shared module cache and one IndexedDB copy, so the second consumer is free. |
| `GET /questions/browse` | a **page** of index rows + `origin` + `tags`, plus a match snippet when searching; `topics` and `links` on page ONE only | Library, and the Notes learning graph (`limit=240`) |
| `GET /questions/batch?ids=` | whole questions, **in the order asked for** | Study, once per session, for the ≤40 cards it will actually show |
| `GET /questions/{qid}` | one whole question, `related` expanded with the four index fields | the Library detail pane, Saved cards, and a related-link hover preview |

`/questions` and `/questions/index` carry an `ETag` and `Cache-Control: no-cache`. The tag is
derived from the mtimes of the four content files, so `POST /ingest` and `POST /pipeline/build`
invalidate it by doing their job — nothing has to remember to clear anything.

**Three routes must stay declared above `/questions/{qid}`** — `index`, `browse` and `batch`.
FastAPI matches in definition order, so below it each of those literals is read as a question id.
Three test files assert it.

## Request flow

```
Browser (React)
   │
   ├── IndexedDB: the question index from last time  ──▶ paint immediately
   │
   │  fetch /api/*          (Vite dev proxy → 127.0.0.1:8787)
   ▼
FastAPI  ── GZipMiddleware ── ETag/304
   ├── GET  /questions/index    revalidated with If-None-Match; ~300 B when unchanged
   ├── GET  /questions/browse   a page of rows, searched server-side over ANSWER text
   ├── GET  /questions/batch    the session's cards
   ├── GET  /resources          aggregated feed (data/resources.json)
   ├── POST /scrape/refresh     run RSS + YouTube + HTML scrapers, dedupe, persist
   ├── POST /ingest             markdown in content/library/ → pipeline cards
   └── POST /generate/answer    cache-first; local model or Claude per mode
```

Twenty-five routes in total — the full list is in the root [README](../README.md).

The frontend keeps **no** server round-trips for study state: every rating, bookmark and note is
written straight to `localStorage` through the shared `useProgress` store. Combined with the
IndexedDB index, this means **Today, Study's setup screen, Progress and the notes graph all render
with the backend stopped.** Only the surfaces that need an *answer* need the server.

## Two caches on the server, one key

Both are keyed on the same content-file mtimes as the ETag:

| Cache | Was doing | Measured |
|---|---|---|
| `_load_questions()` | re-reading and re-joining ~40 MB of JSON on every request | — |
| `_searchable()` | lowercasing every answer on every request | `browse q=kafka` 1.1s → 0.017s in-process |

## Directory map

```
backend/
  main.py                FastAPI app + the 25 routes, the mtime caches, the ETag
  generate.py            the 7 answer modes, cache-first; local model vs Claude routing
  ingest.py              library Markdown → cards + zero-token MCQ synthesis + deep links
  sources.py             clone a repo into the library; summarise it as collections
  capture.py             URL/upload → readable Markdown
  transcript.py          YouTube captions → chunked Markdown
  vault.py               Obsidian vault scan → deduped questions
  pipeline.py            TF-IDF related-questions index + the "more to read" index
  scrapers/              rss.py · html.py · youtube.py
  content/questions.json curated 100-question bank (committed)
  content/answers/       703 answer .md files (committed)
  content/library/       YOUR books/notes (git-ignored)
  content/generated.json ingested cards (git-ignored)
  config/sources.yaml    scrape sources
  data/resources.json    scraper output (git-ignored)
frontend/src/
  pages/       Today · Study · Library · Notes · Dashboard (route /progress) · Reader
  components/  Layout · QuestionCard · DeepAnswer · Markdown · ReadingPane · SourceDoc ·
               VoiceRecorder · SettingsPanel · library/ · notes/ · study/ · page/ · ui/
  hooks/       useQuestionIndex (the one that matters) · useProgress · useNotes ·
               useSettings · useHotkeys · theme hooks
  lib/         api.ts · indexCache.ts (IndexedDB) · routeChunks.ts · srs.ts (SM-2) ·
               studyModes.ts (the mode registry) · storage.ts · notes.ts ·
               backup.ts (export/restore, pure — see scripts/test-backup.mjs) ·
               userCards.ts (highlight-to-card, pure) ·
               graph.ts (hand-rolled force layout) · audio.ts (IndexedDB) ·
               rehype-highlight-lite.ts (lazy) · theme.ts · topics.ts · types.ts
extension/     local-only page clipper
```

`useQuestions.ts` still exists but its hook has no consumers. Only `reloadQuestions()` — called
after an ingest — and `questionMap()` are exported, and **`questionMap()` is always empty**: it was
the whole bank held in memory by whichever page had last fetched it, and no page fetches it. Anything
reading it renders nothing, silently. That is not hypothetical; it is how the Related section
disappeared from every saved card.

## What is loaded when

Every route but Today is a lazy chunk, prefetched when a nav link is hovered or focused.

| Chunk | Size | When |
|---|---|---|
| main | 345 kB | always — the shell, Today, the palette |
| `Library` | 218 kB | Library, or a hover on its nav link |
| `Markdown` | 129 kB | the first rendered answer |
| `rehype-highlight-lite` | 53 kB | the first answer containing a fenced code block — 16,355 of 18,284 answers have none |
| `Notes` | 17 kB | Notes |
| `Study` | 15 kB | Study |
| `Dashboard` | 6 kB | Progress |
| `Reader` | 5 kB | Reader |

## Design decisions

- **No database.** The dataset is small and read-mostly; flat JSON keeps the whole thing
  inspectable, diffable, and backup-trivial. Swap to Postgres only if multi-user is ever needed —
  see [SCALING.md](./SCALING.md) for where this design actually breaks.
- **Projections, not the bank.** A screen should fetch the narrowest shape that answers its
  question. The pattern that keeps recurring is that a predicate about a field (`Boolean(q.answer)`)
  was implemented by downloading the field. `has_answer` is 17 bytes; the answer it stands for
  averages 835.
- **Paint from disk, then revalidate.** The index is in IndexedDB and the server tags it, so a
  repeat visit paints instantly and spends ~300 B confirming it was right. Never the other way
  round: waiting for a conditional request before painting throws away what the stored copy is for.
- **Caches are keyed on the data's own mtimes**, never a TTL. An ingest invalidates every layer —
  server cache, search cache, ETag, browser copy — by doing its job.
- **Scrapers are best-effort.** Any single source failing is logged and skipped, never fatal — a
  dead RSS feed or a changed HTML layout can't take the feed down.
- **Storage failures are never fatal.** IndexedDB in private mode, over quota, or blocked by another
  tab must cost a slow first paint, not a broken page. Every path in `lib/indexCache.ts` resolves.
