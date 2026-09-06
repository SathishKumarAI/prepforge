---
qid: ing_8837bbdae8__fp__local
question: '🚀 What is Opik? — GitHub - comet-ml/opik: Debug, evaluate, and monitor
  your LLM applications, RAG systems, and agentic workflows with comprehensive tracing,
  automated evaluations, and production-ready dashboards. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 347
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:54:20-05:00'
sources: []
---

**Opik** is a *data‑centric observability platform* for large‑language‑model (LLM) systems.  
At its core, an LLM application—whether it’s a retrieval‑augmented generation (RAG) pipeline or a self‑driving agent—produces a **sequence of events**: token streams, memory accesses, external API calls, and decision points. The problem is that these events are unstructured, voluminous, and interdependent; without a coherent view you cannot tell why an answer was wrong or why latency spiked.

Opik addresses this by treating the event stream as a **temporal graph**: nodes are discrete actions (e.g., “retrieve document X”), edges capture causal relationships (“retrieval → prompt”). By indexing this graph, it becomes possible to run *automated evaluations*—for example, checking that every retrieved chunk is actually used in the final answer—or to compute *latency budgets* per node. The platform then surfaces these metrics on dashboards that can be queried like a database (SQL‑like queries over event attributes), enabling engineers to perform “root‑cause” analysis as if they were debugging code.

A non‑obvious insight: **trace fidelity is more valuable than sheer volume**. By compressing repeated token streams and normalizing external calls, Opik keeps storage linear in the number of unique interactions, allowing production deployments without a prohibitive cost. This compression hinges on *information theory*: identical sub‑graphs carry no new entropy, so they can be shared across traces, preserving all observability while slashing data size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
