---
qid: ing_28d0c416a8__aws__local
question: 'Explain: :star: Sliding Window algorithm — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 415
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:57:53-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I was tasked to throttle API calls from third‑party partners so that no single client could exceed 10 k requests per minute without impacting the rest of our users. The system had to be low‑latency, cost‑effective, and highly available.

**Action (Design)**  
I implemented a **sliding‑window rate limiter** using *Amazon ElastiCache for Redis* as an in‑memory data store. For each client key I stored a sorted set of timestamps (`ZADD`). When a request arrived I:

1. `ZRANGEBYSCORE` to count events in the last 60 s.  
2. If count < 10 k, `ZADD` the new timestamp and allow the call; otherwise reject with **429**.

Redis’ atomic Lua scripts ensured no race conditions. To keep memory bounded I set a TTL of 61 s on each key. The service ran in an *AWS Fargate* task behind an *Application Load Balancer*, scaling horizontally by CPU usage (average 60 % during peak).

**Result**  
The solution reduced SLA violations from **12 % → 0.3 %** and cut API‑related outages by 95 %. Cost stayed under $200/month, a 70 % savings over the previous custom in‑process counter approach.

**Learning & Ownership**  
I performed A/B testing to tune window size and Redis eviction policy, learning that *lazy deletion* (TTL) was cheaper than manual cleanup. I documented failure modes (e.g., network partitions) and added retries with exponential backoff, ensuring resilience.

> **Leadership Principles:** Customer Obsession – protecting end‑users from throttling errors; Ownership – owning the entire rate‑limit stack from design to monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
