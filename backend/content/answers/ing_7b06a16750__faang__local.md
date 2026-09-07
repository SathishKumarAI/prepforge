---
qid: ing_7b06a16750__faang__local
question: 'Explain: Embedding refresh & index lifecycle — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 523
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:30:19-05:00'
sources: []
---

**Embedding Refresh & Index Lifecycle – Semantic Search**

| Step | What it is | Why it matters |
|------|------------|----------------|
| **1️⃣ Clarify** | *Question*: How do we keep a semantic search index up‑to‑date while balancing latency, cost and relevance? | Need to confirm: data velocity (real‑time vs batch), query load, freshness SLA, storage budget. |
| **2️⃣ Approach** | 1. Ingest → vectorize with current model.<br>2. Store vectors in a high‑performance ANN index (FAISS/PGVector).<br>3. Schedule periodic *refresh* jobs that re‑compute embeddings for changed docs.<br>4. Use *index lifecycle*: build → warm → hot → retire old shards. | Keeps search fast, reduces compute churn, and ensures stale docs don’t pollute results. |
| **3️⃣ Depth** | • **Embedding refresh**: delta‑based recompute (only updated or new docs). <br>• **Indexing strategy**: incremental add/delete vs full rebuild; use *sharding* by category for locality.<br>• **Lifecycle policy**: “hot” shards serve live traffic, “warm” are pre‑indexed but not queried, “cold” archived. <br>• **Cost trade‑offs**: compute cost of re‑embedding vs storage cost of keeping older vectors; use model distillation to lower compute. Complexity: O(N log N) for full rebuild, O(1) per delta update in ANN. |
| **4️⃣ Edge Cases** | • Data drift: embeddings change meaning → periodic *model retrain* and re‑index entire corpus.<br>• Large updates: batch overflow may block queries; use *online* incremental updates or “shadow” indexes.<br>• Query latency spikes during rebuilds – mitigate with read replicas. |
| **5️⃣ Optimize & Communicate** | • Cache top‑k results for frequent queries (warm cache). <br>• Parallelize embedding jobs across GPU clusters; monitor CPU/GPU utilization to scale. <br>• Present a simple KPI dashboard: “index age”, “query latency”, “relevance drift”. <br>Explain reasoning: we prioritize freshness for time‑sensitive docs, while cost‑effective for static content. This balances user experience with operational budgets—exactly what FAANG teams expect in production AI pipelines. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
