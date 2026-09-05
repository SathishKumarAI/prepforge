---
qid: ing_4bbbeac52d__star__local
question: 'Explain: Index lifecycle management — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 321
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:59:45-05:00'
sources: []
---

**Situation** – At Uber I was part of the data platform team that had to serve real‑time search for millions of drivers and riders across 50 cities. Every trip, rating, promotion event created a new index in our ledger store; by mid‑year we were generating roughly 3 trillion index entries per day.

**Task** – My goal was to design an index lifecycle management system that could automatically archive or delete obsolete indexes without manual intervention, while keeping query latency below 50 ms and storage costs under $1.2M/month.

**Action** – I built a two‑tier policy engine: first, a “hot” tier in memory using RocksDB for the most recent 48 hours; second, an “archive” tier on S3 with compaction jobs scheduled via Apache Airflow. I implemented TTL metadata tags and leveraged a Kafka stream to push expired keys to a background worker that performed bulk deletes in batch. We also added a “hot‑spot” detector using Prometheus alerts to trigger pre‑warming of frequently accessed indices, reducing cold‑start times.

**Result** – After deployment we cut storage costs by 35 % (from $1.7M to $1.2M/month) and maintained 99.8 % of queries under the latency target. The system scaled to 4 trillion indexes/day with zero manual tuning, proving that automated lifecycle management is essential for petabyte‑scale data platforms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
