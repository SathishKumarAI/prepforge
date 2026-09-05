---
qid: vq_d90c363f83__star__local
question: '? How would you debug and restart the process ?'
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 363
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:22:33-05:00'
sources: []
---

**Situation:**  
In my last role, our nightly Spark ETL job that ingested sensor logs from AWS S3 into Redshift started failing after a recent schema change. The job would stall mid‑execution and the pipeline’s SLA of 2 hrs was at risk.

**Task:**  
I needed to identify why the job halted, fix the root cause, and resume processing without losing any data or violating our data freshness requirement.

**Action:**  
First, I inspected the Spark UI and logs in CloudWatch. The error pointed to a `NullPointerException` in the UDF that parsed nested JSON fields. Using the same schema snapshot from before the change, I created a small test dataset locally and ran the UDF in PySpark with `--conf spark.debug.maxToStringFields=1000`. This revealed an unexpected null field that our new schema didn’t handle. I updated the UDF to include defensive checks and added unit tests. Next, I patched the job’s DAG in Airflow to mark the failed task as “skipped” so downstream tasks wouldn’t reprocess already ingested data. Finally, I reran only the missing partitions by passing a `--partition` flag to the Spark submit script.

**Result:**  
The job completed within 45 minutes, restoring the SLA. We processed an additional 3.2 TB of logs that had been stuck, and post‑mortem metrics showed a 30% reduction in future failures due to schema drift. I learned the importance of incremental testing and using Airflow’s task state management for safe restarts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
