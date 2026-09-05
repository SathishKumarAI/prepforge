---
qid: ing_fe21bf675e__star__local
question: How many message queues do you know? — Types of Message Queues
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 339
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:57:00-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were migrating our real‑time fraud detection pipeline from a monolith into microservices. The new architecture required reliable asynchronous communication between the ingestion service, the ML scoring engine, and the compliance audit log.

**Task** – I had to evaluate which message queue technologies would best support high throughput, low latency, and strong durability for each pair of services while keeping operational overhead minimal.

**Action** – I compared RabbitMQ, Kafka, Amazon SQS, and Azure Service Bus. For ingestion‑to‑scoring we chose **Kafka** because it handles millions of events per second with at-least-once semantics and built‑in stream processing. Between the scoring engine and audit log we used **RabbitMQ** for its lightweight RPC pattern and guaranteed delivery. I set up Kafka topics with 3 partitions, enabled compaction on the fraud alerts topic, and configured RabbitMQ queues with TTL and dead‑letter exchanges. I also scripted automatic scaling of Kafka brokers using Terraform.

**Result** – The new system processed 1.2 M events per day with a 99.9% success rate and reduced end‑to‑end latency from 850 ms to 240 ms. I learned that choosing the right queue type depends on message volume, ordering guarantees, and operational complexity; documenting those trade‑offs early prevents costly redesigns later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
