---
qid: vq_fa7df7c660__star__local
question: What is spark executors?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 372
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:27:50-05:00'
sources: []
---

**Situation** – In my last role I was tasked with migrating our nightly ETL pipeline from a Hadoop MapReduce job that took 4 hours to a Spark-based solution on AWS EMR. The old process produced a daily data mart for the business intelligence team, but the latency was too high for their real‑time dashboards.

**Task** – My goal was to cut runtime below two hours while keeping memory usage under our $0.50 per instance budget and ensuring the job could scale to 10 TB of raw logs without spilling to disk.

**Action** – I started by profiling the existing MapReduce job with Spark UI after a pilot run. The bottleneck turned out to be executor memory fragmentation: we had 8 executors on m5.large nodes, each allocated 4 GB but only used ~2 GB, yet GC churn was high. I re‑configured the cluster to use 16 executors on m5.xlarge instances with 6 GB RAM per executor, set `spark.executor.memory=6g`, and tuned `spark.sql.shuffle.partitions` from 200 to 800 to better match our data size. I also added `--conf spark.dynamicAllocation.enabled=true` so the cluster could scale out during peak shuffle phases.

**Result** – The refactored job completed in 1 hour 45 minutes, a 58% reduction in runtime and an overall cost savings of ~30%. I learned that executor sizing is a balancing act between memory, parallelism, and cost, and that early profiling with the Spark UI can reveal hidden GC bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
