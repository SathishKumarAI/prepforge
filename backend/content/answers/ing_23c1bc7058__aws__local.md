---
qid: ing_23c1bc7058__aws__local
question: 'Explain: Data Consistency (Read) patterns — Consistency Replication'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 455
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:47:14-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of a real‑time recommendation engine from an on‑prem Cassandra cluster to Amazon DynamoDB and ElastiCache for Redis. The system had to serve 3 M requests per second while guaranteeing that every user’s preference updates were visible within 200 ms, otherwise the recommendations would be stale and customers would see duplicate items.

**Action (Design)**  
I chose a *read‑through cache* pattern with **DynamoDB Streams → Lambda → ElastiCache Redis**.  
1. Writes go to DynamoDB; a stream triggers a Lambda that updates the corresponding key in Redis.  
2. Reads first hit Redis (highly available, low latency). If a miss occurs, they fall back to DynamoDB.  

I configured **DynamoDB Global Secondary Indexes (GSI)** for multi‑region read patterns and set `Cache Read Penalty` to 10 ms on the Lambda to keep the cache warm. For consistency I enabled **Redis “Read-Through” with TTL** of 5 s, ensuring eventual consistency within that window.

**Result**  
After rollout, read latency dropped from 650 ms to **120 ms average**, and cache hit ratio rose to **97%**, cutting DynamoDB provisioned capacity by 35 % (≈$1.2k/month). Customer churn fell 12% in the first quarter because recommendations were always up‑to‑date.

**Reflection & Learnings**  
I took full ownership, diving deep into DynamoDB’s `ReadConsistency` options and Redis eviction policies. The biggest failure was an overlooked TTL drift that caused stale reads; I fixed it by adding a secondary audit Lambda that verified cache freshness every 10 s.  

> **Leadership Principles Anchored:** *Customer Obsession* – delivering instant, accurate recommendations; *Ownership* – end‑to‑end responsibility for the data consistency pipeline; *Dive Deep* – profiling read/write paths to surface bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
