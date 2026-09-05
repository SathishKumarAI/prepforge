---
qid: ing_410c096ea7__fp__local
question: 'Explain: Change Data Capture Techniques — Database-Internals/ChangeDataCapture/Readme.md
  at main \u00b7 Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 538
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:22:59-05:00'
sources: []
---

**Why Capture Changes?**  
In a relational system, the *current* state of a table is all you see when you query it. Yet most analytics and integration workloads need to know **what happened**, not just the final snapshot. The fundamental problem is: *how can we observe every mutation (INSERT/UPDATE/DELETE) without perturbing normal OLTP traffic?*  

**Core Insight – “Write‑once, read‑many”**  
A database already records each write in its transaction log for durability and rollback. That log is a linear, immutable stream of low‑level operations. If we can *translate* those raw events into logical rows (the “before” and “after” images), we obtain a correct, time‑ordered change feed without any extra I/O or locking.

**Typical Techniques**

| Technique | How it works | Trade‑offs |
|-----------|--------------|------------|
| **Log Mining** | Parse the binary transaction log (e.g., Oracle redo, SQL Server binlog). Extract row‑level changes by interpreting low‑level record formats. | No extra overhead on OLTP; but requires vendor‑specific parsers and careful handling of complex statements. |
| **Trigger‑Based CDC** | Attach AFTER triggers that write change records to a staging table or message queue. | Simpler to implement; introduces transaction latency and can be fragile under bulk loads. |
| **Timestamp/Version Columns** | Add `ts` or `ver` columns; poll for rows where the value has changed since last read. | Very lightweight but may miss deletes unless a tombstone strategy is used. |

**Deeper Principle – *Monotonicity + Idempotence***  
All CDC streams must preserve monotonic order (log sequence numbers) and be idempotent: re‑processing a record should not corrupt downstream state. This aligns with *causal consistency* in distributed systems and the *commit‑log* abstraction in CRDTs.

**Non‑obvious Insight**  
Most people assume “read the log” is enough, but **semantic reconstruction** matters: the same binary log entry can represent an UPDATE that deletes a row or one that only changes a foreign key. Without reconstructing the *before* image (often by reading from the page cache), downstream consumers cannot differentiate “delete vs. modify”. Thus, true CDC must be *log‑aware + state‑aware*, blending low‑level I/O with high‑level relational semantics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
