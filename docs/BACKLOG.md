# PrepForge — Feature Backlog

Single source of truth. **We build from this list, phase by phase.** Pick an item →
move it `→ In progress` → `→ Shipped (date)`. Every code item carries an **edge cases**
note so implementation is accurate and bug-free by design.

Legend: `P1` must-have · `P2` should-have · `P3` later. Keep it **compact** — this is a
personal prep tool, not a bloated product.

---

## ✅ Shipped — v1 (2026-07-10 → 07-11)

- [x] React+Vite+TS frontend, Catppuccin Mocha, Fraunces/JetBrains Mono, framer-motion
- [x] FastAPI backend, flat-JSON storage, no DB; progress in localStorage
- [x] Curated 100-question bank (AI/ML/DS/Analytics), 40/40/20 difficulty
- [x] **Learn pipeline** — SM-2 spaced repetition: Read → Recall → Space → Master, interleaved
- [x] Flashcards · Quiz · Resource feed · Dashboard · Bookmarks/notes
- [x] Scrapers: RSS + YouTube API + best-effort HTML, Refresh button, dedupe
- [x] Bring-your-own-book markdown ingestion (`/ingest`, optional Claude enrichment)
- [x] **Grounded "Deep answer"** — Opus 4.8 + web_search, anti-slop practitioner persona
- [x] **Per-answer metadata (Perplexity-style)** — model, tokens in/out, USD cost, real sources
- [x] Secrets-first `.gitignore`, public GitHub repo, docs (architecture/pipeline/prompts)

## ✅ Shipped — v2 (2026-07-11)

- [x] **Settings + profile** — role, seniority, interests, difficulty → feeds generator persona + study mix
- [x] **Sticky notes + voice notes** — Web Speech transcript + IndexedDB audio, editable colored cards
- [x] **Knowledge graph** (notes: tags + `[[wikilinks]]`) **+ learning graph** (question prerequisites), self-contained force layout
- [x] **Manual "Add by URL"** capture (YouTube oEmbed + article scrape) → `POST /resources/add`
- [x] **Browser extension** — local unpacked MV3 clipper (localhost-only, click-scoped, offline queue)
- [x] **Deep-answer cache as Markdown** — `content/answers/*.md`, portable/Obsidian-friendly; served with **no API call**; live gen falls back on miss and persists
- [x] Credential-flexible generation: `ANTHROPIC_API_KEY` **or** `ant auth login`

---

## Phase 4 — Remaining (next up)

- [ ] `P1` **URL → clean article to library** — capture currently adds to the *feed*; also write
  a clean Markdown+HTML file into `content/library/` so captures flow through ingestion + the graph.
  Edge cases: paywalled/JS-only (best-effort, flag partial); YouTube transcript when available;
  giant pages (truncate); duplicate URL (update); non-article URLs (clear reject).
- [ ] `P1` **Author remaining deep answers** — 40 shipped as `.md`; fill the other 60 (batches),
  sources only where canonical.
- [ ] `P2` **Obsidian-compatible export** — notes + answers export as a vault folder (YAML frontmatter,
  `[[wikilinks]]`). Edge cases: filename sanitization/collisions; frontmatter escaping; stable slugs.
- [ ] `P2` **Highlight-to-flashcard** from ingested books/PDFs (idea from RemNote) — tighten read→recall.
- [ ] `P2` **FSRS scheduler** option (20–30% fewer reviews than SM-2; competitors moved to it).
- [ ] `P2` Draggable sticky board (positions persisted, clamp on resize) + graph pan/zoom + mobile list fallback.
- [ ] `P2` Export/import all progress + notes as one JSON (backup/restore).
- [ ] `P3` Mock-interview chat (adaptive, graded) over a topic.
- [ ] `P3` Runnable SQL/Python cells inside DS/analytics answers (idea from StrataScratch).
- [ ] `P3` PWA / offline install · cost-budget guard (running total, monthly cap).

> **Competitive note (2026-07-11 scan):** no shipping product unites ML/DS interview Q&A + SM-2 +
> Obsidian-style graph + Perplexity-style *cited, cost-metered* AI answers, local-first. Closest partials:
> RemNote (SR+graph), Recall (graph+AI+quizzes, cloud), Firecode (interview+SM-2, coding-only).
> Our moat = the integration + the **cited/cost-metered deep-answer engine**; SR/flashcards/note-graphs
> alone are commoditized (Anki, Obsidian, Logseq). Full report in the chat log.

---

## Cross-cutting engineering rules (apply to every item)

- **Accuracy first, no bugs:** each feature ships with its edge-case list handled, not deferred.
- **Compact:** reuse existing components/stores; don't add a framework where a function will do.
- **Local-first & private:** notes/voice/graph live in the browser or git-ignored local files;
  nothing leaves the machine unless the user explicitly exports or generates.
- **Graceful degradation:** every online feature (generate, scrape, voice) has an offline/no-key
  fallback that never hard-crashes the UI.
- **Typecheck + backend-import must pass before anything is called "done."**

---

## Open question for you

The last message trailed off on **graph-based learning** — confirm the intent: a knowledge graph
of *your notes* (Obsidian-style, Phase 3 above), or a *learning graph* that sequences questions by
prerequisite (e.g. "learn gradient descent before Adam")? They're different builds — tell me which,
or both.
