---
qid: ing_2b961e83cf__faang__local
question: 'Explain: Being a good distributed citizen — Designing robust and predictable
  APIs with idempotency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 461
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:24:13-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how to design an API that behaves predictably when run in a distributed system, especially under retries or duplicate requests. Key assumptions: the client may retry due to timeouts; the server runs on multiple nodes; we need linearizable semantics for state changes.

---

**2️⃣ Approach**  
- **Idempotency key** per request (client‑generated UUID).  
- Store the key + result in a durable store before performing side effects.  
- On repeat, look up the key and return the cached response.  
- Ensure all writes to the store are atomic with the business logic.

---

**3️⃣ Depth**  
*Implementation*:  
1. Client sends `POST /orders` with header `Idempotency-Key: <uuid>`.  
2. Server checks Redis/DB for that key.  
   - If exists → return stored response (200/201).  
   - Else → begin transaction, create order, store `{key: {status, body}}`, commit.  
3. Return the newly created order.  

*Complexity*: O(1) lookup + O(log n) DB write; storage cost is linear in number of unique keys but can be TTL‑based.  

*Trade‑offs*:  
- **Pros**: Guarantees no duplicate side effects, simpler error handling.  
- **Cons**: Requires extra storage and coordination; key collision risk if client misbehaves.

---

**4️⃣ Edge Cases**  
- Key expiration before retry → treat as new request (possible duplicate).  
- Network partition causing stale reads → use strong consistency store.  
- Client forgetting to send key → fall back to non‑idempotent path or reject with 400.

---

**5️⃣ Optimize & Communicate**  
Explain that idempotency keys should be short, cryptographically random, and validated server‑side. Use a write‑once log (e.g., Kafka) to replay operations if needed. In interviews, emphasize the “store‑before‑act” pattern and its role in making distributed systems resilient, tying back to real‑world services like payment APIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
