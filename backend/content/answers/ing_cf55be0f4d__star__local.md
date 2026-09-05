---
qid: ing_cf55be0f4d__star__local
question: 'Explain: spread this data in the distributed system'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 344
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:23:53-05:00'
sources: []
---

**Situation**  
At my previous company we were training a recommendation model on a dataset of 12 TB user interaction logs. The training job had been running for weeks on a single node and the I/O bottleneck was killing our 48‑hour SLA.

**Task**  
I needed to shard the data across a Spark cluster, ensuring each executor could read its partition in parallel while keeping shuffling minimal so that the model converged within the deadline.

**Action**  
First, I converted the raw logs into Parquet and used Hive’s `CREATE TABLE ... PARTITIONED BY (date)` to store them on HDFS. Then I leveraged Spark’s `repartitionByRange` based on user ID ranges to evenly distribute data across 20 executors. To avoid hotspotting, I added a salt column and performed a secondary shuffle before the training stage. During the model run, I enabled Kryo serialization and tuned the executor memory fraction to 0.6, which reduced GC pauses by ~30 %. Finally, I used Spark’s `DataFrame.write.partitionBy` to write back intermediate results for incremental learning.

**Result**  
The distributed pipeline cut data‑loading time from 5 hours to under 45 minutes, and overall training completed in 3.2 days—well within the SLA. Accuracy improved by 1.8 % due to more frequent updates. I learned that careful partitioning combined with format choice can dramatically reduce shuffle overheads in large‑scale ML workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
