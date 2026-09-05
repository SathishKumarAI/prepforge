---
qid: ing_8108a34950__star__local
question: 'Explain: How CDC Works — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 341
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:51:27-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we had a monolithic database that stored user transaction data. Our machine‑learning models for fraud detection required near‑real‑time training on fresh data, but the batch ETL pipeline was running nightly and lagged by 12 hours.

**Task:**  
I needed to build an incremental ingestion system so our ML pipeline could receive updates within minutes of each transaction without overloading the database or compromising consistency.

**Action:**  
I implemented a Change Data Capture (CDC) layer using Debezium on top of Kafka. Debezium listened to MySQL binlogs, emitted change events as JSON messages into Kafka topics. A Spark Structured Streaming job subscribed to these topics, filtered out non‑relevant tables, and performed windowed aggregations for the fraud model. I added idempotent keys (primary key + transaction timestamp) to ensure exactly‑once semantics and used Avro schemas in Confluent Schema Registry to enforce data contracts. The streaming job wrote snapshots into a Delta Lake table, which our downstream ML training jobs pulled from every 15 minutes.

**Result:**  
The latency between a transaction and its availability for model training dropped from 12 hours to under 5 minutes, boosting the fraud detection recall by 18% while keeping CPU usage below 30%. I learned how CDC turns a relational database into an event‑driven stream source, and that careful schema evolution handling is key to production reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
