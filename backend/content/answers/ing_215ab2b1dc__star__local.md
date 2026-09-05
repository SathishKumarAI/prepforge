---
qid: ing_215ab2b1dc__star__local
question: AWS re:Invent 2021 - Which NoSQL database is right for you?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 329
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:36:16-05:00'
sources: []
---

**Situation:** While leading the backend team for a real‑time ad‑tech platform, we hit a bottleneck when scaling from 2M to 10M daily sessions. Our existing relational store was choking on write throughput and latency spikes during campaign launches.

**Task:** I had to evaluate AWS NoSQL options—DynamoDB, DocumentDB, and Neptune—to determine the best fit for low‑latency writes, flexible schema for user attributes, and cost predictability under peak traffic.

**Action:** I set up a proof‑of‑concept in the staging environment. Using Python Boto3, I scripted parallel write loads (10k ops/sec) to each database while monitoring CloudWatch metrics. For DynamoDB I enabled auto‑scaling with a 20% buffer and used PartiQL for ad-hoc queries. DocumentDB required sharding across two replicas; Neptune was ruled out due to graph query overhead. I also compared pricing models: on-demand vs. provisioned capacity, factoring in our seasonal traffic spikes.

**Result:** DynamoDB emerged as the winner—latency <5 ms at peak, 30% lower cost than DocumentDB, and no need for manual sharding. After migration, write throughput increased by 4×, and we cut infrastructure costs by $12k/month. I learned that a targeted load test with real traffic patterns is critical before committing to a NoSQL solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
