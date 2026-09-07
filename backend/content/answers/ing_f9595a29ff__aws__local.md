---
qid: ing_f9595a29ff__aws__local
question: 'Explain: Use the Transactional Inbox/Outbox Pattern along with Saga/CDC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 388
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:41:57-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I was tasked to ship a real‑time fraud‑alert service that had to push events to two downstream systems (notification and analytics) while keeping the order of transactions intact across microservices.

**Action – Design**  
I chose **Transactional Inbox/Outbox** to guarantee at‑least‑once delivery without race conditions. Each service writes its domain event to an outbox table inside the same transaction that persists the business change, then a single worker polls the outbox and publishes to an **Amazon Kinesis Data Stream** (high throughput, low latency).  
To coordinate long‑running workflows I layered a **Saga** orchestrator built on **AWS Step Functions**, which listens to the stream, emits compensating actions if a downstream step fails, and updates a status table.  
For eventual consistency between read replicas I enabled **CDC** via **Amazon DMS** to push changes from PostgreSQL into an **Aurora Serverless v2** data lake; this keeps analytics queries in sync without blocking writes.

**Result**  
Latency dropped from 350 ms to <30 ms, and message loss fell below 0.01 % (verified by 10M test events). The system now scales horizontally—adding more workers increases throughput linearly—and costs stay under $1k/month due to serverless components.

**Reflection & Ownership**  
I owned the end‑to‑end pipeline, performed a deep dive into Kinesis limits and Step Function state machine size, and iterated on retry backoffs after an early failure that caused duplicate alerts. The solution exemplifies *Customer Obsession* (instant fraud detection) and *Dive Deep* (performance tuning), delivering measurable impact while learning from the first run’s pitfalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
