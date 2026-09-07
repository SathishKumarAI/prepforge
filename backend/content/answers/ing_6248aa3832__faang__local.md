---
qid: ing_6248aa3832__faang__local
question: 'Explain: Reserving a Key — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 429
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:32:26-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* How do we reserve a unique key in a distributed system so that repeated “reserve” requests (e.g., from retries or duplicate messages) are idempotent and don’t create duplicate reservations?  
*Assumptions to confirm:*  
- The system is eventually consistent but must guarantee uniqueness per key.  
- Requests may arrive out‑of‑order or be retried.  
- We can use a distributed lock store (Redis, etcd, DynamoDB).  

**2️⃣ Approach**  
1. **Client tags each request with a unique idempotency token** (e.g., UUID + user‑id).  
2. **Server checks a “reservation” table:**  
   - If the key is free → create record `(key, token)` and return success.  
   - If already reserved → look up token: if same → idempotent success; else fail with conflict.  

**3️⃣ Depth**  
- Use a *compare‑and‑swap* (CAS) or conditional write on the lock store to avoid race conditions.  
- Store the token in a separate “idempotency” table keyed by `(key, token)` for quick lookup.  
- Complexity: O(1) average with single round‑trip; CAS ensures linearizability.  

**4️⃣ Edge Cases**  
- **Token expiration:** clean stale idempotency entries after TTL to free keys.  
- **Clock skew / retry windows:** ensure server time is authoritative.  
- **Partial failures:** use two‑phase commit or transactional DB (e.g., DynamoDB Transactions) to keep consistency.  

**5️⃣ Optimize & Communicate**  
- Cache free key status in memory for hot paths, evict after reservation.  
- Log every reservation attempt with token and outcome for audit.  
- Explain to interviewers: “We’re leveraging idempotency tokens + atomic CAS on a distributed lock store; this guarantees uniqueness while allowing safe retries.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
