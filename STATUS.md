# interview_prep (PrepForge) — STATUS

Update this when you STOP working, not when you start.

- **Last touched:** 2026-08-28.
- **Where I stopped:** Everything merged to `main` and nothing in flight. The app runs on this
  Windows machine, loaded with real prep material, with a **Sources** tab for managing it. Eight
  public repos are cloned into `backend/content/library/` and ingested: **8,377 questions**
  (100 curated + 6,732 ingested + 1,545 vault), 6,399 quizzable, 1,836 distinct "go deeper" links.
  Shipped as PRs #1 (ingest quality) → #2 (Sources tab, provenance, reading, tags, quiz picker) →
  #3 (dev.sh + vault path), squash-merged in that order; Plane COD-14 → COD-17 are Done.
- **Next action:** Nothing queued. Pick from `docs/BACKLOG.md` — 11 unchecked, the cheapest being
  `P1 URL → clean article to library`, which `capture.read` already mostly does.
- **Blocked on:** Nothing.

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
fixed. Anything else quoting 8000 is stale.

**Vite will not land on 5173 here.** Ports 5173–5179 are taken by the user's other apps; the dev
server picked **5180**. Read the actual URL off the Vite banner instead of assuming.

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

- `backend/test_ingest_split.py` → 7/7 pass (guards the `<details>` strip, TOC/diagram skip,
  heading numbering, doc-title fallback, repo boilerplate, deep-link extraction).
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
- Provenance + reading: `GET /questions` returns `origin` on **8377/8377**; a curated card renders
  "✦ PrepForge bank" and its authored XGBoost citation under "More to read".
  `backend/test_reading_index.py` → 5/5, `test_ingest_split.py` → 8/8.
- `GET /questions` → 15 MB. Growing; if Browse ever feels slow, that payload is the first suspect.

## Open threads

- **COD-18** (Backlog): glossary letter-headings still become cards — `Explain: W — Glossary`.
  Needs a minimum heading length in `_split_sections`, `backend/ingest.py`.
- Ingest quality, still imperfect: glossary letter-headings ("W") still become cards. Repo
  boilerplate is filtered now (`_is_boilerplate`).
- The "awesome list" repos (`awesome-system-design-resources`, `system-design-academy`,
  `system-design-resources`) are link collections, not prose — they yield few cards (19/5/64) but
  most of the "go deeper" links. That is the right trade, not a bug.
- Only 1,869 of 8,377 questions have reading links, and that is honest: the rest have neither their
  own links, an authored citation, nor a close-enough neighbour to borrow from. Lowering
  `BORROW_SCORE` (`pipeline.py`) would raise coverage and lower precision — it was 0.12 once and
  offered "ACID transactions" as further reading on "AI vs ML vs deep learning".
- `docs/BACKLOG.md` has 11 unchecked items; `docs/QUIZ-BACKLOG.md` has none.
