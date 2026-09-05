---
qid: ing_0fbef460a4__star__local
question: 'Explain: So the next use case and quickly — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 321
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:59:52-05:00'
sources: []
---

**Situation** – I was interviewing for a senior ML engineer role at a fintech startup that wanted to launch an automated credit scoring model. The data pipeline fed from real‑time transaction logs into a feature store, and the model needed sub‑second inference for every loan request.

**Task** – Design a database layer that could ingest millions of transactions per day, support fast read/write for training features, and provide strong consistency for the live prediction service without hurting latency.

**Action** – I chose a hybrid schema: PostgreSQL with TimescaleDB extensions for time‑series transaction data (partitioned by week) and a Redis cluster as an in‑memory feature cache. I used logical replication to stream updates from Postgres to Redis, keeping the cache warm for 5 ms read latency. For model training, I extracted nightly batches into Snowflake via Kafka Connect, ensuring columnar storage for efficient analytical queries. I also implemented a schema‑evolution strategy with Alembic migrations and versioned feature tables to avoid breaking downstream consumers.

**Result** – The system processed 3 M transactions/day while keeping inference latency below 8 ms, achieving a 97% prediction accuracy after the first training cycle. I learned that a clear separation between OLTP (Postgres/Timescale) and OLAP (Snowflake) workloads, coupled with an in‑memory cache, balances consistency, scalability, and speed for ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
