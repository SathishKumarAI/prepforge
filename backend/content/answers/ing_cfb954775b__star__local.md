---
qid: ing_cfb954775b__star__local
question: 'Explain: APIs and connectors — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 306
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:24:30-05:00'
sources: []
---

**Situation:** While leading the migration of our legacy analytics platform to a cloud‑native stack, we discovered that our data ingestion pipelines were brittle and couldn’t support real‑time model training for our recommendation engine.

**Task:** I was tasked with designing a scalable data architecture that would allow seamless integration of diverse data sources (SQL, streaming logs, third‑party APIs) into a unified lakehouse, enabling low‑latency access for ML workloads.

**Action:** First, I mapped the existing data flows and identified bottlenecks. I then introduced an API gateway layer using Kong to expose standardized REST endpoints for each source, coupled with Kafka Connectors to stream updates directly into Delta Lake on Azure Synapse. To keep metadata consistent, I implemented a schema registry (Confluent) so every connector validated against the master schema before ingestion. Finally, I built a data catalog in Azure Purview and added automated lineage tracking so downstream ML teams could query the lakehouse via Spark SQL without touching raw streams.

**Result:** The new architecture cut model training time from 4 hours to under 30 minutes, increased data freshness by 95%, and reduced engineering effort for adding new sources from days to minutes. I learned that treating APIs and connectors as first‑class citizens in the data pipeline not only simplifies integration but also enforces governance and observability across the entire ML stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
