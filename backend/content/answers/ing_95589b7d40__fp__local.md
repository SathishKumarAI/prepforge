---
qid: ing_95589b7d40__fp__local
question: 'Explain: Kuzu — GitHub - getzep/graphiti: Build Real-Time Knowledge Graphs
  for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 405
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:22:50-05:00'
sources: []
---

**Graphiti – the real‑time knowledge‑graph engine**

At its core, a *knowledge graph* is just a directed, typed multigraph where entities are vertices and semantic relations are edges. The fundamental problem Graphiti tackles is **continuous ingestion of heterogeneous data streams while preserving query performance**.

1. **Streaming schema evolution**  
   Traditional graph stores assume a static schema; adding a new relation type usually requires a costly re‑index. Graphiti uses *schema‑on‑read*: every incoming event carries its own metadata, and the engine lazily materialises indexes only when a query touches that relation. This is essentially an online version of *lazy evaluation* from functional programming, ensuring O(1) insertion regardless of schema churn.

2. **Delta‑based storage**  
   Instead of rewriting whole subgraphs for updates, Graphiti stores deltas (additions/deletions) as immutable log entries. Query time reconstructs the current view by replaying relevant deltas—an application of *version control* to graph data, yielding constant‑time writes and bounded read latency.

3. **Approximate neighbourhood queries**  
   For real‑time inference, Graphiti builds probabilistic sketches (e.g., MinHash) for each node’s adjacency set. These sketches enable sub‑millisecond similarity checks, turning the expensive subgraph isomorphism problem into a lightweight cosine‑similarity search on compact fingerprints.

**Non‑obvious insight:**  
Because updates are append‑only and queries rebuild views on demand, Graphiti guarantees *temporal consistency* without locking: every read sees a snapshot defined by a monotonically increasing log pointer. This eliminates the classic “stale data” problem in streaming graph systems, allowing AI agents to reason over *exactly* what was true at the moment of their query, even under heavy write loads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
