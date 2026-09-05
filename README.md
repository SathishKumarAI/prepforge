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
| **+ any question bank you clone** | eight public GitHub repos currently seed 16,639 more cards, see [seeding](#seeding-from-public-question-banks) |
| **703 pre-authored answers** | 7 variants per question, as readable `.md` — see [Answer variants](#answer-variants) |
| **Nothing left unanswered** | The 99 vault questions that arrived with no answer are filled by the local model, labelled as machine-written, and gated by `eval_answers.py` |
| **Six routes** | Today · Study · Library · Notes · Progress · Reader. Every older route still resolves — `/flashcards`, `/quiz`, `/bookmarks`, `/graph` and the rest redirect carrying their intent. |
| **Provenance on every card** | curated bank / which cloned repo / vault — no question is unattributed |
| **More to read** | links the source cites, the authored answer's citations, else borrowed from close relatives (labelled) |
| **Spaced repetition** | SM-2 (`frontend/src/lib/srs.ts`), state in `localStorage` |
| **Leeches** | The cards forgotten three or more times, named on Progress, with one click to drill only those |
| **Due forecast** | The next fortnight as bars on Today, so a 43-card day is visible a week out |
| **Your own cards** | Highlight a passage anywhere the app renders prose, write the question, and it joins the same SM-2 deck |
| **A way out of the browser** | Settings → Your data: one JSON file with every card, note, setting and voice clip, and a merge-or-replace restore |
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

Or `./dev.sh` from the repo root, which starts both. It resolves `.venv/bin` vs `.venv/Scripts` and
`python3` vs `python` itself, so it works from Git Bash on Windows too.

## Stack

| Layer | Tech |
|---|---|
| Frontend | React 18 + Vite 6 + TypeScript, Tailwind (two measured themes — see `docs/DESIGN-THEMES.md`), Radix primitives, framer-motion, react-markdown (+ remark-gfm, lazily), fuse.js |
| Backend | Python + FastAPI + uvicorn; httpx, BeautifulSoup, feedparser, pypdf, youtube-transcript-api |
| Storage | Flat JSON + Markdown on disk. Progress/notes in `localStorage`; the question index and voice-note audio in IndexedDB |
| Optional | Anthropic SDK — only for generating *new* answers; unused when the cache hits |

No charting library. The one chart is hand-drawn SVG — recharts was 397 kB to draw it, 96% of that
route's JavaScript.

No database. The dataset is small and read-mostly, so flat files stay inspectable, diffable and
trivial to back up. The server holds the assembled bank in memory keyed on the content files'
mtimes, so dropping in new content or running an ingest is picked up with no restart — and the same
key is the `ETag`, so every client copy is invalidated by the same act.

**The app opens without the backend.** The question index lives in IndexedDB and is painted before
the network is consulted; progress has always been `localStorage`. Today, Study's setup screen,
Progress and the notes graph all render with the server stopped. Only the screens that need an
*answer* need it running.

### The cards that keep slipping

SM-2 answers a failure by shortening the interval, so a card you never manage to hold comes back
sooner, fails again, and quietly takes over the session — the review load climbs and nothing sticks.
Anki calls these leeches. `lapses` has been counted since the scheduler was written and no screen
read it.

Progress now names them: **Keeps slipping**, worst first, each row linking into the Library rather
than into a session — the useful move on a card you have failed six times is to re-read it, split
it, or decide it is badly written, none of which is another test. Beside the weakest-topic button,
**Drill the N that keep slipping** starts a session over only those (`/study?pool=leeches`, also a
chip on Study's setup screen).

The threshold is `LEECH_LAPSES = 3` in `lib/srs.ts` — Anki's default of eight, halved for a deck
reviewed by hand rather than daily for years. Two failures is a bad week; three is a pattern. The
scheduler does not act on it: nothing is suspended or rescheduled, because the fix is one only you
can make.

### A highlight becomes a card

Reading and recalling used to be two separate acts here: the bank is fixed, so the moment you read
something worth remembering the only thing you could do was bookmark the page it was on.

Select a passage anywhere the app renders prose — an answer, a fetched article, a PDF, a vault
document — and **Make a card**. The passage is the answer; you write the question, which is the half
a highlight cannot give you and the half that makes it recall rather than re-reading. The card joins
the same deck as everything else, under the topic **My cards**: same ratings, same due dates, same
rows on Progress. `Library → Saved → Cards I made` lists them, with delete.

The opt-in is one attribute, `data-cardable`, set once in `Markdown` — every reading surface got the
feature by rendering markdown, and there is one selection watcher for the whole app rather than one
per surface. **`c` opens the composer** while a selection is live, so the whole path works without a
pointer, and deleting a card offers **Undo** — which puts it back under its original id, so the
SM-2 schedule returns with the text.

They are not a side pocket: Today ranks *"Study N cards you wrote"* above generic new material and
counts them in the due total and the forecast, and Ctrl+K searches them alongside the bank
(`/library?view=saved&scope=mine` is the deep link).

Ids are `u-` prefixed and cannot collide with the bank's. That matters more than it looks:
`progress.srs` is keyed by question id alone, so a collision would not be a duplicate card, it would
be your schedule for one question quietly attached to another. Deleting a card leaves its SM-2 row,
so remaking it does not erase what you had done. Cards ride in the backup, which is **version 2**
for exactly that reason: a build that did not know about them would restore a file, report success,
and drop every card you had written.

### Reading mode in the Library

The question list is *setup*: it answers "what should I read", and once that is decided it is sixty
titles competing with the one answer you chose. On a wide screen it now behaves like the app bar and
the filters — **it gets out of the way while you read**:

- Scrolling into an answer puts it away; scrolling back up, or reaching the top, brings it back. Only
  with a question open, and never while you are still browsing — the list scrolls inside itself, so
  page scroll means the *answer* is moving.
- Arriving **at** a question — a shared link, a Ctrl+K pick, the back button — opens with the list
  already away. Clicking a row does not: that means you are still choosing.
- The left edge keeps its hover-peek, and **Keep open** pins the list for the rest of the visit.

With the list away the page carries no 84rem cap — the header, the lens tabs and the related list
use the whole width — while the **running prose caps at 100ch**. Uncapped, a 1,438px answer runs
about 180 characters a line and the eye loses the start of the next one on every return sweep. The
prose is left-aligned rather than centred, so it shares its left edge with the question above it.

Rows are titles now. The difficulty letter went because difficulty is a *filter* — there are chips
above the list — and nobody picks between two questions because one is an "M"; the origin glyph went
because the detail header prints provenance in words. Sixty copies of something that is not a
per-row decision is a column of noise beside the column you are reading.

### Reading a file, and taking something out of it

**Reader → Local file** opens a `.md`, `.markdown`, `.txt` or PDF from disk. A PDF opens as **Text**
by default — the same pypdf extraction the library ingest runs, sent through the app's own Markdown,
which means it is `data-cardable`: select a passage, press `c`, and it becomes a card. **Original**
is one chip away for the real layout, and says plainly that the app cannot read a selection inside
the browser's viewer. The extraction saves **nothing** — `POST /reader/pdf-text` reads the bytes,
returns Markdown and forgets them, because adding a file to your library is a separate, deliberate
step.

**Web page** fetches a URL, strips the navigation and ads, and renders what is left. Markdown goes through
[react-markdown](https://github.com/remarkjs/react-markdown) with
[remark-gfm](https://github.com/remarkjs/remark-gfm) — the same unified/remark stack GitHub's own
renderer is built on — so tables, task lists, strikethrough, footnotes and bare URLs render as
themselves rather than as punctuation. Long documents get a contents list built from their headings.

Both plugins load **only when the document needs them**: `remark-gfm` (39 kB) when the text contains
a table row, a task list, a `~~strike~~`, a footnote or a bare URL, and the syntax highlighter
(53 kB) when it contains a fenced block that names a language. Most of the 16,639 answers in the bank
contain neither, and they should not pay for either.

A wide table scrolls inside its own box. A table that widens the *page* makes every column on screen
unreadable at once, which is the one layout failure worth spending a wrapper element on.

### The fortnight ahead

SM-2 sets due dates one rating at a time, so the load it is building is invisible while you build
it: rate forty cards *easy* today and the calendar looks empty right up to the morning forty come
back at once. **Today → Coming up** draws the next fourteen days as bars, with the heaviest named
underneath ("12 now · heaviest Tue 8 at 43 · 82 in the fortnight").

Anything **overdue lands in the first bar**, with today — it is work waiting now, not work that
happened on some past day. Cards due beyond the horizon are dropped rather than piled onto the last
bar, where "and 4,000 more, some time" would dominate the shape and mean nothing. Same table-with-
text shape as the study-days strip beside it: no chart library, and no cell that is colour only.

### Backup and restore

Local-first means nothing else has a copy. Clearing site data, switching browsers, or a profile that
never syncs takes every due date with it, and the app would not even know it had happened.

**Settings → Your data → Download backup** writes one JSON file: SM-2 state, flashcard buckets,
bookmarks, per-question notes, sticky and voice notes, settings, and the voice-clip audio out of
IndexedDB as `data:` URLs. **Restore from file** reads one back and asks which way:

| | |
|---|---|
| **Merge** | Union. Where both copies hold the same card, **this browser wins** — nothing in an SM-2 card records when it was last reviewed, so "newer" cannot be computed, only guessed. Losing an import is recoverable; overwriting eight weeks of live scheduling is not. |
| **Replace** | This browser's history is thrown away for the file's. |

A file chosen from a picker is untrusted input, so `lib/backup.ts` validates rather than trusts: a
backup from a newer build is refused whole (half a schedule looks like it worked), a card whose `ef`
is the string `"2.5"` is dropped and counted in the summary — `"2.5" * 6` is concatenation, and SM-2
would have scheduled it centuries out in silence — and only `data:` audio survives, so a restored
note can never point at someone else's server. `npm test` is the guard.

### Not every heading is a question

A splitter that cuts a document into cards will sometimes cut a *question* in half and write the tail
as its own card. 133 of these were in the bank — *"and how can it be improved?"*, *"for better
performance?"*, *"pervised machine learning?"* (split inside the word *supervised*) — and **every one
had an answer**, so nothing flagged them. They read as ordinary cards until you look at the first
three words. Another 57 carried the document's outline number: *"10).What are the Control Flow
activities…"*.

`ingest.usable_question()` is the rule, called from **both** ends — `ingest`, so a new card never
carries the defect, and the API's bank assembly, because the cards already on disk are in derived
files that would otherwise need a full re-ingest to fix. Bank: **18,284 → 18,151**.

The signal is *a lowercase opening that is not one of the ways an English question begins*, and the
two things it must NOT do were found by printing the whole list and reading it:

| Must survive | Why |
|---|---|
| *"what is windowing in spark streaming?"* | 163 real questions were simply never capitalised. Lowercase alone would delete a sixth of the vault |
| *"vLLM, SGLang, TensorRT-LLM … how do you choose a serving stack?"* | it opens with a product name, so a first token carrying an inner capital, a digit, a dot or a slash is left alone |
| *"5 Whys analysis?"* | a **bare** number is part of the sentence. Stripping needs a delimiter (`10).`) or dotted numbering (`2.6`), both of which say *outline* |

There is no rule for the other kind of junk this exposed — *"Do you like to read on the go…"* is ad
copy that survived ingest, and *"2 Should you read this book?"* is a heading. They are grammatical
questions; nothing in their shape gives them away, and a wordlist would be the wrong tool for the
same reason `_drop_repeated_bodies` does not use one.

### Answering the questions that arrived without an answer

99 of the questions came out of a vault with a question and no answer. `has_answer` is false
for every one, so Study skips them and the Answer tab is blank — cards nobody can learn from.

LM Studio is already wired in for the prose lenses, so the same provider fills them in a batch, for
nothing:

```bash
cd backend
./.venv/Scripts/python.exe answer_missing.py --dry-run     # what would be written
./.venv/Scripts/python.exe answer_missing.py --limit 10    # try ten
./.venv/Scripts/python.exe answer_missing.py               # the rest
./.venv/Scripts/python.exe eval_answers.py --judge         # before trusting any of it
```

Each answer is cached as `content/answers/<qid>__local.md` — the same Markdown the interactive
lenses write, so nothing new had to learn to read it — and `GET /questions/{id}` serves it for a
question that has none. The run is resumable: an answer already on disk is skipped, so a Ctrl-C
costs only the sentence in flight.

**Three properties this path is built around, each because the failure is silent:**

| | |
|---|---|
| **It never bills.** | `generate.local_only()` raises where `generate()` would fall back to Claude. That fallback is right for one hover and wrong for a run of hundreds, where one flaky moment starts spending money you did not decide to spend |
| **It only fills a gap.** | A question that already has an answer keeps it. A 20B model's unreviewed prose can never shadow a curated or ingested answer |
| **It says what it is.** | Every generated answer ends with *"Written by … running locally. Machine-generated, not reviewed."* — in the body, not in a schema field, so it survives the detail pane, a study card, an export and a grep |

**Nothing generated is trusted until `eval_answers.py` has read it.** A model writing unattended
produces answers that are good, answers that are fine, and a few that are confidently wrong-shaped:
a leaked reasoning block, one sentence repeated eight times, a refusal, a paragraph cut off
mid-word. None of those announce themselves. The checks are deterministic and free — they read the
text, so they are the same every time and cannot themselves hallucinate:

`note_missing` · `too_short` · `too_long` · `reasoning_leak` · `refusal` · `looping` ·
`restates_question` · `truncated` (including an unclosed code fence, which renders the rest of the
page as code)

`--judge` adds a second opinion from the same local model, scoring 1–5 on *answers the question*,
*specific* and *no filler*. It is evidence, not proof, and the measurement says how much to trust it:
over 97 of its own answers it returned **mean 4.80, median 5.00, minimum 4.00** — nothing below 4,
including one answer it described as *"does not directly address the unclear question"* and scored
4.0 anyway. So the floor defaults to **4.5**: at 3.0 the gate would never fire once and would look
like a check while being a decoration. Read the `why` line and the ranking, not the number.

It also **cannot tell you the question was junk**, and some of these are: an ad blurb and a
multiple-choice stub with no choices both got sensible answers and good scores. `--delete-failures`
removes the files that failed so the next run rewrites them.

`backend/test_local_answers.py` guards the part that fails quietly: every check, that filling only
ever fills a gap, and that writing an answer moves the bank's ETag — otherwise the file would sit on
disk while every client kept serving an index that says the question has none.

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

Cache-first: a hit costs no API call. A miss goes to one of two providers, chosen per mode.

**`deep` is the only mode that bills.** Its value is real web citations, so it uses Claude with the
web_search tool and returns tokens, dollar cost and sources alongside the answer. Credentials
resolve in order: `ANTHROPIC_API_KEY` (put it in `backend/.env`) → `ANTHROPIC_AUTH_TOKEN` → an
`ant auth login` profile. Without any of them the endpoint says so, and everything cached still works.

**The other six run on a local model** — pure prose against a system prompt, which a 14–20B model
does well. Start LM Studio's server (Developer tab → **Start Server**, port 1234) and they generate
for free; an auto-routed local answer lands under a further `__local` suffix, and the newest file
for a lens is what opens. Every older file stays and is one click away in the **versions** row.
`LMSTUDIO_URL` / `LMSTUDIO_MODEL` / `LMSTUDIO_TIMEOUT` override the defaults; leaving `LMSTUDIO_MODEL`
blank uses whatever is loaded. With LM Studio off, all six fall back to Claude exactly as before.

**Selecting a lens generates it — hovering counts.** There is no confirm step, on any mode. A tab
you rest on for 400ms in the Library detail pane fires its generation, so with LM Studio off, a slow
sweep across the row can bill several Claude calls. That 400ms is the only brake; it lives in
`peekTab` in `QuestionDetail.tsx`.

`GET /generate/providers` reports which modes are free *right now* and the local model's id — the
quickest way to check the local path is actually wired up. Starting LM Studio mid-session is picked
up within 10s, no backend restart.

`backend/test_local_provider.py` guards it: a stub LM Studio server, asserting a prose lens really
goes local at zero cost, that `deep` never does, and that the two caches stay separate.

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

A fetched web page hides its boilerplate *inside* the article, where no filename gives it away, so
ingest also drops any section body that appears verbatim on **three or more distinct pages**
(`MIN_DUPLICATE_PAGES`). Repetition is the whole signal — no wordlist, and it generalises to any
site. On the current library that is 841 sections: arXiv's "NASA ADS · Google Scholar" from 154
pages, "Subscribe to unlock full access" from 32, a consultancy's pitch from 11.

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

The bank is served in five shapes and they are **not** interchangeable. `GET /questions` is 38.6 MB
and no page in the app requests it — see
[ARCHITECTURE.md](./docs/ARCHITECTURE.md#the-bank-is-fetched-in-five-shapes-and-they-are-not-interchangeable)
for which surface uses which, and why. `index`, `browse` and `batch` must stay declared **above**
`/questions/{qid}`: FastAPI matches in definition order, so below it each literal is read as an id.

```
GET  /health                  counts
GET  /questions               everything — 9.19 MB gzipped. Useful from a script; unused by the app
GET  /questions/index         id, title, topic, difficulty, has_answer, has_quiz — 495 kB gzipped
GET  /questions/browse        a page of index rows; searches ANSWER text server-side
GET  /questions/batch?ids=    whole questions, in the order asked for — a study session's cards
                              &expand=related adds titles to each related id (Saved needs it)
GET  /questions/{id}          one question, `related` expanded with titles
GET  /resources               aggregated feed
POST /scrape/refresh          run RSS + YouTube + HTML scrapers, dedupe, persist
POST /generate/answer         disk-first; mode = deep|star|eli5|first_principles|thinking|faang|aws
                              provider = auto|local|claude|claude_search; force = true writes a NEW
                              version and keeps the old one; every version rides along in `versions`
GET  /generate/providers      which modes are free right now (local model up) + its id
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
  generate.py            the 7 answer modes, cache-first; local model vs Claude routing
  ingest.py              library Markdown → cards + zero-token MCQ synthesis + deep links
  sources.py             clone a repo into the library; summarise it as collections
  capture.py             URL/upload → readable Markdown
  transcript.py          YouTube captions → chunked Markdown
  vault.py               Obsidian vault scan → deduped questions
  pipeline.py            TF-IDF related-questions index + the "more to read" index
  scrapers/              rss.py · html.py · youtube.py
  content/questions.json curated bank (committed)
  content/answers/       700 answer .md files (committed)
  content/library/       YOUR books/notes (git-ignored)
  config/sources.yaml    scrape sources
  config/vault.yaml      vault path + include rules
  data/resources.json    scraper output (git-ignored)
frontend/src/
  pages/       Today · Study · Library · Notes · Dashboard (route /progress) · Reader
  components/  Layout · QuestionCard · DeepAnswer · Markdown · ReadingPane · ArticleReader ·
               SourceDoc · VoiceRecorder · SettingsPanel · library/ · notes/ · study/ ·
               page/ (the three-zone page contract) · ui/ (Radix wrappers)
  hooks/       useQuestionIndex (the one that matters) · useProgress · useNotes ·
               useSettings · useHotkeys · theme hooks
  lib/         api.ts · indexCache.ts (the index in IndexedDB) · routeChunks.ts (lazy routes,
               prefetched on hover) · srs.ts (SM-2) · studyModes.ts (the mode registry) ·
               storage.ts · notes.ts · backup.ts (export/restore, pure) ·
               userCards.ts (cards you wrote, pure) ·
               graph.ts (hand-rolled force layout) ·
               audio.ts (IndexedDB) · rehype-highlight-lite.ts (lazy) · theme.ts ·
               topics.ts · types.ts
extension/     local-only page clipper
docs/          ARCHITECTURE · PIPELINE · PROMPTS · CONTENT-PIPELINE · SCALING · backlogs · WORKLOG
```

`hooks/useQuestions.ts` still exists but its hook has no consumers, and **`questionMap()` is always
empty** — it was the whole bank held in memory by whichever page had last fetched it, and no page
fetches it. Anything reading it renders nothing, silently.

## Docs

Start at [`docs/README.md`](./docs/README.md). [`ARCHITECTURE.md`](./docs/ARCHITECTURE.md) for the
pieces and the request flow, [`PIPELINE.md`](./docs/PIPELINE.md) for the learning science behind the
four study stages and the SM-2 scheduler, [`PROMPTS.md`](./docs/PROMPTS.md) for every prompt used,
[`BACKLOG.md`](./docs/BACKLOG.md) for what's next.

## Known limitations

- HTML scraping is best-effort — JS-only and paywalled pages extract partially.
- Vault PDF extraction is heuristic (heading / `?`-line parsing); some extracted questions are noisy
  fragments. Dedup and source-tagging are solid; better parsing is a backlog item.
- **After an ingest, reload the app.** The client revalidates the question index once per page load,
  not per navigation, so a tab that was already open keeps the copy it started with. The reload is
  correct rather than merely fresh: the ingest changes the content files' mtimes, which changes the
  `ETag`, which is what makes the browser and IndexedDB copies stale.
- The graph uses a static layout (no pan/zoom yet) and the sticky-note board isn't draggable.
- The learning graph draws at most 240 nodes. Filter by topic to see the rest.
- ~~`SavedView` fetches its bookmarks one at a time~~ — fixed: one batched request with
  `expand=related`. 48 bookmarks went from **48 requests / 97 ms** to **1 request / 11 ms**.
- A **scanned** PDF has no text layer, so the Reader's Text view has nothing to show and falls back
  to the browser's viewer, where a selection cannot be read. Every other PDF reads as text.
