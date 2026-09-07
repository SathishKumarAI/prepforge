---
qid: vq_8d9d4dad52__aws__local
question: can you build Spark with any particular Hadoop version?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 501
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:03:04-05:00'
sources: []
---

**Situation / Task**  
I was tasked to upgrade our data lake from EMR 5.29 (Spark 2.4) to EMR 6.12 (Spark 3.1) while keeping the existing Hive‑based ETL pipelines intact. The goal was to reduce query latency by 30 % and keep cost below 10 % of current spend.

**Action**  
* **Dive Deep + Ownership:** I mapped every Spark job’s dependencies, noting that several UDFs used Hadoop‑specific APIs (`org.apache.hadoop.fs.FileSystem`). I consulted the EMR release notes and found that Spark 3.x on EMR requires Hadoop 3.2 or newer; older Hadoop jars cause class‑path conflicts.  
* **Design & AWS Services:**  
  * Created a **dual‑cluster strategy**: an EMR 6.12 cluster for new jobs and an EMR 5.29 cluster for legacy pipelines, both on the same VPC with shared S3 data lake (`s3://company-datalake/`).  
  * Implemented a **step‑level migration script** that replaces Hadoop jars in `conf` and rewrites UDF imports to use `org.apache.hadoop.fs.Path`.  
  * Added **Glue Data Catalog** integration so both clusters share metadata, enabling incremental migrations without re‑cataloging.  
* **Bias for Action:** I spun up a pilot cluster, ran all nightly jobs, and used CloudWatch metrics to compare execution times.

**Result**  
- Migration completed in 4 weeks (vs the planned 6).  
- Query latency dropped from 12 s to 8 s on average (+33 %).  
- Cluster‑cost reduced by 7 % due to better Spark 3.1 performance and the ability to use smaller instance types.  
- Post‑migration, we automated the step script in CodePipeline, ensuring future upgrades are self‑serving.

**Learning**  
The key failure point was overlooking Hadoop version incompatibility; after adding a pre‑flight check that validates `hadoop.version` against Spark’s supported list, we eliminated runtime errors. This reinforces **Customer Obsession** (stable pipelines for analysts) and **Ownership** (end‑to‑end migration).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
