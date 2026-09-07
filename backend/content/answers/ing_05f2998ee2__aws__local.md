---
qid: ing_05f2998ee2__aws__local
question: 'Explain: Saga, CDC with Transactional Inbox/Outbox - DEV Community'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 473
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:39:05-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked with building a real‑time analytics pipeline for an e‑commerce platform that had 3 M active users and 10 K orders per minute. The data needed to be processed in near‑real time, yet the source systems were monolithic SQL databases that didn’t expose events. My goal: enable downstream ML models (recommendations, fraud detection) without changing legacy code.

**Action**  
1. **Saga Pattern for Order Flow** – I orchestrated an idempotent saga across microservices (order service → inventory → payment). Each step stored its state in a DynamoDB table with a *correlation‑id*; the saga coordinator committed or rolled back all steps atomically, guaranteeing consistency even if a downstream service failed.  
2. **CDC + Transactional Inbox/Outbox** – I added an outbox table to each microservice (PostgreSQL) that recorded domain events as part of the same transaction that mutated business data. A Lambda function polled the outbox, converted rows into Kinesis records, and purged them after successful publish.  
3. **Transactional Inbox on the consumer side** – The analytics service used a DynamoDB “inbox” table to de‑duplicate events before feeding them to an EMR Spark job that updated a Redshift materialized view for ML training.

**Result**  
- Latency from order placement to model feature refresh dropped from 15 min to <2 s.  
- Data quality improved: event loss fell below 0.01% (vs 1% before).  
- Cost was kept under $12K/month by using serverless Lambda and Kinesis data streams, versus the $45K spent on a dedicated Kafka cluster.

**Reflection**  
I learned that *ownership* means designing for failure; the saga’s idempotency guard prevented data corruption. *Dive Deep* drove me to instrument every transaction boundary and monitor outbox health. The success demonstrates measurable impact (real‑time ML feeds) while keeping operations simple—an embodiment of **Customer Obsession** and **Invent & Simplify**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
