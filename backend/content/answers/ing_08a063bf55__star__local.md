---
qid: ing_08a063bf55__star__local
question: 'Explain: Pub/sub APIs — What is Pub/Sub Messaging? - Pub/Sub Messaging
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 373
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:46:16-05:00'
sources: []
---

**Situation** – While leading the migration of our legacy order‑processing system to a microservices architecture at a mid‑size retailer, we discovered that the existing tight coupling between the Order Service and Inventory Service was causing bottlenecks during flash sales; latency spiked from 50 ms to over 2 s when inventory updates were queued behind synchronous calls.

**Task** – I needed to decouple these services so that order placement could be acknowledged instantly, while inventory adjustments happened asynchronously, without sacrificing data consistency or auditability.

**Action** – I designed a pub/sub pattern using AWS SNS as the publisher for “OrderCreated” events and multiple SNS topics (InventoryUpdate, BillingTrigger). Each consumer subscribed via SQS queues, enabling at‑least‑once delivery with visibility timeouts. I added deduplication logic in the Inventory Service to idempotently process duplicate messages, and used CloudWatch metrics to monitor queue depth. To keep traceability, I propagated the X‑Request‑ID header across SNS messages so that all downstream services could log a unified correlation ID.

**Result** – Order placement latency dropped from 2 s to under 80 ms, while inventory updates completed within 500 ms on average. Queue depths stayed below 10 messages during peak traffic, and the system’s overall throughput increased by 35%. I learned that a well‑architected pub/sub layer can transform a monolith into a resilient, event‑driven platform without compromising consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
