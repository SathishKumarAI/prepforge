---
qid: ing_2a6da04f64__star__local
question: 'Explain: Retry capabilities — Saga, CDC with Transactional Inbox/Outbox
  - DEV Community'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 405
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:52:57-05:00'
sources: []
---

**Situation:**  
In a fintech startup I was tasked with building a real‑time fraud detection pipeline that ingested transaction data from our core banking system via Change Data Capture (CDC). The pipeline had to process millions of events per day, flag suspicious activity, and trigger alerts within seconds—all while guaranteeing no duplicate alerts and maintaining strict ACID guarantees across microservices.

**Task:**  
I needed to design a resilient event‑driven architecture that could handle transient failures without reprocessing the same transaction twice, support long‑running business processes (like multi‑step dispute resolution), and keep data consistent between our PostgreSQL store and downstream services.

**Action:**  
I implemented a **Transactional Inbox/Outbox** pattern using Postgres advisory locks. Every CDC record was written to an outbox table inside the same transaction that updated the main ledger, ensuring atomicity. A worker service consumed from the inbox, performed fraud scoring, and sent alert events to Kafka, recording offsets in the outbox to avoid replay. For long‑running dispute workflows I introduced a **Saga** orchestrator: each step (e.g., hold funds, notify customer, audit) was a compensating transaction stored in a saga table. The saga engine retried failed steps with exponential backoff and rolled back all prior actions if any step exceeded a retry threshold. CDC streams were idempotent thanks to unique keys, and the inbox prevented duplicate processing even under network partitions.

**Result:**  
The system processed 2 M events/day with <0.5 % alert duplication, reduced SLA violations from 12 % to 1 %, and cut manual intervention on disputes by 70 %. I learned that coupling transactional guarantees with an outbox inbox and sagas gives both reliability and clear auditability in event‑driven ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
