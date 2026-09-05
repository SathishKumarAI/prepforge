---
qid: ing_d18db0a6f1__star__local
question: 'Explain: So in any real world scenario you — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 389
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:28:41-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the user analytics pipeline for a mobile app that had grown from 50k to 5 million active users in two years. The existing stack used a single monolithic PostgreSQL database that was choking on high‑write traffic and providing slow ad‑hoc reporting.

**Task** – My goal was to build a scalable, fault‑tolerant system that could handle >10,000 writes per second, support real‑time dashboards, and still allow complex analytical queries without impacting production traffic. I had to decide which database(s) to use and justify the choice to both engineers and product managers.

**Action** – I started by mapping out data access patterns: high‑volume event ingestion (write‑heavy), time‑series aggregations, and occasional deep joins for cohort analysis. I benchmarked three candidates—PostgreSQL (with partitioning), Cassandra (for write throughput), and ClickHouse (columnar analytics). I built a proof‑of‑concept pipeline that streamed events via Kafka to both Cassandra (as the primary store) and ClickHouse (for reporting). For consistency, I used ACID guarantees on critical user profile updates in PostgreSQL, while letting Cassandra handle noisy event logs. I also introduced schema‑based JSON validation and automated backup policies.

**Result** – The new architecture lifted write capacity from 3 kpps to over **12 kpps**, reduced query latency for dashboards from 45 s to under 2 s, and cut operational costs by ~30% thanks to open‑source tooling. I learned that choosing the “best” database is about matching data models to workload patterns, not a single monolithic solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
