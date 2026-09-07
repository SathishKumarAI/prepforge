---
qid: ing_de8688d0a4__aws__local
question: 'Explain: Data Replication — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 386
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:42:46-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of our ML model training pipeline from a single‑region data lake to a multi‑region architecture to eliminate downtime during regional outages. The goal was to guarantee 99.95 % availability while keeping cost under $50k/month.

**Action**  
*Ownership & Dive Deep*: I scoped the failure modes (network partitions, S3 durability issues) and chose **Amazon S3 Cross‑Region Replication (CRR)** combined with **AWS Glue** for incremental ETL. To keep read latency low we added an **Amazon CloudFront** edge cache that invalidates on new data via Lambda@Edge.  
*Bias for Action*: I scripted the replication policy in Terraform, ran a staged rollout, and set up CloudWatch metrics (replication lag, S3 request counts).  
*Invent & Simplify*: Instead of a full‑scale Kafka cluster, we leveraged **Amazon Kinesis Data Streams** to buffer new records; on failure it retries locally before CRR pushes.  

**Result**  
- Replication lag dropped from 4 hrs (manual sync) to <30 s.  
- Uptime increased from 99.80 % to 99.97 %.  
- Monthly cost grew only 12 %, staying below budget.  

**Reflection**  
The pilot revealed that CRR’s eventual consistency could delay model retraining; we mitigated this by using **S3 Event Notifications** to trigger Glue jobs immediately, a lesson that improved our downstream CI/CD pipeline. This experience reinforced the importance of owning every layer—from data ingestion to final inference—and validates my deep technical chops while delivering measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
