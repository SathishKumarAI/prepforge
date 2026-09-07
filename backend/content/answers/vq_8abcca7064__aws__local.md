---
qid: vq_8abcca7064__aws__local
question: what is broadcast variable?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 424
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:02:13-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Ownership* & *Dive Deep*.  
> **Scenario (S):** I was leading a nightly ETL pipeline that aggregated millions of clickstream events from S3 into a data warehouse on Redshift. The job ran 30 minutes longer than SLA because every worker repeatedly fetched the same user‑profile lookup table.  
> **Task (T):** Reduce runtime and cost by eliminating redundant data movement across the cluster.  
> **Action (A):** I introduced an **Apache Spark broadcast variable** to ship a compact, read‑only copy of the 1 GB lookup table to every executor only once. The variable was persisted in memory (`MEMORY_AND_DISK`) so it survived spills. I refactored the join logic to use `broadcast(df)` and added unit tests that asserted the broadcast size stayed under 200 MB after compression.  
> **Result (R):** Runtime dropped from 30 min to **12 min** (60% faster). With a 10‑node EMR cluster, this saved ~\$0.50 per run, or **\$180/month** on our production workload. The pipeline now consistently meets the 15‑minute SLA, and I added a monitoring rule that alerts if broadcast size grows beyond 250 MB—preventing future regressions.  

**Technical notes:**  
- Used EMR with Spark 3.x; broadcasted via `SparkContext.broadcast`.  
- Leveraged S3 for source data, Redshift Spectrum for query layer.  
- Trade‑off: higher memory usage per executor; mitigated by using `MEMORY_AND_DISK` and tuning `spark.sql.autoBroadcastJoinThreshold`.  

**Bar‑raiser takeaway:** Demonstrates *ownership* of performance, *deep dive* into Spark internals, quantifiable impact, and a safeguard to learn from future changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
