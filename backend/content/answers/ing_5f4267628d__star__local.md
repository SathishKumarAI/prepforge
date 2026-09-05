---
qid: ing_5f4267628d__star__local
question: 'Explain: No Caching — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 347
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:38:46-05:00'
sources: []
---

**Situation:**  
At a fintech startup, we launched a real‑time fraud detection API that pulled transaction data from three distributed databases every time a client queried risk scores. The first week after deployment, our latency spiked to 350 ms on average, and the load balancer began throttling requests during peak hours.

**Task:**  
I had to reduce response times below 120 ms while keeping cost per request low, without redesigning the entire architecture or adding new services.

**Action:**  
First, I identified that each API call triggered redundant reads across all three databases—a classic “no caching” anti‑pattern. I introduced an in‑memory LRU cache using Redis with a 5‑minute TTL for transaction snapshots and risk scores. To keep data fresh, I implemented a write‑through strategy: whenever a transaction was updated, the cache invalidated the relevant key immediately. I also added request batching so that concurrent calls could share a single database read when possible. Finally, I monitored cache hit ratios and adjusted the TTL based on observed staleness thresholds.

**Result:**  
Response times dropped to 95 ms on average (a 73% improvement). The load balancer no longer throttled requests during peak periods, and we saved roughly $1,200 per month in avoided database scaling costs. I learned that a well‑placed cache can eliminate the “no caching” anti‑pattern, but it must be paired with smart invalidation to avoid stale data pitfalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
