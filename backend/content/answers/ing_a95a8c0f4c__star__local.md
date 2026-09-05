---
qid: ing_a95a8c0f4c__star__local
question: 'Explain: Characteristic #2: It has a minimal amount of database tables'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 333
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:11:33-05:00'
sources: []
---

**Situation** – In the summer of 2023 I joined a fintech startup that was building a fraud‑detection engine for credit card transactions. Their legacy system had over 20 relational tables, each storing raw event logs, user profiles, and intermediate scoring features, which made data pipelines brittle and slow to evolve.

**Task** – My goal was to redesign the data architecture so the machine‑learning workflow could ingest, train, and score in under an hour, while reducing operational complexity. I needed a schema that still captured all necessary signals but used as few tables as possible.

**Action** – I introduced a “feature bundle” table that stored a JSON column with all engineered features for each transaction. Instead of separate dimension tables (users, merchants, devices), I denormalized the most frequently queried attributes into this single table and used a key‑value store for infrequently accessed data. I leveraged Spark to flatten the JSON on ingestion, applied feature hashing to keep dimensionality bounded, and set up incremental updates via Kafka streams. This cut table count from 20 to just three (transactions, feature bundle, model metadata) and eliminated costly joins.

**Result** – Training time dropped from 4 hours to 45 minutes, real‑time scoring latency fell below 200 ms, and data engineering effort decreased by 60%. I learned that thoughtful denormalization, combined with modern columnar storage and streaming, can dramatically simplify ML pipelines without sacrificing feature richness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
