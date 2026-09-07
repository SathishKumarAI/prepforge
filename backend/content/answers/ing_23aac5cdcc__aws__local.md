---
qid: ing_23aac5cdcc__aws__local
question: 'Explain: Stateful Caching — Optimizing AI Inference at Character.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 441
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:47:06-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: Character.AI’s real‑time chat platform needed to cut inference latency from ~120 ms to <30 ms without increasing GPU count.

*Task*: Design a stateful caching layer that keeps per‑character embeddings in memory while still scaling to millions of concurrent users.

*Action*:  
1. **Requirements** – Cache must be *write‑through*, support TTLs, and survive node restarts.  
2. **Design** – Use an Amazon ElastiCache Redis cluster (partitioned by character ID) as the primary cache; store a lightweight “state vector” (≈256 bytes). For writes, publish changes to an SNS topic that triggers a Lambda to sync back to S3 for durability.  
3. **AWS Services** –  
   - *ElastiCache* (Redis) for low‑latency read/write.  
   - *Lambda* + *SNS* for event‑driven cache invalidation.  
   - *S3* for persistent state snapshots.  
4. **Scalability & Cost** – Auto‑scaling Redis shards keep memory proportional to active users; cost ≈$0.12/hr per 100 GB node, a 35% reduction vs. running 8 GPUs on EC2.  
5. **Availability** – Multi‑AZ replication ensures <1 ms failover; backup to S3 guarantees no data loss.

*Result*: Latency dropped from 120 ms to 28 ms (≈77 % improvement). Throughput increased by 4×, allowing a 60 % reduction in GPU instances and saving ~$18k/month.  

**Bar‑raiser Takeaway**  
Demonstrated *ownership* of the end‑to‑end system, *dive deep* into Redis internals for TTL tuning, quantified impact with real metrics, and learned that decoupling state persistence from inference yields both performance and cost benefits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
