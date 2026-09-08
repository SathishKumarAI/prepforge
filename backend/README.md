# `backend` — FastAPI, flat modules, JSON on disk

Run: `./dev.sh` from the repo root, or `uvicorn main:app --port 8787` here. Tests are
scripts: `./.venv/Scripts/python.exe test_<name>.py` (each prints `N/N pass`).

## Change → file

| Change | File |
|---|---|
| The app, CORS, gzip, which routers are mounted | `main.py` |
| Where files live (`CONTENT`, `DATA`, `CONFIG`, `ANSWERS_DIR`) | `paths.py` |
| How the bank is assembled from its four files, its mtime stamp and ETag, the 304 dance, `related` expansion, search rows | `bank.py` |
| A GET route that reads the bank (`/questions*`, `/health`, `/resources`) | `api_questions.py` |
| A route that writes, fetches or scrapes (generate, resources, reader, feeds, library, sources, ingest, pipeline, quiz, vault, scrape) | `api_content.py` |
| Which provider answers a lens, the LM Studio probe, the answer cache and its versions, `local_only`, `generate()` | `generate.py` |
| A lens's system prompt, or the `MODES` table | `lens_prompts.py` |
| Talking to Claude: model id, prices, the pause_turn loop, citations | `claude_client.py` |
| Totals over generated answers (Settings → Generated answers) | `answer_stats.py` |
| Markdown → sections → cards; links, tags, topic; the LLM card writers; `ingest()` | `ingest.py` |
| "Is this text a question at all" (`usable_question`, `is_fragment`) | `hygiene.py` |
| Zero-token multiple-choice quizzes from cards | `quiz_synth.py` |
| Stopwords and the two token regexes ingest and quiz_synth share | `ingest_words.py` |
| The related-questions / reading index (TF-IDF) | `pipeline.py` |
| Obsidian vault → questions; which vault files count (`config/vault.yaml`) | `vault.py` |
| Capturing a URL / upload into the library; PDF → markdown | `capture.py` |
| Cloning a GitHub question bank; the library as collections | `sources.py` |
| Fetching cited pages into the library | `fetch_reading.py` |
| RSS / YouTube / HTML scrapers (`config/sources.yaml`) | `scrapers/` |
| Pre-writing every lens with the local model (batch) | `answer_lenses.py` |
| Answering the questions that arrived without one | `answer_missing.py` |
| Scoring generated answers | `eval_answers.py` |

## Rules

- **Imports point down.** `main` → `api_*` → `bank` / `generate` → `lens_prompts`,
  `claude_client`, `hygiene`, `ingest_words`. `answer_stats` and `quiz_synth` import
  from below them, never from `api_*`. `ingest` imports `quiz_synth`, so `quiz_synth`
  must not import `ingest` — that is what `ingest_words.py` is for.
- **The bank's version is its files' mtimes** (`bank._bank_stamp`), including the
  answers folder. Anything that writes a bank file invalidates every cache by doing so.
- **`usable_question` is one rule, called from both ends** — before a card is written
  (ingest) and when the bank is assembled (for cards already written).
- **A miss from the LM Studio probe is not cached within 60 s of a hit** at the same
  URL (`generate.local_model`). A slow GPU is not an absent server.

## Traps

- `uvicorn --reload` on this Windows machine has not picked up edits reliably, and a
  killed reload leaves a worker bound to 8787. Restart via `dev.sh`, check for two listeners.
- `test_api_transport.py` freezes `bank._bank_stamp` for its process; a running lens
  batch otherwise changes the ETag between its two requests.
- `content/vault_questions.json` and `content/generated.json` are derived and gitignored;
  `content/answers/*.md` are tracked (107k files). Deleting a question means deleting its
  lens files too, or the stats keep counting them.
