---
qid: vq_72cb9b6ac7__faang__local
question: WHAT IS A FILTERED INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 449
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:16:34-05:00'
sources: []
---

**Clarify**  
A *filtered index* (also called a *partial index*) is an index that covers only a subset of rows in a table, defined by a predicate (e.g., `WHERE status = 'active'`). I’ll assume we’re talking about relational databases like SQL Server, PostgreSQL, or MySQL.  

**Approach**  
1. Explain the purpose: reduce index size and maintenance cost while improving query performance for common predicates.  
2. Contrast with full indexes.  
3. Highlight when to use it (high‑cardinality predicates, rarely queried columns).  

**Depth**  
- **Definition**: An index built on a subset of rows that satisfy a `WHERE` clause at creation time; the DBMS stores only those rows in the index B‑tree or hash structure.  
- **Benefits**: Smaller storage footprint → faster scans, reduced page faults, lower write overhead (less frequent rebuilds).  
- **Query optimizer use**: If a query’s predicate matches the filter, the engine can jump straight to the relevant index leaf nodes, avoiding scanning unrelated rows.  
- **Maintenance**: DML on non‑filtered rows doesn’t touch the index; only filtered rows incur overhead.  

**Edge Cases**  
- Queries that don’t match the filter won’t use the index (fallback to full table scan).  
- Updating a row to satisfy/violate the predicate adds/removes it from the index, potentially causing fragmentation.  
- Index statistics must be refreshed to keep optimizer accuracy.  

**Optimize & Communicate**  
Recommend adding a filtered index when:  
- The predicate is selective (e.g., `status = 'active'` covers <10% of rows).  
- The column is frequently queried but rarely updated outside the filter set.  
Explain that we’d monitor query plans and adjust statistics; if usage drops, consider dropping it to avoid stale maintenance costs. This structured reasoning demonstrates clear problem definition, technical depth, and practical trade‑offs—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
