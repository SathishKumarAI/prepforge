---
qid: ing_b4e948a9e9__faang__local
question: 'Explain: Common Types of Locks — Database Locks Explained'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 550
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:44:09-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *common types of database locks* that protect data integrity in concurrent environments—e.g., row‑level vs table‑level, shared (read) vs exclusive (write), and how they differ across engines.

**Approach**  
1. List lock granularity levels.  
2. Define each lock type’s semantics.  
3. Explain typical use cases per DBMS.  
4. Mention deadlock detection/avoidance.  

**Depth**  
| Granularity | Lock Type | Semantics | Typical Use | Example |
|-------------|-----------|-----------|--------------|---------|
| **Row‑level** | *Shared (S)* | Multiple transactions may read the same row concurrently. | OLTP reads; short‑lived queries. | InnoDB uses `SELECT … LOCK IN SHARE MODE`. |
|  | *Exclusive (X)* | Only one transaction can write or read a locked row; blocks others. | Updates, deletes. | `UPDATE …` acquires X on affected rows. |
| **Table‑level** | *Shared* | Allows concurrent reads of the entire table. | Bulk reporting; analytics queries that don’t modify data. | PostgreSQL’s `LOCK TABLE ... IN SHARE MODE`. |
|  | *Exclusive* | Prevents any other read/write until released. | Schema changes, massive deletes/updates. | MySQL’s `ALTER TABLE` implicitly acquires X on the table. |
| **Intent Locks** (InnoDB) | *Intent‑Shared / Intent‑Exclusive* | Declare intent to acquire row locks; reduces lock contention. | Helps maintain consistency across granularities. | Implicit with row‑level S/X operations. |

- **Deadlock**: Occurs when two transactions hold conflicting locks and wait for each other. Engines use timeout or wait‑die schemes (PostgreSQL, MySQL) to resolve.

**Edge Cases**  
- Long‑running SELECTs holding shared locks can block schema changes.  
- Write skew: two concurrent X locks on adjacent rows may still conflict due to index pages.  
- Some engines (SQLite) default to database‑wide locks; need WAL mode for concurrency.

**Optimize & Communicate**  
For performance, prefer row‑level S/X when possible and enable *intent* locks to reduce contention. Explain that tuning isolation levels (READ COMMITTED vs SERIALIZABLE) further controls lock behavior. Conclude by noting that understanding lock semantics is critical for designing scalable, consistent systems—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
