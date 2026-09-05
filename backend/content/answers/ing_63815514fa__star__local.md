---
qid: ing_63815514fa__star__local
question: 'Explain: Content Delivery Network (CDN) — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 350
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:46:47-05:00'
sources: []
---

**Situation**  
At my last role, we were tasked with redesigning the audio streaming pipeline to support a projected 30 % spike in peak concurrent listeners during global festivals. The existing monolithic player was bottlenecked by latency and inconsistent cache hit rates.

**Task**  
I needed to architect a CDN layer that would lower end‑to‑end latency below 200 ms, increase cache hit ratio above 85 %, and gracefully scale to millions of users across continents while keeping data freshness within one minute for live events.

**Action**  
First, I mapped the audio distribution graph: origin servers → regional edge nodes (using AWS CloudFront + custom Geo‑DNS) → client devices. I introduced a two‑tier cache—edge caches holding 5 min chunks and an in‑region “smart” cache that prefetches next‑track segments based on user listening patterns using a lightweight KNN model. For consistency, I implemented a hybrid invalidation strategy: event‑based TTL for static tracks (24h) and push‑based invalidations for live streams via WebSocket notifications. I also added rate limiting at the edge to protect origin bandwidth and leveraged S3 Transfer Acceleration for bulk uploads.

**Result**  
Post‑deployment, average latency dropped from 350 ms to 160 ms, cache hit ratio climbed to 92 %, and we handled a 45 % traffic surge during the last world tour without any outages. I learned that marrying ML‑driven prefetching with traditional CDN mechanics can yield both performance gains and operational resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
