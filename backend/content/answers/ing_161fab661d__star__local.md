---
qid: ing_161fab661d__star__local
question: 'Explain: Materialized View — Top 6 Data Management Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 312
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:12:43-05:00'
sources: []
---

**Situation** – In my last role, we were building a recommendation engine for an e‑commerce platform that had over 10 million user interactions per day. The real‑time inference pipeline was slow because it had to compute similarity scores on the fly from raw click logs stored in HDFS.

**Task** – I needed to reduce latency so that recommendations could be served within 200 ms while still reflecting the latest user behavior, and also keep storage costs under control.

**Action** – I introduced a materialized view pattern: we created a compact “user‑item interaction” table in Spark SQL, refreshed it every hour with incremental ETL. The view aggregated counts, last‑interaction timestamps, and weighted click scores. We then indexed this view in Delta Lake and exposed it through an OLAP engine (ClickHouse). For the ML model, we precomputed feature vectors from the materialized view using a PySpark UDF and stored them as Parquet shards partitioned by user segment. The inference service queried these shards instead of raw logs.

**Result** – Query latency dropped from ~1 s to 150 ms, throughput increased by 4×, and storage usage fell by 60% because the view discarded obsolete raw events. I learned that materialized views can bridge real‑time demands with batch‑friendly ML pipelines, but they require careful refresh cadence and schema evolution handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
