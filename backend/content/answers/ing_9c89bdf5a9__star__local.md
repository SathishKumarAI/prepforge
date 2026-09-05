---
qid: ing_9c89bdf5a9__star__local
question: 'Explain: I think there''s a pretty good chance — Martin Kleppmann | Kafka
  Summit London 2019 Keynote | Is Kafka a Database?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 321
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:44:59-05:00'
sources: []
---

**Situation** – At my previous company we were building an online recommendation engine that had to serve personalized ads in real time. Our data pipeline was stuck; the batch ETL jobs took hours, and our model drifted because new user behavior wasn’t reflected until the next nightly refresh.

**Task** – I needed a way to ingest streaming click‑through logs, keep them durable, and make them instantly available for both feature extraction and model training without building a separate database layer.

**Action** – I proposed using Kafka as a “log‑structured store” for our ML features. First, we created topic partitions per user segment and configured replication for fault tolerance. We used Kafka Streams to aggregate raw events into daily summaries and wrote those aggregates back into new topics that served as feature tables. For model training, we spooled the latest feature snapshots from these topics directly into a Spark Structured Streaming job, which updated our gradient‑boosted tree in under 5 minutes. I also added a schema registry to enforce Avro schemas, ensuring backward compatibility as features evolved.

**Result** – The recommendation latency dropped from 30 seconds to less than 2 seconds, and the click‑through rate increased by 12% over three months. I learned that Kafka can function not just as a messaging bus but as a lightweight, append‑only database for real‑time ML workloads when combined with stream processing frameworks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
