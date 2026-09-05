---
qid: ing_0f640d3ea6__star__local
question: 'Explain: Query Optimization — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 361
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:59:08-05:00'
sources: []
---

**Situation** – In my last role I was building a recommendation engine for an e‑commerce platform that pulled user behavior from a PostgreSQL data warehouse. The nightly batch job that trained the model ran over 4 hours, and we were hitting a 90% CPU usage spike right before midnight, which threatened to block other critical analytics queries.

**Task** – My goal was to cut the training job runtime by at least 40% without changing the underlying ML pipeline or compromising feature quality. I needed to identify slow SQL operations that were bottlenecking the data extraction step.

**Action** – I started with `EXPLAIN ANALYZE` on the materialized view that fed the model, spotting a full table scan on a 50 GB clickstream table. I added a composite index on `(user_id, event_timestamp)` and rewrote subqueries into CTEs to enable better planner estimates. Then I turned on PostgreSQL’s `enable_seqscan = off` for that job and partitioned the table by month to keep working sets small. Finally, I scripted an automatic nightly refresh of a pre‑aggregated summary table, reducing the need for expensive joins during training.

**Result** – The optimized query cut the nightly job from 4 hours to just 2 hours and lowered peak CPU usage to 45%. We also freed up 3 CPU cores for other analytics workloads. I learned that small index tweaks and thoughtful partitioning can have a dramatic impact on ML pipeline performance, and that profiling tools like `EXPLAIN` are indispensable for diagnosing hidden bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
