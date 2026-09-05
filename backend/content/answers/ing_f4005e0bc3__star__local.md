---
qid: ing_f4005e0bc3__star__local
question: 'Explain: The Semantic Matching Pipeline — Semantic Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 330
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:35:45-05:00'
sources: []
---

**Situation** – At my previous startup we launched a knowledge‑base search feature for our SaaS platform. Users were complaining that repeated queries on similar topics took too long, and the response latency was above 1 s for 30% of searches.

**Task** – I had to design a semantic matching pipeline that could cache and reuse embeddings so that identical or highly similar queries would be answered instantly, while still keeping results relevant.

**Action** – First, I built an embedding service using Sentence‑Transformers (all-MiniLM-L6-v2) and stored the vectors in Redis with cosine‑similarity indices. When a query arrived, the pipeline checked Redis for a cached embedding within a 0.92 similarity threshold; if found, it returned the precomputed search results. If not, the text was embedded on‑the‑fly, matched against our Elasticsearch index, and the new vector/result pair was written back to Redis with an LRU eviction policy. I also added a TTL of 24 h to ensure stale data didn’t accumulate.

**Result** – Latency dropped from 1.2 s to 250 ms on 80% of queries, and CPU usage fell by 35%. The caching layer reduced our inference cost by ~40%, freeing GPU budget for other models. I learned that careful similarity thresholds and TTL management are key to balancing freshness with performance in semantic pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
