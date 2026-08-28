# PrepForge

Local-first interview-prep platform for **AI · Machine Learning · Data Science · Data Analytics**.

Read a concept, recall it from memory, let a spaced-repetition scheduler decide when you see it
again. Bring your own material — a book, an Obsidian vault, a YouTube video, any article URL — and
the same pipeline builds cards and quizzes on top of it.

Everything runs on your machine. No account, no server-side user data, **no API key needed** to use
it: every answer ships pre-authored as Markdown and is served from disk.

## What's in the box

| | |
|---|---|
| **100 curated questions** | `backend/content/questions.json`, tagged by topic / difficulty |
| **+ any question bank you clone** | e.g. three public GitHub repos → ~5,400 more cards, see [seeding](#seeding-from-public-question-banks) |
| **700 pre-authored answers** | 7 variants per question, as readable `.md` — see [Answer variants](#answer-variants) |
| **11 pages** | Learn · Browse · Flashcards · Quiz · **Sources** · Resources · Reader · Notes · Graph · Dashboard · Bookmarks |
| **Go deeper links** | every outbound link a source cites, on the card and aggregated per topic/search |
| **Spaced repetition** | SM-2 (`frontend/src/lib/srs.ts`), state in `localStorage` |
| **Quiz engine** | 4 zero-token question kinds, weakness-aware selection, timed mode, resume |
| **Resource feed** | RSS + YouTube + HTML scrapers, plus a one-click browser clipper |
| **Your own content** | Obsidian vault ingest, Markdown/PDF library ingest, URL → quiz |

## Run

**Backend is on port 8787**, not 8000 — 8000/8010 were taken on the author's machine and the Vite
proxy (`frontend/vite.config.ts`) targets 8787.

```bash
# 1. backend  (http://127.0.0.1:8787)
cd backend
python3 -m venv .venv && ./.venv/bin/pip install -r requirements.txt
./.venv/bin/uvicorn main:app --reload --port 8787

# 2. frontend (http://localhost:5173)  — new terminal
cd frontend
npm install
npm run dev
```

Or `./dev.sh` from the repo root, which starts both. `dev.sh` is bash and assumes a POSIX venv
layout (`.venv/bin/`); on Windows use the two commands above with `.venv\Scripts\`.

## Stack

| Layer | Tech |
|---|---|
| Frontend | React 18 + Vite 6 + TypeScript, Tailwind (Catppuccin Mocha), Radix primitives, framer-motion, Recharts, react-markdown, fuse.js |
| Backend | Python + FastAPI + uvicorn; httpx, BeautifulSoup, feedparser, pypdf, youtube-transcript-api |
| Storage | Flat JSON + Markdown on disk. Progress/notes in `localStorage`; voice-note audio in IndexedDB |
| Optional | Anthropic SDK — only for generating *new* answers; unused when the cache hits |

No database. The dataset is small and read-mostly, so flat files stay inspectable, diffable and
trivial to back up. `/questions` re-reads from disk every call, so dropping in new content or
running an ingest needs no restart.

## Answer variants

`generate.py` defines 7 modes. Each is cached as its own Markdown file (YAML frontmatter + body) in
`backend/content/answers/`, so it opens in Obsidian or any editor and costs nothing to serve.

| Mode | File suffix | What it gives you |
|---|---|---|
| `deep` | *(none)* — `q001.md` | Grounded technical answer, web-cited |
| `star` | `__star.md` | Spoken STAR-method answer you could deliver out loud |
| `eli5` | `__eli5.md` | Explain-it-simply version |
| `first_principles` | `__fp.md` | Derived from fundamentals |
| `thinking` | `__think.md` | The metacognition — how to *reach* the answer |
| `faang` | `__faang.md` | Framed for a big-tech interview loop |
| `aws` | `__aws.md` | Framed against AWS leadership principles |

Cache-first: a hit costs no API call. A miss bills the Anthropic API and returns tokens, dollar cost
and real web sources alongside the answer. Credentials resolve in order: `ANTHROPIC_API_KEY` (put it
in `backend/.env`) → `ANTHROPIC_AUTH_TOKEN` → an `ant auth login` profile. Without any of them the
endpoint returns a message saying so, and everything cached still works.

## Bring your own content

| Source | How |
|---|---|
| **Any URL** | Resources page → paste, or click **＋ quiz** on a card. Fetches readable text → `content/library/` → ingests → quiz scoped to that one resource. |
| **YouTube video** | Same, via `youtube-transcript-api` — captions → chunked Markdown → cards. A video with no captions returns a clear error instead of failing the request. |
| **PDF / .md / .txt** | Resources page upload → text extracted → library → ingest. |
| **Obsidian vault** | Point `backend/config/vault.yaml` at your vault. `POST /vault/ingest` scans only folders/filenames matching the interview patterns, dedupes, and tags each question with its source doc. |
| **RSS / Substack** | Add through the UI (writes to `config/sources.yaml`), then **Refresh**. Paywalled Substack posts only expose their free preview text. |

### Seeding from public question banks

Open the **Sources** tab, paste a GitHub URL, hit **Add source**. The repo is shallow-cloned into
`content/library/` and ingested into cards — no API key, no restart. Any other URL is fetched as an
article instead. Adding a repo twice is a no-op, so it is safe to retry.

`content/library/` is git-ignored, so none of that material is in this repo. The banks currently
seeded (853 documents → ~6,700 cards) can be restored from the Sources tab or the command line:

```bash
cd backend/content/library
for r in ombharatiya/AI-Engineer-Interview-Questions ombharatiya/ai-system-design-guide \
         ombharatiya/FAANG-Coding-Interview-Questions ByteByteGoHq/system-design-101 \
         Anshul619/HLD-System-Designs ashishps1/awesome-system-design-resources \
         systemdesign42/system-design-academy InterviewReady/system-design-resources; do
  git clone --depth 1 "https://github.com/$r.git"
done
cd ../.. && ./.venv/bin/python -c "import ingest,pipeline; print(ingest.ingest()); print(pipeline.build_related())"
```

Any repo of Markdown works. `ingest` earns its keep on the messy parts: it strips the
`<details><summary>Answer</summary>` wrapper these banks use, skips tables-of-contents,
diagram-only sections and repo boilerplate (LICENSE, CONTRIBUTING, `.github/`), gives context-free
headings ("Problem statement") their document's title, and pulls each section's outbound links out
as **Go deeper** reading.

Ingest has three tiers: `deterministic` (default, zero-token), `ollama` (a local model on
`localhost:11434`, `OLLAMA_MODEL` to pick it), `claude`. The default
path uses no model at all — MCQs are synthesised from card structure, and distractors come from a
local TF-IDF index that picks the *most similar* other cards, so wrong options are near-misses
rather than random.

YouTube feed scraping (not transcripts) wants a free Data API v3 key: copy `backend/.env.example`
to `backend/.env`.

## Browser clipper

`extension/` — an unpacked Chrome/Brave extension that sends the current page and any selected text
to your local backend. Not published to any store. Locked to `127.0.0.1:8787` by `host_permissions`,
click-scoped (no content script, no background tracking), and queues clips locally if the backend is
down. Install instructions: [`extension/README.md`](./extension/README.md).

## API

```
GET  /health                  counts
GET  /questions               curated + ingested + vault, with the related-question index attached
GET  /questions/{id}
GET  /resources               aggregated feed
POST /scrape/refresh          run RSS + YouTube + HTML scrapers, dedupe, persist
POST /generate/answer         cache-first; mode = deep|star|eli5|first_principles|thinking|faang|aws
POST /resources/add           one URL → feed (used by the extension)
POST /resources/read          URL → readable Markdown → library
POST /resources/upload        PDF/.md/.txt → library
POST /sources/feed            append an RSS feed to sources.yaml
GET  /sources                 library as collections (repo/captured) with doc + card counts
POST /sources/github          clone a public Markdown repo → library → cards
GET  /library                 list ingestable files
POST /library/read            read one library doc
POST /ingest?mode=            library Markdown → cards
POST /pipeline/build          rebuild the TF-IDF related-questions index
POST /quiz/from_video         YouTube URL → quizzable cards scoped to it
POST /quiz/from_resource      any URL → quizzable cards scoped to it
POST /vault/ingest            Obsidian vault → source-tagged questions
POST /vault/read              read one vault doc
```

## Layout

```
backend/
  main.py                FastAPI app + routes
  generate.py            the 7 answer modes, cache-first
  ingest.py              library Markdown → cards + zero-token MCQ synthesis + deep links
  sources.py             clone a repo into the library; summarise it as collections
  capture.py             URL/upload → readable Markdown
  transcript.py          YouTube captions → chunked Markdown
  vault.py               Obsidian vault scan → deduped questions
  pipeline.py            TF-IDF related-questions index
  scrapers/              rss.py · html.py · youtube.py
  content/questions.json curated bank (committed)
  content/answers/       700 answer .md files (committed)
  content/library/       YOUR books/notes (git-ignored)
  config/sources.yaml    scrape sources
  config/vault.yaml      vault path + include rules
  data/resources.json    scraper output (git-ignored)
frontend/src/
  pages/       the 11 pages (Sources.tsx = the library + "add a source" box)
  components/  Layout · QuestionCard · DeepAnswer · ReadingPane · ArticleReader · SourceDoc ·
               VoiceRecorder · SettingsPanel · ui/ (Radix wrappers)
  hooks/       useQuestions · useProgress · useNotes · useSettings · useHotkeys · theme hooks
  lib/         srs.ts (SM-2) · storage.ts · notes.ts · graph.ts (hand-rolled force layout) ·
               audio.ts (IndexedDB) · api.ts · theme.ts · topics.ts · types.ts
extension/     local-only page clipper
docs/          ARCHITECTURE · PIPELINE · PROMPTS · CONTENT-PIPELINE · backlogs · WORKLOG
```

## Docs

Start at [`docs/README.md`](./docs/README.md). [`ARCHITECTURE.md`](./docs/ARCHITECTURE.md) for the
pieces and the request flow, [`PIPELINE.md`](./docs/PIPELINE.md) for the learning science behind the
four study stages and the SM-2 scheduler, [`PROMPTS.md`](./docs/PROMPTS.md) for every prompt used,
[`BACKLOG.md`](./docs/BACKLOG.md) for what's next.

## Known limitations

- HTML scraping is best-effort — JS-only and paywalled pages extract partially.
- Vault PDF extraction is heuristic (heading / `?`-line parsing); some extracted questions are noisy
  fragments. Dedup and source-tagging are solid; better parsing is a backlog item.
- After a vault ingest, reload the app — the question cache is in-memory on the client.
- The graph uses a static layout (no pan/zoom yet) and the sticky-note board isn't draggable.
