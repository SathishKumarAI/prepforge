---
qid: ing_4fae26dcf7__faang__local
question: 'Explain: New Key on Every Retry — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 452
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:49:36-05:00'
sources: []
---

**Clarify**

We’re asked how “new key on every retry” enforces idempotency in a distributed ML‑training system (e.g., request‑to‑train).  
Assumptions to confirm:  

* The client may lose a response or timeout and therefore retries.  
* Each training job is expensive, so duplicate jobs must be avoided.  
* We have a key/value store for job metadata and a queue for workers.

**Approach**

1. Client generates a unique request ID (UUID).  
2. On first attempt, it writes an entry `reqID→PENDING` to the store.  
3. The worker reads the queue; if `PENDING`, it starts training and updates status to `RUNNING`.  
4. If the client retries with the same ID, the system checks the key: if already `RUNNING/COMPLETED`, it simply returns the current state (no new job).  

If a retry comes with *a new* key, we treat it as an entirely new request—this is what “new key on every retry” means.

**Depth**

- **Consistency:** Use atomic `SETNX` to avoid race conditions when inserting the first key.  
- **Complexity:** O(1) for key lookup; queue push/pop are also constant time.  
- **Trade‑offs:** Using a new key per retry removes deduplication logic but increases storage churn; acceptable if retries are rare.

**Edge Cases**

* Network partition: workers may see stale `PENDING` entries—use TTL or heartbeat to expire them.  
* Client crashes after job starts: no duplicate because key exists.  
* Malicious client sends many new keys: rate‑limit or quota per user.

**Optimize & Communicate**

- Add a secondary “correlation ID” so the client can correlate responses across retries.  
- Log retry attempts for audit and billing.  
- Explain to interviewers that this pattern decouples request idempotency from job lifecycle, giving clear O(1) checks while keeping storage manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
