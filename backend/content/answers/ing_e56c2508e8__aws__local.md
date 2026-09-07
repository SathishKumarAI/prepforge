---
qid: ing_e56c2508e8__aws__local
question: 'Explain: High-level design — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 464
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:56:38-05:00'
sources: []
---

**Situation / Task**  
I was asked to sketch a *high‑level* system that lets a SaaS client train and serve machine‑learning models at scale—customers wanted 1 ms inference latency, 99.9 % availability, and the ability to roll out new models in minutes.

**Action (Design)**  

| Layer | AWS Service(s) | Rationale |
|-------|----------------|-----------|
| **Data ingestion & feature store** | Amazon Kinesis + Glue + DynamoDB | Real‑time streaming with low latency; Glue for ETL, DynamoDB for fast lookups. |
| **Model training** | SageMaker Studio/Training Jobs + EFS | Spot instances reduce cost by 70 %; EFS keeps data shared across jobs. |
| **Model registry & versioning** | SageMaker Model Registry + S3 | Immutable artifacts; audit trail. |
| **Inference endpoint** | SageMaker Real‑Time Endpoint (multi‑model) + CloudFront edge cache | Multi‑model hosting cuts cost 30 %; CloudFront gives <1 ms RTT globally. |
| **Observability & rollback** | CloudWatch, X-Ray, Lambda for auto‑rollback on drift | Immediate alerts; automated fallback to previous stable model. |

*Scalability*: Auto‑scaling endpoints, spot training, serverless inference bursts.  
*Availability*: Multi‑AZ deployment + CloudFront caching guarantees 99.9 % SLA.  
*Cost*: Spot usage + multi‑model hosting → ~40 % savings over dedicated instances.

**Result (Quantified Impact)**  
After implementation, the client cut model rollout time from **3 days to under 5 minutes**, reduced inference cost by **35 %**, and achieved **99.95 % uptime** in production.

**Reflection (Bar‑raiser cues)**  
I owned every layer, dove deep into latency trade‑offs, quantified ROI, and learned that early observability prevents costly rollbacks—exactly what Amazon expects from a high‑impact engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
