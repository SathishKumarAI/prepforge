---
qid: ing_6248aa3832__fp__local
question: 'Explain: Reserving a Key — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 376
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:34:27-05:00'
sources: []
---

**Idempotency through “Reserve a Key” – Why it Works**

When a client calls an operation that changes system state (e.g., a payment or order creation), the network can replay the request if the first attempt times out. The *fundamental problem* is: **how to guarantee that repeated messages produce the same final state without side‑effects**.

1. **Identify the operation** – Every idempotent request carries a *client‑generated key*.  
2. **Reserve the key** – Before performing the action, the server atomically records “key X is in use”. If the same key arrives again, the server immediately returns the stored result instead of re‑executing the logic.  
3. **Persist the outcome** – The result (or error) is written to durable storage alongside the key. Subsequent requests with that key read this snapshot and return it verbatim.

This scheme reduces to a *two‑phase commit* on a single record: “reserve” (lock) and “commit” (store result). It guarantees **consistency** because the server never applies the mutation twice; it simply re‑reads the stored outcome. The key is also a *cryptographic nonce*, preventing replay across sessions.

**Non‑obvious insight:**  
The reservation itself can be implemented as an *optimistic lock* on a distributed cache (e.g., Redis SETNX). This turns idempotency into a lightweight synchronization primitive, avoiding heavy transactional overhead while still preserving the *deep principle of atomicity* in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
