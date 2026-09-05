---
qid: ing_f9595a29ff__star__local
question: 'Explain: Use the Transactional Inbox/Outbox Pattern along with Saga/CDC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 367
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:47:07-05:00'
sources: []
---

**Situation:**  
At my last company we were launching a new loyalty‑point microservice that had to update user balances across three bounded contexts: orders, marketing, and analytics. A single order could trigger point accrual, email rewards, and data warehouse updates. We noticed data drift and duplicate events when scaling the order service.

**Task:**  
I needed to guarantee exactly‑once delivery of side‑effects while keeping each context loosely coupled, all without a heavyweight message broker that would add latency.

**Action:**  
Implemented a transactional inbox/outbox pattern inside the order service using PostgreSQL. Every time an order was created I wrapped the business logic and event persistence in one transaction: the new point accrual record was written to the outbox table with a unique id, while the order state changed. A lightweight background worker scanned the outbox, published events to Kafka, and marked them processed.  
For cross‑context coordination I used a saga orchestrator that listened for “PointsCreated” events and triggered compensating actions (e.g., rolling back marketing emails) if downstream services failed. To keep analytics in sync without polling, I enabled CDC on the point table; any insert or update automatically generated change records which were streamed to the data warehouse via Debezium.

**Result:**  
Exactly‑once event delivery was achieved—no duplicate reward emails and 0% point miscounts. Latency dropped by 30 ms per order, and we eliminated manual reconciliation of stale analytics data. I learned how coupling a simple outbox with CDC can replace complex message queues while still supporting sagas for distributed consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
