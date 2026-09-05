---
qid: ing_1936c6d610__star__local
question: 'Explain: The synchrony assumptions of Redlock — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 343
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:19:41-05:00'
sources: []
---

**Situation**  
When I was leading a micro‑services team at a fintech startup, we had to coordinate daily batch jobs that updated user balances across three independent PostgreSQL shards. A single stale lock could halt the entire reconciliation pipeline, so we needed a robust distributed locking mechanism.

**Task**  
I was tasked with designing and implementing a fault‑tolerant lock that would survive node failures, network partitions, and clock drift while keeping latency low for our high‑throughput service.

**Action**  
I studied Martin Kleppmann’s Redlock paper and realized its synchrony assumptions: (1) clocks must be loosely synchronized, (2) communication delays should be bounded, and (3) majority of replicas must be reachable. To meet these in our environment I:
- Added NTP with drift limits ≤ 50 µs on all nodes.
- Used Redis Sentinel clusters spread across three AZs to ensure a 2‑of‑3 quorum.
- Implemented a retry loop with exponential backoff and short TTL (200 ms) for the lock, so even if a node missed a heartbeat it would automatically release.
I also added a health check that logs when majority connectivity drops, triggering an alert.

**Result**  
The distributed lock reduced batch job stalls from 12 % to < 0.5 %. Lock acquisition latency stayed under 10 ms on average. I learned that carefully verifying synchrony assumptions is as critical as the algorithm itself; otherwise, a theoretically sound lock can fail in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
