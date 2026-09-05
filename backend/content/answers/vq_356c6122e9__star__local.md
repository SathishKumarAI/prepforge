---
qid: vq_356c6122e9__star__local
question: How does one count different data values in a column?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 349
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:54:47-05:00'
sources: []
---

**Situation** – At my previous company we had an e‑commerce data warehouse where the `orders` table grew to over 120 million rows. The business asked for a quarterly report on how many unique customers placed orders each month, but our existing ETL pipeline was pulling the entire table into memory and using a Python set, which stalled during peak loads.

**Task** – I needed to design an efficient method that could run in under two minutes on our Spark cluster and return accurate counts for each of the last twelve months without exhausting memory.

**Action** – I re‑implemented the logic in Spark SQL. First, I added a `month` column derived from `order_date`. Then I used `groupBy("month").agg(countDistinct("customer_id") as unique_customers)`. To keep shuffle size low, I partitioned by month and cached only the relevant columns (`customer_id`, `month`). I also added a small Bloom filter to pre‑filter obvious duplicates before counting. The job ran in 90 seconds on a 32‑node cluster, using less than 4 GB of executor memory per node.

**Result** – The report now updates every morning with the correct distinct customer counts (e.g., January had 23,456 unique customers). This reduced ETL time by 70% and freed up resources for other analytics workloads. I learned that leveraging built‑in aggregate functions and proper partitioning can drastically improve scalability in big‑data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
