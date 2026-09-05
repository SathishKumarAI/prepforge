---
qid: ing_eb465073d3__star__local
question: 'Explain: Solution — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 341
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:18:55-05:00'
sources: []
---

**Situation** – While leading a fraud‑detection pipeline for an e‑commerce platform, we were hitting data latency and scaling bottlenecks. Our monolithic data layer had all user, transaction, and device logs in one PostgreSQL cluster; as we added new ML models (anomaly detection, risk scoring), read/write contention grew, and our batch jobs started missing their 15‑minute window.

**Task** – Redesign the data architecture so that each microservice could evolve its own schema and scale independently, while keeping a unified view for model training without breaking existing pipelines.

**Action** – I championed a “database per service” pattern. We split the monolith into three bounded contexts: *User Profile Service*, *Transaction Service*, and *Device Context Service*. Each owns a dedicated PostgreSQL instance with schema tailored to its domain. For cross‑service analytics, we built an event bus (Kafka) that streams key facts to a data lake in Parquet; from there our nightly Spark job materializes a denormalized table for the ML model. We added read replicas and connection pooling per service to keep latency low, and automated schema migrations with Flyway.

**Result** – Read/write contention dropped by 70 %, batch jobs completed 30 % faster, and we could deploy new models (e.g., a graph‑based fraud detector) without locking the entire data stack. I learned that coupling database boundaries to service responsibilities can dramatically improve both scalability and developer velocity in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
