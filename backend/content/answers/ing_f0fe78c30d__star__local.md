---
qid: ing_f0fe78c30d__star__local
question: 'Explain: Time Series Databases — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 359
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:30:09-05:00'
sources: []
---

**Situation** – In my last role, the analytics team needed a new metric dashboard for IoT sensor data that was growing at ~10 GB/day. Our existing relational store couldn’t handle the write throughput and query latency for hourly aggregates.

**Task** – I had to design a time‑series database solution that would ingest high‑velocity streams, compress storage, support downsampling queries, and integrate with our Python‑based ML pipeline for anomaly detection.

**Action** – I scoped three options: InfluxDB, TimescaleDB, and an open‑source custom sharded PostgreSQL. After benchmarking write latency (≤5 ms) and query performance on 30‑day windows, I chose TimescaleDB because of its hypertable architecture and native continuous aggregates. I implemented a Kafka consumer that batch‑writes to the DB via asyncpg, set up retention policies to auto‑drop data older than one year, and created materialized views for daily/weekly statistics. For ML, I added a PL/Python UDF that pulls batches of recent sensor readings, feeds them into a pre‑trained LSTM model hosted in Docker, and writes anomaly flags back to the DB.

**Result** – Write throughput increased from 200 ops/s to 1,500 ops/s, query latency for 24‑hour aggregates dropped below 50 ms, and storage cost fell by 35% thanks to compression. The new pipeline enabled real‑time anomaly alerts that reduced downtime by 18%. I learned how architectural trade‑offs—write path optimization vs. query flexibility—directly impact ML workloads in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
