---
qid: ing_fec522ccad__star__local
question: 'Explain: Step 6: Queueing the Notification — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 311
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:58:14-05:00'
sources: []
---

**Situation** – At my last company we launched a flash‑sale feature that sent instant push notifications to millions of users when inventory dropped below five items. During the first week, over 3 million messages were queued and many ended up delayed or lost because our notification pipeline was still using a single Redis list with no retry logic.

**Task** – I had to redesign the queueing layer so that every message reached its device reliably within two seconds while keeping cost per message under $0.0005.

**Action** – I switched from a monolithic Redis queue to a partitioned Kafka topic, sharding by user ID hash. Each consumer ran in a stateless container on ECS with an auto‑scaling policy tied to lag metrics. For idempotence I appended a UUID and stored the delivery state in DynamoDB, enabling exactly‑once semantics. I also added a dead‑letter queue for messages that failed after three retries, and built a Prometheus alert on consumer lag > 500ms.

**Result** – After deployment, message latency dropped from 3.8 s to 0.9 s, delivery success rose from 92% to 99.7%, and the cost per notification stayed at $0.0003. I learned that a well‑partitioned, retry‑aware queue is essential for scaling real‑time user engagement features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
