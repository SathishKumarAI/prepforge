---
qid: ing_664db2f173__aws__local
question: 'Explain: Protect the System Under Load — Client-Server Architecture | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 397
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:16:18-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a team that built a recommendation engine for a media‑streaming platform. During peak hours the client‑server architecture stalled – latency spiked to 800 ms and error rates hit 5%. The business demanded sub‑200 ms response under 10,000 concurrent users.

**Action**  
I applied **Customer Obsession** and **Ownership**: I scoped a new micro‑service tier using AWS Lambda + API Gateway for stateless request handling, backed by Amazon DynamoDB (partition key = userID) for low‑latency reads. To protect the downstream inference model, I introduced an **Elastic Inference** proxy that caches recent predictions in Amazon ElastiCache Redis (clustered mode). The architecture is fully **serverless**, auto‑scaling with request volume.

I also practiced **Dive Deep** by instrumenting CloudWatch metrics, tracing latency per component, and running a chaos‑engineering test to validate resilience. Cost was kept under 15 % of the previous monolithic deployment by using reserved instances for DynamoDB throughput and scaling Lambda concurrency limits.

**Result**  
After rollout, average response time dropped from 800 ms to **120 ms** at peak load (40 % improvement). The error rate fell below 0.1%, translating into a **12 % increase in daily active users** during the holiday season. Post‑mortem analysis taught us that caching inference results is critical; we now automatically refresh stale keys every 10 minutes, preventing model drift.

**Bar‑raiser note**  
I demonstrated ownership by taking end‑to‑end responsibility, depth through detailed metrics and trade‑off analysis, quantified impact via real user numbers, and learned from the failure to iterate quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
