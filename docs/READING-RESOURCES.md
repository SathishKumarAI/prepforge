# Reading resources — what was scraped, what was not, and why

**2026-09-04.** The Library's *Feed* view holds 35 resources (`backend/data/resources.json`): 34
with a URL, one local upload. Every URL was fetched through the app's own extractor
(`capture.read()` — the same path the Reader and the browser extension use) and saved to
`backend/content/library/<slug>.md` with frontmatter (`title`, `url`, `topic`, `source`). Then each
page was read for one question: *does this help answer an ML/AI-engineer interview question?*
Nine did not and were removed from the library. **25 stay.**

The GitHub repositories in *Collections* (system-design-101, HLD-System-Designs,
AI-Engineer-Interview-Questions, …) were **not** re-scraped: they were ingested earlier via
`POST /sources/github` — 1,985 documents, 16,639 cards already — and re-fetching them buys nothing.

## Why scrape at all

A feed item is a title and a two-line summary. Cards can only be generated from the body, the
Reader can only open what is on disk, and the answer lenses ("Grounded", "Go deeper") cite only what
the library holds. Scraping is what turns a bookmark into study material. Scraping *everything* is
what fills the library with press releases that then get ingested into cards nobody wants — which is
why the second pass exists.

## Kept — 25 pages, grouped by what they are good for

### Agentic systems (the 2026 interview loop's favourite topic) — 9

| File | Why it matters |
|---|---|
| `the-ai-agent-tech-stack-explained.md` | The seven-layer map (model → orchestration → memory → RAG → tools → observability → deployment). The answer to "walk me through an agent architecture". 3,212 words |
| `choosing-the-right-ai-agent-memory-strategy-a-decision-tree-.md` | Memory as a decision tree: persist beyond turn? beyond session? fact vs event? retrieval path? The structure of a system-design answer |
| `context-vs-memory-engineering-in-agentic-ai-systems.md` | Draws the line between assembling a context window and designing persistent memory — the distinction interviewers probe |
| `context-window-management-for-long-running-agents-strategies.md` | Five strategies with trade-offs: sliding window, recursive summarisation, structured state, ephemeral RAG, dynamic routing |
| `tools-vs-subagents-building-effective-ai-agents-without-over.md` | When a capability is a tool and when it is a subagent; the over-engineering trap |
| `the-complete-guide-to-tool-selection-in-ai-agents.md` | Why accuracy degrades as the tool catalogue grows; gating, retrieval-based selection, semantic routing, planner-based selection, fallbacks, benchmarking |
| `model-context-protocol-explained-in-3-levels-of-difficulty.md` | MCP host / client / server, a traced request, tools vs resources vs prompts. Asked directly now |
| `llm-orchestration-frameworks-compared-langchain-vs-llamainde.md` | LangChain (orchestration) vs LlamaIndex (retrieval) vs raw calls, with a working example. "Why did you pick X" material |
| `expanding-managed-agents-in-gemini-api-background-tasks-remo.md` | Product post, kept as reference: background execution, remote MCP, credential refresh — the concrete shape of a managed-agent API |

### LLM internals and limits — 4

| File | Why it matters |
|---|---|
| `that-is-embarrassing-why-frontier-ai-still-makes-things-up-a.md` | Hallucination from first principles — next-token prediction, training incentives, an interpretability tour — with real failure stories for chatbots and agents. 3,566 words |
| `long-context-isn-t-free-i-built-a-safe-prompt-pruning-layer-.md` | Context pruning as an OS-style pass (expired, duplicate, dependency restoration) with a benchmark and a shipped bug. A worked context-engineering case study |
| `rag-was-always-a-temporary-workaround-what-is-next.md` | Opinion, but a sharp one: the translation absurdity, the context-window illusion, latency budgets. Good for "what are RAG's limits" |
| `fine-tuning-explained-for-noobs-how-pretrained-models-learn-.md` | Pretraining vs fine-tuning, the two common kinds, and when *not* to fine-tune. Entry level, but it is the question that gets asked |

### ML fundamentals and systems — 5

| File | Why it matters |
|---|---|
| `but-what-is-a-neural-network-deep-learning-chapter-1.md` | 3Blue1Brown, full transcript (3,524 words). Weights, biases, activations, layers as feature detectors — the mental model everything else sits on |
| `10-probability-concepts-for-machine-learning-explained-simpl.md` | Random variables, distributions, expectation/variance, conditional probability, Bayes, joint/marginal. The screening-round list |
| `behind-the-scenes-of-distributed-training-and-why-your-gpu-w.md` | DDP vs FSDP vs ZeRO, then the hardware: PCIe vs NVLink and why interconnect decides the strategy. Senior ML-systems material |
| `machine-learning-interview-questions-and-answers-geeksforgee.md` | 3,052 words of the canonical questions — overfitting, regularisation, Lasso/Ridge/Elastic Net, evaluation, confusion matrix, precision/recall/F1. Already the bank's shape |
| `zero-shot-local-document-parsing-with-gemma-4-treating-pdfs-.md` | Vision-model document parsing end to end (PyMuPDF → Gemma 4). A practical multimodal pipeline to describe |

### Data engineering and analytics — 6

| File | Why it matters |
|---|---|
| `pyspark-for-beginners-building-intermediate-level-skills.md` | How Spark divides work, when data moves (shuffles), why joins deserve care, reading the plan, caching, file formats. The DE interview in one article |
| `i-built-my-second-etl-pipeline-this-time-i-started-thinking-.md` | Docker before the orchestrator, the assumption that was wrong, before/after architecture. A design-decision narrative to borrow |
| `sql-vs-pandas-vs-ai-agents-which-solves-analytics-problems-b.md` | The same problems solved three ways, timed. "When would you not use an agent" with numbers |
| `7-steps-to-automating-descriptive-statistics-with-python.md` | `describe`, `agg`/`groupby`, skimpy, profiling, tableone. Analyst-round warm-up |
| `how-to-clean-messy-csv-files-with-python-a-beginner-s-guide.md` | Column names, placeholders, duplicates, text columns. Basic, but a live-coding round starts here |
| `local-video-summarization-pipeline-processing-frames-with-sm.md` | Frame sampling → SmolVLM2 inference → meeting summariser. A small multimodal pipeline, buildable in an afternoon |

## Removed — 9 pages, and why

Scraped, read, judged, and moved out of the library (copies are in the session scratchpad, not
deleted). None answers an interview question; all would have been ingested into cards.

| Page | Verdict |
|---|---|
| The latest AI news we announced in June 2026 | Product recap, dated the day it was written |
| NYC educators and industry leaders gathered at Google's offices | Event report |
| Unlocking Britain's next era of productivity | Policy / marketing |
| Ask an AI expert: what exactly is the full stack? | Marketing framing of "full stack", not the engineering term |
| Our latest Google Finance upgrades, including a new app | Consumer product announcement |
| New research shows how AMIE could help manage health conditions | 243 words — a link to a paper, not the paper |
| We're strengthening our presence in Alabama | Investment press release, 164 words |
| How to find the optimal coding agent interface | Tooling review (Warp, Conductor, iTerm2…). Preference, not knowledge |
| Running OpenClaw with Ollama | Install guide for one tool; nothing transferable |

*Not removed, but low:* `the-big-con-of-agentic-ai.md` — an opinion piece with no technical
content. Kept because "what are the limits of agentic AI" is a real behavioural-round question and
it argues the sceptical side well. Skim, do not study.

## What to do with them

- **Ingest into cards:** `cd backend && ./.venv/Scripts/python.exe ingest.py` — the library is the
  ingest source; the 25 files become questions like every other document.
- **Read in the app:** Library → Collections → *Captured pages*, or the Reader.
- **Re-run the scrape:** the loop that produced this is 30 lines over `capture.read()`; it skips any
  URL whose frontmatter is already in the library, so re-running costs one request per new feed item.

## Traps

- **KDnuggets pages carry their nav bar** ("Blog Top Posts About Topics AI Career Advice…") at the top
  of the body — the extractor keeps every `<a>` in the header. The article follows; cards from the
  first paragraph would be junk. Worth a `_html_to_markdown` rule that drops `<nav>`/`<header>`.
- **Google Blog posts print the title three times** (title, `h1`, share bar). Cosmetic.
- **`towardsdatascience.com` inserts non-breaking spaces into headings** ("feel slow" → "feel slow").
  Search on those files by word, not phrase.
