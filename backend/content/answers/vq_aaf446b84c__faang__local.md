---
qid: vq_aaf446b84c__faang__local
question: WHAT IS AN INDEX SCAN VERSUS AN INDEX SEEK?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 567
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:27:37-05:00'
sources: []
---

**Clarify**  
> *Question:* “What is an index scan vs. an index seek?”  
Assumptions: We’re talking about relational DB engines (SQL Server/Oracle/PostgreSQL), where indexes are B‑trees and the engine can either **scan** or **seek** them to satisfy a query.

---

### Approach
1. Define each operation in plain terms.  
2. Explain when each is chosen by the optimizer.  
3. Compare I/O, CPU, and latency characteristics.  

---

### Depth (Core Answer)

| Operation | How it works | Typical use‑case |
|-----------|--------------|------------------|
| **Index Seek** | The engine navigates the B‑tree to the first key that satisfies the predicate, then follows leaf pointers sequentially until the range ends. Only relevant pages are read. | Point lookups or narrow ranges (e.g., `WHERE id = 42` or `BETWEEN 100 AND 200`). |
| **Index Scan** | The engine reads every leaf page of the index in order, optionally filtering rows that don’t meet the predicate. | Full‑table scans, large ranges (`>50%` of rows), or when no usable index exists. |

- **Cost model:** Seek incurs a small tree‑walk cost (~log₂N pages) plus sequential reads for matched rows. Scan pays full leaf‑page read but avoids the seek overhead.
- **CPU impact:** Seeks use less CPU because fewer pages are processed; scans may benefit from prefetching and larger I/O bursts.

---

### Edge Cases
- *Sparse indexes:* A seek may still touch many pages if the sought value is rare.  
- *Clustered vs. non‑clustered:* Seeking a clustered index often returns data directly, whereas scanning may require extra lookups for non‑clustered.  
- *Predicate on multiple columns:* Composite indexes can switch from seek to scan if one column is highly selective.

---

### Optimize & Communicate
1. **Index design:** Ensure high‑selectivity keys (e.g., primary keys) are indexed.  
2. **Query hints / statistics:** Keep stats fresh; consider `OPTION (RECOMPILE)` for ad‑hoc predicates.  
3. **Explain plan review:** Always inspect the execution plan to confirm whether a seek or scan is used.  

Narrate: “I’d first verify the index’s cardinality and then let the optimizer decide—seeks are preferred when they reduce page reads, but scans win when most of the index must be examined.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
