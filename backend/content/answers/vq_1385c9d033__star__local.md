---
qid: vq_1385c9d033__star__local
question: What format (JSON, Avro, Parquet)?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 355
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:48:45-05:00'
sources: []
---

**Situation** – In the summer of 2023 I was leading a migration for our nightly batch pipeline that ingested millions of user activity logs from Kafka into Snowflake. The existing system stored raw JSON in S3, which made downstream analytics slow and expensive.

**Task** – My goal was to reduce storage costs by 30 % while improving query performance on the data warehouse, all within a two‑week sprint before the next reporting cycle.

**Action** – I evaluated three formats: JSON (baseline), Avro, and Parquet. First, I benchmarked read/write times using Spark on a sample of 10 GB of logs. JSON was 2× slower to parse than Avro, but Parquet gave the best compression (70% vs 30%) and columnar reads for our analytic queries. I also added schema evolution support by defining an Avro schema registry; however, because Snowflake natively optimizes Parquet with its micro‑partitioning, I decided on Parquet. I rewrote the Spark job to read JSON from Kafka, cast fields according to a strict schema, and write out Parquet with Snappy compression. I also added a unit test that verified column metadata against the original JSON.

**Result** – The new pipeline cut storage costs by 32 % (from $1.2M to $0.8M annually) and reduced query latency on key metrics from 45 s to 12 s. I learned that choosing Parquet for analytics workloads, even when source data is JSON, delivers the best balance of cost, performance, and schema enforcement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
