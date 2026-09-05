---
qid: ing_1841a961f4__fp__local
question: 'Explain: Retry — How to Avoid Double Payment'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 450
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:57:12-05:00'
sources: []
---

**Retry – How to Avoid Double Payment**

In a payment system, the *fundamental problem* is that a client may send the same transaction twice (network glitch, user click‑repeat). If we naïvely process both requests, the user pays twice—an unacceptable error.  
The solution is **idempotence**: each logical operation must have the same effect regardless of how many times it’s applied.

1. **Why idempotence works**  
   *A payment request* is a *state‑changing operation*. If we map the system to an optimization problem—minimise user loss subject to transaction cost constraints—an extra charge is a violation of that constraint. By ensuring each logical request maps to exactly one state transition, we guarantee feasibility.

2. **Implementation principle**  
   Assign a unique identifier (idempotency key) to every request. The server stores the result of processing that key once. Subsequent retries look up the key; if it exists, they return the cached response instead of re‑executing the debit. This is a *memoisation* technique from functional programming applied to stateful services.

3. **Non‑obvious insight**  
   The idempotency key should be *client‑generated*, not server‑assigned. If the client creates it (e.g., hash of amount, timestamp, user ID), the server can detect duplicates even across multiple microservices or after a crash, because the same key will appear in all logs. Server‑generated keys risk collision if retries hit before the first response is persisted.

4. **Guaranteeing correctness**  
   Use *optimistic concurrency*: attempt to insert the key into a unique index. If insertion fails (duplicate), read the stored result and return it. This turns the retry problem into a simple database uniqueness constraint, leveraging ACID guarantees without complex distributed locking.

Thus, by deriving idempotence from optimization needs and implementing it with client‑generated keys plus a unique DB index, we eliminate double payments while keeping the system responsive and scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
