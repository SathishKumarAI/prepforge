---
qid: ing_371a0e727f__star__local
question: 'Explain: Requirements — Hitcounterdesigntwitter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 378
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:18:33-05:00'
sources: []
---

**Situation**  
I was hired as a backend engineer at a fast‑growth social media startup that wanted to launch a lightweight “hit counter” feature for user profiles, similar to Twitter’s view counts on tweets. The platform handled ~50 M users and 200 M posts per day, so the counter had to be highly scalable and cost‑effective.

**Task**  
Design an architecture that could record millions of hits per second, keep counters accurate within ±1% for trending content, and provide real‑time read access with sub‑100 ms latency, all while keeping operational costs below $5k/month.

**Action**  
I chose a write‑through cache pattern using Redis Streams to batch hit events. Each event was appended to a stream partitioned by post ID; a background consumer wrote the aggregated counts to a sharded PostgreSQL table every 10 s. To avoid hot keys, I implemented a probabilistic token bucket that throttled writes per user IP, ensuring no single endpoint saturated Redis. For reads, I exposed a read‑through API backed by a CDN‑cached JSON payload refreshed every minute. Monitoring was built with Prometheus alerts on stream lag >5 s.

**Result**  
The system handled 1.2 M hit events/sec during peak launch traffic without any outages. Accuracy drift stayed below 0.8% compared to the gold‑standard count, and read latency averaged 45 ms. Operational cost remained under $4k/month, meeting budget constraints. I learned how to balance real‑time accuracy with cost by leveraging stream batching and edge caching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
