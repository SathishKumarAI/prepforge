---
qid: vq_5590bf4144__aws__local
question: How can you handle missing values in Hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 499
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:52:08-05:00'
sources: []
---

**Situation (S)**  
In a recent ETL pipeline for a retail analytics platform, we ingested 3 TB of daily click‑stream logs into HDFS via Spark. About 12 % of the records had missing `user_id` or `session_duration`, causing downstream BI dashboards to show nulls and skewed metrics.

**Task (T)**  
My goal was to design a robust, scalable strategy that preserved data integrity without slowing processing, while keeping costs low for our on‑prem Hadoop cluster that runs on spot instances.

**Action (A)**  
1. **Data Profiling & Validation** – I added a Pre‑Processing step in Spark using `spark.sql` to compute missing‑value statistics per column and flag anomalies.  
2. **Imputation Logic** – For numeric fields (`session_duration`) I used median from the same hour/day window; for categorical (`user_id`) I replaced nulls with a synthetic “anonymous” token, logging each substitution in a separate audit table.  
3. **AWS Integration** – The Spark job writes results to an S3 bucket (using EMRFS) and triggers AWS Glue crawlers that update the Data Catalog, ensuring downstream Athena queries see cleaned data immediately.  
4. **Cost & Availability** – By running the job on EMR with *Managed Scaling* and spot instances, we kept compute costs ~35 % lower than on‑prem. The audit table in DynamoDB guarantees durability and quick lookups for rollback.

**Result (R)**  
After deployment:  
- Missing value rate dropped from 12 % to <0.1 %.  
- BI latency decreased by 27 %, and revenue attribution accuracy improved by 4 pp, directly boosting forecast precision.  
- Cost savings of $18k annually were realized.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Ensured dashboards reflected accurate metrics for business stakeholders.  
- **Ownership / Dive Deep** – Took full responsibility for data quality, dissected root causes, and engineered a repeatable solution.  

**Bar‑raiser Takeaway**  
They’ll look for: clear ownership, deep technical justification (median vs mean, spot scaling), quantified impact, and lessons learned (e.g., handling future schema changes by adding dynamic imputation rules).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
