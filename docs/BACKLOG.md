# Feature Backlog

Single source of truth for what's built and what's next. **We work from this list** — pick from
"Next up", move it to "In progress", then "Shipped" with the date.

Legend: `P1` must-have · `P2` should-have · `P3` nice-to-have.

## ✅ Shipped (v1 MVP — 2026-07-10)

- [x] React + Vite + TS frontend, Catppuccin Mocha, framer-motion, distinctive type (Fraunces/JetBrains Mono)
- [x] FastAPI backend, flat-JSON storage, no DB
- [x] Curated 100-question bank (AI / ML / DS / Analytics), 40/40/20 difficulty
- [x] **Learn pipeline** — Read → Recall → SM-2 schedule → Master, interleaved sessions
- [x] Flashcards mode (quick know/again grading)
- [x] Quiz mode (MCQ, self-graded, scored, per-topic)
- [x] Resource feed — RSS + YouTube + HTML scrapers, Refresh button
- [x] Dashboard — streak, mastery bars, quiz-history chart (Recharts)
- [x] Bookmarks + personal notes (localStorage)
- [x] Bring-your-own-book ingestion (`/ingest`, optional Claude enrichment)
- [x] Hardened `.gitignore` (secrets + private notes never leave the machine)
- [x] Docs: architecture, pipeline, prompts, backlog

## 🔜 Next up

- [ ] `P1` Learn page **due-count badge** in the sidebar nav
- [ ] `P1` Ingestion **UI** — upload/list library files + "Ingest now" button (currently API-only)
- [ ] `P1` Export / import progress as a JSON file (backup between browsers)
- [ ] `P2` FSRS scheduler option (20–30% fewer reviews than SM-2 for same retention)
- [ ] `P2` Keyboard shortcuts in Learn (space = reveal, 1–4 = rate)
- [ ] `P2` Per-topic and per-difficulty session filters on Learn
- [ ] `P2` Scraper source **management UI** (edit sources.yaml from the app)
- [ ] `P2` PDF / EPUB ingestion (currently Markdown only)

## 🧭 Later / ideas

- [ ] `P3` Answer-quality self-scoring with Claude (grade my typed answer)
- [ ] `P3` "Explain like I'm interviewing" — Claude mock-interview chat over a topic
- [ ] `P3` Company-specific question packs
- [ ] `P3` Shareable read-only progress snapshot
- [ ] `P3` PWA / offline install
- [ ] `P3` Deploy option (Vercel frontend + backend) when multi-device is wanted

## 🐞 Known limitations

- Screenshot-in-app via chrome-devtools MCP blocked when another Chrome uses the shared profile.
- HTML scraper is best-effort; site layout changes can drop a source (logged, non-fatal).
- Quiz mode only includes cards that have a `quiz` object (curated bank always does; ingested cards
  only when Claude enrichment is enabled).
