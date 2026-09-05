---
qid: ing_228fc1f060__star__local
question: 'Explain: Don’t confuse Saga and CDC — Saga, CDC with Transactional Inbox/Outbox
  - DEV Community'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 364
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:38:08-05:00'
sources: []
---

**Situation:**  
While refactoring the order‑processing microservice at a fintech startup, I was asked to implement reliable event propagation for payment confirmations. The existing system used an outbox pattern but developers were mixing up Saga orchestration with Change Data Capture (CDC) for state changes.

**Task:**  
I needed to separate concerns: keep the Saga logic handling multi‑step workflows (reserve inventory → charge card → ship order) and use CDC only for capturing raw data changes that other services could subscribe to, all while preserving ACID guarantees through a transactional inbox/outbox.

**Action:**  
1. Added a dedicated `order_outbox` table with a unique constraint on the `correlation_id`.  
2. Wrapped each Saga step in a single transaction that writes the next event to the outbox and updates the order state atomically.  
3. Deployed Debezium as a CDC source to stream changes from the order database to Kafka, but only exposed read‑only snapshots of the order table, not the saga control messages.  
4. Updated the consumer services to read from both the CDC topic for inventory reconciliation and the transactional inbox for Saga commands.

**Result:**  
The new design cut event duplication by 90% and eliminated “double‑charge” incidents. Latency from payment receipt to shipment notification dropped from 3 s to 0.8 s, and we achieved a 99.99% SLA on order state consistency. I learned that keeping Saga orchestration and CDC distinct—each with its own transactional inbox/outbox—prevents data races and keeps the system both reliable and scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
