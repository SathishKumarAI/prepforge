---
qid: vq_4072a021d5__star__local
question: How can we join two bigger tables in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 305
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:56:12-05:00'
sources: []
---

**Situation:** In my last role I was tasked with generating a daily sales report that required merging our 5 TB order table with a 3 TB customer metadata table in Spark on an EMR cluster.

**Task:** I had to perform the join within a 30‑minute ETL window while keeping shuffle memory usage below 12 GB per executor and ensuring no data skew caused slow stages.

**Action:** First, I broadcasted the smaller customer table using `broadcast()` after partitioning it by `customer_id`. I also added a custom hash partitioner on both datasets to align partitions. To mitigate skew, I identified high‑frequency keys (top 1% of customers) and split them into separate “skew” partitions, then recombined results with a union. Finally, I used the Tungsten optimizer by enabling `spark.sql.shuffle.partitions` to 200 and turned on whole-stage code generation.

**Result:** The join completed in 18 minutes, under the 30‑minute SLA, using only 10 GB of executor memory each. The daily report accuracy improved from a 0.3% error rate to <0.01%. I learned that careful partitioning and skew handling can dramatically reduce shuffle costs in large Spark joins.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
