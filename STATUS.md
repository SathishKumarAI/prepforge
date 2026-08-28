# interview_prep (PrepForge) — STATUS

Update this when you STOP working, not when you start.

- **Last touched:** 2026-08-28.
- **Where I stopped:** A UI pass shipped in seven PRs — **#18, #19, #20, #21, #22, #23, #24** — all
  squash-merged; `main` is at #24. **Two PRs from the previous session are still open and are not
  mine to merge: #16** (`fix/local-model-picks-loaded-chat-model`) and **#17** (`docs/plane-rules…`).
  Read them before branching, because #16 touches `generate.py`'s local-model probe, which #19 now
  depends on.
- **The one thing still running:** `backend/fetch_reading.py --all` was fetching the 1,842 pages the
  bank cites into `content/library/`. It is resumable — re-run the same command and it picks up
  where it stopped, because every URL's outcome is written to `content/reading_fetch.json` as it
  lands. At the last check: **1,445 queued, ~335 processed, 250 ok / 63 failed / 20 empty / 2
  refused as non-public**, ~75% success.
- **Next action, in order:**
  1. **Finish the fetch** — `cd backend && ./.venv/Scripts/python.exe fetch_reading.py --all`.
  2. **Make them quizzable** — `POST /ingest`, then `POST /pipeline/build`, and record the new card
     count here. Fetched pages are readable but not yet cards.
  3. **Look at the UI.** Nothing shipped today has been *seen*: the `$` markers on billed lens tabs,
     the Ctrl+K palette, and both new themes are verified by build output and measured contrast, not
     by looking. Chrome automation was unavailable all session (devtools profile held by a running
     Chrome; the claude-in-chrome extension not connected).
  4. Then the three verifications that were already outstanding: a **timed quiz through a real 30s
     expiry**, **Reader's PDF + web-fetch** against a real file and URL, and **drill mode** end to end.
- **Blocked on:** nothing. The old blocker — port 8787 held by a listener whose owning process no
  longer exists (pid 7768, gone; Windows keeps the socket until a reboot) — is now routed around:
  **`PF_API_PORT=8788 ./dev.sh`**.
- **Found, not fixed:** the question bank still contains *"What's the weather like today?"* tagged
  `Behavioral` (COD-34, Backlog).

## What shipped 2026-08-28, and the traps inside it

| PR | What | The trap it leaves |
|---|---|---|
| #18 | Two in-app links stopped using routes retired in #6 | none — the redirect tables stay for bookmarks and the extension |
| #19 | **Hover reaches only lenses that are free right now** | the `$` markers mark by *provider*, not by cache: a cached lens is free and still marked |
| #20 | `PF_API_PORT` overrides the backend port | the extension's `host_permissions` is still pinned to 8787 — it cannot follow the override |
| #21 | **Five themes became two**, measured | `npm run contrast` must pass before any colour change lands |
| #22 | `fetch_reading.py` pulls the cited web into the library | fetched pages are git-ignored on purpose; do not commit them |
| #23 | A `τ` in a page title no longer kills a whole run | — |
| #24 | **Ctrl+K** searches all 8,330 questions from anywhere | it indexes titles only; Library's box is still the one that searches answers |

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

## Pulling the cited web into the library (#22)

The bank carries **7,398 citations to 1,842 distinct URLs**. `backend/fetch_reading.py` turns them
into library Markdown, most-cited first:

```bash
cd backend
./.venv/Scripts/python.exe fetch_reading.py --dry-run       # the plan, fetch nothing
./.venv/Scripts/python.exe fetch_reading.py --limit 50      # a bounded pass
./.venv/Scripts/python.exe fetch_reading.py --all           # everything still pending
./.venv/Scripts/python.exe fetch_reading.py --retry-failed  # only the failures
./.venv/Scripts/python.exe test_fetch_reading.py            # 4/4, no network
```

- Outcomes go to `content/reading_fetch.json` **after every fetch**, so a run is resumable and an
  interruption costs nothing. Both files are git-ignored.
- ≥2s between hits on the same host. Non-public addresses (localhost, RFC1918, link-local,
  `169.254.169.254`) are refused — these URLs come from ingested third-party content and are
  untrusted input. Two real cited URLs have already been refused by that guard.
- `leetcode.com` is in `BLOCKED_HOSTS`: it 403s every scraper and is the most-cited host by 2×. For
  a problem page the link *is* the content.
- Roughly **a quarter of URLs fail** — Medium, Stack Overflow and some vendor docs answer a scraper
  with a wall or need JavaScript. That is recorded per URL, not hidden.

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

- `cd frontend && npm run build` → exit 0, `tsc --noEmit` clean, on every PR. Main chunk 747.26 kB →
  **753.62 kB** across the session (+5.19 kB is the palette; +1.17 kB the cost gate). CSS **43.63 kB
  → 41.39 kB** (gzip 9.17 → 8.50) — three palettes lighter.
- `cd frontend && npm run contrast` → **all 24 pairings clear their floor in both themes**, exit 0.
- `backend/test_fetch_reading.py` → **4/4**. Guards the non-public-address refusal
  (localhost, 127.0.0.1, ::1, 192.168/10.x, 169.254.169.254, `file://`, `ftp://`, an unresolvable
  host), the dedupe-and-rank, and "never fetch a success twice".
- `GET /generate/providers` against a **real LM Studio** on this machine:
  `{"local_model":"openai/gpt-oss-20b","free_modes":["star","eli5","first_principles","aws","thinking","faang"]}`.
  This is the first time the local path has been checked against a real LM Studio rather than the
  stub in `test_local_provider.py` — the *endpoint* is now proven; the *rendered meta row* still is
  not (COD-44).
- `PF_API_PORT=8788 npm run dev` + backend on 8788 → `curl localhost:5177/api/health` returns
  `{"status":"ok","questions":8330,...}` through the proxy. The override works end to end.
- `fetch_reading.py` real runs: `--limit 40` → 20 ok; `--limit 30` with `BLOCKED_HOSTS` → 27 ok.

**Not verified, and say so out loud:** anything visual. No screenshot was taken and no page was
driven this session.

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
