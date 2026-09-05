---
qid: ing_156c10ebe2__star__local
question: 'Explain: Data Model — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 350
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:11:08-05:00'
sources: []
---

**Situation** – In the last round of my fintech recruiter’s interview, I was asked to sketch a data model for a real‑time fraud detection platform that needed to handle 10 k events per second and deliver alerts within 200 ms. The hiring team had no pre‑existing schema; they wanted to see how I’d structure the data from scratch.

**Task** – My goal was to design a scalable, low‑latency model that could ingest raw transaction logs, enrich them with user profiles, and support fast lookups for anomaly scoring while keeping storage costs under control.

**Action** – I started by mapping out the core entities: `Transaction`, `UserProfile`, `Merchant`, and `Alert`. Using a hybrid approach, I chose PostgreSQL for relational integrity on user and merchant data, and Redis Streams to buffer incoming transactions. The stream keys were partitioned by region to keep latency low. For enrichment, I scheduled nightly materialized views that joined the streams with profile tables, keeping the read model denormalized for fast scans. I also added a TTL on Redis entries to auto‑expire stale events and used JSONB in Postgres to store dynamic risk factors without schema changes.

**Result** – The final design handled 12 k TPS during load testing, produced alerts within 150 ms on average, and kept storage costs below the budget by 15%. I learned that a clear separation between ingestion streams and query‑optimized tables is key for real‑time systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
