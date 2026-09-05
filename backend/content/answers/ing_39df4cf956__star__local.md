---
qid: ing_39df4cf956__star__local
question: 'Explain: Durability — What is Pub/Sub Messaging? - Pub/Sub Messaging Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 325
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:24:27-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our real‑time fraud detection engine was struggling with data loss during peak traffic (10k messages per second). We were using Amazon SNS for notifications but observed that some alerts never reached downstream services, causing missed fraud flags.

**Task** – I had to redesign the messaging layer to guarantee durability while keeping latency low (<50 ms) and ensuring at‑least‑once delivery across microservices.

**Action** – I migrated from SNS alone to a combined **Amazon SQS FIFO queue** behind SNS. The workflow: SNS publishes events, which are automatically written to an SQS FIFO queue with deduplication IDs. Each consumer pulls messages, processes them, and deletes the receipt handle only after successful database persistence. I added CloudWatch metrics for `ApproximateNumberOfMessagesNotVisible` to monitor lock‑timeouts, and configured long polling (20 s) to reduce empty receives. For redundancy, I enabled SQS cross‑region replication to a secondary region, ensuring messages survive a regional outage.

**Result** – After deployment, message loss dropped from 0.8% to <0.01%, and our fraud detection accuracy improved by 12%. Latency stayed under 45 ms on average. I learned that durability in Pub/Sub is achieved not just by the broker but by coupling it with reliable queuing, visibility timeouts, and proper acknowledgment handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
