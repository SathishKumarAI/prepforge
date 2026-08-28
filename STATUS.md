# interview_prep (PrepForge) — STATUS

Update this when you STOP working, not when you start.

- **Last touched:** 2026-08-27.
- **Where I stopped:** App runs on this Windows machine, loaded with real prep material, with a
  **Sources** tab for managing it. Eight public repos are cloned into `backend/content/library/`
  and ingested: **8,377 questions** (100 curated + 6,732 ingested + vault/captured), 6,399
  quizzable, 1,836 distinct "go deeper" links. Two branches, neither merged:
  `feat/ingest-github-question-banks` (ingest quality) → `feat/sources-tab` (the tab, the
  clone-by-URL endpoint, deep links). Build and tests green on the second.
- **Next action:** The Quiz source picker renders ~850 buttons in a wall (one per ingested doc).
  Make it a searchable/collapsed list — `frontend/src/pages/Quiz.tsx`, the "QUIZ FROM A SPECIFIC
  SOURCE" block. It got worse with every repo added and is the first thing you hit when studying.
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

```bash
# backend — port 8787
cd backend && ./.venv/Scripts/python.exe -m uvicorn main:app --port 8787   # Windows
# frontend
cd frontend && npm run dev
```

Both venv (`backend/.venv`, Windows layout) and `node_modules` were rebuilt on 2026-08-27 and work.

## Environment traps

**Backend port is 8787, not 8000.** `frontend/vite.config.ts` proxies `/api` there; the browser
extension's `host_permissions` is locked to `127.0.0.1:8787`. `dev.sh` said 8000 until 2026-08-27 —
fixed. Anything else quoting 8000 is stale.

**Vite will not land on 5173 here.** Ports 5173–5179 are taken by the user's other apps; the dev
server picked **5180**. Read the actual URL off the Vite banner instead of assuming.

**`dev.sh` is bash and assumes `.venv/bin/`.** On Windows use `.venv/Scripts/` and the two commands
above; the venv on disk is now a Windows one, so `dev.sh` will not work as written.

**`npm install` alone is not enough on npm 11+.** esbuild's postinstall is blocked by default, and
without it Vite cannot start. `package.json` now carries `allowScripts: {"esbuild@0.25.12": true}`;
if a future esbuild bump reintroduces the prompt, run `npm approve-scripts esbuild`.

**`backend/config/vault.yaml` still points at `/home/deva/coding/Obsidian Vault`** — a Linux path
that does not exist here. `POST /vault/ingest` finds nothing until it is repointed. Unrelated to the
GitHub banks above, which come in through `content/library/` instead.

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
- `GET /questions` → 15 MB. Growing; if Browse ever feels slow, that payload is the first suspect.

## Open threads

- Plane could not be reached (`localhost:8080` refused), so **no work item was filed** for this
  branch. File one when the board is up: `repo:interview_prep`, `type:feat`.
- Ingest quality, still imperfect: glossary letter-headings ("W") still become cards. Repo
  boilerplate is filtered now (`_is_boilerplate`).
- The "awesome list" repos (`awesome-system-design-resources`, `system-design-academy`,
  `system-design-resources`) are link collections, not prose — they yield few cards (19/5/64) but
  most of the "go deeper" links. That is the right trade, not a bug.
- `_tags()` in `ingest.py` has a thin stopword list, so tags like `#you`, `#would`, `#they` show up
  in the Quiz tag picker and leak into cloze distractors.
- `docs/BACKLOG.md` has 11 unchecked items; `docs/QUIZ-BACKLOG.md` has none.
