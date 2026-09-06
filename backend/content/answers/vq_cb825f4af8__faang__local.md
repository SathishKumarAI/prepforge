---
qid: vq_cb825f4af8__faang__local
question: HOW DO YOU OPTIMIZE SQL QUERIES FOR PERFORMANCE?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 508
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:33:44-05:00'
sources: []
---

**Clarify**  
We need to explain how to tune an SQL query for speed—assume a relational DB (PostgreSQL/MySQL), large tables, typical OLTP/OLAP workloads, and that indexes exist but may be missing or mis‑used.

**Approach**  
1. **Profile the query** – use `EXPLAIN` / `ANALYZE`.  
2. **Inspect the execution plan** – look for full table scans, nested loops, sort costs.  
3. **Identify bottlenecks** – high I/O, expensive joins, sub‑queries, or missing predicates.  
4. **Iteratively apply fixes** – indexes, query rewrite, statistics refresh, partitioning.

**Depth**  
- **Indexes**: add B‑tree on columns in `WHERE`, `JOIN`, `ORDER BY`. For composite predicates use multi‑column indexes; consider covering indexes to avoid lookups.  
- **Selectivity & stats**: run `ANALYZE` so the optimizer knows cardinality.  
- **Query rewrite**: replace correlated sub‑queries with joins or EXISTS, push predicates into sub‑selects, remove unnecessary columns (`SELECT *`).  
- **Joins**: use hash join for large tables; ensure join order is optimal (e.g., smallest table first).  
- **Partitioning**: range/hash partition on high‑volume date or ID columns to limit scan scope.  
- **Materialized views / caching**: pre‑aggregate expensive calculations when data changes infrequently.

Complexity shifts from *O(n)* full scans to *O(log n)* index seeks; typical speedups are 10–100× for large datasets.

**Edge Cases**  
- Highly selective predicates with tiny result sets may still trigger a scan if statistics are stale.  
- Over‑indexing can hurt writes; balance read vs write load.  
- Certain DBs (e.g., MySQL InnoDB) auto‑create secondary indexes on foreign keys—avoid redundancy.

**Optimize & Communicate**  
Explain that optimization is an iterative, data‑driven process: profile → fix → re‑profile. Emphasize trade‑offs: index maintenance overhead vs read speed; partitioning complexity vs query simplicity. Conclude by stating you’d monitor after deployment (e.g., `pg_stat_statements`) to confirm sustained performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
