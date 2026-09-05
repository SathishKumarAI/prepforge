---
qid: ing_bdfb9a576e__star__local
question: 'Explain: Change data capture (CDC) — Open sourcing Brooklin: Near real-time
  data streaming at scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 368
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:50:55-05:00'
sources: []
---

**Situation** – In my previous role I was tasked with keeping our analytics dashboards up‑to‑date while the transactional database grew from 5 GB to over 50 GB daily. The existing ETL batch jobs were lagging by hours, causing stale insights for product managers.

**Task** – Build a near real‑time pipeline that could capture every change in the source tables and stream it downstream without sacrificing throughput or reliability, all while keeping costs low enough to fit our cloud budget.

**Action** – I led a small team that designed a Change Data Capture (CDC) system using Apache Kafka as the backbone. We implemented an open‑source connector stack based on Brooklin, customizing its source plugins for PostgreSQL and MySQL to read binlog entries and write them into topic partitions with minimal latency. To handle scale, we partitioned by tenant ID and used Kafka Streams to transform data in-flight, applying deduplication logic via a state store keyed on primary keys. We also added a lightweight retry mechanism that leveraged Brooklin’s offset tracking to ensure at‑least‑once delivery without manual intervention.

**Result** – The new pipeline cut dashboard latency from 4 hours to under 30 seconds, with an average throughput of 200k records per second and zero data loss in production runs. Our cost dropped by 35% compared to the legacy batch system, and we gained a reusable open‑source component that is now part of the company’s internal tooling catalog. I learned how to balance consistency guarantees against performance and the importance of community‑driven tools like Brooklin for rapid, reliable CDC deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
