---
qid: vq_4a089de965__faang__local
question: What are the differences between Temporary Table and Table Variable?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 616
total_tokens: 850
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:09:07-05:00'
sources: []
---

**Clarify**  
You’re asking about *Temp tables* (`#temp` / `##temp`) vs *Table variables* (`@tv`).  
Assumptions: SQL Server; both exist in the same session; we care about performance, memory, scope, and usage patterns.

---

### 1️⃣ Approach
Compare them on four axes: **Scope & Lifetime**, **Metadata & Statistics**, **Indexing/Constraints**, **Execution‑Plan Impact**. Then give a quick rule of thumb.

---

### 2️⃣ Depth

| Feature | Temp Table | Table Variable |
|---------|------------|----------------|
| **Scope** | Session (or global) – visible to all nested batches, procedures, and triggers. | Procedure/Batch scoped – invisible outside its defining block. |
| **Lifetime** | Dropped automatically when session ends or `DROP TABLE`. | Dropped at end of batch/proc; can be explicitly dropped earlier. |
| **Statistics** | SQL Server builds statistics (auto‑updated). Enables cardinality estimates for query optimizer. | No statistics – optimizer treats row count as 1 unless hints are used. |
| **Indexes & Constraints** | Full support: primary keys, foreign keys, unique indexes, non‑clustered indexes. | Only primary key/unique constraints; cannot create additional indexes (except in newer SQL Server via `CREATE INDEX`). |
| **Memory & TempDB usage** | Stored in TempDB; can consume large space; spilling to disk if big. | Stored in memory first; spills to TempDB only when exceeding limits (~1 MB). |
| **Concurrency & Locking** | Uses shared/exclusive locks like regular tables; may block other sessions. | Uses row‑level locking; generally lower contention. |
| **Query Optimizer Hints** | Can use `OPTION (RECOMPILE)` or `OPTIMIZE FOR` on temp tables. | Limited hints; optimizer often misestimates cardinality. |

---

### 3️⃣ Edge Cases
- **Large data sets** → Temp table preferred; TV will spill to disk and cause performance hit.  
- **Small, short‑lived data** (e.g., lookup lists) → TV is cheaper.  
- **Need for indexes/constraints** → Temp table mandatory.  
- **Procedures called many times** → TV avoids tempdb contention.

---

### 4️⃣ Optimize & Communicate
*Rule of thumb:* Use a **Temp Table** when you need accurate statistics, indexes, or large data; use a **Table Variable** for small, simple sets where overhead matters less.  
When performance is critical, profile both options in the target workload and monitor TempDB usage.  

> “In practice, I start with a table variable for lookup tables under 10 KB, then switch to temp tables if I hit any of the edge cases above.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
