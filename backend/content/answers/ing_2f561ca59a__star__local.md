---
qid: ing_2f561ca59a__star__local
question: 'Explain: Common Mistakes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 331
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:03:21-05:00'
sources: []
---

**Situation** – In a production recommendation engine at my previous company we had to push millions of user‑item embeddings from training into a real‑time inference cluster. The initial index used a naive hash table keyed by the raw embedding vector, which caused catastrophic cache misses and 40 % slower query times during peak traffic.

**Task** – My goal was to redesign the indexing layer so that lookup latency stayed under 10 ms for 99.5 % of requests while keeping memory usage below 4 GB on each node.

**Action** – I first profiled the access patterns and discovered that most queries were “nearest‑neighbor” searches, not exact key matches. I replaced the hash table with a two‑tier structure: a lightweight LRU cache for hot items, and a quantized IVF (inverted file) index built with Faiss on CPU. I also added a Bloom filter to pre‑reject miss hits and reduced dimensionality via PCA before indexing. During implementation I used Docker‑based microservices so each node could scale horizontally without shared state.

**Result** – The new design cut average query latency from 45 ms to 8 ms, increased throughput by 3×, and kept memory usage under the target. We also reduced cold‑start failures by 70 %. I learned that understanding real traffic patterns and aligning the index structure with those patterns is far more effective than chasing theoretical “best” data structures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
