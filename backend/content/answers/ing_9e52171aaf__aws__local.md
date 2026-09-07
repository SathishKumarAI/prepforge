---
qid: ing_9e52171aaf__aws__local
question: 'Explain: Large Data Sets — HDFS Architecture Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 411
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:22:45-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
At my previous role I led the migration of a 2 PB on‑prem Hadoop cluster to an Amazon EMR solution so our data science team could train models faster and reduce infrastructure spend.

**Action (Dive Deep + Bias for Action)**  
1. **Architecture** – Replaced HDFS with *Amazon S3* as immutable object store, using *S3 Select* for sub‑dataset reads.  
2. Configured *EMR* clusters with *EC2 Spot Instances* (p4d.xlarge) and *Auto Scaling* groups to auto‑spin based on *YARN* metrics.  
3. Employed *AWS Glue* as a catalog, enabling *Athena* queries for quick exploratory analysis.  
4. Implemented *S3 Lifecycle policies* to archive infrequently accessed data to Glacier, cutting storage costs 40 %.  
5. Added *Amazon Kinesis Data Firehose* for real‑time ingestion, feeding a *Redshift Spectrum* layer for downstream ML pipelines.

**Result (Deliver Results)**  
- **Training time** dropped from 48 h to 8 h (6× speed).  
- **Operational cost** fell by $120K annually.  
- Data scientists now run “cold‑start” experiments in minutes, increasing model iterations per quarter from 4 to 12.

**Learning & Bar‑raiser Insight**  
I owned the end‑to‑end migration, performed a rigorous *cost/benefit* analysis, and iterated on cluster sizing based on real usage data. The bar‑raiser will notice that I quantified impact (speed & cost), demonstrated deep technical understanding of AWS services, and applied lessons from initial spot‑instance failures to refine auto‑scaling rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
