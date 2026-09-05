---
qid: ing_71887943af__star__local
question: 'Explain: Delivery guarantees — What is Pub/Sub Messaging? - Pub/Sub Messaging
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 361
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:14:27-05:00'
sources: []
---

**Situation:**  
At my last role I was leading the migration of our real‑time analytics pipeline from a monolithic batch system to an event‑driven architecture on AWS. The old system sent nightly CSV files, but stakeholders demanded near‑real‑time alerts for fraud detection, so we needed a messaging layer that could reliably deliver events as soon as they were produced.

**Task:**  
I had to choose and configure a Pub/Sub solution that guaranteed at least once delivery, low latency, and automatic scaling while keeping costs under $10k/month. The goal was to ensure every transaction event reached the fraud detection Lambda within 200 ms of ingestion, even during traffic spikes.

**Action:**  
I selected Amazon SNS for fan‑out publishing because it supports multiple protocols (SQS, Lambda, HTTP). For each subscriber I used SQS queues with “visibility timeout” set to 30 s and enabled “deduplication” in FIFO mode. I also configured dead‑letter queues to capture failed messages after three retries. To monitor delivery guarantees I instrumented CloudWatch metrics for `ApproximateNumberOfMessagesVisible` and `ApproximateNumberOfMessagesNotVisible`, and used SNS message attributes to tag events with a correlation ID.

**Result:**  
The new pipeline processed 2 million transactions per day, with 99.8% of messages delivered within 180 ms. The cost stayed at $7.6k/month. I learned that combining SNS fan‑out with SQS FIFO queues gives you the strongest delivery guarantees while keeping latency low and simplifying error handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
