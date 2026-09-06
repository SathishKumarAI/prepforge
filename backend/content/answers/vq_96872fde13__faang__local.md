---
qid: vq_96872fde13__faang__local
question: What is Deadlock?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 445
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:23:34-05:00'
sources: []
---

**1️⃣ Clarify**  
Deadlock is a state where two or more concurrent processes are each waiting for the other(s) to release resources, causing all of them to stall forever. I’ll assume we’re talking about database/table locks (row‑level, page‑level, table‑level), not OS file locks, and that the system supports multiple transaction isolation levels.

**2️⃣ Approach**  
Explain the classic “four Coffman conditions” (mutual exclusion, hold & wait, no preemption, circular wait) and how they map to SQL locks. Then discuss typical scenarios: long transactions holding row locks while other sessions try to acquire a different lock on the same rows or tables.

**3️⃣ Depth**  
- **Detection**: most DBMS build a wait‑for graph; if it contains a cycle, a deadlock exists.  
- **Resolution**: the engine aborts one victim transaction (often the youngest or smallest cost) and rolls back its locks.  
- **Prevention**: lock ordering (always acquire in a canonical order), use shorter transactions, lower isolation levels, avoid explicit `SELECT FOR UPDATE` on large sets.  
- **Impact**: can cause query timeouts, lost throughput, and must be logged for audit.

**4️⃣ Edge Cases**  
- *Resource starvation* instead of deadlock (one transaction never gets a lock).  
- Deadlocks across distributed transactions (e.g., XA) involve two‑phase commit.  
- “Deadlock chain” where multiple sessions form a long cycle—harder to detect quickly.

**5️⃣ Optimize & Communicate**  
Highlight that tuning the lock granularity (row vs page) and applying optimistic concurrency control can dramatically reduce deadlocks in high‑throughput systems. When explaining, I’d use a small example: Transaction A locks row 1 → row 2; Transaction B locks row 2 → row 1, leading to a cycle. This concrete illustration helps interviewers gauge my grasp of the concept and my ability to translate theory into practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
