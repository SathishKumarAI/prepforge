---
qid: ing_5e6da5d668__aws__local
question: 'Explain: 7.1 Scalability — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 479
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:59:16-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the redesign of a photo‑sharing micro‑service that had to support **10 M daily active users (DAU)** with an average upload rate of **200 k images per hour** and a 99.9 % uptime SLA. The existing monolith was hitting CPU saturation during peak hours.

**Action – Design & AWS Stack**  
1. **Micro‑service decomposition** – split into *Upload*, *Thumbnail*, *Feed* and *Search*.  
2. **Serverless upload pipeline** – API Gateway + Lambda (Python) → S3 event trigger → another Lambda for transcoding → store in S3 “original” bucket.  
3. **Thumbnail generation** – Step Functions orchestrate parallel Lambdas using DynamoDB for state; results cached in Amazon CloudFront.  
4. **Feed building** – Kafka (MSK) streams new posts to a Kinesis Data Analytics job that updates a *Redis‑on‑Elasticache* cache per user, refreshed every 5 s.  
5. **Search** – OpenSearch indexes metadata; queries hit the cluster via an Application Load Balancer with Auto Scaling.

**Result**  
- Latency dropped from 4 s to <300 ms for 90th percentile uploads.  
- Cost reduced by **32 %** (from $120k/month to $82k) due to serverless compute and S3 lifecycle policies.  
- 99.999 % availability achieved; no single point of failure.

**Leadership Principles**  
- *Ownership* – I owned the end‑to‑end refactor, coordinating cross‑functional teams.  
- *Dive Deep* – I profiled each Lambda to identify bottlenecks and iterated on concurrency limits.  

**Bar‑raiser notes**  
- Demonstrated clear ownership of metrics and cost.  
- Showed deep technical depth in serverless scaling and data flow.  
- Quantified impact with real numbers; learned from a failed batch job by adding idempotency checks, turning failure into a resilience feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
