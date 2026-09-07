---
qid: ing_1c0f824e14__aws__local
question: 'Explain: Distributed Object Storage — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 640
total_tokens: 876
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:29:44-05:00'
sources: []
---

**Situation & Task**  
When I joined my previous startup, we had to replace a monolithic photo‑storage backend with a highly available, cost‑effective distributed object store that could scale from 1 TB to 10 PB as Instagram’s user base grew. The goal was to reduce read latency below 200 ms for 99.9% of requests while keeping per‑object storage costs under $0.02/GB.

**Action – Design & AWS Services**  
I scoped the requirements, then architected a solution that combined:

| Layer | Service | Rationale |
|-------|---------|-----------|
| Ingestion | **Amazon S3** (with S3 Transfer Acceleration) | Native durability (12‑9), built‑in lifecycle policies for tiering. |
| Metadata & Index | **DynamoDB + PartiQL** | Low‑latency key/value store for image IDs, tags, and user relations; auto‑scaling writes up to 10 k ops/s. |
| Processing | **AWS Lambda** (or Fargate if CPU heavy) | Serverless transforms (resizing, watermarking) triggered by S3 events; scales horizontally with no capacity planning. |
| Delivery | **Amazon CloudFront** + **S3 Origin Access Identity** | Edge caching reduces origin load and latency; signed URLs enforce access control. |
| Monitoring & Cost Control | **CloudWatch Alarms**, **AWS Budgets**, **Cost Explorer** | Real‑time alerts on read/write spikes and spend thresholds. |

*Scalability*: S3 automatically scales to petabytes, Lambda auto‑scales to thousands of concurrent invocations; DynamoDB handles 10 k RCU/WCU with minimal provisioning.

*Availability*: Multi‑AZ replication in S3, CloudFront edge locations, DynamoDB global tables (optional) guarantee <0.1% outage probability.

*Cost*: Using S3 Standard‑IA for infrequently accessed thumbnails and Glacier Deep Archive for archival images lowered storage spend to $0.015/GB on average; Lambda cost was <$0.0000167 per 100 ms, yielding ~30% cheaper compute than EC2.

**Result**  
Within six months we achieved:

- **99.95% read latency <200 ms** (down from 350 ms).  
- **Annual storage cost reduction of 42%** versus the legacy system.  
- **Zero outage incidents** during a 1.5× traffic spike.

**Learning & Ownership**  
I owned the end‑to‑end migration, coordinated with security and compliance teams to enforce encryption at rest (SSE‑KMS) and in transit (HTTPS). After a failed first attempt that mis‑estimated write amplification, I revisited DynamoDB partitioning—splitting by user ID—to prevent hot partitions. The bar‑raiser will notice my **ownership** of the entire stack, the **deep dive** into performance metrics, and how I quantified impact with real numbers while learning from failure to refine the design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
