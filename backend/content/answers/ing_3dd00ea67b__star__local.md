---
qid: ing_3dd00ea67b__star__local
question: 'Explain: Cache-Aside (Lazy Loading) — Caching Strategies Summary | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 361
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:31:52-05:00'
sources: []
---

**Situation:**  
At my last role I was responsible for the real‑time recommendation engine that served personalized product suggestions on an e‑commerce platform. The model was hosted in a Kubernetes cluster and each inference call pulled feature vectors from a Redis store, but we were seeing 200 ms latency spikes during flash sales, pushing our SLA beyond the 150 ms target.

**Task:**  
I needed to reduce inference latency while keeping cache consistency as product attributes changed frequently (price updates, inventory status). The goal was to keep cache hit rates above 95% without stale data causing incorrect recommendations.

**Action:**  
I implemented a Cache‑Aside strategy. When the API received a request, it first queried Redis for the feature vector. On a miss, it fetched the raw features from our PostgreSQL feature store, ran the preprocessing pipeline locally, and wrote the result back to Redis with a 5 minute TTL. To keep data fresh I added an asynchronous “cache invalidator” that listened to Kafka events on product updates; when a price change arrived it purged the relevant key so subsequent requests would reload updated features. I also introduced a small in‑process LRU cache for the most popular items to absorb traffic bursts.

**Result:**  
Cache hit rates climbed from 70% to 96%, cutting average inference latency from 210 ms down to 110 ms, comfortably within SLA. The invalidation mechanism prevented stale recommendations during high‑traffic periods. I learned that coupling lazy loading with event‑driven cache eviction strikes a balance between performance and consistency in ML serving layers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
