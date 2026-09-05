---
qid: ing_cdb3c93b85__star__local
question: 'Explain: Log to multiple systems — What is Pub/Sub Messaging? - Pub/Sub
  Messaging Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 308
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:20:23-05:00'
sources: []
---

**Situation** – In a recent migration of our customer‑engagement platform, we needed to decouple the real‑time analytics pipeline from the batch reporting system. The old monolith was sending logs directly to both Kafka and S3, causing duplicated effort and latency spikes during peak traffic.

**Task** – I had to design a lightweight, scalable messaging layer that would publish each log event once and allow multiple downstream consumers (real‑time dashboards, audit storage, and alerting) to subscribe without tight coupling.

**Action** – I introduced Amazon Simple Notification Service (SNS) as the publisher. Each microservice writes a single JSON payload to an SNS topic; the message is automatically distributed to all subscribed endpoints—an SQS queue for the analytics stream, an AWS Lambda that pushes to Redshift, and an S3 bucket via EventBridge for long‑term storage. I also configured retry policies and dead‑letter queues to guarantee at‑least‑once delivery while keeping latency under 200 ms.

**Result** – The new Pub/Sub architecture cut log processing time by 35%, reduced duplicated writes by 90%, and lowered operational overhead—our DevOps team now manages a single topic instead of multiple hand‑rolled pipelines. I learned that the key to efficient pub/sub is choosing the right AWS services for each consumer’s latency and durability needs, and designing with idempotency in mind.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
