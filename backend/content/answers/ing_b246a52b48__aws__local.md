---
qid: ing_b246a52b48__aws__local
question: 'Explain: Durability and Replay — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 428
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:07:51-05:00'
sources: []
---

**Situation & Task**  
While building a real‑time fraud detection pipeline for a payment processor, we needed a Pub/Sub layer that guaranteed **durability** (no data loss) and allowed **replay** of events for debugging and model retraining.

**Action**  
I architected an event bus using **Amazon SNS** to fan‑out raw transaction records to multiple consumers. Each subscription was an **SQS queue** configured with *FIFO* semantics, *content‑based deduplication*, and a **long retention period (14 days)** to support replay.  

For durability I enabled **S3 object lock** on the SNS topic’s delivery logs (via CloudWatch Logs) and used **Kinesis Data Streams** as an immutable event store for audit trails. Consumers read from SQS, process with **AWS Lambda**, and write results to **DynamoDB**. If a Lambda failed, the message landed in the DLQ; we then replayed it by re‑injecting into the originating queue or by reading directly from Kinesis.

I added **metrics (CloudWatch Alarms)** on `ApproximateNumberOfMessagesVisible` and `SendMessageBatch` errors to surface backpressure early. The system handled 1 M events/day with <0.01% loss, and replay latency was under 2 minutes for any point in the last week.

**Result**  
The design achieved **99.999% durability** (S3 + Kinesis) while keeping cost < $0.02 per event. Replay reduced debugging time by 70 %.  

> *Leadership Principles:* **Customer Obsession** – ensuring reliable alerts for fraud; **Ownership** – building a self‑healing, auditable pipeline; **Dive Deep** – using metrics to surface issues early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
