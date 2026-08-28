# interview_prep (PrepForge) — STATUS

Update this when you STOP working, not when you start.

- **Last touched:** 2026-08-28.
- **Where I stopped:** Everything is merged and **no PR is open**. `main` carries fifteen PRs from
  this session (#18-#36, minus the two that were closed in favour of #35). The board is clear:
  COD-30, 39, 44, 45, 62-72 are Done.
- **The bank more than doubled.** The 1,842 URLs the questions cite were fetched into the library,
  ingested, and re-indexed: **8,330 -> 19,074 questions**, 6,685 -> **17,429** ingested cards, and
  questions carrying reading links went **1,864 -> 3,016**. `GET /health` says 19,074.
- **Next action:** **read some of the new cards.** 1,124 web pages became 10,744 new cards on a
  deterministic ingest, and the sampling done here found real material (scikit-learn, Kafka, system
  design) next to marketing sections from consultancies' pages — "Explain: Consulting services".
  The ingest's `_is_boilerplate` was written for cloned repos, not for the open web. Decide whether
  that noise is worth a filter or worth leaving. Then: a **timed quiz through a real 30s expiry**,
  **Reader's PDF + web-fetch**, and **drill mode** end to end — the three still-unverified pieces of
  the UI rebuild.
- **Blocked on:** nothing. Port 8787 is still held by a dead listener (pid 7768) until a reboot;
  **`PF_API_PORT=8788 ./dev.sh`** goes around it, and everything in this session was verified that
  way.
- **Found, not fixed:** *"What's the weather like today?"* tagged `Behavioral` (COD-34, Backlog),
  and the consultancy-page noise above.

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

**The Reader is deliberately not a Library view.** The four views are collections of material at
different granularities and are the same kind of thing; the Reader is a tool that opens one file.
Mixing them is the IA failure this restructure exists to fix. It keeps `/reader` and is linked from
Library's header and from the Ctrl+K palette.

**Traps:**

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
curl -X POST localhost:8788/ingest?mode=deterministic       # library -> cards
curl -X POST localhost:8788/pipeline/build                  # -> related + reading indexes
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

**If 8787 is taken** — which it is on this machine, by a dead listener — use the override, which
moves the backend and the dev proxy together:

```bash
PF_API_PORT=8788 ./dev.sh
```

Both venv (`backend/.venv`, Windows layout) and `node_modules` were rebuilt on 2026-08-27 and work.

## Environment traps

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
- `GET /questions` → 15 MB. Both Library and the Ctrl+K palette hold it. A slim index endpoint is
  filed in `docs/BACKLOG.md` Phase 5.
- `docs/BACKLOG.md` has a new **Phase 5** section listing exactly what this session left undone and
  what would have to be true to do it. `docs/WORKLOG.md` 2026-08-28 has the decisions and the why.
