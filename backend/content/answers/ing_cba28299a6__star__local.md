---
qid: ing_cba28299a6__star__local
question: Design an example store for dynamic few-shot selection. What do you get,
  and what does it cost you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 315
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:16:02-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with building a recommendation engine that could pull in new product data on the fly for a high‑traffic e‑commerce site. The challenge was to keep latency under 50 ms while handling a constantly changing catalog.

**Task:**  
I had to design a “dynamic few‑shot” store: a lightweight cache that would let us retrieve a handful of relevant items with minimal storage and compute overhead, yet still adapt quickly as new products arrived.

**Action:**  
I chose an in‑memory key‑value store (Redis) with LRU eviction and a secondary vector index in FAISS for similarity search. Each product was pre‑hashed into a 128‑dim embedding using a lightweight transformer; we stored only the top‑k nearest neighbors per item in Redis, keyed by category tags. When a user searched, we fetched their query embedding, queried FAISS to get 5 candidates, then pulled those few embeddings from Redis for final ranking—no full catalog scan. I added an async worker that refreshed stale entries every hour and logged cache hit ratios.

**Result:**  
Cache hit rate rose to 92 %, cutting API latency from 120 ms to 35 ms. Storage cost stayed under 10 GB, and we avoided a costly GPU‑based inference pipeline. The exercise taught me how to balance memory footprint against real‑time performance using hybrid in‑memory + vector indexing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
