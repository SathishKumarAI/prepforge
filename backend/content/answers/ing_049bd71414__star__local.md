---
qid: ing_049bd71414__star__local
question: 'Explain: Sharding Key — A Crash Course on Database Sharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 348
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:38:07-05:00'
sources: []
---

**Situation** – In the summer of 2023 I was leading a team that built a recommendation engine for an e‑commerce platform. Our training dataset grew from 20 GB to 120 GB, and each nightly batch job started lagging behind the production pipeline, taking over two hours on our single PostgreSQL instance.

**Task** – We needed to reduce query latency below 500 ms for model inference while still allowing fast writes during the nightly data ingestion. The goal was to shard the user‑interaction table so that both reads and writes could scale horizontally without sacrificing consistency.

**Action** – I designed a composite sharding key: `(user_id % 256, event_timestamp::date)`. This split users evenly across 256 shards while grouping events by day to keep time‑series queries efficient. Using PostgreSQL’s table inheritance, each shard became its own partition with an index on `event_type`. For writes I implemented a lightweight “shard router” in our ingestion pipeline that hashed the user ID and routed rows to the correct partition. We also added a background job that merged daily shards into monthly archives to reduce storage overhead.

**Result** – Query latency dropped from 1.2 s to 350 ms, and nightly jobs completed in under 30 min, freeing up resources for real‑time inference. I learned that choosing a sharding key is about balancing cardinality, access patterns, and maintenance cost—small design choices can have outsized performance impacts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
