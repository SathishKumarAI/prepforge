# PrepForge — Session Log

**Dates:** 2026-07-10 → 2026-07-11
**Outcome:** Built **PrepForge** from an empty directory to a working local-first, multi-feature
interview-prep platform for AI / ML / Data Science / Data Analytics. Public repo:
https://github.com/SathishKumarAI/prepforge

This log captures everything done so the project can be paused and resumed later from the Kanban
(`docs/AUDIT-BACKLOG.md` + `docs/BACKLOG.md`).

---

## What it is

A **local-first** study environment. Curated question bank + spaced-repetition study pipeline +
four AI answer "lenses" per question + a live resource feed + notes/knowledge-graph + read-only
document reader. Everything persists as files (Markdown/JSON); progress lives in the browser. No
login, no database.

**Stack:** React + Vite + TypeScript + Tailwind (Catppuccin Mocha, Fraunces + JetBrains Mono,
framer-motion, Recharts) · Python FastAPI · flat JSON/Markdown storage · localStorage/IndexedDB.

---

## Timeline of what shipped

### v1 — foundation (2026-07-10)
- Scaffolded frontend + backend from scratch (greenfield).
- Curated **100-question bank** (25 each: AI, ML, DS, Analytics; 40/40/20 difficulty) — authored + validated.
- **7 modes**: Browse (filter/search), **Learn** (SM-2 spaced repetition: read → recall → space → master, interleaved), Flashcards, Quiz, Resources, Dashboard (Recharts), Bookmarks.
- Scrapers: RSS + YouTube Data API + best-effort HTML, with Refresh + dedupe.
- Bring-your-own-book Markdown ingestion (`/ingest`).
- Distinctive UI (not AI-slop): editorial serif + mono, grain texture, staggered load, glass cards.
- Docs: architecture, pipeline (learning science), prompts, backlog. Secrets-first `.gitignore`. Public repo.

### v2 — personalization, notes, graph, capture (2026-07-11)
- **Settings** (profile, role, seniority, interests, difficulty) → feeds the answer persona + study mix.
- **Notes**: sticky cards + **voice notes** (Web Speech transcript + IndexedDB audio).
- **Knowledge Graph** (notes by tags + `[[wikilinks]]`) **+ Learning Graph** (question prerequisites) — self-contained force layout, no heavy deps.
- **Grounded "Deep answer"** — Opus 4.8 + web_search, anti-slop practitioner persona, **Perplexity-style metadata** (model · tokens · USD cost · real sources).
- Manual **Add-by-URL** capture (YouTube oEmbed + article scrape).
- **Browser extension** (`extension/`) — local unpacked MV3 clipper, localhost-only, click-scoped, offline queue.
- Credential-flexible generation: `ANTHROPIC_API_KEY` **or** `ant auth login`.

### v3 — answer lenses, files-as-cache, reader (2026-07-11)
- **In-app resource reader** (open-here popup + explicit new-tab) → saves clean Markdown to library.
- **STAR interview-answer variant** + then **ELI5** and **First-principles** → **4 answer lenses** per question, tabs in one box, each with a small italic "how to approach" legend.
- **Answers persisted as files**: `content/answers/<qid>[__star|__eli5|__fp].md` (YAML frontmatter + body). **Cache-first — served with zero API call.**
- **Claude Code authored the full 400-file cache** (100 questions × 4 lenses) so every click works with **no API key**.
- **Substack / RSS** — subscribe to a feed in-app (auto-completes bare Substack URL → `/feed`).
- **Read-only Reader page** — local **PDF** (native viewer) + Markdown/text render + web-URL reader, in one page; "Add to resources" extracts a file into the pipeline.
- **Local PDF/Markdown upload** → `pypdf` extraction → library + feed.
- Due-count badge on the Learn nav.

### v4 — vault corpus + audit (2026-07-12)
- **Obsidian vault ingest** — scans the user's real vault (`config/vault.yaml`) of interview PDFs → **1651 unique questions** (from 21 docs, 1545 with answers). **Never duplicates a question**; the same question found in another doc attaches an extra **source** + a supplementary **alt_answer** (not a dupe); curated-bank dups skipped.
- Each vault question shows a **⛁ vault badge + "From your vault" source pills** → click opens the source PDF as readable markdown (`SourceDoc` modal). `POST /vault/read` is path-traversal-safe.
- **Session-end audit** → `docs/AUDIT-BACKLOG.md`: **155 Kanban tickets** across 20 areas, incl. real bugs (docs port mismatch, dead persona cache key, deterministic quiz "shuffle", unused difficulty/interest settings).
- Total bank now ~**1751 questions** (100 curated + 1651 vault).

### v5 — 7 lenses, shadcn, themes, mobile, graph fix (2026-07-12/13)
- **7 answer lenses + "My content"** per question: grounded · STAR · ELI5 · first-principles · **AWS (Amazon LP)** · **Thinking-process** · **FAANG** · **My content** (paste your own, localStorage). All served cache-first as `.md` (Claude Code authored, no key).
- **shadcn/ui** foundations (Tailwind-v3 manual, tokens on Catppuccin): Button/Dialog/Tabs/Sonner. SettingsPanel→Dialog, DeepAnswer→Tabs, global toasts.
- **Theme system** — Mocha↔Latte (Dark/Light/System) + text-scale S/M/L/XL in Settings, via CSS vars; Latte light-render fixes.
- **Resource→auto-Q&A** generator selector (deterministic / Ollama / Claude).
- **Mobile batch** — safe dialogs, overflow-clip, coarse-pointer targets, icon mobile nav, nav count badges.
- **Graph fix** — was a 1751-node hairball; now topic filter + 240-node cap + auto-scaled iterations + defaults to Learning when no notes.
- a11y: focus rings, reduced-motion, Esc/aria, 404.

---

## Content pipeline (a core principle)

Everything generated or captured is written to a **file** and read back from it:

| Content | Path | Notes |
|---|---|---|
| Deep / STAR / ELI5 / First-principles answers | `backend/content/answers/*.md` | cache-first, no API on hit; 400 files committed |
| Captured / read / uploaded resources | `backend/content/library/*.md` | git-ignored (personal) |
| Ingested cards | via `/ingest` from library | git-ignored |
| Curated question bank | `backend/content/questions.json` | committed |
| Aggregated feed | `backend/data/resources.json` | git-ignored |

Full detail: `docs/CONTENT-PIPELINE.md`.

---

## Backend endpoints

`GET /health` · `GET /questions` · `GET /resources` · `POST /generate/answer` (mode: deep/star/eli5/first_principles, cache-first) · `POST /scrape/refresh` · `POST /ingest` · `GET /library` · `POST /resources/add` · `POST /resources/read` · `POST /resources/upload` · `POST /sources/feed`

## Frontend pages

Learn · Browse · Flashcards · Quiz · Resources · Reader · Dashboard · Bookmarks · Notes · Graph · Settings (modal)

---

## Key decisions & tradeoffs

- **Local-first, no DB** — flat JSON/Markdown; progress in localStorage; audio in IndexedDB. Portable, private, diffable.
- **Cache-as-Markdown** — answers are `.md` files, not a DB blob → Obsidian-friendly, editable, version-controlled, and **free at runtime**.
- **No API key required** — Claude Code pre-authored all answers; the live API path (`generate.py`) is kept as a fallback for when a key exists.
- **Self-contained** where possible — hand-rolled force layout, no d3; native browser PDF viewer instead of a heavy PDF lib on the frontend.
- **Safety** — extension is localhost-only, click-scoped, never auto-captures; secrets-first `.gitignore`; notes/library git-ignored.

## Known limitations

- chrome-devtools screenshots blocked (another Chrome held the shared profile) — never got an automated screenshot.
- HTML scraper is best-effort; JS-only/paywalled pages extract partially.
- Live answer generation needs a key or `ant auth login` (Claude Code consumer subscription can't call the Messages API).
- Backend runs on **8787** (8000/8010 were taken by the user's other apps).
- Graph is static-layout (no live drag/zoom yet); sticky notes are a card grid (not draggable yet).
- **Vault question quality varies** — PDF text extraction is heuristic (heading/`?`-line parsing); some extracted "questions" are noisy fragments. Better parsing / optional LLM cleanup is a backlog item. Dedup + source-tagging are solid.
- After a vault ingest, reload the app (the question cache is in-memory) to see the new questions.

## Docs produced

`ARCHITECTURE.md` · `PIPELINE.md` · `PROMPTS.md` · `CONTENT-PIPELINE.md` · `RESEARCH-obsidian-notes.md` · `BACKLOG.md` · `AUDIT-BACKLOG.md` (100+ Kanban tickets) · this `SESSION-LOG.md`.

## Run it

```bash
cd backend && python3 -m venv .venv && ./.venv/bin/pip install -r requirements.txt
./.venv/bin/uvicorn main:app --port 8787
# new terminal
cd frontend && npm install && npm run dev   # http://localhost:5173
```

## Next (for the Kanban)

Pick from **`docs/AUDIT-BACKLOG.md`** (100+ audited UI/AI tickets) and **`docs/BACKLOG.md`**
(phased roadmap). Standout next builds: resource → auto Q&A with a model selector (deterministic /
local Ollama / Claude), Obsidian export, FSRS scheduler, draggable graph/sticky board, mobile pass.
