---
qid: ing_740ae9c765__star__local
question: 'Explain: Time series databases — Timeseries Databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 387
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:26:21-05:00'
sources: []
---

**Situation:**  
During my last role at a fintech startup, we were building a real‑time fraud detection system that needed to ingest and analyze millions of transaction events per day. Our existing relational database was choking on write throughput and lagging in query latency, especially for time‑window aggregations.

**Task:**  
I had to design a storage layer that could handle high write rates, provide fast range queries over timestamps, and integrate with our Spark/ML pipeline for anomaly scoring—all while keeping costs under the $2 M annual budget.

**Action:**  
I evaluated several options (InfluxDB, TimescaleDB, ClickHouse) and chose **TimescaleDB** because it extends PostgreSQL with hypertables, giving us familiar SQL and built‑in compression. I modeled each transaction as a row in a hypertable partitioned by 1‑hour intervals, added continuous aggregates for hourly totals, and enabled the `timescaledb` extension’s automatic retention policy to drop data older than one year. For ingestion, I set up a Kafka Connect sink that streamed events into TimescaleDB via bulk inserts, achieving >200k TPS with <10 ms latency. I also built a lightweight REST API on top of Postgres for the ML jobs to fetch recent windows.

**Result:**  
Write throughput increased from 5 kTPS to 250 kTPS, query latency dropped from 3.2 s to 150 ms for 1‑hour aggregates, and storage costs fell by 30% thanks to compression. The fraud model’s precision improved by 12% because it now had timely access to fresh data. I learned that choosing the right time‑series database can drastically reduce engineering overhead while meeting strict performance targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
