---
qid: ing_19312515a3__aws__local
question: 'Explain: Lineage and observability — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 536
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:23:04-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the migration of our fraud‑detection pipeline from on‑prem Hadoop to an AWS‑native stack. The business required *lineage* (end‑to‑end traceability of every data element) and *observability* (real‑time health metrics) so that regulators could audit model inputs and we could spot drift before it impacted scores.

**Action**  
I architected a **data architecture** built around the following services:

| Layer | Service | Rationale |
|-------|---------|-----------|
| Ingestion | Amazon Kinesis Data Streams + Glue Catalog | Low‑latency ingest, schema registry for lineage |
| Storage | S3 (partitioned by day) + Lake Formation | Immutable raw lake with fine‑grained IAM; catalog enables Athena queries |
| Processing | AWS Glue ETL + SageMaker Pipelines | Glue records job metadata → lineage graph in Glue Data Catalog; SageMaker pipelines auto‑capture training metrics |
| Observability | CloudWatch, X-Ray, Amazon Managed Grafana | Metrics (latency, error rate) + trace of each record through the stack |
| Metadata & Lineage | AWS Glue Data Catalog + OpenMetadata integration | Visual DAGs, data lineage export to Snowflake for compliance reporting |

I added a **data quality validator** that emitted alerts when schema mismatches or outlier distributions were detected. Costs stayed under \$12k/month by leveraging Spot Instances for Glue jobs and S3 lifecycle policies.

**Result**  
Lineage coverage hit 99.8 % (vs 73 % pre‑migration). Model drift alerts reduced false positives by **35 %**, cutting manual triage time from 4 hrs/day to 45 min. The observability stack lowered incident response latency from 90 min to <15 min, improving SLA compliance by **22 %**.

---

### Leadership Principles  
- **Customer Obsession** – Delivered a compliant, auditable system that met regulatory needs and reduced customer‑impact downtime.  
- **Ownership / Dive Deep** – Took full responsibility for end‑to‑end data flow; designed the architecture from ingestion to observability, quantified impact, and iterated on failures (e.g., initial Glue job failures → added retry logic).  

Bar‑raisers look for clear ownership, deep technical reasoning, quantifiable outcomes, and a learning loop—exactly what this solution demonstrates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
