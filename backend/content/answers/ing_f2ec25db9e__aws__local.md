---
qid: ing_f2ec25db9e__aws__local
question: 'Explain: Data Mesh Architectures — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 386
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:25:56-05:00'
sources: []
---

**Situation & Ownership**  
When a fintech client needed real‑time fraud scoring for 50 M daily transactions, the legacy monolith couldn’t ingest new feature pipelines fast enough. I owned the redesign and championed a **Data Mesh** approach to decouple data domains (payments, risk, compliance) from downstream ML services.

**Task & Dive Deep**  
Goal: deliver low‑latency, self‑serve datasets while keeping governance tight. I mapped each domain’s data products to an AWS Lake Formation catalog, used Glue for incremental ETL, and exposed them via Athena/Redshift Spectrum. Each domain owned its schema, lineage, and quality metrics (S3 bucket lifecycle + CloudWatch alarms).

**Action & Design**  
- **Compute:** Spot‑based EMR clusters for batch feature engineering; Kinesis Data Streams + Lambda for real‑time feature enrichment.  
- **Storage:** Partitioned Parquet on S3 with S3 Intelligent Tiering, cost ≈ $0.02/GB‑month.  
- **Security & Governance:** Lake Formation permissions + IAM roles per domain, automated compliance checks via AWS Config rules.  
- **Observability:** Data Quality dashboards in QuickSight; alerts trigger auto‑rollback of faulty pipelines.

**Result & Learnings**  
Reduced feature latency from 30 min to < 2 s, cutting fraud loss by **18%** (≈ $12M/year). Data product adoption rose 4× within three months. Learned that ownership of data domains drives faster iteration but requires robust governance; balancing autonomy with central oversight is key for a healthy data mesh.

*Leadership Principles:* **Ownership**, **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
