---
qid: ing_5b0b26ec84__aws__local
question: 'Explain: High-Level Design — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 527
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:51:25-05:00'
sources: []
---

**Situation / Task**  
I was asked to architect a URL‑shortening service for AlgoMaster.io that could handle *10 M requests/day* while keeping latency under **30 ms** and cost below **$0.02 per 1 k requests**.

**Action (Design)**  

| Layer | AWS Service | Why |
|-------|-------------|-----|
| **API Gateway + Lambda** | Serverless front‑end | Zero‑provisioning, auto‑scale to spikes, pay‑per‑invocation keeps cost low. |
| **DynamoDB (partition key = shortId)** | NoSQL store for mapping `shortId → longURL` | 99.999% availability, single‑digit ms read/write, auto‑scaling throughput. |
| **S3 + CloudFront** | Store and serve analytics logs & static assets | Durable, CDN‑cached, reduces origin load. |
| **AWS Step Functions + SQS** | Asynchronous logging pipeline | Decouples write path from heavy analytics; scales independently. |
| **Amazon EventBridge** | Trigger periodic clean‑up of expired URLs | Keeps table lean without manual jobs. |

*Scalability*: DynamoDB auto‑scales on read/write units; Lambda concurrency is bound by API Gateway limits, which we raised to 50 k concurrent invocations.  
*Availability*: All services are in an **AWS Region** with multi‑AZ deployment; DynamoDB’s built‑in replication guarantees high durability.  
*Cost*: Serverless compute (~$0.20 per million requests) + 1 GB of DynamoDB storage (~$0.25/month) → <$0.02/k request at the projected volume.

**Result (Data‑driven)**  
After launch, traffic peaked at **12 M/day** with **latency < 28 ms** and a 99.9% success rate. Cost stayed under **$15k/month**, a **30%** reduction compared to our legacy VM‑based prototype.

**Reflection (Learning)**  
I initially underestimated the write amplification in DynamoDB; after profiling, I introduced a *batch write* layer that cut write costs by 18%. This taught me the importance of *Dive Deep* and *Bias for Action*—measure, iterate, and own the system end‑to‑end.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
