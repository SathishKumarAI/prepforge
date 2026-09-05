---
qid: ing_144afcd588__star__local
question: 'Explain: 4 System Design - Types of Databases — 15 Types of Databases and
  When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 391
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:08:56-05:00'
sources: []
---

**Situation** – In early 2024 I was leading a data‑engineering sprint for a fintech startup that needed to run real‑time fraud detection on millions of transactions per day. The existing stack used a single PostgreSQL instance, but latency kept creeping past the 200 ms SLA we promised to our compliance team.

**Task** – My job was to redesign the storage layer so we could ingest high‑velocity data, serve ML model predictions with sub‑50 ms latency, and still keep a historical analytics view for regulatory reporting.

**Action** – I started by mapping the data flows: raw events → stream processor (Kafka) → feature store → inference API. For the streaming path I chose **Apache Cassandra** because of its tunable consistency and write‑skew‑resistant architecture—perfect for time‑series transaction logs. For the feature store I deployed **Redis** as an in‑memory key‑value cache to give our ML models instant access to pre‑computed features. The historical view was migrated to a **columnar OLAP database (Amazon Redshift)**, which excels at ad‑hoc analytics over large fact tables. Finally, for any relational constraints (user profiles, merchant metadata) we kept a lightweight **SQLite** instance on the edge for fast lookups.

**Result** – After the migration, ingest latency dropped from 250 ms to 45 ms, and inference served under 30 ms on average. The new architecture also cut storage costs by 35 % compared to the monolithic PostgreSQL setup. I learned that a hybrid approach—choosing each database for its strengths rather than forcing one fit all—is key in ML‑heavy pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
