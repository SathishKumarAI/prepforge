---
qid: ing_3ce65bcc76__faang__local
question: 'Explain: Making the lock safe with fencing — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 574
total_tokens: 824
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:05:33-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how to implement a *distributed lock* that guarantees mutual exclusion across multiple nodes, as described in Martin Kleppmann’s “Making the lock safe with fencing.”  
Key assumptions:  

| Assumption | Why it matters |
|------------|----------------|
| Each node can write to a shared key‑value store (e.g., Redis, etcd). | The store is the only coordination point. |
| Clock skew is bounded but not negligible. | Fencing tokens must be monotonic across nodes. |
| Operations are idempotent and retries are safe. | Helps with transient failures. |

**2️⃣ Approach**  
1. **Lease acquisition** – Node writes a *lock record* containing: `owner_id`, `lease_expiry`, and a monotonically increasing `fencing_token`.  
2. **Optimistic lease renewal** – Before expiry, the owner renews by reading the current token, incrementing it, and writing back only if the token hasn’t changed (compare‑and‑set).  
3. **Lock release** – Owner writes a delete or marks as released with the same token check.  
4. **Safety on crash** – If a node crashes, its lease eventually expires; other nodes can acquire the lock with a higher token.

**3️⃣ Depth**  
- Use *compare‑and‑set* (CAS) to avoid lost updates.  
- Token is a 64‑bit counter; wrap‑around is safe if we ensure it’s larger than the max number of concurrent nodes.  
- Lease duration (`T`) should be > expected operation time + network latency.  
- Complexity: O(1) per acquire/renew/release against the KV store; latency dominated by round‑trip to the store.

**4️⃣ Edge Cases**  
- **Clock drift**: Use lease expiry rather than wall‑clock timestamps.  
- **Network partitions**: A node may falsely think it holds a lock if it can’t see another’s renewal; mitigated by lease timeout.  
- **Token wrap‑around**: Ensure token space is large enough or reset with care.

**5️⃣ Optimize & Communicate**  
- Batch renewals to reduce traffic (e.g., keep the lease alive in a background thread).  
- Use *optimistic concurrency*—fail fast and retry rather than locking the KV store.  
- Document the contract: “Higher fencing token always wins.”  

Explain this flow clearly, noting that the key safety guarantee comes from monotonically increasing tokens combined with atomic CAS operations on the shared store. This satisfies FAANG interviewers’ focus on structured reasoning, depth, and edge‑case awareness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
