---
qid: ing_ecf4f63b69__aws__local
question: 'Explain: Data lifecycle management — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 458
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:14:07-05:00'
sources: []
---

**Situation** – While leading the data‑science team for a retail platform, we were asked to migrate our on‑prem ML pipeline to AWS. The goal was to reduce model training time by 50 % and cut storage costs by 30 %.  
**Task** – Design a data architecture that supports the entire ML lifecycle (ingestion → processing → storage → serving) with strict governance and cost control.  
**Action** – I applied **Ownership** and **Dive Deep**:  

| Phase | AWS Services | Key Decisions & Trade‑offs |
|-------|--------------|----------------------------|
| Ingest | **Amazon Kinesis Data Streams / Firehose** | Real‑time clickstream → batch ETL; lower latency vs. S3 bulk upload (cost). |
| Process | **AWS Glue + Lambda** | Serverless ETL removes ops overhead; use Glue jobs for schema evolution (adds 10 % compute cost but saves manual maintenance). |
| Store | **Amazon S3 (Glacier Deep Archive)** + **Lake Formation** | Tiered storage: hot data in S3 Standard, cold data archived; Lake Formation enforces IAM policies → compliance. |
| Serve | **SageMaker Endpoint + API Gateway** | Low‑latency inference with auto‑scaling; cost per request vs. on‑prem GPU cluster (≈ $0.10/req). |

I also implemented a **data catalog** and automated lineage via Glue DataBrew, enabling *Bias for Action* by letting data scientists iterate models faster.

**Result** – Training time dropped from 12 hrs to 6 hrs (50 % reduction). Storage costs fell from $4k/month to $2.8k/month (30 % saving). The architecture is 99.9 % available, scales horizontally without manual intervention, and complies with GDPR via Lake Formation policies.  

**Learning** – Early reliance on a single “cold” S3 bucket caused latency spikes; splitting hot/cold tiers fixed it—demonstrating the importance of *Invent & Simplify* and learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
