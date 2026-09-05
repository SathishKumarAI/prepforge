---
qid: vq_f1d44dd46d__star__local
question: What is the difference between concurrency and parallelism?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 341
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:26:29-05:00'
sources: []
---

**Situation** – In a recent migration of our nightly ETL pipeline from on‑prem Hadoop to an AWS Glue/EMR cluster, the team noticed that the job was still taking 90 minutes despite adding more nodes. The SLA demanded sub‑45‑minute runs.

**Task** – I needed to identify whether we were bottlenecked by concurrency limits (waiting for resources) or by lack of parallelism (not splitting work across workers), and then adjust the job configuration accordingly.

**Action** – First, I profiled the Spark executor logs. They showed that each executor was handling a single partition of the input data; the rest of the cluster’s cores sat idle because our `spark.sql.shuffle.partitions` setting was still at 200 while we had 800 available cores. This indicated poor parallelism. I increased the number of partitions to match the cluster size and enabled dynamic allocation (`spark.dynamicAllocation.enabled=true`). I also turned on task serialization (`spark.serializer=org.apache.spark.serializer.KryoSerializer`) to reduce GC overhead, which improved concurrency by freeing up executors sooner.

**Result** – The job runtime dropped from 90 minutes to 35 minutes, exceeding the SLA. We also reduced CPU utilization spikes and achieved a more balanced workload across nodes. I learned that true performance gains come from tuning both parallelism (work distribution) and concurrency (resource contention), and that monitoring executor metrics is key to spotting which one to target first.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
