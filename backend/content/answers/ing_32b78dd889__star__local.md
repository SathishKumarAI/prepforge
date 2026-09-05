---
qid: ing_32b78dd889__star__local
question: 'Explain: a regular base table and that is — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 375
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:09:59-05:00'
sources: []
---

**Situation** – I was leading the data layer for a real‑time ride‑hailing app that expected 10 M active users in the first year. Our existing PostgreSQL cluster could not handle the write latency and horizontal scaling required.

**Task** – Re‑architect the core “trip” table so it would support millions of writes per second while keeping query cost low, without rewriting the entire API stack.

**Action** – I introduced a *regular base table* concept: a single‑partition relational table that held all attributes in one place. In DynamoDB we refactored this into two tables—one for partitioned trip metadata (trip_id, user_id, status) and another for time‑series events (trip_id, timestamp, location). We used a composite primary key (PK=trip_id, SK=time) to enable efficient range queries and leveraged DynamoDB’s provisioned throughput with auto‑scaling. I also added GSI on status+user_id for quick driver assignment. The trade‑off was denormalization: we duplicated some data but gained sub‑10 ms latency.

**Result** – Write throughput jumped from 200 req/s to >1 M req/s, and average read latency dropped from 120 ms to 8 ms under peak load. Cost per request fell by 35%. I learned that designing for scale often means embracing a *base table* that is partitioned and denormalized rather than insisting on a single relational schema.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
