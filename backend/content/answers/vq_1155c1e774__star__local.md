---
qid: vq_1155c1e774__star__local
question: How to optimize join of 2 big tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 327
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:48:30-05:00'
sources: []
---

**Situation:**  
At my previous company we had two 500‑million row fact tables—sales and inventory—that needed to be joined nightly for a consolidated dashboard. The raw join on the shared key took over eight hours in Hive, causing the data pipeline to miss its 6 pm SLA.

**Task:**  
I was tasked with cutting the join runtime to under one hour while keeping memory usage within our cluster limits and preserving all business‑critical columns.

**Action:**  
First I profiled the tables: the sales table had a high cardinality on `product_id`, but inventory was sparse. I rewrote the join as a broadcast hash join in Spark, broadcasting the smaller inventory dataset (≈ 50 GB after partition pruning). I also added a custom partitioner that bucketed both datasets by `region` to reduce cross‑partition traffic. To keep shuffle size down, I pre‑aggregated each table on `product_id` and `date`, then performed the join. Finally, I tuned Spark’s executor memory (4 GB per executor) and used Kryo serialization.

**Result:**  
The nightly job now completes in 45 minutes—an 80% reduction in runtime—and memory usage stays below 70% of the cluster capacity. The dashboard refreshes on time, and we saved roughly $2K/month in cloud compute costs. This experience taught me that profiling, choosing the right join strategy (broadcast vs shuffle), and careful partitioning are key to scaling large joins.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
