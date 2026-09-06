---
qid: vq_7bd37ba727__faang__local
question: WHAT IS A DEADLOCK IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 411
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:18:48-05:00'
sources: []
---

**Clarify**  
A deadlock in SQL is a situation where two or more transactions each hold a lock that the others need, causing all of them to wait indefinitely. I’ll assume we’re talking about relational DBMSs (e.g., PostgreSQL, Oracle, SQL Server) and that locks are acquired on rows or tables.

**Approach**  
1. Identify the resources each transaction holds.  
2. Detect a cycle in the “wait‑for” graph: T₁ → T₂ → … → T₁.  
3. Resolve by aborting one victim transaction, freeing its locks so others can proceed.

**Depth**  
- **Lock granularity:** row‑level vs table‑level; finer granularity increases deadlock likelihood but reduces blocking.  
- **Transaction isolation levels:** higher levels (SERIALIZABLE) generate more locks.  
- **Deadlock detection algorithms:** DBMS periodically scans the wait‑for graph (e.g., every few seconds).  
- **Victim selection heuristics:** choose the youngest or smallest transaction to minimize rollback cost.  
- **Complexity:** Detection runs in O(V+E) on the wait‑for graph; impact is usually negligible compared to query latency.

**Edge Cases**  
- Long‑running transactions that hold locks for minutes can starve others.  
- Recursive triggers or stored procedures that acquire locks in different orders may create subtle deadlocks.  
- Distributed transactions (XA) involve two‑phase commit, complicating detection.

**Optimize & Communicate**  
To reduce deadlocks: enforce consistent lock ordering, use optimistic concurrency control where possible, and keep transactions short. When explaining to stakeholders, I’d say: “Deadlocks are like a traffic jam; the DBMS periodically checks for circular waits and rolls back one driver so traffic can resume.” This conveys both the technical mechanism and its practical impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
