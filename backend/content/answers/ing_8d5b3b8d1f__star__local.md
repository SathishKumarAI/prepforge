---
qid: ing_8d5b3b8d1f__star__local
question: Martin Kleppmann | Kafka Summit London 2019 Keynote | Is Kafka a Database?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 308
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:15:28-05:00'
sources: []
---

**Situation** – In late 2022 I led the ingestion layer for a recommendation engine at an e‑commerce startup that was rolling out real‑time personalization. Our data science team needed a high‑throughput, fault‑tolerant stream to feed daily feature vectors into our model training pipeline.

**Task** – I had to decide whether to store raw click logs in Kafka or move them immediately into a relational database for downstream ML tasks, while ensuring low latency and consistent schema evolution.

**Action** – I set up Kafka as the single source of truth. Using Avro schemas with Confluent Schema Registry, we enforced strict versioning so that any change in event shape would automatically propagate to both our real‑time inference microservice and a Spark Structured Streaming job that wrote nightly batches into a PostgreSQL warehouse for offline analysis. I also implemented Kafka Streams to compute rolling aggregates (e.g., last‑10‑minute click counts) directly inside the broker, reducing round‑trips.

**Result** – The system handled 2 M events per minute with <200 ms end‑to‑end latency, and we cut data duplication by 70%. The team learned that Kafka’s durable log can serve as a reliable “database” for streaming ML pipelines when combined with proper schema management and stream processing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
