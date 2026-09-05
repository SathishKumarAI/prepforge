---
qid: ing_da7f8af794__star__local
question: 'Explain: Store Checksums Where They Catch the Failure'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 327
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:45:03-05:00'
sources: []
---

**Situation:**  
At my previous company we built a nightly ingestion pipeline that pulled sensor data from thousands of IoT devices, processed it in Spark, and stored the results in a distributed Parquet store. After a recent update to our schema, a batch started returning corrupted files—downstream analytics missed 12 % of the rows.

**Task:**  
I needed to identify where the corruption was introduced, guarantee data integrity for future runs, and roll back or repair any affected batches without halting the pipeline.

**Action:**  
First, I added SHA‑256 checksums to each device’s raw payload before it hit Spark. In the mapper step, I computed a rolling checksum of every 10 MB block and persisted those hashes alongside the Parquet files in HDFS metadata. Then, during the reducer phase, I compared the incoming checksum stream against the stored hash; any mismatch triggered an immediate abort and logged the offending device ID. For existing corrupted batches, I re‑ran only the flagged blocks using a lightweight Spark job that recomputed checksums on the fly, replacing the bad Parquet segments.

**Result:**  
The pipeline now detects corruption within seconds of ingestion, reducing downstream data loss from 12 % to <0.1 %. The checksum store added only ~5 % overhead in storage and negligible runtime cost (<2 s per block). I learned that embedding integrity checks at the block level provides rapid failure localization without sacrificing throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
