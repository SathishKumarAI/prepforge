# interview_prep (PrepForge) — STATUS

Update this when you STOP working, not when you start.

- **Last touched:** 2026-08-28.
- **Where I stopped:** Everything is merged. `main` is at **#14**, no open PRs, no unpushed
  branches. The UI rebuild onto the three-zone page contract landed across #6→#12; the Library
  master-detail pane and its lens tab row are done. Content unchanged: **8,330 questions**, 6,353
  synthetic quizzes, 1,864 with reading links, from the eight repos in `backend/content/library/`.
- **The newest thing, and the one trap in it (#14, COD-33):** six of the seven generated lenses now
  run on a **local model via LM Studio** when its server is up, for free; `deep` stays on Claude
  because it needs real web citations. **There is no confirm step on any lens** — resting on a tab
  for 400ms generates it, `deep` included. That is deliberate, but it means that with LM Studio
  **off**, a sweep across the tab row bills real Claude calls. `peekTab`'s 400ms in
  `QuestionDetail.tsx` is the only brake; do not shorten it thinking it is hover polish.
- **Next action:** **Verify the local path against a real LM Studio** — it has never run against
  one. Start it (Developer tab → Start Server, port 1234), load a model (`openai/gpt-oss-20b` fits
  16GB), reload Library, hover a lens: the meta row should read the local model id and `$0.0000`.
  Until that is done the local generation is proven only against the stub server in
  `backend/test_local_provider.py`. Then the three things still unverified from the UI rebuild:
  a **timed quiz through a real 30s expiry**, **Reader's PDF + web-fetch** against a real file and
  URL, and **drill mode** end to end.
- **Blocked on:** Nothing. Plane is back up; COD-33 is Done, COD-34 is in Backlog.
- **Found, not fixed:** the question bank contains *"What's the weather like today?"* tagged
  `Behavioral`. Ingest noise. Filed as **COD-34**.

## The UI rebuild (read this before touching the frontend)

Every page is now at most **three zones, in order**: orient (one bar, ≤4 facts) → act (the one
thing the page does, holding its single primary button) → review (what has been recorded). There
is no zone 4 — that is the rule that stops badges and tips accreting at the bottom of a screen.

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
| Catppuccin Mocha default | **Databricks dark** default, on `:root` with no attribute |
| Gradient `from-mauve to-blue` buttons | Solid accent fill, one primary per page |
| 11 nav entries | **5**: Today, Study, Library, Notes, Progress |

**Every retired route redirects** (`App.tsx`, `LEGACY_VIEWS`) and merges rather
than replaces the incoming query string. Nothing 404s; bookmarks and the browser
extension's links keep working.

**The Reader is deliberately not a Library view.** The four views are collections
of material at different granularities and are the same kind of thing; the Reader
is a tool that opens one file. Mixing them is the IA failure this restructure
exists to fix. It keeps `/reader` and is linked from Library's header.

**Traps:**

- **`text-base` sets a font size as well as a colour** — `base` exists in both the colour scale and
  Tailwind's `fontSize`. Use `text-crust` on accent fills.
- **The default theme lives on `:root` with no `data-theme`.** `lib/theme.ts` must agree: it
  removes the attribute for `databricks-dark` and sets it for everything else. Changing the default
  means moving the `:root` block *and* bumping `THEME_MIGRATION` in `lib/settings.ts`.
- **Sticky page chrome parks against `--app-bar-h`**, which `Layout.tsx` measures and publishes.
  Never hardcode that offset — the bar wraps to two lines at narrow widths.
- **The wide-tier split is a container query, not a media query.** The sidebar collapses, so
  viewport width is the wrong signal.
- **`Spine` degrades to a proportional bar above 48 cards.** Check the branch you mean.
- Grade sinks are deliberately **not** unified: `flash` is "do I know this", `srs` moves real due
  dates. Merging them would rewrite the meaning of every card graded before today.

## What the Sources tab does

`/sources` lists every collection in the library (cloned repo or captured pages) with doc and card
counts, opens any document in the reader dialog, and takes a URL in one box:

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

Both venv (`backend/.venv`, Windows layout) and `node_modules` were rebuilt on 2026-08-27 and work.

## Environment traps

**Backend port is 8787, not 8000.** `frontend/vite.config.ts` proxies `/api` there; the browser
extension's `host_permissions` is locked to `127.0.0.1:8787`. `dev.sh` said 8000 until 2026-08-27 —
fixed, as was Browse's backend-unreachable message, which still told you to start uvicorn on 8000.
Anything else quoting 8000 is stale.

**Vite's port varies — read it off the banner.** It landed on **5180** on 2026-08-27 because
5173–5179 were taken by other apps, and on **5173** later the same day when they were free. Do not
hardcode either.

**`dev.sh` works from Git Bash now.** It resolves `.venv/Scripts` vs `.venv/bin` at runtime and
picks `python3` or `python`, so the one helper covers both machines.

**`npm install` alone is not enough on npm 11+.** esbuild's postinstall is blocked by default, and
without it Vite cannot start. `package.json` now carries `allowScripts: {"esbuild@0.25.12": true}`;
if a future esbuild bump reintroduces the prompt, run `npm approve-scripts esbuild`.

**The vault lives at `C:/Users/PRANAS/Documents/coding/learn/obsidian-vault`** (`config/vault.yaml`),
not the old Linux path. `POST /vault/ingest` reproduces 1,545 questions from 21 files. PDF text
extraction is noisy by nature — expect `pypdf` "Ignoring wrong pointing object" chatter, which is
not an error.

**The library content is git-ignored on purpose.** A fresh clone of this repo has none of it. The
three `git clone` commands that rebuild it are in the README under "Seeding from public question
banks" — that section is the only record, so keep it correct.

**No API key is needed.** All 700 curated answers are committed Markdown served cache-first, and the
default ingest tier is `deterministic` — zero tokens, no model.

## Verified 2026-08-27

- `backend/test_ingest_split.py` → 9/9 pass (guards the `<details>` strip, TOC/diagram skip,
  heading numbering, doc-title fallback, repo boilerplate, deep-link extraction, letter headings).
- Re-ingest after the letter-heading fix: 853 files → **6,685 cards** (was 6,732 — the 47 dropped
  are the 46 glossary letters plus one stray `]`), `build_related` → 8,330 questions,
  8,301 with related, 1,864 with reading. `GET /questions` carries no bare-letter card.
- `cd frontend && npm run build` → `✓ built in 2.71s`, exit 0 (`tsc --noEmit` clean). Warns the
  main chunk is 680 kB — pre-existing, not from this work.
- `GET /health` → `{"status":"ok","questions":8377,...}`; `GET /sources` → 9 collections.
- `POST /sources/github` end-to-end for all five repos added today; re-posting one returns
  `existing: true` and re-clones nothing. A non-allow-listed host returns `bad_url`.
- Browser: Sources tab shows 9 collections / 853 docs / 6,760 cards, a document opens in the reader
  dialog, Browse shows "Go deeper — 1836 links", filtering to "Blind 75" narrows it to 126, and an
  expanded card shows the full answer plus "Read the full document". Console has only the two
  pre-existing React Router v7 future-flag warnings — no errors.
- Quiz source picker: 9 collection chips + a filter box + 8 rows. Typing "kafka" narrows 636 docs
  to 16 across two collections; picking one shows the selection chip and the footer reads
  "13 questions match · drawing 10".
- Provenance + reading: `GET /questions` returns `origin` on every question; a curated card renders
  "✦ PrepForge bank" and its authored XGBoost citation under "More to read".
  `backend/test_reading_index.py` → 5/5.
- `GET /questions` → 15 MB. Growing; if Browse ever feels slow, that payload is the first suspect.

## Open threads

- Ingest quality: glossary letter-headings are gone (COD-18, `MIN_HEADING_ALNUM` in
  `backend/ingest.py`), repo boilerplate is filtered (`_is_boilerplate`), fence-only and
  navigation sections are skipped. Nothing known-bad is left in the card set.
- The "awesome list" repos (`awesome-system-design-resources`, `system-design-academy`,
  `system-design-resources`) are link collections, not prose — they yield few cards (19/5/64) but
  most of the "go deeper" links. That is the right trade, not a bug.
- Only 1,864 of 8,330 questions have reading links, and that is honest: the rest have neither their
  own links, an authored citation, nor a close-enough neighbour to borrow from. Lowering
  `BORROW_SCORE` (`pipeline.py`) would raise coverage and lower precision — it was 0.12 once and
  offered "ACID transactions" as further reading on "AI vs ML vs deep learning".
- `docs/BACKLOG.md` has 11 unchecked items; `docs/QUIZ-BACKLOG.md` has none.
