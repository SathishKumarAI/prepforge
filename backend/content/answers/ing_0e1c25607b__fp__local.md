---
qid: ing_0e1c25607b__fp__local
question: 'Explain: Installation — GitHub - getzep/graphiti: Build Real-Time Knowledge
  Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 336
total_tokens: 525
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:35:46-05:00'
sources: []
---

### Why the install flow is designed this way

A real‑time knowledge graph must ingest streaming triples, persist them efficiently, and expose a query API—all in one package.  
To keep the runtime lean, **Graphiti** bundles only what it needs: the Python client, a lightweight Neo4j driver, and an async event loop. The installer therefore follows three logical steps:

1. **Acquire the source** – `git clone` pulls the latest commit, ensuring reproducibility via the commit hash.  
2. **Set up a virtual environment** – this isolates dependencies (`uvicorn`, `neo4j-driver`, `pydantic`) from system packages, preventing version clashes that would break the async event loop or Neo4j compatibility.  
3. **Install with pip‑editable** – `pip install -e .[dev]` installs the package in “editable” mode so that any local code changes immediately affect runtime, a necessity for rapid prototyping of new graph schemas.

The optional `[dev]` extras pull in testing and linting tools (`pytest`, `ruff`) because real‑time systems are notoriously brittle; catching regressions early keeps the event loop stable.  

**Hidden insight:**  
Running Graphiti with `uvicorn --reload` is *not* just hot‑reloading the API—it also restarts the internal async queue, preventing stale state when you tweak triple ingestion logic. This dual effect is why the README recommends that flag for development, not production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
