---
qid: ing_ac29b87811__star__local
question: 'Explain: Scalable — Apache Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 347
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:17:01-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were building a real‑time fraud detection pipeline that had to ingest ~1 M events per minute from our payment gateway while keeping latency under 100 ms. The existing RabbitMQ queue was choking on peak traffic, causing backlogs and missed alerts.

**Task** – I needed to replace the messaging layer with a system that could scale horizontally, guarantee at‑least‑once delivery, and integrate cleanly with our Spark streaming jobs without rewriting downstream logic.

**Action** – I evaluated several options and chose Apache Kafka for its partitioned log architecture. I designed a multi‑topic layout: one topic per transaction type, each with 8 partitions to allow parallel consumers. Using the Kafka Connect framework I built a source connector that streamed events directly from our PostgreSQL WAL into Kafka, eliminating batch pulls. On the consumer side I wrote a Spark Structured Streaming job that read from the topics using the native Kafka‑Spark integration, performed feature engineering in micro‑batches of 2 s, and pushed results to a Redis cache for real‑time alerting. To handle backpressure I added a retry policy with exponential backoff and leveraged Kafka’s offset commit semantics to avoid duplicate processing.

**Result** – The new pipeline handled 1.3 M events/min without any queue buildup; latency dropped from 250 ms to 80 ms on average, and the fraud detection accuracy improved by 4% due to fresher data. I learned that careful partitioning and proper consumer group management are key to achieving true scalability with Kafka.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
