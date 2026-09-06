---
qid: vq_0aa1524787__faang__local
question: How does one select the TOP N rows from a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 393
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:56:55-05:00'
sources: []
---

**Clarify**  
You want to return *the top N* rows according to some ordering (e.g., highest score, earliest date). Assume the table is in a relational DB and that an index exists on the sort key.

**Approach**  
1. Order by the desired column(s) (`ORDER BY col DESC`).  
2. Limit the result set to N rows with `LIMIT` (MySQL/PostgreSQL) or `TOP N` (T‑SQL).  

If ties matter, add a secondary unique column to guarantee deterministic order.

**Depth**  
```sql
SELECT *
FROM   my_table
ORDER BY score DESC, id ASC      -- tie‑breaker
LIMIT  :N;                       -- parameterized
```
*Complexity*: O(log M + N) where M is table size – the index allows binary search to the start of the desired range, then linear scan for N rows.  
*Trade‑offs*: Using `ORDER BY` without an index forces a full sort (O(M log M)). For very large N relative to M, scanning may be cheaper.

**Edge Cases**  
- **N > total rows**: returns all rows.  
- **No index**: query degrades to full table scan + sort; consider adding one on the ordering column(s).  
- **NULL values**: decide where they should appear in order (MySQL places NULLs last by default).

**Optimize & Communicate**  
If N is small and frequent, create a covering index on `(score DESC, id ASC)` to avoid reading full rows. In distributed systems, use `LIMIT` with pagination or window functions (`ROW_NUMBER() OVER (…)`) for precise control. Explain that the plan hinges on proper indexing; otherwise performance will suffer dramatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
