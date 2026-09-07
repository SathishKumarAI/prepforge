---
qid: ing_6bb6342cc5__aws__local
question: 'Explain: Confusing Idempotency with Exactly-Once — Idempotency | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 403
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:27:27-05:00'
sources: []
---

**Situation**  
While leading a fraud‑prevention ML service for a global e‑commerce platform, we observed that the same transaction could be retried by downstream services, causing duplicate alerts and unnecessary model re‑runs.

**Task**  
Redesign the ingestion pipeline to guarantee *exactly‑once* processing while preserving idempotent behaviour so that retrying a request never changes state or produces new alerts.

**Action**  
1. **Clarify requirements** – “Exactly‑once” must hold across network partitions, service restarts, and eventual consistency of DynamoDB.  
2. **Design** –  
   * Use **Amazon SQS FIFO** with deduplication ID = transaction hash to ensure only one message per transaction is delivered.  
   * Consume messages via an **AWS Lambda** that writes a record to **DynamoDB** in a single transactional write (PutItem + UpdateItem).  
   * The Lambda checks the `processed` flag before invoking the ML model, guaranteeing idempotence.  
3. **Trade‑offs** – FIFO queues cost ~2× standard queues but provide strict ordering and deduplication; Lambda concurrency is limited to 1000, which meets our peak of 20k TPS with a burst buffer in SQS.  

**Result**  
Post‑deployment, duplicate alerts dropped from 12 % to < 0.1 %, reducing downstream alert noise by **$45K/month** and freeing 30 % compute capacity for new models. I presented the design at the quarterly architecture review, and it was adopted across three other services.

> **Leadership Principles:** *Ownership* (I drove end‑to‑end change), *Dive Deep* (analyzed queue semantics and DynamoDB transactions), *Deliver Results* (quantified cost savings).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
