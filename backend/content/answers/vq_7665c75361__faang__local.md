---
qid: vq_7665c75361__faang__local
question: How to calculate number of rows in table without using count function?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 484
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:17:32-05:00'
sources: []
---

**Clarify**

The interviewer wants a way to estimate or obtain the row count for a large table *without* executing `SELECT COUNT(*)`.  
Assumptions:  
1. We’re using a relational DBMS that exposes metadata (e.g., PostgreSQL’s pg_class, MySQL information_schema).  
2. The table is not empty and has statistics updated by the optimizer.  

**Approach**

1. Query system catalog / statistics tables for stored row estimates.  
2. If unavailable or stale, compute an approximate count via sampling or bitmap indexes.  
3. Fall back to a full scan only if precision is mandatory.

**Depth**

| Method | How it works | Complexity | Trade‑offs |
|--------|--------------|------------|------------|
| **pg_class.reltuples (PostgreSQL)** | Returns the last known estimate from `ANALYZE`. | O(1) | May be off by 10–20 % if no recent analyze. |
| **information_schema.tables** (MySQL) | Uses `TABLE_ROWS` which is a MyISAM or InnoDB hint. | O(1) | Approximate; only accurate for MyISAM. |
| **Sampling** (`SELECT COUNT(*) FROM table TABLESAMPLE SYSTEM (0.01);`) | Counts rows in a small random sample, scales up. | O(sample size) | Needs to adjust for skew; still approximate. |
| **Bitmap/column statistics** | Use `min/max` and distinct counts to infer cardinality. | Depends on DB engine. | Requires custom logic per schema. |

**Edge Cases**

- Freshly created tables with no stats → estimate is 0.  
- Highly fragmented or partitioned tables may mislead estimates.  
- Skewed data (many NULLs) can break sampling accuracy.

**Optimize & Communicate**

Explain that for dashboards or planning, an *estimate* suffices and saves resources. If exactness is critical, trigger a lightweight `ANALYZE` before counting or run a parallel full scan in the background. Emphasize that we’ll monitor drift between estimate and true count and schedule re‑analysis accordingly. This shows clear trade‑off management and aligns with production data‑engineering best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
