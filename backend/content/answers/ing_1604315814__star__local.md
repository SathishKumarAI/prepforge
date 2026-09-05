---
qid: ing_1604315814__star__local
question: 'Explain: Don’t just hack it together — Designing Data-Intensive Applications
  (DDIA) \u2014 an O\u2019Reilly book by Martin Kleppmann (The Wild Boar Book)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 356
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:12:22-05:00'
sources: []
---

**Situation:**  
At my last company we built a recommendation engine for a streaming service that served 4 M daily users. The data pipeline was a quick‑and‑dirty Spark job that ran nightly, but the model drifted and our click‑through rate fell from 12% to 8% within two weeks.

**Task:**  
I had to redesign the entire ingestion, storage, and training workflow so we could continuously retrain models with fresh data while keeping latency under 10 s for real‑time recommendations.

**Action:**  
Following *Designing Data‑Intensive Applications*, I first mapped our architecture onto a **microservice** model: a Kafka topic per user activity stream, a schema registry to enforce evolution, and a time‑series database (TimescaleDB) for raw logs. I implemented an event‑driven ETL pipeline using Apache Flink for real‑time aggregation and wrote a lightweight REST API that served the latest model from a Redis cache. For training, I switched from nightly batch jobs to a **continuous training** loop with TensorFlow Serving, deploying models via Kubernetes pods. Throughout, I applied *data partitioning* and *exactly‑once processing* guarantees to avoid duplicate records.

**Result:**  
The new pipeline processed 5 × the data volume with a 30% reduction in latency, and the click‑through rate rebounded to 14%. The team also cut model deployment time from days to hours. I learned that treating data as an application first—emphasizing reliability, scalability, and observability—transforms ad‑hoc hacks into robust systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
