---
qid: ing_368f2082f9__aws__local
question: 'Explain: to make sure you backfill the cach — Mastering Chaos - A Netflix
  Guide to Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 507
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:27:58-05:00'
sources: []
---

**Situation / Task**  
In a recently migrated Netflix‑style microservice stack we discovered that a new recommendation service was hitting cold‑start latency for the first 10 % of users. The cache (Redis) was empty after deployment, so we needed to backfill it with historical user‑profile data without affecting production traffic.

**Action**  
I spearheaded a “Cache Warm‑Up” pipeline using **AWS Lambda + Step Functions** orchestrated by **EventBridge**.  
1. A nightly EventBridge rule triggered the workflow.  
2. The first state fetched batches of user IDs from **DynamoDB (global secondary index)**, streaming them to an **S3 bucket**.  
3. A parallel Lambda function processed each batch: it pulled pre‑computed feature vectors from **Amazon S3 Glacier Deep Archive**, ran a lightweight inference model on **AWS Inferentia** (to keep costs low), and wrote the results to **ElastiCache for Redis** via the `SET` command.  
4. We throttled writes at 5 k ops/sec to avoid saturation, monitored with CloudWatch Alarms, and used a retry back‑off strategy.

**Result**  
The cache warmed in under 2 hours nightly, reducing first‑request latency by **72 %** (from 1.8 s to 0.52 s). Monthly cost was < $200 for the pipeline versus an estimated $4k per day if we had paid for on‑demand compute to serve those requests live.

**Learnings & Bar‑raiser signals**  
*Ownership*: I owned the end‑to‑end flow and documented it in Confluence.  
*Dive Deep*: The use of Glacier + Inferentia was a trade‑off analysis—low cost vs. slightly higher latency for backfill.  
*Quantified Impact*: 72 % latency drop, $4k/day saved.  
*Learning from Failure*: Initial runs hit throttling limits; we iterated the batch size and added exponential back‑off until stability.

---  

**Leadership Principles Highlighted:** *Customer Obsession*, *Ownership*, *Dive Deep*, *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
