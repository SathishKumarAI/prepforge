---
qid: ing_2090535487__faang__local
question: 'Explain: Idempotency — How to Avoid Double Payment'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 493
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:00:23-05:00'
sources: []
---

**Clarify**  
*Problem*: A payment system receives requests that may be retried (network glitches, client bugs). We must guarantee a customer never pays twice for the same order—i.e., *idempotency*.  
*Assumptions to confirm*:  
1. Each request carries a unique **request‑id** or transaction id.  
2. The system can persist state between retries.  
3. Payments are processed via an external gateway that may also retry.

---

**Approach**  
1. **Client side**: generate and send a deterministic `request_id` with every payment call.  
2. **Server side**:  
   * On receipt, check a datastore (e.g., Redis/DB) for the `request_id`.  
   * If present → return cached response (already processed).  
   * If absent → execute payment, record result under that `request_id`, then respond.  

---

**Depth**  
*Implementation*: Use an atomic “set if not exists” operation (`SETNX` in Redis) to reserve the key before processing. Store status (`PENDING`, `SUCCESS`, `FAILURE`) and any gateway response.  
*Complexity*: O(1) lookup/insert; storage cost proportional to number of unique requests.  
*Trade‑offs*:  
- **Latency**: minimal, one extra round‑trip to the store.  
- **Durability**: persistence layer must survive restarts (use durable DB or Redis with persistence).  

---

**Edge Cases**  
1. **Stale keys**: purge after a retention window (e.g., 30 days) to avoid infinite growth.  
2. **Gateway failures**: record `FAILURE` so retries can be retried safely.  
3. **Clock skew**: rely on request‑id, not timestamps.

---

**Optimize & Communicate**  
*Improvements*:  
- Use a **CQRS** pattern: write side records idempotency keys; read side serves cached responses.  
- Add monitoring for “duplicate” hits to detect potential abuse or bugs.  

*Narration*: Explain the flow clearly, show how each step protects against double charges, and quantify performance/space trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
