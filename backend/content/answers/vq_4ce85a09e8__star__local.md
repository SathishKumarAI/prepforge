---
qid: vq_4ce85a09e8__star__local
question: Can one selectively load only the data that you need?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 319
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:58:30-05:00'
sources: []
---

**Situation** – In my last role I was tasked with refactoring a legacy reporting service that pulled entire user profiles from a NoSQL store for every dashboard request. The dataset was 50 GB, and users complained the API latency exceeded 4 seconds during peak hours.

**Task** – Reduce response time to under 1 second while keeping the same set of reports available. I had to redesign how data is fetched so only the fields needed by each report were loaded.

**Action** – I introduced a field‑projection layer using MongoDB’s `project` operator and wrapped it in a lightweight caching service (Redis). Each microservice endpoint now declares its required schema; the projection engine builds a query that pulls just those keys, avoiding deserialization of unused fields. For reports requiring joins across collections, I implemented a materialized view strategy: pre‑aggregate only the necessary columns into a read‑optimized table in PostgreSQL, refreshed nightly via a scheduled Spark job.

**Result** – API latency dropped from 4 s to 0.8 s on average, and CPU usage fell by 35 %. The refactor also cut storage costs by 20 % because we no longer replicated entire documents for read‑only workloads. I learned that selective loading isn’t just a database feature; it’s an architectural mindset that balances query complexity against performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
