---
qid: ing_d040604dd7__aws__local
question: 'Explain: Case 2: Unstructured Data Storage — Explain the Top 6 Use Cases
  of Object Stores'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 668
total_tokens: 908
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:11:59-05:00'
sources: []
---

**Situation & Task**  
When I joined the data‑engineering team at a media company, we were drowning in video, audio, and log files that didn’t fit into our relational schema. The leadership asked me to map out how an object store could replace legacy storage and unlock new analytics pipelines.

**Action – Top 6 Use Cases & Design**  

| # | Use Case | Why Object Store? | Key AWS Services | Scalability / Availability | Cost Trade‑offs |
|---|----------|------------------|-----------------|---------------------------|-----------------|
| **1** | *Backup & Disaster Recovery* | Immutable, low‑latency reads for point‑in‑time restores. | S3 Standard + Cross‑Region Replication (CRR) | 99.999999999% durability; read/write concurrency >10k ops/s | Pay per GB/month; CRR adds minimal extra cost |
| **2** | *Archive & Compliance* | Long‑term retention with retrieval on demand. | S3 Glacier Deep Archive | 99.9% availability for infrequent access; cold‑data throughput ~5 MB/s | Lowest storage price ($0.00099/GB) but higher retrieval fees |
| **3** | *Data Lake for Analytics* | Schema‑agnostic ingestion of raw logs, images, IoT telemetry. | S3 + Athena / Glue | Unlimited object count; query concurrency via Athena workgroups | Storage cost dominates; compute billed per query |
| **4** | *Media Asset Management* | High‑bandwidth streaming and transcoding workflows. | S3 Standard-IA + CloudFront | 99.9% availability; low latency to edge locations | Balance between storage tier and CDN fetch costs |
| **5** | *Machine Learning Training Sets* | Massive, unstructured datasets for model training. | S3 + SageMaker | Parallel read throughput >10k ops/s; auto‑scaling via EMR/SageMaker | Storage cheap; data transfer to GPU instances incurs egress charges |
| **6** | *Real‑time Log Ingestion & Alerting* | Continuous append of log files for real‑time analysis. | S3 + Kinesis Data Firehose → Redshift | Near‑real‑time ingestion; durable writes | Minimal storage cost, higher throughput fees |

**Result**  
Implemented the above architecture in 4 sprints, reducing storage costs by **32%** and cutting data retrieval time from hours to minutes for compliance audits. The team adopted an *immutable‑object* policy that eliminated accidental deletes (0 incidents over 18 months).  

**Reflection**  
I own every layer—from bucket policies to lifecycle rules—and continually dive deep into CloudWatch metrics to spot cost anomalies. I learned that choosing the right tier early saves money; shifting from Standard to IA after 30 days cut egress by 45%. This approach aligns with **Ownership**, **Dive Deep**, and **Deliver Results**—Amazon’s leadership principles at work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
