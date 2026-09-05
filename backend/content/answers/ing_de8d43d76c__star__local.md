---
qid: ing_de8d43d76c__star__local
question: 'Explain: Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 345
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:53:51-05:00'
sources: []
---

**Situation:** In a fintech startup, we had to migrate our monolithic transaction processing app to microservices while keeping real‑time analytics up to date. The existing database was PostgreSQL with heavy OLTP load; the analytics layer ran on an Elasticsearch cluster that needed nightly syncs, causing stale data for compliance reporting.

**Task:** Design a change data capture pipeline that would propagate every insert/update/delete from Postgres to Elasticsearch within 5 seconds, without impacting transactional throughput or compromising consistency.

**Action:** I chose Debezium as the CDC engine because it reads PostgreSQL’s WAL and emits events to Kafka. The pipeline used Kafka Connect for streaming, with a topic per table and schema registry for versioning. I implemented idempotent upserts in Elasticsearch via the “_doc” endpoint and added a deduplication layer using Redis caches keyed by transaction ID to handle duplicate CDC messages during failures. For latency control, I tuned Debezium’s snapshot isolation and set Kafka consumer group offsets to auto‑commit every 500 ms. Finally, I built monitoring dashboards in Grafana that tracked lag per topic and alerted when it exceeded 5 seconds.

**Result:** The new CDC system reduced data staleness from 24 hours to under 3 seconds, enabling real‑time compliance dashboards. Transactional throughput stayed within 99th percentile latency of 120 ms. I learned the importance of balancing durability (WAL reading) with low‑latency delivery and how schema evolution can be managed cleanly with a registry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
