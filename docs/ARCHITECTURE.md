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
| Frontend | React + Vite + TypeScript, Tailwind (Catppuccin Mocha), framer-motion, Recharts | All UI: the 7 modes, animations, charts |
| Backend | Python + FastAPI | Serves the Q&A bank, runs scrapers, ingests markdown |
| Content | Flat JSON files | `questions.json` (curated) + `generated.json` (ingested) |
| Scrapers | httpx, BeautifulSoup, feedparser, YouTube Data API | Pull articles/videos into the resource feed |
| Progress | Browser `localStorage` | Flashcard state, SM-2 schedule, bookmarks, notes, quiz history |

## Request flow

```
Browser (React)
   │  fetch /api/*          (Vite dev proxy → 127.0.0.1:8787)
   ▼
FastAPI
   ├── GET  /questions      curated bank + ingested cards (reads JSON fresh each call)
   ├── GET  /resources      aggregated feed (data/resources.json)
   ├── POST /scrape/refresh  run RSS + YouTube + HTML scrapers, dedupe, persist
   ├── POST /ingest          markdown in content/library/ → pipeline cards
   └── GET  /library         list ingestable files + ingested count
```

The frontend keeps **no** server round-trips for study state — every rating, bookmark, and note is
written straight to `localStorage` through the shared `useProgress` store, so the app is fully
usable offline once questions are loaded.

## Directory map

```
backend/
  main.py                FastAPI app + routes
  ingest.py              markdown → cards (optional Claude enrichment)
  scrapers/rss.py|html.py|youtube.py
  content/questions.json curated 100-question bank
  content/library/       YOUR books/notes (git-ignored)
  content/generated.json ingested cards (git-ignored)
  config/sources.yaml    scrape sources
  data/resources.json    scraper output (git-ignored)
frontend/src/
  pages/    Learn · Browse · Flashcards · Quiz · Resources · Dashboard · Bookmarks
  components/ Layout · QuestionCard · Badge · Markdown · States
  hooks/    useQuestions (cached fetch) · useProgress (localStorage store)
  lib/      srs.ts (SM-2) · storage.ts · api.ts · topics.ts · types.ts
```

## Design decisions

- **No database.** The dataset is small and read-mostly; flat JSON keeps the whole thing
  inspectable, diffable, and backup-trivial. Swap to Postgres only if multi-user is ever needed.
- **Fresh reads per request.** `/questions` re-reads the JSON on every call, so dropping in a new
  `questions.json` or running `/ingest` is picked up with no restart.
- **Scrapers are best-effort.** Any single source failing is logged and skipped, never fatal — a
  dead RSS feed or a changed HTML layout can't take the feed down.
