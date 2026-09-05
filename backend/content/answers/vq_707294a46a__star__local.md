---
qid: vq_707294a46a__star__local
question: what is broadcast variable in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 316
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:04:03-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we had a nightly ETL job that joined a large customer table (≈ 5 M rows) with a small lookup table of fraud rules (~ 200 rows). Each run was taking over 30 minutes because Spark kept shuffling the entire customer dataset to every executor.

**Task** – I needed to cut processing time by at least 50% while keeping memory usage within our cluster limits (8 TB RAM).

**Action** – I introduced a broadcast variable for the fraud rules. Using `SparkContext.broadcast(fraudRules)` I sent the small lookup table once to each executor, eliminating the shuffle. I then rewrote the join as a map‑side operation (`customers.mapPartitions{…}`) that referenced the broadcasted data. To keep memory tight, I serialized the broadcast with Kryo and set `spark.driver.maxResultSize` appropriately. I also added a unit test to verify the broadcast was cached across partitions.

**Result** – The job time dropped from 30 minutes to 12 minutes—a 60% improvement—while RAM usage stayed below 4 TB. I learned that careful use of broadcast variables can drastically reduce shuffle overhead, but only when the dataset is truly small and immutable; otherwise it can bloat executors unnecessarily.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
