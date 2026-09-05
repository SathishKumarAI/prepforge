---
qid: ing_f102a2204c__star__local
question: 'Explain: of the event sourcing to introduce asynchrony'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 323
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:30:17-05:00'
sources: []
---

**Situation:**  
While leading a fraud‑detection microservice at my previous company, we hit a bottleneck: our synchronous request/response model caused 35 % slower response times during peak transaction periods, and the service crashed when batch updates to the risk engine arrived.

**Task:**  
I had to redesign the data flow so that real‑time queries stayed fast, while heavy analytics could run in the background without blocking user traffic. The goal was to decouple event ingestion from processing, reduce latency by at least 20 %, and keep auditability intact.

**Action:**  
I introduced an event‑sourcing pattern using Kafka as the immutable log. Every transaction created a “TransactionCreated” event that got stored in a topic; consumers subscribed asynchronously: one updated the real‑time risk cache (Redis), another ran batch feature engineering jobs into Spark, and a third persisted to PostgreSQL for audit purposes. I added idempotent handlers, schema evolution with Confluent Schema Registry, and leveraged Kafka Streams for lightweight transformations. The event store also allowed us to replay data after a bug fix without downtime.

**Result:**  
Latency dropped from 480 ms to 350 ms (28 % improvement), and the system handled 4× the transaction volume during peak hours with zero outages. I learned that treating domain changes as first‑class events not only introduces true asynchrony but also gives you a robust audit trail and replayability for debugging and compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
