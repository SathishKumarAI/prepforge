---
qid: ing_fba3c9ce6f__faang__local
question: 'Explain: Non-Atomic Reservation — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 501
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:25:06-05:00'
sources: []
---

**Clarify**  
You’re asking how *non‑atomic reservations* can still be idempotent in a distributed system (e.g., seat booking). The goal is to guarantee that repeated “reserve” requests from the same client or retries by the network result in exactly one reservation, even if the request never reaches the backend atomically.

**Approach**  
1. **Idempotency key** – client generates a unique token per logical action.  
2. **Pre‑allocation table** – write the key + desired state before any external call.  
3. **Two‑phase commit (2PC) / Saga** – reserve locally, then confirm with downstream services; on failure roll back or mark as *pending*.  
4. **Idempotent handlers** – look up the key first; if already processed, return stored result.

**Depth**  
- Store `(idempotency_key, status)` in a fast, strongly‑consistent store (e.g., Redis with `SETNX`).  
- When a request arrives: `SETNX idempotency_key "IN_PROGRESS"`. If it fails → key exists → fetch current status.  
- After successful external reservation, update to `"SUCCESS"`; on failure, set to `"FAILED"` or delete the key.  
- Complexity: O(1) for lookup/insert in Redis; linear in number of downstream calls for 2PC.  
- Trade‑offs: extra write before confirmation can expose stale data if crash occurs; mitigated by short TTLs and cleanup jobs.

**Edge Cases**  
- **Duplicate keys** from client bugs → still safe, returns same result.  
- **Crash after `IN_PROGRESS` but before success** → key remains; retry will see `"IN_PROGRESS"` and wait or timeout.  
- **Clock skew** in distributed services → use logical timestamps in the status.

**Optimize & Communicate**  
Explain that this pattern decouples idempotency from atomicity: we guarantee one‑shot processing without requiring a single transaction across all components. Emphasize performance (constant‑time lookups) and fault tolerance (retry logic). Wrap up by noting that this is a proven design in high‑traffic booking systems used at Meta, Google, etc.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
