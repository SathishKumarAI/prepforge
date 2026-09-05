---
qid: ing_9b1c6b9e08__star__local
question: 'Explain: Replication Between Services — Change Data Capture (CDC) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 338
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:42:30-05:00'
sources: []
---

**Situation** – At my last role I was tasked with keeping our recommendation engine’s training data in sync with the live e‑commerce catalog. The catalog service updated product inventory via a PostgreSQL database, while the ML pipeline ran on an Apache Spark cluster that pulled data nightly from S3. Our metrics were lagging: model accuracy dropped 12% because new SKUs appeared in production but didn’t reach the training set until the next night’s batch.

**Task** – I needed to implement a real‑time replication mechanism so that any insert, update or delete on the catalog DB would immediately be reflected in our feature store used by Spark, without blocking catalog writes or introducing significant latency.

**Action** – I introduced Change Data Capture (CDC) using Debezium running as a Kafka Connect source. Debezium listened to the PostgreSQL logical replication stream and published change events to a dedicated “catalog‑cdc” topic. On the consumer side, a lightweight Flink job read from this topic, applied idempotent transformations (upsert/delete logic), and wrote the resulting records into our Hudi dataset on S3 – which Spark can query in near real time. I also added schema evolution handling with Avro schemas stored in Confluent Schema Registry to avoid breaking downstream jobs.

**Result** – The replication latency dropped from 24 hours to under 2 minutes, boosting model precision by 8% and reducing the time‑to‑deploy new products from days to hours. I learned how CDC can bridge OLTP and ML workloads while keeping data consistency across heterogeneous systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
