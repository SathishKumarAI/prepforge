# interview_prep (PrepForge) — STATUS

Update this when you STOP working, not when you start.

- **Last touched:** 2026-08-27.
- **Where I stopped:** App runs on this Windows machine and is loaded with real prep material.
  Three public question-bank repos are cloned into `backend/content/library/` and ingested:
  **7,027 questions total** (100 curated + 5,382 ingested + the rest), **5,064 of them quizzable**.
  Branch `feat/ingest-github-question-banks` holds the ingest-quality fixes that made that content
  usable. Frontend build is green.
- **Next action:** The Quiz source picker now renders ~300 buttons in a wall (one per ingested doc).
  Make it a searchable/collapsed list — `frontend/src/pages/Quiz.tsx`, the "QUIZ FROM A SPECIFIC
  SOURCE" block. Smallest useful next change, and it is the first thing you hit when studying.
- **Blocked on:** Nothing.

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

- `backend/test_ingest_split.py` → 5/5 pass (guards the `<details>` strip, TOC/diagram skip,
  heading numbering, doc-title fallback).
- `cd frontend && npm run build` → `✓ built in 3.20s`, exit 0 (`tsc` clean). Warns that the main
  chunk is 680 kB — pre-existing, not from this work.
- `GET /health` → `{"status":"ok","questions":7027,"resources":35}`.
- `GET /questions` → 200, 12.5 MB, 0.50 s. Large but fine locally; if Browse ever feels slow, that
  payload is the first thing to look at.
- Browser: Browse lists 7027 questions, Quiz setup reports "5164 questions match", and a started
  quiz rendered a clean true/false drawn from the newly ingested material. Console has only the two
  pre-existing React Router v7 future-flag warnings — no errors.

## Open threads

- Plane could not be reached (`localhost:8080` refused), so **no work item was filed** for this
  branch. File one when the board is up: `repo:interview_prep`, `type:feat`.
- Ingest quality, still imperfect: some glossary letter-headings ("W") and repo-boilerplate
  ("Contributing") become cards. Cheap fix is a longer skip-list in `backend/ingest.py`.
- `_tags()` in `ingest.py` has a thin stopword list, so tags like `#you`, `#would`, `#they` show up
  in the Quiz tag picker and leak into cloze distractors.
- `docs/BACKLOG.md` has 11 unchecked items; `docs/QUIZ-BACKLOG.md` has none.
