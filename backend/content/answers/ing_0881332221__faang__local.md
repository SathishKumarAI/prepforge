---
qid: ing_0881332221__faang__local
question: 'Explain: Handling In-Progress Requests — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 546
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:04:12-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re designing a stateless API that performs an expensive ML inference (e.g., image classification). Clients may retry a request due to network glitches, so we need **idempotency**: repeated identical requests must not trigger duplicate in‑progress work or produce divergent results.  
Assumptions: *Requests are uniquely identified by a client‑supplied Idempotency-Key; the service can store short‑lived state; latency < 5 s.*

---

**2️⃣ Approach**  

1. **Validate key** – reject malformed keys.  
2. **Lookup** – atomically check a distributed cache (Redis) for an entry keyed by `idempotency-key`.  
3. **Three states**  
   * **Absent** → start ML job, store `PENDING` with a future result promise and TTL.  
   * **Pending** → return “in‑progress” status; optionally stream progress via websockets.  
   * **Completed/Failed** → return cached response or error.

4. **Result persistence** – once inference finishes, write the output to cache (or DB) with the same key and set a longer TTL (e.g., 24 h).  
5. **Cleanup** – background job sweeps expired keys.

---

**3️⃣ Depth**  

*Atomicity*: use Redis `SETNX` + Lua script to avoid race conditions when two replicas try to start the same job.  
*Complexity*: O(1) cache ops; ML inference is external, so overall latency dominated by that step.  
*Fault tolerance*: if a worker crashes before writing result, subsequent requests will retry from “pending” and re‑enqueue the job.

---

**4️⃣ Edge Cases**  

* Duplicate keys with different payloads → reject or hash payload into key.  
* Long‑running jobs exceed TTL → refresh TTL on progress updates.  
* Cache partition failure → fallback to database lookup; still idempotent but slower.

---

**5️⃣ Optimize & Communicate**  

- Use **deduplication queues** (e.g., Kafka with dedupe filter) for higher throughput.  
- Expose a `/status/{id}` endpoint for clients to poll progress instead of blocking.  
- Log every state transition; provide metrics (`pending_count`, `inflight_latency`).  

By clearly separating the idempotency layer from ML execution and using distributed atomic ops, we guarantee safe retries while keeping latency low—exactly what FAANG interviewers look for in a robust system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
