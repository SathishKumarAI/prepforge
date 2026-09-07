---
qid: ing_fcbdf822a7__aws__local
question: What are the benefits of database sharding?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 396
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:49:17-05:00'
sources: []
---

**Answer (Amazon Style)**  

**Situation & Task:**  
At my previous role I led a data‑engineering team tasked with scaling the recommendation engine that served ~3 M users daily. The monolithic PostgreSQL cluster was hitting 80 % CPU and latency >200 ms, threatening SLAs.

**Action (Technical Design):**  
I championed **database sharding** across two RDS Aurora clusters using a hash‑based shard key (`user_id`). Each shard ran on its own instance with automated read replicas for analytics. We added an Amazon ElastiCache layer to cache hot shards and used AWS DMS for zero‑downtime migration. I wrote a “shard router” microservice in Go, leveraging the **Customer Obsession** principle by ensuring each request hit the correct shard with <1 ms routing.

**Result:**  
- Latency dropped from 200 ms to 30 ms (90% reduction).  
- CPU utilization fell below 20%.  
- Cost decreased by ~35 % because we avoided over‑provisioning a single large instance.  
- The system now scales linearly; adding a new shard increases capacity by 1× with minimal operational overhead.

**Reflection & Learning:**  
The biggest learning was the **Dive Deep** insight that even simple hash sharding can unlock massive gains if paired with proper caching and monitoring (CloudWatch + X-Ray). I documented failure modes (e.g., uneven data distribution) and built automated re‑sharding scripts, reinforcing **Ownership**.  

*Key AWS Services:* RDS Aurora, ElastiCache, DMS, CloudWatch, Lambda for automation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
