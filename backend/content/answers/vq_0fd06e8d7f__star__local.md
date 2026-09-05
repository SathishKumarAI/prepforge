---
qid: vq_0fd06e8d7f__star__local
question: what do you mean by data locality?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 329
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:48:00-05:00'
sources: []
---

**Situation** – In my last role at a streaming analytics platform, we were migrating our batch ETL from a single Hadoop cluster to a multi‑region Spark deployment. The latency of downstream dashboards had spiked from 2 s to over 12 s because data was being shuffled across datacenters during joins.

**Task** – I needed to reduce the end‑to‑end query time below 5 s while keeping cost per month under our $30k cap, by improving how Spark accessed the raw log files.

**Action** – First, I profiled the job with Spark UI and found that 70% of the shuffle traffic was cross‑region. I introduced a “data locality” strategy: partitioned the Parquet tables by ingestion date and stored them in region‑specific S3 buckets. Then, I rewrote the join logic to use broadcast joins for small dimension tables and added `spark.sql.shuffle.partitions` tuning to match local node counts. Finally, I leveraged Databricks’ “coalesce” feature to co-locate related partitions on the same executor.

**Result** – Query latency dropped from 12 s to 4.3 s (a 65% improvement), and cross‑region traffic fell by 80%, saving roughly $5k per month in egress costs. I learned that thoughtful partitioning and locality-aware shuffling can dramatically cut both time and money, especially at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
