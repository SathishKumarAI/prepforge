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
| **Captured / read resource** | `backend/content/library/<slug>.md` | `capture.read()` (in-app reader / manual URL) | ingestion + graph |
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
