---
qid: vq_ec6ae4afe5__star__local
question: how to join two larger tables in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 326
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:25:46-05:00'
sources: []
---

**Situation** – In my last role I was tasked with generating a daily sales report by joining our 12 GB fact table (orders) with a 5 GB dimension table (products). The existing Hive query ran for over an hour on the cluster and was hitting OOM errors.  
**Task** – I needed to rewrite the job in Spark so that it completed within 10 minutes, kept memory usage under control, and produced the same metrics (total sales per category).  
**Action** – First I inspected the data distribution: orders were skewed by a few high‑volume product IDs. I repartitioned the fact table on `product_id` using `repartitionByRange`, then broadcast‑joined the smaller dimension table with `broadcast(products)`. To avoid shuffling of the large fact table, I used `joinWith` to preserve the original partitioning and enabled Tungsten memory optimizations (`spark.sql.execution.arrow.enabled=true`). I also set a dynamic threshold for broadcast size (80 MB) and added a fallback shuffle join if the dimension grew.  
**Result** – The new Spark job finished in 8 minutes, reduced peak executor memory from 12 GB to 6 GB, and returned identical revenue totals. This exercise taught me how partitioning strategy, broadcast joins, and runtime tuning can dramatically improve large‑table joins in Spark.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
