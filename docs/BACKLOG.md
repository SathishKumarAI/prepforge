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

---

## Phase 2 — Personalization & capture (next)

### 2.1 Settings + Profile `P1`
User clicks a gear → panel with **profile** (name, target role, seniority) + **interests /
question preferences** (topics, difficulty, companies) stored in localStorage. Feeds the
generator persona and the Learn session mix.
- **Edge cases:** empty profile (use neutral defaults); interests that match zero questions
  (fall back to all); migrating old localStorage (merge with defaults, never overwrite silently);
  very long free-text (cap length).

### 2.2 Sticky notes `P1`
A draggable, always-available note layer. Create colored sticky, pin to a topic or free-float,
persist in localStorage.
- **Edge cases:** off-screen position after window resize (clamp into viewport); empty note on
  blur (auto-delete); localStorage quota (cap count, warn); z-order on overlap.

### 2.3 Voice notes `P2`
Record a spoken note (Web Speech API for live transcript, or store audio blob in IndexedDB).
Attach to a question or the sticky layer; show transcript + playback.
- **Edge cases:** mic permission denied (graceful message + text fallback); browser without
  SpeechRecognition (record audio only); long recordings (size cap + warn); tab backgrounded
  mid-record; blob cleanup on delete.

---

## Phase 3 — Knowledge graph (the backbone)

### 3.1 Note model + graph store `P1`
Every note (typed, voice-transcribed, from a question, or ingested) becomes a **node**. Nodes link
by shared tags/topics, `[[wikilinks]]`, and question references → a knowledge graph. Store as JSON
(nodes + edges), progress-style.
- **Edge cases:** orphan nodes (still show, unlinked); circular links (fine — it's a graph, not a
  tree); dangling `[[link]]` to a non-existent note (render as "create" stub); dedupe by id;
  deleting a node re-points/removes its edges cleanly.

### 3.2 Graph view `P1`
Interactive force-directed graph (canvas/SVG) — nodes = notes/topics, edges = links. Click a node
to open it; filter by topic; highlight the neighborhood. Obsidian-style.
- **Edge cases:** large graphs (cap rendered nodes / cluster); performance (throttle simulation,
  freeze on idle); a single isolated node (center it); mobile (pan/zoom + fallback list view).

---

## Phase 4 — Capture from the web

### 4.1 URL → clean article `P1`
Paste a YouTube link or blog URL → backend scrapes → produces **clean Markdown + HTML**
(readable, whitespace-normalized, per length/space requirement). Saved into `content/library/`
so it flows through ingestion + the graph.
- **Edge cases:** paywalled / JS-only pages (best-effort, flag partial); YouTube (pull
  title/description/transcript when available, not the player); giant pages (truncate + note);
  duplicate URL (update, don't duplicate); non-article URLs (reject with a clear message).

### 4.2 Obsidian-compatible export `P2`
Notes + ingested articles export as Obsidian-flavored Markdown (YAML frontmatter, `[[wikilinks]]`,
tags) into a vault folder. So the graph doubles as an Obsidian vault.
- **Edge cases:** filename sanitization (illegal chars, collisions); frontmatter escaping; links
  that resolve differently in Obsidian vs app (keep slugs stable); round-trip safety (re-import
  doesn't corrupt).

### 4.3 Browser extension (Chrome/Brave) `P2`
One-click "Send to PrepForge" from any page → POSTs the URL/selection to the backend's capture
endpoint. On next app open, sources auto-refresh and enter the pipeline.
- **Edge cases:** backend offline when clicked (queue locally in the extension, retry); CORS/auth
  (local token); duplicate captures; huge selections; MV3 service-worker lifecycle; only send
  URL+selection, never full-page dumps by default.

---

## Phase 5 — Polish

- [ ] `P2` Richer UI/UX pass — micro-interactions, empty states, keyboard shortcuts everywhere
- [ ] `P2` FSRS scheduler option (20–30% fewer reviews than SM-2)
- [ ] `P2` Export/import all progress + notes as one JSON (backup/restore)
- [ ] `P3` Mock-interview chat (adaptive, graded) over a topic
- [ ] `P3` PWA / offline install
- [ ] `P3` Cost budget guard — cap monthly generation spend, show running total

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
