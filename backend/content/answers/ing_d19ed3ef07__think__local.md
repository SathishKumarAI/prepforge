---
qid: ing_d19ed3ef07__think__local
question: 'Explain: Request Body — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 456
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:47:59-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
- Understand that “request body” refers to the JSON (or XML) payload sent by a webhook source.  
- Assume the system is a typical event‑driven architecture where services publish events via HTTP POSTs.  
- Presume we’re designing for reliability, scalability, and security.

**2️⃣ Mental model / framework**  
- *Data contract*: what fields are required, optional, and their types.  
- *Validation & schema enforcement*: JSON Schema or Protobuf.  
- *Idempotency*: use a unique event ID to avoid duplicate processing.  
- *Security*: HMAC signatures, TLS, IP whitelisting.  
- *Scalability*: queueing (Kafka, SQS) and parallel workers.

**3️⃣ Step‑by‑step reasoning**  
1. Define the payload structure: e.g., `{ "event_id": "...", "type": "...", "payload": { … } }`.  
2. Enforce schema on receipt; reject malformed requests early.  
3. Verify authenticity (signature header, shared secret).  
4. Store raw body in an immutable log for audit and replay.  
5. Publish to a message bus for downstream consumers.  
6. Acknowledge with 200/202 once queued, not after full processing.

**4️⃣ Common traps to avoid**  
- *Processing in‑flight payloads*: don’t block the webhook endpoint while heavy work runs.  
- *Missing idempotency*: duplicate webhooks can corrupt state.  
- *Hard‑coded secrets*: expose them via environment or secret manager.  
- *Over‑strict validation*: reject legitimate extensions; use “additionalProperties” wisely.

**5️⃣ Sanity‑check & communicate**  
- Verify that each field has a clear purpose and documented format.  
- Explain the flow: source → HTTPS POST → validator → logger → queue → consumer.  
- Emphasize idempotency and security as non‑negotiable pillars.  

This structured approach helps you design robust webhook request bodies in any system‑design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
