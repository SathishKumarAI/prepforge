---
qid: ing_429eb2b8a0__star__local
question: 'Explain: Clients — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 358
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:41:56-05:00'
sources: []
---

**Situation:**  
At a mid‑size SaaS startup, we had an internal tool that automatically generated marketing links for each campaign. The URLs were long and hard to share; our analytics dashboard was flooded with traffic from broken links because users kept mistyping them.

**Task:**  
I was tasked with designing a scalable URL shortener service that could handle 10 k requests per second, guarantee uniqueness without collisions, and provide real‑time click metrics, all while staying under $0.02 per request on our AWS budget.

**Action:**  
First, I chose a partitioned keyspace: we generate 6‑character base62 tokens from a salted SHA‑256 hash of the original URL plus a monotonically increasing counter to avoid collisions. Tokens are stored in DynamoDB with a TTL of 90 days; hot keys go into an ElasticCache Redis cluster for instant lookup, while cold keys fall back to DynamoDB. For click tracking I used Kinesis Data Streams to batch events and write aggregated counts to Redshift nightly. To keep costs low, I enabled DynamoDB auto‑scaling and set a per‑request rate limit via API Gateway throttling.

**Result:**  
The system handled 15 k RPS during our peak campaign launch without errors. Link click latency dropped from 350 ms to under 30 ms. We reduced link‑generation costs by 45 % and cut customer support tickets related to broken links by 70 %. I learned that a hybrid cache‑database approach, combined with careful key design, is essential for high‑throughput URL services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
