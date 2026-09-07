---
qid: ing_01df0c93d6__faang__local
question: 'Explain: MVCC Example — Database Isolation Levels'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 515
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:48:26-05:00'
sources: []
---

**Clarify**  
You’re asking how *Multi‑Version Concurrency Control (MVCC)* implements database isolation levels—e.g., Read Committed, Repeatable Read, and Serializable—and what problems it solves. Assume a relational DB with ACID transactions and concurrent readers/writers.

**Approach**  
1. Explain MVCC’s core: each write creates a new row version with timestamps or transaction IDs.  
2. Show how reads pick the “visible” version based on the isolation level.  
3. Map visibility rules to the three common levels.  

**Depth**  
- **Read Committed (RC)** – A read sees only committed versions as of its start time; it can still observe newer committed writes after it begins, so non‑repeatable reads occur.  
- **Repeatable Read (RR)** – The reader locks a snapshot timestamp at transaction start and always reads the latest version ≤ that timestamp. This prevents phantom reads but allows *write skew* if concurrent writers create new rows that satisfy predicates of two readers.  
- **Serializable (S)** – Adds predicate locking or *snapshot isolation with conflict detection*. A read obtains a snapshot, and any concurrent write that would change the result set causes one transaction to abort. MVCC implements this by checking whether any committed version conflicts with the reader’s predicate; if so, rollback.  

Complexity: MVCC keeps old versions until no transaction references them—space overhead grows linearly with concurrent activity but reduces lock contention (O(1) read time).  

**Edge Cases**  
- Long‑running readers holding snapshots can keep many obsolete rows alive → “old data” retention.  
- Write skew under RR can be detected by *predicate locks* or *serialization tests*.  
- If a transaction aborts, its uncommitted versions are discarded; readers may need to retry.

**Optimize & Communicate**  
Explain that MVCC trades a small memory cost for near‑zero read‑write contention, which is why Google Spanner and Amazon Aurora use it. Highlight that understanding the snapshot rules lets you choose the right isolation level: RC for high throughput, RR for most applications, S when strict serializability is required. End with a quick sanity check: “If I start a transaction at time T and read a row written at T+5 under RR, what will I see?” – it should still show the old value, illustrating snapshot consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
