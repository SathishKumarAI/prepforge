---
qid: ing_911512cf81__aws__local
question: 'Explain: Characteristic #5: It’s a single source of truth'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 343
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:54:08-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of an on‑prem NLP pipeline to SageMaker for a global e‑commerce platform. The data science team was pulling training datasets from three disparate S3 buckets and two RDS instances, which caused version drift and inconsistent model accuracy.

**Action**  
I instituted a *single source of truth* (SSOT) by creating a **centralized Glue Data Catalog** that stored all raw features in one partitioned Parquet table. I wrote an ETL job that ran nightly, merged the three sources, applied a deterministic hashing key, and updated the catalog metadata. The pipeline now references only this catalog; downstream SageMaker training jobs use the same Athena query. To enforce ownership I added IAM policies that grant read‑only access to the catalog for data scientists and full write permissions only to the ETL role.

**Result**  
After deployment, model drift dropped from 12% to <2%, and inference latency decreased by 35 ms because the single dataset eliminated redundant reads. Operational cost fell 18 % by removing duplicated S3 storage. The SSOT also enabled auditability: we can now trace every training sample back to a single lineage record.

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end data flow, dove deep into schema evolution, quantified impact with A/B tests, and learned that even small duplication bugs can cascade into large accuracy losses. This experience reinforced *Ownership* and *Dive Deep*—core Amazon principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
