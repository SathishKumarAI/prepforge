---
qid: ing_0f0f7fdb1f__star__local
question: 'Explain: Push delivery — What is Pub/Sub Messaging? - Pub/Sub Messaging
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 350
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:58:30-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a real‑time analytics pipeline for an IoT fleet that generated over 10 k events per second. The existing batch ETL would delay insights by hours, so we needed a low‑latency mechanism to push sensor data from edge devices to downstream services.

**Task** – Design and implement a scalable publish/subscribe system on AWS that could ingest the stream, decouple producers from consumers, and guarantee at least once delivery while keeping costs under $2k/month.

**Action** – I chose Amazon SNS for the publisher layer: each device publishes JSON messages to an SNS topic. To handle high volume and avoid throttling, I configured a dedicated FIFO topic with deduplication. For subscribers I set up two SQS queues—one standard queue feeding a Lambda that writes to DynamoDB, another FIFO queue feeding a Spark cluster via Kinesis Data Firehose for batch aggregation. I used dead‑letter queues and CloudWatch metrics to monitor delivery failures, and implemented exponential backoff retries in the Lambdas.

**Result** – The pipeline processed 12 k events per second with <300 ms latency from publish to DynamoDB write. We achieved a 99.9% message delivery rate and reduced data processing cost by 35% compared to our previous batch approach. This experience taught me how to balance throughput, reliability, and cost when architecting pub/sub solutions on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
