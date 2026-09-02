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

- [ ] `P1` **STAR interview-answer variant** — per question, a second answer using the STAR method
  (Situation · Task · Action · Result), shown in the same card as a tab beside the grounded answer.
  First-person interview delivery. Cache as `content/answers/<qid>__star.md`.
- [ ] `P1` **URL → clean article to library** — capture currently adds to the *feed*; also write
  a clean Markdown+HTML file into `content/library/` so captures flow through ingestion + the graph.
  Edge cases: paywalled/JS-only (best-effort, flag partial); YouTube transcript when available;
  giant pages (truncate); duplicate URL (update); non-article URLs (clear reject).
- [ ] `P1` **Author remaining deep answers** — 40 shipped as `.md`; fill the other 60 (batches),
  sources only where canonical.
- [ ] `P2` **Obsidian-compatible export** — notes + answers export as a vault folder (YAML frontmatter,
  `[[wikilinks]]`). Edge cases: filename sanitization/collisions; frontmatter escaping; stable slugs.
- [ ] `P2` **Highlight-to-flashcard** from ingested books/PDFs (idea from RemNote) — tighten read→recall.
- [x] `P2` **Leeches — the cards that keep slipping.** **Shipped 2026-09-02** (COD-113). `lapses`
      has been counted since the scheduler was written and no screen read it, so the cards eating a
      session were invisible. Progress names them worst-first (`LEECH_LAPSES = 3`, Anki's eight
      halved for a hand-reviewed deck), each row linking into the Library — re-reading or rewriting
      a card is the fix, not a seventh test. `/study?pool=leeches` drills only those, from a button
      on Progress or a chip on Study. Nothing is suspended or rescheduled: this is a lens, not a
      scheduler change. Guarded by `scripts/test-srs.mjs`.
- [ ] `P2` **FSRS scheduler** option (20–30% fewer reviews than SM-2; competitors moved to it).
- [ ] `P2` Draggable sticky board (positions persisted, clamp on resize) + graph pan/zoom + mobile list fallback.
- [x] `P2` Export/import all progress + notes as one JSON (backup/restore). **Shipped 2026-09-02**
      (COD-112). Settings → Your data. One file carries SM-2 state, flash buckets, bookmarks,
      per-question notes, sticky/voice notes, settings and the voice audio out of IndexedDB as
      `data:` URLs. Restore asks **merge or replace**; merge is a union where **local wins every
      collision**, because nothing in an SM-2 card records when it was last reviewed, so "newer" can
      only be guessed. Refuses a file from a newer build whole rather than importing half a
      schedule; drops and counts cards whose numeric fields are strings. `lib/backup.ts` is pure —
      no storage, no blobs — so `npm test` (`scripts/test-backup.mjs`, 9 cases) can run it in Node.
- [ ] `P3` Mock-interview chat (adaptive, graded) over a topic.
- [ ] `P3` Runnable SQL/Python cells inside DS/analytics answers (idea from StrataScratch).
- [ ] `P3` PWA / offline install · cost-budget guard (running total, monthly cap).

> **Competitive note (2026-07-11 scan):** no shipping product unites ML/DS interview Q&A + SM-2 +
> Obsidian-style graph + Perplexity-style *cited, cost-metered* AI answers, local-first. Closest partials:
> RemNote (SR+graph), Recall (graph+AI+quizzes, cloud), Firecode (interview+SM-2, coding-only).
> Our moat = the integration + the **cited/cost-metered deep-answer engine**; SR/flashcards/note-graphs
> alone are commoditized (Anki, Obsidian, Logseq). Full report in the chat log.

---

## Phase 5 — after the 2026-08-28 UI pass

Filed because they were deliberately NOT done. All seven shipped the same day; the
lines are kept ticked rather than deleted so the reasoning stays findable. See `docs/WORKLOG.md` 2026-08-28 for why each was left.

- [x] `P1` **See the UI pass in a browser.** Done — `npm run shoot` (#26); the shots are in `frontend/scripts/.shots/`. The lens `$` markers, the Ctrl+K
      palette's keyboard path, and both themes are verified by build output and
      contrast numbers, not by looking. Needs a session where Chrome automation
      works (the devtools profile was held by a running Chrome; the extension was
      not connected).
- [x] `P1` **Turn the fetched pages into cards** — done: 17,429 cards, 19,074 questions, 3,016 with reading. — `POST /ingest` then
      `POST /pipeline/build` after `fetch_reading.py --all` finishes, and record
      the new card count. Until then the pages are readable but not quizzable.
- [x] `P2` **A retry path for JS-only and 403 hosts** — `--render` + the wall gate (#33). (Medium, Stack Overflow,
      some vendor docs). A headless fetch or a reader service — not a bigger
      `User-Agent` lie, which is both rude and fragile.
- [x] `P2` **Make the `$` markers exact.** — `GET /generate/cached/{qid}` (#31). A cached lens costs nothing, and the
      tab row cannot know which are cached, so it marks by provider and is
      conservative. Needs a cache-state endpoint (`qid` -> which lens files exist).
- [x] `P2` **Slim the questions payload.** — `GET /questions/index`, 17.5 MB -> 1.17 MB (#30). `GET /questions` is 15 MB and both
      Library and the palette hold it in memory; an index endpoint (id, title,
      topic, difficulty) would cut the palette's cost to almost nothing.
- [x] `P3` **Code-split the main chunk** — 754 kB -> 344 kB (#32). — 753 kB minified, warned about on every
      build. Library and Study are the obvious split points.
- [x] `P3` **Recent questions in the empty palette** — (#34)., instead of the first six
      destinations. Needs a small recently-viewed list in progress storage.

## Phase 6 — what the 2026-08-28 evening left

- [x] `P1` **Decide on the web-ingest noise.** Decided: filter by **repetition**, not by wordlist.
      `_drop_repeated_bodies` in `backend/ingest.py` drops any section body appearing verbatim on
      3+ distinct pages. Measured on the real library: **841 of 17,828 sections (4.7%)**, from 42
      distinct duplicated bodies, **all 42 read as furniture** — arXiv chrome ×154, paywall prompts,
      a consultancy's pitch ×11. Cards 17,446 → 16,639; questions 19,074 → 18,284; questions with
      reading 3,016 → 3,014. The stub rule (answers under 25 words, 2,176 cards) and the junk-page
      rule (careers/about, 566) were **not** built — neither has a signal this clean, and the stub
      rule alone would have taken ~251 substantial cards with it.
- [ ] `P2` **A plain `--retry-failed` pass.** The User-Agent that made Wikipedia 403 is fixed, so
      those 21 pages and others like them are recoverable without rendering.
- [ ] `P2` **The three still-unverified UI-rebuild pieces**: a timed quiz through a real 30s
      expiry, Reader's PDF + web-fetch, drill mode end to end. Untouched by this session.
- [ ] `P3` **Library still waits on the 17.5 MB bank.** Today and the palette do not any more. The
      detail pane needs full answers, but the LIST does not — it could open on the index and fetch
      one question at a time.

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
