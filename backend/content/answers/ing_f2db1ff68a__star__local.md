---
qid: ing_f2db1ff68a__star__local
question: 'Explain: Key Parts — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 330
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:33:37-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with reducing the latency of a recommendation engine that served personalized product suggestions to millions of users each day. The model’s inference time was ~250 ms, which pushed our end‑to‑end response above the 500 ms SLA.

**Task:**  
I had to cut the average request latency to under 200 ms without compromising accuracy or increasing infrastructure costs significantly.

**Action:**  
I introduced a multi‑layer caching strategy. First, I added an in‑memory cache (Redis) for the top 10% of high‑frequency items, keyed by user ID and item cluster, storing precomputed scores. Second, I leveraged a local LRU cache on each inference server to hold recent model outputs for the same keyspace, reducing round‑trips to Redis. I also implemented cache invalidation logic that refreshed entries every 12 hours or when the underlying feature vectors changed, ensuring freshness. Finally, I instrumented Prometheus metrics to monitor hit rates and latency per tier.

**Result:**  
The combined caching layers achieved a 68% reduction in average inference latency (down to 78 ms) and increased cache hit rate from 5% to 82%. We met the SLA with a margin, cut server CPU usage by ~30%, and learned that thoughtful key design and eviction policies are critical for scaling ML serving at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
