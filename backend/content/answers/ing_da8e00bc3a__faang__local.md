---
qid: ing_da8e00bc3a__faang__local
question: 'Explain: Status and Lock Lifecycle — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 482
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:06:49-05:00'
sources: []
---

**Clarify**  
We’re asked how a distributed system can guarantee idempotent updates on an entity that has a *status* flag (e.g., `PENDING → APPROVED`) and a *lock* (to prevent concurrent changes). The key assumptions:  
1. Requests are retried or duplicated; we need to avoid double‑processing.  
2. Locks are short‑lived and stored in a shared store (Redis/DB).  
3. Status transitions form a DAG with no cycles.

**Approach**  
1. **Command pattern** – each update is a command object (`cmd_id`, `entity_id`, `desired_status`).  
2. **Lock acquisition** – use an atomic “set if not exists” on `lock:{entity_id}` with a TTL.  
3. **Idempotency key** – persist the command ID in a per‑entity log; reject duplicates.  
4. **Transactional update** – inside the lock, read current status, validate transition, write new status and log entry atomically.

**Depth**  
- Lock key: `lock:{id}` → value=`cmd_id`, TTL=30s.  
- Idempotency table: `(entity_id, cmd_id) → timestamp`.  
- Status transition graph stored in memory or DB; check `current_status → desired_status` is allowed.  
Complexity: O(1) for lock and idempotency checks; transactional write cost depends on storage (e.g., 2‑phase commit). Trade‑off: using Redis gives sub‑ms locks but requires persistence fallback.

**Edge Cases**  
- Lock expiry before transaction commits → retry with same `cmd_id`.  
- Duplicate command after lock released → idempotency table prevents re‑apply.  
- System crash mid‑transaction → ensure atomicity via DB transaction or write‑ahead log.

**Optimize & Communicate**  
Introduce *optimistic concurrency* by storing a version number; if the version changes before commit, abort and retry. Explain to interviewers that this reduces lock contention and improves throughput while preserving idempotency. Conclude with complexity: O(1) average latency, linear in number of concurrent entities, and discuss how monitoring lock acquisition rates informs scaling decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
