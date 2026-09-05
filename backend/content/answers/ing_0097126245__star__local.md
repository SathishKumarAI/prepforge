---
qid: ing_0097126245__star__local
question: 'Explain: Data pipelines — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 294
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:29:44-05:00'
sources: []
---

**Situation:** While leading the fraud‑detection project at FinSecure, our model’s accuracy dropped from 92 % to 78 % after a quarterly data refresh because raw logs were arriving in heterogeneous formats across multiple regions.

**Task:** I had to design a unified data architecture that could ingest, cleanse, and expose consistent features for the ML pipeline without delaying real‑time scoring.

**Action:** I architected an end‑to‑end pipeline using Apache Kafka for ingestion, Airflow DAGs for orchestration, and Delta Lake on Databricks for governed storage. The schema was versioned in Confluent Schema Registry to enforce compatibility. For feature engineering, I built a reusable Spark UDF library that normalised timestamps, hashed identifiers, and derived risk scores. We introduced an incremental ETL strategy with change‑data capture (CDC) so only new events triggered re‑processing. Finally, I set up a monitoring dashboard in Grafana to track ingestion latency and data quality metrics.

**Result:** The new architecture reduced feature lag from 12 hours to under 30 minutes, restored model accuracy to 91 %, and cut monthly maintenance time by 40 %. I learned that a well‑documented, versioned data schema combined with real‑time monitoring is critical for sustaining ML performance at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
