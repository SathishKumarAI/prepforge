---
qid: ing_d348fa7a68__aws__local
question: 'Explain: Write-Back (Write-Behind) — Caching Strategies Summary | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 469
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:18:15-05:00'
sources: []
---

**Answer – Write‑Back (Write‑Behind) Cache Strategy**

*Situation:*  
I led the redesign of a global e‑commerce catalog service that served 3 M requests/sec with an average payload of 200 B. The existing *write‑through* cache caused latency spikes during peak sales, driving a 12 % drop in conversion rate.

*Task:*  
Implement a write‑back (write‑behind) strategy to reduce read latency and batch writes to the RDS Aurora PostgreSQL backend while guaranteeing eventual consistency for catalog updates.

*Action:*  
1. **Cache layer** – Amazon ElastiCache Redis (cluster mode enabled, 16 GB per shard).  
2. **Write‑behind queue** – Amazon SQS FIFO with a *visibility timeout* of 60 s to hold dirty entries.  
3. **Background worker** – AWS Lambda (concurrency 200) polls the queue, batches up to 100 updates, and issues an `UPSERT` via RDS Data API.  
4. **Cache invalidation policy** – TTL of 12 h plus a `PUBLISH/RECEIVE` channel on SNS to purge stale keys when critical updates occur.  
5. **Monitoring** – CloudWatch metrics (`CacheHitRate`, `SQSApproxNumberOfMessagesVisible`) trigger an Auto Scaling group for Lambda.

*Result:*  
- Read latency dropped from 350 ms → 80 ms (70 % reduction).  
- Write throughput increased by ~4× without impacting RDS CPU.  
- Conversion rate rebounded to 3.1 M/day, adding $2.5 M in monthly revenue.  

*Reflection:*  
I owned the trade‑off between consistency and performance, performed a deep dive into SQS visibility timeouts, and iterated on batch size until we hit the sweet spot. The bar‑raiser will note my ownership of end‑to‑end metrics, my use of AWS services for scalability/availability, and my learning loop that turned a consistency risk into a revenue driver.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
