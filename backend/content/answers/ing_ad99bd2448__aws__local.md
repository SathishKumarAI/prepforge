---
qid: ing_ad99bd2448__aws__local
question: 'Explain: Error Handling — Asynchronous Request-Response - Enterprise Integration
  Patterns 2'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 399
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:58:01-05:00'
sources: []
---

**Answer – Machine Learning: Error Handling for Async Request‑Response (Enterprise Integration Patterns)**  

> *Leadership Principles:* **Customer Obsession**, **Ownership**  
> *Scenario (S):* Our ML inference service was exposed via an async REST endpoint behind API Gateway, but downstream consumers kept hitting 5xx errors after a batch job update.  
> *Task (T):* Own the incident, identify root causes, and redesign the error‑handling flow so that failures are transparent to clients while preserving system integrity.  
> *Action (A):*  
> 1. **Instrumented** each Lambda with CloudWatch metrics (`Invocations`, `Errors`, `Duration`).  
> 2. Implemented a **Circuit Breaker** pattern using DynamoDB TTL tables and Step Functions state machines: if error rate > 5% over 10 min, the state machine pauses new requests for 30 s.  
> 3. Added a **Dead‑Letter Queue (DLQ)** on SQS that captures failed payloads; a separate Lambda reprocesses with exponential back‑off.  
> 4. Exposed an **S3 “Result” bucket** and returned a `202 Accepted` with a correlation ID; clients poll via SNS notifications for status, ensuring eventual consistency.  
> *Result (R):* Post‑deployment, error rate dropped from 12% to <0.5%, SLA compliance rose to 99.9%. Cost impact was +$300/month but justified by reduced support tickets and higher customer trust.  

**Bar‑raiser notes:** Demonstrated deep ownership of the full stack, applied data‑driven metrics, and iterated on failure patterns to create a resilient pattern that scales with traffic while keeping costs predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
