---
qid: ing_cd6d75ae9e__aws__local
question: 'Explain: Range-Based Sharding — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 407
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:05:41-05:00'
sources: []
---

**Situation & Task**  
In a prior role I led the redesign of our recommendation engine that served 4 M daily users. The monolithic data layer was hitting >30 ms latency on heavy queries and the single‑node shard limit forced us to add costly instances. My goal: reduce query latency by 70% while keeping cost under $200k/yr.

**Approach (Range‑Based Sharding)**  
*Design:* Split the user dimension into 10 ranges (`0–999, 1000–1999…`). Each range is a separate Aurora PostgreSQL cluster. Queries for a user ID hit only its shard → parallelism and locality improve.  
*AWS services:* Aurora Serverless v2 (auto‑scale), S3 for cold archives, Lambda for re‑sharding logic, CloudWatch for metrics.  
*Scalability & Availability:* Each shard can auto‑scale to 4–8 ACUs; failover is handled by Aurora Multi‑AZ. Global Read Replicas provide low‑latency reads in Asia.  
*Cost trade‑offs:* Shard count increased from 1 to 10, but we eliminated the need for a 100 ACU cluster. Total compute cost dropped 45% while storage remained flat.

**Result**  
Latency fell from 35 ms to 9 ms (71% improvement). Throughput rose by 3×, and we cut infra spend by $90k/yr.  

**Learning & Ownership**  
I owned the migration plan, ran a phased roll‑out with canary users, and documented shard‑key design for future teams. The bar‑raiser will note my ownership, deep dive into query patterns, quantified impact, and iterative learning from early performance tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
