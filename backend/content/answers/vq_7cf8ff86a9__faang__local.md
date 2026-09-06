---
qid: vq_7cf8ff86a9__faang__local
question: How do I order a union ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 451
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:18:57-05:00'
sources: []
---

**Clarify**  
You’re asking how to sort the result of a SQL `UNION` (or set‑union) operation.  
Assumptions:  
* We want deterministic order across all rows, not just arbitrary interleaving.  
* The underlying tables may have different schemas; we’ll cast them to a common type.  
* Performance matters – avoid full table scans if possible.

**Approach**  
1. Perform the `UNION` (or `UNION ALL` if duplicates are acceptable).  
2. Wrap it in an outer query and apply an `ORDER BY`.  
3. Use indexes on the ordering columns of each source to speed up sorting.  
4. If you need stable ordering across partitions, add a tie‑breaker column (`source_id`, row number).

**Depth**  
```sql
SELECT * FROM (
  SELECT col1, col2, 'A' AS src FROM table_a
  UNION ALL
  SELECT col1, col2, 'B' AS src FROM table_b
) t
ORDER BY col1 ASC, col2 DESC;
```
*Complexity*: Sorting dominates → O(n log n). Indexes can reduce the sort cost if the union result is small or can be streamed.  
*Trade‑offs*: `UNION` removes duplicates at a set‑operation cost; `UNION ALL` preserves all rows but may need post‑sort deduplication.

**Edge Cases**  
* Null values: define ordering (`NULLS FIRST/LAST`).  
* Different data types: explicit casts to avoid runtime errors.  
* Very large result sets: consider using temporary tables or external sorting if memory is limited.

**Optimize & Communicate**  
Explain that the key is to keep the union operation minimal and let the outer `ORDER BY` handle ordering, leveraging indexes. If performance degrades, discuss partitioning the union into smaller chunks or materializing a sorted temp table. This shows clear problem‑solving, communication of trade‑offs, and depth in SQL execution details.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
