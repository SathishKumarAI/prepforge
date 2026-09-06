---
qid: ing_47a70acc00__fp__local
question: 'Explain: Step 8 - Lock Manager — SQL Statement Execution in Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 433
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:37:55-05:00'
sources: []
---

### Step 8 – The Lock Manager in SQL‑Statement Execution  

When a database engine receives an `INSERT`, `UPDATE` or `SELECT … FOR UPDATE`, it first **maps the logical data set** (tables, rows, indexes) to physical storage units (pages). Concurrency control then guarantees that these units are accessed safely while respecting isolation levels. The lock manager is the *bridge* between the statement and the underlying storage:  

1. **Identify required resources.**  
   From the query plan we know which pages or index nodes must be read or written.  

2. **Request locks in a deterministic order.**  
   To avoid deadlocks, the engine imposes a global ordering (e.g., page ID). The lock manager issues *shared* locks for reads and *exclusive* locks for writes according to this order.  

3. **Apply the **two‑phase locking (2PL)** rule.**  
   All locks are acquired before any record is modified, and none are released until the transaction ends. This guarantees serializability by construction—no interleaving of conflicting operations can produce a non‑serial result.  

4. **Resolve conflicts with queuing or escalation.**  
   If a lock cannot be granted immediately, the requesting thread blocks or waits; the manager may also *escalate* many fine‑grained locks to a coarser one (e.g., page lock) to reduce contention overhead.  

5. **Release and propagate.**  
   Upon commit/rollback the manager releases all held locks, allowing queued transactions to proceed.  

#### Non‑obvious insight  
Lock escalation is not merely an optimization; it’s a *formal guarantee* that the system can still satisfy 2PL while keeping lock table size manageable. Escalating too early may lead to lost concurrency, but escalating too late can cause starvation—balancing this trade‑off is the subtle art of lock manager design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
