---
qid: ing_948afc84df__star__local
question: 'Explain: So let''s if you want to track — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 348
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:29:54-05:00'
sources: []
---

**Situation** – In my last role I was building an A/B testing platform that had to store feature flag usage, user interactions and model predictions for millions of users per day. The existing monolithic PostgreSQL schema was choking on write throughput and the analytics team complained about 15‑second latency for daily reports.

**Task** – I needed to redesign the data layer so that ingestion stayed <1 ms per event, queries for real‑time dashboards returned under 200 ms, and the system could scale horizontally without breaking ACID guarantees for critical writes.

**Action** – First I profiled the workload: most traffic was write‑heavy but read patterns were predictable (daily aggregates, rolling windows). I split the data model into two stores: a time‑series columnar database (ClickHouse) for analytics and a distributed NoSQL key–value store (Cassandra) for real‑time flag lookups. I defined a sharding strategy on user ID to keep related events collocated, implemented lightweight transactions for idempotent writes, and added TTLs to purge stale data automatically. Finally, I introduced Kafka as an event bus to decouple ingestion from downstream services.

**Result** – Write latency dropped from 15 ms to under 0.8 ms, read latency for dashboards went below 120 ms, and the system handled a 10× traffic increase without any service disruption. The key takeaway: separate write‑optimized and query‑optimized stores, use sharding and TTLs to manage volume, and always measure before and after each change.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
