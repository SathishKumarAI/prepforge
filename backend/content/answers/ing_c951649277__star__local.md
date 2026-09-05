---
qid: ing_c951649277__star__local
question: 'Explain: Metadata Filtering — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 330
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:11:55-05:00'
sources: []
---

**Situation:**  
In a recent product‑launch sprint for our recommendation engine, the dev team noticed that query latency was creeping above 250 ms on our Milvus vector database, especially when users requested personalized content across thousands of items.

**Task:**  
I needed to reduce query time to under 120 ms while maintaining top‑k recall > 95% for a 10M‑vector catalog.

**Action:**  
First, I profiled the search pipeline and identified that the vector index was scanning every shard because our queries were sending raw metadata filters (e.g., `category = "electronics"`) as part of the payload. I introduced a two‑stage filtering strategy:  
1. **Metadata indexing** – built an auxiliary B+ tree in Redis keyed by categorical tags, mapping to vector IDs.  
2. **Pre‑filtering** – for each incoming request, I queried Redis for candidate IDs matching the metadata, then passed only those IDs as a *post‑filter* list to Milvus.  
I also tuned the IVF index parameters (nlist=2048) and added `ef_search=256` to balance recall and speed.

**Result:**  
Latency dropped from 260 ms to 90 ms on average, with recall staying at 96%. The new pipeline reduced CPU usage by 35% and freed up GPU memory for larger batch embeddings. I learned that decoupling metadata filtering from vector search can dramatically improve performance without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
