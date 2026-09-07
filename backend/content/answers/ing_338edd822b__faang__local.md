---
qid: ing_338edd822b__faang__local
question: 'Explain: Guaranteed event/message delivery — Saga, CDC with Transactional
  Inbox/Outbox - DEV Community'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 598
total_tokens: 841
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:44:37-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asking how we can guarantee that a message (or “event”) reaches its intended consumer when the system is distributed and might fail mid‑process. I’ll assume:  

* Multiple microservices communicate via an event bus or Kafka.  
* We want exactly‑once semantics for critical business flows.  
* Persistence and transaction support exist in each service’s DB.

**2️⃣ Approach**  
Explain two complementary patterns that together give a robust delivery guarantee:

| Pattern | What it solves | Key idea |
|---------|----------------|----------|
| **Saga (Choreography)** | Orchestrates long‑running business processes across services. | Each step emits an event; compensating events roll back on failure. |
| **CDC + Transactional Inbox/Outbox** | Ensures that every state change is reliably published and consumed once. | Events are written in the same transaction as data changes, then a downstream process (inbox/outbox) publishes them atomically.

**3️⃣ Depth**  
*Saga*: Each service records its operation locally; on success it emits an event; on failure it sends a compensating event to undo prior steps. This avoids global locks and keeps services loosely coupled.  

*CDC with Inbox/Outbox*:  
- **Outbox**: Service writes “new event” rows in the same DB transaction as business changes. A separate “outbox poller” reads these rows, publishes to Kafka, and marks them processed. Atomicity guarantees that either both data change + event row exist or neither does.  
- **Inbox**: Consumer stores a hash of received message IDs; before processing, it checks the inbox to reject duplicates. This gives idempotency even if the same event is re‑delivered (e.g., broker retry).

Complexities:  
* Outbox poller latency → can be tuned with async queues or Kafka Connect.  
* Compensating sagas may introduce partial data inconsistencies until all steps complete.

**4️⃣ Edge Cases**  
* Service crash after writing outbox row but before marking processed → poller retries, idempotent consumer prevents double handling.  
* Network partition → saga compensations may need to be retried or escalated.  
* Clock skew in distributed logs → use logical timestamps (e.g., Lamport) for ordering.

**5️⃣ Optimize & Communicate**  
To reduce latency, run the outbox poller as a lightweight Kafka Connect sink. For high throughput, batch writes and use optimistic concurrency on inbox IDs. When explaining to interviewers, emphasize that **exactly‑once delivery** is achieved by coupling transactional persistence (outbox) with idempotent consumption (inbox), while sagas provide business‑level consistency across services. This layered approach mirrors how Meta/Google build resilient event‑driven architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
