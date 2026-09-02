# Content Pipeline — everything is persisted as files

**Principle:** every piece of generated or captured content is written to a **file on disk**
(Markdown, with YAML frontmatter) and read back from there. Nothing important lives only in
memory or in a database. Files are portable, diffable, version-controllable, human-editable, and
drop straight into Obsidian.

## What gets stored, and where

| Content | Path | Written by | Read by |
|---|---|---|---|
| **Deep answer** (grounded, web-sourced) | `backend/content/answers/<qid>.md` | `generate()` on a cache-miss (or Claude Code authoring) | `generate()` cache-first — **no API call on a hit** |
| **STAR interview answer** | `backend/content/answers/<qid>__star.md` | `generate(mode="star")` | same cache-first read |
| **A card that is not a question** | dropped — `ingest.usable_question()` | a split-sentence tail ("and how can it be improved?") or an outline number ("10).What are…"); applied at ingest AND at bank assembly, one definition, two call sites | 133 dropped, 57 tidied |
| **An answer for a question that has none** | `backend/content/answers/<qid>__local.md` | `answer_missing.py` → `generate.local_only()` (LM Studio, never billed) | `_fill_missing_answers()` in `main.py` — only ever fills a gap, and the text carries its own machine-written line |
| **Captured / read resource** | `backend/content/library/<slug>.md` | `capture.read()` (in-app reader / manual URL) | ingestion + graph |
| **Every page the bank cites** | `backend/content/library/<slug>.md` + `content/reading_fetch.json` | `fetch_reading.py` (batch, resumable) | ingestion + graph |
| **Ingested book / notes** | `backend/content/library/*.md` (you drop them) | you | `POST /ingest` → cards |
| **Curated question bank** | `backend/content/questions.json` | build-time | `GET /questions` |
| **Aggregated feed** | `backend/data/resources.json` | scrapers / capture | `GET /resources` |

## File format (answers & captures)

```markdown
---
qid: q001
question: "Explain the transformer architecture."
topic: "AI"
model: "Claude Code (authored)"      # or claude-opus-4-8 for live
input_tokens: 1200                    # present only for live-generated
output_tokens: 400
cost_usd: 0.016
sources:
  - title: "Attention Is All You Need"
    url: "https://arxiv.org/abs/1706.03762"
---

<answer body in markdown>
```

`_read_answer()` parses the frontmatter with YAML and returns `{answer, sources, meta}`; on a read
it stamps `meta.cached = true` so the UI shows **"✓ cached · no API call."**

## The flow

```
                     ┌─────────── cache-first read ───────────┐
User clicks          ▼                                        │
"Deep answer"  →  content/answers/<qid>.md exists?  ── yes ──► serve it (0 cost, no API)
                     │ no
                     ▼
                 creds present?  ── no ──► friendly "add key / ant auth login"
                     │ yes
                     ▼
                 Opus 4.8 + web_search  ──►  write content/answers/<qid>.md  ──►  serve
                                              (free forever after)

Resource reader:  URL ──► fetch + clean ──► content/library/<slug>.md ──► render in-app
```

## Pulling in everything the bank cites

The question bank does not only carry questions; it carries **7,398 citations to
1,842 distinct URLs** ("go deeper" links, plus the reading index that lends a
close neighbour's citation to a question with none). Those were links — you
needed a browser and a connection. `backend/fetch_reading.py` turns them into
the same Markdown files as anything else in the library:

```bash
cd backend
./.venv/Scripts/python.exe fetch_reading.py --dry-run       # what it would fetch, most-cited first
./.venv/Scripts/python.exe fetch_reading.py --limit 50      # a bounded pass
./.venv/Scripts/python.exe fetch_reading.py --all           # everything still pending
./.venv/Scripts/python.exe fetch_reading.py --retry-failed  # only the ones that failed
./.venv/Scripts/python.exe -m uvicorn main:app --port 8787  # then POST /ingest turns them into cards
```

How it behaves, and why:

| Behaviour | Reason |
|---|---|
| Walks **most-cited first** | the page 89 questions point at is worth more than the one a single question mentions |
| Records **every** URL's outcome in `content/reading_fetch.json`, written after each fetch | a run is resumable, a re-run costs nothing for what already landed, and an interrupted run loses nothing |
| ≥2s between hits on the **same host**, 0.3–0.5s globally | politeness; the delay is per host so a run across 40 hosts is not 40 sleeps long |
| Refuses anything that is not public http(s) — localhost, RFC1918, link-local, `169.254.169.254` | these URLs come from **ingested third-party content**, so they are untrusted input. `test_fetch_reading.py` guards it |
| Skips hosts in `BLOCKED_HOSTS` | measured, not assumed: `leetcode.com` 403s every scraper and is the most-cited host in the bank. For a problem page the link *is* the content |

Failures are normal and recorded rather than hidden: Medium, Stack Overflow and
some vendor docs answer a scraper with a wall or JavaScript. `reading_fetch.json`
holds the status and the error for each, so "what is missing, and why" is a
query rather than a guess.

The fetched pages are **git-ignored**, like the rest of `content/library/`. They
are third-party content that happens to live on your disk; the repo keeps the
fetcher, not the copies.

## Committed vs. git-ignored

- **Committed** (shared, curated): `content/answers/*.md`, `content/questions.json`.
- **Git-ignored** (personal / captured / transient): `content/library/**`, `content/generated.json`,
  `data/resources.json`, `.env`. Your notes and clipped pages stay on your machine.

## Regenerating / editing

- Edit any `.md` by hand — the change is live on next request (files are read fresh).
- Delete a `.md` to force a fresh generation on next open.
- The whole `content/answers/` + `content/library/` tree is a portable knowledge base — open it as
  an Obsidian vault, or grep it, or diff it in git.

## HTML option

Markdown is canonical (smaller, editable, Obsidian-native). An HTML export of the same files is a
backlog item — the reader already produces clean structured content that converts 1:1 to HTML.
