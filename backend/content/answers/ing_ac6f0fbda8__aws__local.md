---
qid: ing_ac6f0fbda8__aws__local
question: 'Explain: Sharded Counter — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 401
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:55:57-05:00'
sources: []
---

**Situation & Goal**  
I was tasked at a fintech startup to build a real‑time “sharded counter” for user engagement metrics that had to scale from 10k writes/sec to >1M writes/sec without bottlenecks, while keeping cost < $0.05 per 1 000 ops.

**Task & Approach (Dive Deep + Ownership)**  
I chose **Amazon DynamoDB** with *partition keys* as counter shards and **AWS Lambda** for atomic increments. Each shard holds ~10 k writes; we dynamically spin up new shards when a shard’s write rate exceeds 5 k/sec, using an autoscaling CloudWatch alarm (Policy: “If avg write latency > 20 ms → add shard”). The total counter is the sum of all shard values queried via a **Lambda aggregation** that reads each shard in parallel (using `BatchGetItem`).

**Result (Deliver Results + Data‑Driven)**  
- Latency dropped from 120 ms to < 15 ms.  
- Throughput scaled linearly: 10 k → 1M writes/sec with no throttling.  
- Cost stayed at ~$0.04 per 1 000 ops, a 20% saving vs. single‑table design.  
- Failure handling: Lambda retries and DynamoDB’s conditional writes guarantee eventual consistency; we logged outliers to CloudWatch for root‑cause analysis.

**Reflection (Bias for Action + Customer Obsession)**  
I prototyped in two weeks, iterated on shard sizing, and documented the design so the dev team could ship a production feature in 3 days. The solution now powers daily active user counts for our mobile app, delighting product managers with instant insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
