---
qid: vq_e007d04c8d__star__local
question: How will you write custom partitioner?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 319
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:23:44-05:00'
sources: []
---

**Situation:** In a recent data lake migration project for an e‑commerce platform, we were ingesting millions of transaction logs daily into Spark. The default hash partitioner caused hotspot issues on the “country” dimension; one region (US) accounted for 70% of records and overwhelmed a single executor, slowing downstream analytics by 35%.

**Task:** I needed to design a custom partitioner that evenly distributed data across executors while preserving locality for country‑based aggregations, without adding significant overhead or breaking the existing ETL pipeline.

**Action:** Using Scala, I extended `org.apache.spark.Partitioner` and implemented a hash‑modulo algorithm with a weighted bucket strategy. First, I precomputed a histogram of record counts per country from a sample dataset. Then, for each partition, I calculated a target size and assigned countries to partitions so that the sum of their weights stayed within ±10% of the ideal load. I also added a fallback “catch‑all” bucket for rare countries to avoid excessive shuffling. The custom class was registered in SparkConf with `spark.serializer=org.apache.spark.serializer.KryoSerializer` to reduce serialization costs.

**Result:** After deploying the new partitioner, executor CPU utilization dropped from 85% to 55%, and end‑to‑end ETL time improved by 28%. I learned that combining statistical profiling with a lightweight custom partitioner can dramatically balance load without sacrificing data locality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
