---
qid: ing_1841a961f4__faang__local
question: 'Explain: Retry — How to Avoid Double Payment'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 442
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:40:53-05:00'
sources: []
---

**Clarify**  
The question asks how a payment system can *retry* failed transactions without risking that the same amount is charged twice (double‑payment). I’ll assume we’re dealing with online orders where a single customer request may trigger several backend attempts, and we want idempotence across retries.  

**Approach**  
1. Assign a unique **idempotency key** to each purchase request.  
2. Store the key + transaction state in a durable store before contacting the payment gateway.  
3. On every retry, look up the key; if an “in‑progress” or “completed” record exists, simply return that result instead of re‑charging.  

**Depth**  
*Implementation*:  
- Use a database table `payment_attempts(idempotency_key PK, status, amount, gateway_id, created_at)`.  
- On first receipt: insert with status `INITIATED`, call gateway.  
- If gateway succeeds → update to `COMPLETED` and record `gateway_id`.  
- If it fails → mark `FAILED`; the client can retry with same key.  
The system is **O(1)** lookup per retry, and database writes are idempotent by primary‑key constraint.  

**Edge Cases**  
- *Network partitions*: ensure eventual consistency; use distributed lock or transactional outbox pattern.  
- *Expired keys*: allow a TTL (e.g., 24 h) after which a new key must be generated to avoid stale data.  
- *Multiple payment methods*: keep separate records per method but share the same idempotency key.  

**Optimize & Communicate**  
Explain that this pattern is standard in Stripe, PayPal APIs, and scales horizontally because each microservice only needs read‑write access to its own table. Highlight trade‑offs: extra storage for keys vs. safety against double charges, and how monitoring alerts on duplicate “COMPLETED” entries can surface bugs early. This shows structured thinking, depth, and practical engineering insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
