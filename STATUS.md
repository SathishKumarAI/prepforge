# interview_prep (PrepForge) — STATUS

Update this when you STOP working, not when you start.

- **Last touched:** 2026-09-02.
- **Where I stopped:** ten commits on a stack of nine branches, tip is `docs/status-session-close`.
  See "Nothing fetches the bank any more" below for the order they have to merge in and why. All
  seven backend test files, `tsc`, `npm run build` and `npm run contrast` are green at the tip.
  `feat/ingest-duplicate-body-filter` is a separate unmerged branch from the previous session,
  untouched by any of this.
- **`GET /questions` now has no caller in the app.** Study, Progress and Notes' graph were the last
  three; each is on a projection or a capped page instead. Measured on the running app: a tour of
  Today → Study → Progress → Notes → Library costs **504 kB transferred in total**, against roughly
  **41.6 MB** before. The route is still served — it is useful from a script — it simply is not
  fetched.
- **The app opens without the network.** The index is in IndexedDB, so a second visit paints from
  disk and then spends **300 B** on a conditional request. With the backend stopped, /progress still
  draws the whole recall table and /study still reads "18,185 in the deck". The only pages that
  genuinely need the server are the ones that need an answer.
- **Next action:** the three still-unverified pieces of the UI rebuild — a **timed quiz through a
  real 30s expiry**, **Reader's PDF + web-fetch**, and **drill mode** end to end. Unchanged for four
  sessions. Then `README.md` is stale (11 pages, retired routes, 8,330 questions — it is 18,284).
- **Blocked on:** nothing, but **the Plane board is stale.** COD-79, 82-84, 86-88 are done in code
  and not marked Done, and everything since has no work item at all. First job next session:
  reconcile the board against `git log`.
- **Found, and fixed here:** **`.gitignore` was swallowing `frontend/src/components/notes/`.** The
  rule `notes/` was meant for user-exported dumps, but an unanchored trailing-slash pattern matches
  at any depth — so `GraphView.tsx` had never been committed and a fresh clone did not build. It is
  `/notes/` now, and the file is in the repo. Check `git status --ignored -- frontend/src backend`
  after touching that file: it should report no source file under either tree.
- **Also found, and fixed here:** **the Related section had disappeared from every saved card.**
  `RelatedLinks` resolved each id through `questionMap()` — the whole bank, held in memory by
  whichever page last fetched it. Once nothing fetched the bank the map was always empty, so the
  list was always empty and the component returned null. No error, no empty state, no request.
- **Found, not fixed:** *"What's the weather like today?"* tagged `Behavioral` (COD-34), and the
  web-ingest noise (COD-78). Also `SavedView` still fetches its bookmarks one `GET /questions/{qid}`
  at a time; `/questions/batch` exists now but does not expand `related`, which that view needs.

## Nothing fetches the bank any more (2026-09-02)

Ten commits, and they are a **stack** — later ones do not apply without earlier ones. Merge bottom
to top:

| # | Branch | What it does | Measured |
|---|---|---|---|
| 1 | `perf/graph-off-the-bank` (2 commits) | `.gitignore` fix, then the learning graph asks `/questions/browse?limit=240` for the 240 nodes it draws | 38,573,654 B → 68,467 B (563x) |
| 2 | `perf/dashboard-off-the-bank` | Progress counts ids, so it reads `/questions/index` | 38,573,654 B → 2,886,874 B (13.4x) |
| 3 | `perf/study-fetches-the-session-not-the-bank` | Study plans from the index (`has_answer` / `has_quiz`), then `GET /questions/batch?ids=…` for the ≤40 cards it will show | 38,573,654 B → 40,042 B when the index is already loaded (963x) |
| 4 | `perf/drop-recharts` | The one area chart is hand-drawn SVG; recharts is gone from `package.json` | Progress chunk 397.88 kB → 6.08 kB (65x) |
| 5 | `perf/api-gzip-etag` | `GZipMiddleware` + an ETag keyed on the same source-file mtimes the caches use | `/questions` 38.6 MB → 9.19 MB; a repeat load is a 304 |
| 6 | `perf/index-survives-a-reload` | The index lives in IndexedDB; paint from disk, then revalidate. Primed on idle from the shell | first visit 505 kB, every one after **300 B**, and paint waits for neither |
| 7 | `fix/related-links-vanished` | Related links read the server's expansion instead of an always-empty map; the hover preview fetches its own question | the section was invisible on every saved card; 4 requests per hover → 1 |
| 8 | `perf/highlighter-on-demand` | lowlight and its grammars load with the first fenced code block | Markdown chunk 181.89 → 128.67 kB; 53.46 kB deferred |
| 9 | `perf/prefetch-routes-on-hover` | A nav link fetches its route chunk on hover and on focus | click-to-render 61 ms → 17 ms |

Brotli was considered and rejected: it needs `brotli-asgi`, and ~15-20% over gzip buys nothing on an
app served from 127.0.0.1. Revisit only if this is ever deployed over a real network.

### Traps this left

- **`/questions/batch` returns the order it was ASKED for.** Recall interleaves its queue across
  topics; a route that returned bank order would undo that with no symptom but a session that feels
  repetitive. `test_batch_returns_whole_questions_in_the_order_asked_for` is the guard.
- **`batch` is the fourth route that must be declared above `/questions/{qid}`**, after `index` and
  `browse`. FastAPI matches in definition order; below it, "batch" is read as a question id.
- **A gradient stop's `currentColor` resolves against the GRADIENT element**, not against whatever
  references it. On the quiz chart the accent class belongs on the `<svg>`; on the inner `<g>` the
  line came out coloured and its fill came out grey.
- **No text inside a `preserveAspectRatio="none"` SVG.** The non-uniform scale stretches glyphs, and
  circles become ellipses whose width depends on the window. The chart's axis labels are HTML, and
  its data marks are vertical rules with `vector-effect: non-scaling-stroke`.
- **`GraphView`'s topic dropdown keeps the last non-empty topic list.** `browse` sends `topics` on
  page one only, so a filtered fetch carries none — the #46 trap, hit here for the first time.
- **The eligibility flags are the index's whole cost story.** `has_answer` / `has_quiz` add 11,668 B
  gzipped across 18,284 rows. `tags` would add 348 kB, which is why they ride on `browse` (capped at
  `limit` rows) and not on the index.
- **The index's field list is an allowlist in two test files now** (`test_questions_index.py`,
  `test_questions_browse.py`). Adding a field is meant to be a decision, not a diff.
- **`cache.has(id)` is never an inflight guard.** #38 learned this on `useQuestions`; the related-
  link preview relearned it, firing four identical requests for one hover because strict mode
  double-invokes the effect and the tooltip's open state settles twice. Share the promise, not the
  result.
- **`questionMap()` is dead and anything reading it is broken.** It was the whole bank held in
  memory by whichever page last fetched it; nothing fetches it. `RelatedLinks` was reading it and
  silently rendered nothing for months' worth of saved cards. `reloadQuestions()` in Collections and
  Feed is the only live user of that module now, and it only invalidates.
- **The index cache must never store a row without its ETag.** It could not be revalidated, so it
  would paint stale forever. `lib/indexCache.ts` treats an untagged row as a miss on both read and
  write.
- **`fetchQuestionIndex` sends `If-None-Match` by hand with `cache: "no-store"`.** Left to itself the
  browser keeps a second 3.5 MB copy and answers the conditional request from it as a synthetic 200,
  so the caller cannot tell "unchanged" from "here it is again".
- **Route chunk specifiers live in one file** (`lib/routeChunks.ts`). Two `import()` expressions for
  one module are one chunk only because the bundler sees the same specifier — writing it twice is
  how you get two copies of Library in the bundle.

## What shipped 2026-08-29, and the traps inside it

| PR | What | The trap it leaves |
|---|---|---|
| #38 | **The app bar stopped pulling 17 MB to draw one badge** | `useQuestions` now has an inflight guard; `if (!cache)` alone never was one |
| #39 | Related questions set one step below the answer | — |
| #40 | **Hide the question list, hover the left edge to peek** | the handle lives in the page gutter; at `left-0` it ate the first 12px of every line |
| #41 | Save / Add note right-aligned | superseded by #49, which moved them again |
| #42 | **Three tab rows became one real tablist** | activation is MANUAL — Collections fetches on mount, so arrowing must not activate |
| #43 | **The day boundary is local, and there is only one** | never write `toISOString().slice(0,10)`; `dayKey()` in `lib/srs.ts` is the only one |
| #44 | **`GET /questions/browse`** — search the answers server-side | declared ABOVE `/questions/{qid}`, same trap as `/index` |
| #49 | Save / Add note are icons, named on hover; focus mode drops the chrome | the tooltip never opens on tap, so each button keeps its own `aria-label` |
| #46 | **Real paging** — the list was only pretending | `topics`/`links` ride on page one ONLY; a later page has neither |
| #47 | **The question stays on screen while you read** | the sticky header must be fully opaque; at 95% the next line ghosts through |
| #48 | A formula on its own line is not an inline chip | uses `:has()`; where unsupported it falls back to the old inline look |

### The bank is fetched in five shapes now, and they are not interchangeable

Updated 2026-09-02. Sizes are what the wire carries with gzip on; the raw figure follows it.

| Endpoint | Carries | Who asks |
|---|---|---|
| `GET /questions` | everything — **9.19 MB** gzipped, 38.6 MB raw | **nobody in the app.** Kept for scripts. Anything reaching for it should reach for one of the four below instead. |
| `GET /questions/index` | id, title, topic, difficulty, `has_answer`, `has_quiz` — **495 kB** gzipped, 3.5 MB raw | Today, the Ctrl+K palette, Settings, Progress, Study's setup screen. Shared module cache, so the second of those is free. |
| `GET /questions/browse` | a **page** of index rows + `origin` + `tags`, plus a snippet when searching; `topics` and `links` on page ONE only | Library, and the Notes learning graph (`limit=240`) |
| `GET /questions/batch?ids=` | whole questions, **in the order asked for** | Study, once per session, for the ≤40 cards it will show |
| `GET /questions/{qid}` | one whole question, `related` expanded with titles | the detail pane |

`/questions` and `/questions/index` carry an `ETag` and `Cache-Control: no-cache`, so a reload
revalidates and gets a 304 rather than the body — measured at **300 B** for a Today reload. The
index is additionally kept in IndexedDB (`lib/indexCache.ts`) and painted before that request is
made, so the 300 B is not on the path to first paint either.

Two caches sit behind them, both keyed on the source files' mtimes so `POST /ingest` and
`POST /pipeline/build` invalidate them by doing their job: `_load_questions()` (was re-reading
~40 MB of JSON per request) and `_searchable()` (was lowercasing every answer per request).
Together those took `browse q=kafka` from **1.1s to 0.017s** in-process.

### The ingest noise, measured

Of **10,763** web-derived cards (62% of the 17,446 ingested):

| Signal | Cards | Share |
|---|---|---|
| Body repeated verbatim on **3+ distinct pages** — site furniture | **736** | 6.8% |
| From 51 careers / about / newsletter pages | 566 | 5.3% |
| Answer under 25 words (a stub) | 2,176 | 20.2% |
| **Answer 60+ words — real material** | **6,324** | **58.8%** |

A duplicate-body + junk-page + stub filter would cut ~24%, with ~251 substantial cards as
collateral. The duplicate-body rule is the one worth building: it needs no wordlist and generalises
to any site. Its top hits are arXiv's "NASA ADS · Google Scholar" (154 pages), the arXivLabs blurb
(154), "View PDF · TeX Source" (152) and "Subscribe to unlock full access" (32).

**The canonical example in the old note was diagnosed wrong and is worth correcting**: "Explain:
Consulting services" is *not* a good card with a leaked title. It is a 15-word pitch stub — "Engage
Chris to create a microservices adoption roadmap" — repeated on 11 microservices.io pages. That is
exactly what the duplicate-body rule catches.

## What shipped 2026-08-28, and the traps inside it

| PR | What | The trap it leaves |
|---|---|---|
| #18 | Two in-app links stopped using routes retired in #6 | none |
| #19 | **Hover reaches only lenses that are free right now** | superseded by #31 — the row now also knows what is cached |
| #20 | `PF_API_PORT` overrides the backend port | the extension's `host_permissions` is pinned to 8787 and cannot follow |
| #21 | **Five themes became two**, measured | `npm run contrast` must pass before any colour change lands |
| #22 | `fetch_reading.py` pulls the cited web into the library | fetched pages are git-ignored on purpose; do not commit them |
| #23 | A `t`-with-a-tail in a page title no longer kills a whole run | — |
| #24 | **Ctrl+K** searches every question from anywhere | it indexes titles only; Library's box still searches answers |
| #25 | The docs for all of the above | — |
| #26 | **`npm run shoot`** — screenshots the running app | it asserts nothing; a screenshot is evidence, not a test |
| #27 | The lens row stopped claiming "LM Studio is off" before it had asked | — |
| #28 | The shot script wrote the wrong localStorage key, so "light" shot dark | the app namespaces every key with `prepforge:` |
| #29 | The palette's close button, and a favicon that 404'd | — |
| #30 | **`GET /questions/index`** — 1.17 MB instead of 17.5 MB | it is declared ABOVE `/questions/{qid}`; below it, "index" is a question id |
| #31 | **A cached lens is free**, and the row knows | the cache check is per question, one small request |
| #32 | Library and Study are lazy; Today reads the index | main chunk 754 kB -> 344 kB |
| #33 | **`--render`** re-tries failures through Chrome, and refuses walls | a browser renders a 403 as happily as an article — that is what `looks_like_a_wall` is for |
| #34 | The empty palette lists what you were just reading | recorded on mount of the detail pane, not on hover |
| #35 | Merged the local-model pick (#16) and kept its measured notes | — |
| #36 | The shot script can press a tab and wait for a generation | use `[role=tab]`; Library's view switch is buttons too |

### The lens cost gate (#19), which replaces the old #14 trap

`GET /generate/providers` says which lenses cost nothing *right now*: with LM Studio serving a model,
the six non-search lenses; with it off, none. `deep` is never free — web search is the point of it
and that runs on Claude.

- **Hover** switches to a free lens and generates it, exactly as before.
- **A billed lens needs a press.** It is not disabled and there is no confirm dialog — #14 removed
  that deliberately and it stays removed.
- `peekTab`'s 400ms is still there and is still hover *intent*, not polish.

So the standing risk of #14 — LM Studio off, a sweep across the tab row billing real Claude calls —
is gone, without putting the confirm step back.

### The themes (#21)

Two: `dark` (default, on `:root` with no attribute) and `light`, plus `system`. Rationale, sources
and the change→file table live in **`docs/DESIGN-THEMES.md`**. Read it before touching a colour.

- **`cd frontend && npm run contrast`** parses the real CSS and fails below the floor. All 24
  pairings pass: `text`/`base` 14.39:1 dark and 14.61:1 light; `on-accent`/`mauve` 8.18:1 and 7.13:1.
- The default still lives on `:root` with **no** `data-theme`; `lib/theme.ts` must agree. Changing
  the default means moving the `:root` block *and* bumping `THEME_MIGRATION` in `lib/settings.ts`
  (now 2, with a `RETIRED_THEMES` map, so anyone on Mocha/Latte/Sepia/Databricks lands on the right
  one of the two).
- The accent variable is still named `--ctp-mauve` and is now a **desaturated blue**. The name is
  historical; renaming it would touch every file in `src/` and buy nothing.

## Running the local model

Start the server without opening the LM Studio window:

```bash
~/.lmstudio/bin/lms.exe server start --port 1234
~/.lmstudio/bin/lms.exe load openai/gpt-oss-20b -y   # ~10s, 11.3 GiB into VRAM
~/.lmstudio/bin/lms.exe ps                            # what is actually loaded
```

**Load `openai/gpt-oss-20b`. Do not leave `qwen/qwen3.5-9b` loaded for this.** Measured on this
machine, same prompt, same server:

| Model | Throughput | A lens answer |
|---|---|---|
| `openai/gpt-oss-20b` (12.11 GB, MoE) | ~96 tok/s | **4-7s** |
| `qwen/qwen3.5-9b` (6.55 GB, reasoning) | ~2.4 tok/s | 3-6 min, or never |

qwen3.5 is a reasoning model that spends its whole `max_tokens` budget thinking — 400 of 400
`completion_tokens` came back as `reasoning_tokens`, with `content` **empty**. It ignores
`chat_template_kwargs: {"enable_thinking": false}`. At 2.4 tok/s it blows the 180s
`LMSTUDIO_TIMEOUT` and `generate.py` falls back to Claude with only a `log.warning` — which is
exactly the sweep-across-the-tab-row billing risk this file warns about, and it fires whether or
not LM Studio is running. **If lenses feel slow, check `lms ps` before suspecting the code.**

`local_model()` prefers the **loaded** chat model, via LM Studio's own `/api/v0/models` (it carries
`type` and `state`; the OpenAI-compatible `/v1/models` carries neither and lists the embedding model
right alongside the LLMs). Any other OpenAI-compatible server without `/api/v0` still works off the
`/v1` listing. `LMSTUDIO_MODEL` in `backend/.env` overrides the probe entirely.

Two shapes to know if you touch `_local_generate`: reasoning arrives in a **separate**
`reasoning_content` / `reasoning` field on newer LM Studio builds, not inline — so
`_strip_reasoning`'s `<think>` regex is a no-op there, and an empty `content` is what you actually
have to handle. And `lms load -c/--context-length/--parallel/--gpu` were **ignored** on this build:
the model loaded with its own saved config (235k context, parallel 4, 15.5 of 16.3 GB VRAM) no
matter what was passed. Change those in LM Studio's UI, not on the command line.

## The UI rebuild (read this before touching the frontend)

Every page is at most **three zones, in order**: orient (one bar, ≤4 facts) → act (the one thing the
page does, holding its single primary button) → review (what has been recorded). There is no zone 4
— that is the rule that stops badges and tips accreting at the bottom of a screen.

**`frontend/src/components/page/README.md` is the contract.** Read it before adding UI. It carries
the change → file table, the accent rule, and the traps.

| Was | Is |
|---|---|
| `/learn`, `/flashcards`, `/quiz` | `/study?mode=recall\|drill\|quiz` |
| `/bookmarks`, `/sources`, `/resources` | `/library?view=saved\|collections\|feed` |
| `/dashboard` | `/progress` |
| `/graph` | `/notes?view=graph` |
| `/` was Browse | `/` is **Today** — a ranked next action, not a search box |
| Three session shells | One, driven by `lib/studyModes.ts` |
| `.glass` (blur + coloured halo) | `.panel` (flat, hairline). `.glass` is a deprecated alias |
| Five themes | **Two** — dark (default) and light, plus system |
| No global search | **Ctrl+K** anywhere, plus a Search control in the app bar |
| 11 nav entries | **5**: Today, Study, Library, Notes, Progress |

**Every retired route redirects** (`App.tsx`, `LEGACY_VIEWS`) and merges rather than replaces the
incoming query string. Nothing 404s; bookmarks and the browser extension's links keep working. As of
#18 the app itself no longer uses those redirects — only outside links do.

**Library's question list can be put away (`pf-library-list-hidden`), and hovering the left edge
peeks it back.** Three things about that are deliberate and should stay:

- **It overlays, it never pushes.** Reflowing the paragraph under the cursor is what makes the
  push version of this unusable. Measured: the answer stays 1237px wide while the peek is open.
- **Hover is an accelerator, not the way in.** The handle is a real `<button>` and the view's chrome
  carries a real `Hide list` / `Show list` toggle, so a keyboard or a touch screen never has to
  hover anything. `canHover` gates the hover path.
- **The handle lives in the page gutter, not at the grid's left edge.** At `left-0` it sat on the
  answer's first glyph and its hover box ate the first 12px of every line, so you could not select
  from the start of a paragraph.

**The Reader is deliberately not a Library view.** The four views are collections of material at
different granularities and are the same kind of thing; the Reader is a tool that opens one file.
Mixing them is the IA failure this restructure exists to fix. It keeps `/reader` and is linked from
Library's header and from the Ctrl+K palette.

**Traps:**

- **There is exactly one day boundary and it is `dayKey()` in `lib/srs.ts`.** Never write
  `new Date().toISOString().slice(0, 10)` — that is a *UTC* day, and this app's calendar is the
  reader's. `srs.ts` used to hold both conventions at once (`today()` UTC, `addDays()` local), which
  east of UTC made `addDays(d, 1)` return `d`. `storage.todayStr()` delegates here; so do Today's
  strip, Progress's streak and `nextAction`.
- **`text-base` sets a font size as well as a colour** — `base` exists in both the colour scale and
  Tailwind's `fontSize`. Use `text-crust` on accent fills.
- **Sticky page chrome parks against `--app-bar-h`**, which `Layout.tsx` measures and publishes.
  Never hardcode that offset — the bar wraps to two lines at narrow widths.
- **The wide-tier split is a container query, not a media query.** The sidebar collapses, so
  viewport width is the wrong signal.
- **`Spine` degrades to a proportional bar above 48 cards.** Check the branch you mean.
- Grade sinks are deliberately **not** unified: `flash` is "do I know this", `srs` moves real due
  dates. Merging them would rewrite the meaning of every card graded before today.
- **One accent.** After #21 the only hues on chrome are the accent and the topic dot (which is data).
  If you reach for `lavender` or `sky` to make something stand out, that is the rule saying no.

## Pulling the cited web into the library (#22, #23, #33)

The bank carried **7,398 citations to 1,842 distinct URLs**. They are now library Markdown, and
through ingest they are cards:

| | |
|---|---|
| URLs walked | 1,515 (leetcode.com skipped by policy — it 403s every scraper) |
| Pages saved | **1,124** (74%), 42 MB, 1,107 files in `content/library/` |
| Failed / empty / refused | 247 / 140 / 4 — recorded per URL in `content/reading_fetch.json` |
| Cards after ingest | 6,685 -> **17,429** |
| Questions | 8,330 -> **19,074**; with reading links 1,864 -> **3,016** |

```bash
cd backend
./.venv/Scripts/python.exe fetch_reading.py --dry-run       # the plan, fetch nothing
./.venv/Scripts/python.exe fetch_reading.py --all           # everything still pending
./.venv/Scripts/python.exe fetch_reading.py --retry-failed  # plain re-try (the UA is better now)
./.venv/Scripts/python.exe fetch_reading.py --render        # re-try through headless Chrome
./.venv/Scripts/python.exe test_fetch_reading.py            # 6/6, no network
curl -X POST localhost:8792/ingest?mode=deterministic       # library -> cards
curl -X POST localhost:8792/pipeline/build                  # -> related + reading indexes
```

Traps worth knowing before the next pass:

- **A browser renders an error page as happily as an article.** The first `--render` pass saved
  "Error 404", "Access Denied" and "Attention Required! | Cloudflare" as study material.
  `looks_like_a_wall()` now rejects those by title and rejects anything under 800 characters. If you
  loosen it, you are choosing to let walls into the card set.
- **Outcomes are written after every fetch**, so a run is resumable and an interruption costs
  nothing. Both `reading_fetch.json` and the pages are git-ignored.
- The User-Agent now names the tool and links the repo — Wikipedia 403s the generic shape, and that
  alone cost 21 cited pages until it was fixed.
- **The ingest's boilerplate filter was written for cloned repos, not the open web.** Sampled cards
  include real material and also things like "Explain: Consulting services", which is a consultancy's
  pitch section. Nobody has decided yet whether that is worth filtering.

## What the Sources tab does

`/library?view=collections` lists every collection in the library (cloned repo or captured pages)
with doc and card counts, opens any document in the reader dialog, and takes a URL in one box:

| You paste | What happens |
|---|---|
| `github.com/owner/repo` (also gitlab/codeberg/bitbucket) | shallow clone → `content/library/` → ingest → cards |
| any other URL | fetch readable text → library → ingest → cards |

Backed by `backend/sources.py` (+ `GET /sources`, `POST /sources/github`). The host is allow-listed
and the clone runs as an argument list, never a shell string. Re-adding an existing repo is a no-op,
so the button is safe to mash.

## How to start it

`./dev.sh` from the repo root starts both (Git Bash on Windows). By hand:

```bash
cd backend && ./.venv/Scripts/python.exe -m uvicorn main:app --port 8787   # Windows
cd frontend && npm run dev
```

**8787, 8788 and 8791 are all dead listeners on this machine** and stay that way until a reboot.
Use the override, which moves the backend and the dev proxy together, and pick a port none of them
has burned:

```bash
PF_API_PORT=8792 ./dev.sh     # 8792 is what the 2026-08-29 session ended on
```

Both venv (`backend/.venv`, Windows layout) and `node_modules` were rebuilt on 2026-08-27 and work.

## Environment traps

**`uvicorn --reload` does NOT pick up backend edits on this machine.** It starts once and never
restarts — `grep -c "Started server process"` in the dev log stays at 1 no matter how many times
`main.py` changes. Every "the endpoint is broken" moment in the 2026-08-29 session was this: the
route existed on disk and its tests passed, while the running server still served the old module.
**Restart the backend after a backend edit, and check the log line count if a change seems to have
no effect.**

**Dead listeners accumulate every time uvicorn is force-killed.** 8787, 8788 and 8791 are all held
by sockets whose pid no longer exists; `taskkill` reports "process not found" while `netstat` still
shows `LISTENING`, and only a reboot frees them. This is not specific to the broad kill — killing
the *one* pid on the port does it too. Stop the backend with Ctrl+C where you can, and expect to
move to a fresh `PF_API_PORT` when you cannot.

**Never `taskkill //F //IM python.exe //T`.** Beyond burning the port, it takes down the Plane MCP
server, which is a Python process — the board then silently stops accepting updates mid-session.

**Backend port is 8787, not 8000**, and it is now overridable with `PF_API_PORT`. The browser
extension's `host_permissions` is still locked to `127.0.0.1:8787`, so the extension cannot follow
an override — that is a real limit of the workaround, not an oversight.

**Vite's port varies — read it off the banner.** It landed on 5177 on 2026-08-28 because 5173–5176
were taken by other apps.

**`dev.sh` works from Git Bash.** It resolves `.venv/Scripts` vs `.venv/bin` at runtime and picks
`python3` or `python`, so the one helper covers both machines.

**`npm install` alone is not enough on npm 11+.** esbuild's postinstall is blocked by default, and
without it Vite cannot start. `package.json` carries `allowScripts: {"esbuild@0.25.12": true}`; if a
future esbuild bump reintroduces the prompt, run `npm approve-scripts esbuild`.

**The vault lives at `C:/Users/PRANAS/Documents/coding/learn/obsidian-vault`** (`config/vault.yaml`).
`POST /vault/ingest` reproduces 1,545 questions from 21 files. PDF text extraction is noisy by
nature — expect `pypdf` "Ignoring wrong pointing object" chatter, which is not an error.

**The library content is git-ignored on purpose**, and that now includes everything
`fetch_reading.py` pulls down, plus `content/answers/*__local.md` (a local model's output is this
machine's cache, not the curated bank). A fresh clone has none of it. The three `git clone` commands
that rebuild the seed collections are in the README under "Seeding from public question banks".

**No API key is needed.** All curated answers are committed Markdown served cache-first, and the
default ingest tier is `deterministic` — zero tokens, no model.

## Verified 2026-08-29 — the shell stopped holding the bank (COD-82)

Measured in a real headless Chrome against the running app, summing
`Network.loadingFinished` `encodedDataLength` over every `/api` request of one page load:

| Page load | Before | After |
|---|---|---|
| `/` (Today) | **161,694,548 B** — `/questions` ×4 at 39,668,619 plus the index | **3,020,072 B** — the index alone |
| `/library?view=questions` | 158,674,476 B — `/questions` ×4 | **39,668,619 B** — one copy |

Two separate causes, both real:

- **`Layout.tsx` and `SettingsPanel.tsx` called `useQuestions()`.** Both mount on *every* route, so
  the whole bank came down on the first paint of every page — including Today, whose entire point
  since #32 was to read the 3 MB index instead. The nav's due badge is now counted over
  `progress.srs` (a due date is a property of a graded card, not of the bank) and needs no fetch at
  all; SettingsPanel takes the index, and only once it is open.
- **`useQuestions` had no inflight guard.** `if (!cache)` is not one: every consumer mounting in the
  same tick sees a null cache and starts its own request. `useQuestionIndex` has always had the
  guard; this one did not, which is where the ×4 came from.

`npm run build` → exit 0, `tsc` clean. Main chunk 344.14 → 344.26 kB.

## Verified 2026-08-28

Everything here is a command's output from this session, not an estimate.

**Seen, in a browser** (`cd frontend && npm run shoot`, PNGs in `scripts/.shots/`, git-ignored):

- Today, Library and the Ctrl+K palette, in **both themes**.
- The palette **driven**: Ctrl+K, type "kafka" -> 12 results from 8,330 with topic and difficulty.
- The palette's **Recently read** section, after opening a question.
- The lens tab row on a web-ingested card: `$` on **Grounded alone**, and
  "Local model · openai/gpt-oss-20b — 6 lenses generate free on hover."

**Measured:**

- `npm run build` -> exit 0, `tsc --noEmit` clean. Main chunk **754.52 kB -> 343.67 kB**
  (gzip 242.21 -> 110.49); the >500 kB warning is gone. CSS **43.63 -> 41.39 kB**.
- `npm run contrast` -> **24/24 pairings clear their floor** in both themes.
- `GET /questions/index` **1,170,238 bytes** vs `GET /questions` **17,489,709**; 0.22s through the
  dev proxy.
- Backend tests: `test_local_provider.py` **6/6**, `test_fetch_reading.py` **6/6**,
  `test_questions_index.py` **3/3**.
- `POST /generate/answer` (mode `eli5`, uncached qid) against a **real LM Studio** ->
  `{"model":"openai/gpt-oss-20b","provider":"lmstudio","input_tokens":155,"output_tokens":241,`
  `"total_tokens":396,"cost_usd":0.0}` with a real answer body. **This is COD-44, closed.**
- `GET /generate/cached/q001` -> all seven lenses, which is why q001's row shows no `$` at all.
- `PF_API_PORT=8788 npm run dev` -> `curl localhost:5173/api/health` returns the backend on 8788.
- `POST /ingest` -> 17,429 cards; `POST /pipeline/build` ->
  `{"questions":19074,"with_related":19045,"with_reading":3016}`.

**Not verified:** the timed quiz's 30s expiry, Reader's PDF and web-fetch, drill mode end to end.
Same three as before this session — nothing here touched them.

## Open threads

- Ingest quality: glossary letter-headings are gone (COD-18, `MIN_HEADING_ALNUM` in
  `backend/ingest.py`), repo boilerplate is filtered (`_is_boilerplate`), fence-only and navigation
  sections are skipped. Nothing known-bad is left in the card set.
- The "awesome list" repos are link collections, not prose — few cards, most of the "go deeper"
  links. That is the right trade, not a bug, and #22 is what finally cashes those links in.
- Only 1,864 of 8,330 questions have reading links, and that is honest. Lowering `BORROW_SCORE`
  (`pipeline.py`) would raise coverage and lower precision — at 0.12 it offered "ACID transactions"
  as further reading on "AI vs ML vs deep learning".
- `GET /questions` → 39.7 MB now the bank is 19,074. **Only Library, Study, Progress and Notes'
  graph hold it, and only one copy** — the app shell was a fifth holder until COD-82, and
  `useQuestions` had no inflight guard, so four consumers mounting in one tick fetched four copies.
  Both fixed and measured; see "Verified 2026-08-29".
- `docs/BACKLOG.md` has a new **Phase 5** section listing exactly what this session left undone and
  what would have to be true to do it. `docs/WORKLOG.md` 2026-08-28 has the decisions and the why.
