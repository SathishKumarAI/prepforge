---
qid: ing_336ca6cde0__star__local
question: 'Explain: Cassandra vs. MongoDB: Data Model — Cassandra Vs MongoDB Comparison
  | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 391
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:11:37-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the analytics layer for a global ad‑tech platform that served millions of users per day. The existing stack used a relational DB, but we needed horizontal scaling and near‑real‑time ingestion for click logs.

**Task** – I had to decide between two NoSQL options: Cassandra for its write‑heavy, wide‑row model or MongoDB for its document flexibility, and then implement the chosen schema in production.

**Action** – I first benchmarked both systems on a representative dataset of 10 GB of click events. For Cassandra I designed a partition key around `user_id + date` to keep hot partitions bounded, used composite clustering columns (`campaign_id`, `timestamp`) for efficient range scans, and enabled TTLs for automatic data aging. In MongoDB I modeled each event as a single JSON document, leveraged the built‑in sharding on `user_id`, and created compound indexes on `(user_id, timestamp)` to support analytics queries. I also compared write amplification: Cassandra’s log‑structured merge required minimal compaction overhead, whereas MongoDB’s WiredTiger engine had higher RAM usage for the same write load.

**Result** – After a six‑week pilot, Cassandra handled 3× the throughput with <5 ms latency on writes and maintained consistent read performance. MongoDB hit similar write speeds but suffered from 20 % higher CPU consumption and slower range queries due to its document storage layout. I documented these trade‑offs in a slide deck that guided the architecture decision, ultimately leading to a Cassandra‑based ingestion layer with a MongoDB analytics side for ad-hoc reporting. The migration cut operational costs by 18 % while meeting SLA targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
