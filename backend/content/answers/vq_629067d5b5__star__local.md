---
qid: vq_629067d5b5__star__local
question: Difference between logical and physical plan?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 364
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:01:29-05:00'
sources: []
---

**Situation** – While refactoring our nightly ETL pipeline for the retail analytics platform, we noticed a 30 % slowdown during the join between the sales fact table and the product catalog after migrating from Hive to Spark SQL.

**Task** – I had to diagnose whether the bottleneck was in the query design (logical plan) or the execution strategy (physical plan), and then re‑optimize the pipeline so that the nightly job finished within its 3 hour window.

**Action** – First, I ran `EXPLAIN logical` on the problematic SQL to inspect the transformation steps: a wide join, filter pushdown, and aggregate grouping. The logical plan was fine; it showed the correct sequence of joins and projections. Next, I examined `EXPLAIN physical`, which revealed that Spark had chosen a shuffle hash join with a default broadcast threshold too low for our catalog size, causing unnecessary shuffling of both datasets. I adjusted the broadcast join threshold (`spark.sql.autoBroadcastJoinThreshold`) to 200 MB, added a partitioning hint on the sales fact table, and rewrote the query to use `JOIN` hints that forced a sort‑merge join for larger partitions. I also enabled adaptive execution to let Spark choose the best shuffle strategy at runtime.

**Result** – The nightly job now completes in 1 hour and 45 minutes, cutting latency by 55 %. I learned that understanding the distinction between logical (what operations are performed) and physical (how they’re executed) plans is crucial for targeted performance tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
