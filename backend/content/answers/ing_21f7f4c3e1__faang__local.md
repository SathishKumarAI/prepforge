---
qid: ing_21f7f4c3e1__faang__local
question: 'Explain: FULL OUTER JOIN — How do SQL Joins Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 472
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:03:41-05:00'
sources: []
---

**Clarify**  
> *Question:* “Explain how a full outer join works in SQL.”  
> *Assumptions to confirm:* we’re dealing with relational tables, keys may be nullable, and the goal is to return every row from both sides, matching where possible.

**Approach**  
1. Identify the two input relations `A` and `B`.  
2. Determine join condition (typically `ON A.id = B.id`).  
3. Conceptually split into three sets: matched rows (`A∩B`), unmatched in `A`, unmatched in `B`.  
4. Combine all three with a union, padding missing side columns with NULL.

**Depth**  
- **Matched rows:** `SELECT * FROM A JOIN B ON …` – standard inner join result.  
- **Unmatched in A:** `LEFT JOIN` + filter where `B.id IS NULL`.  
- **Unmatched in B:** `RIGHT JOIN` + filter where `A.id IS NULL`.  
Full outer join is the union of these three, often expressed as:

```sql
SELECT A.*, B.*
FROM A
FULL OUTER JOIN B ON A.id = B.id;
```

Internally most engines perform a hash or merge‑join to produce matches, then a full scan of each side to emit unmatched rows with NULLs.  
**Complexity:** O(n + m) for hash join; memory proportional to the larger table.

**Edge Cases**  
- Duplicate keys → Cartesian explosion in matched set.  
- Null join columns → treated as non‑matching (unless `IS NOT DISTINCT FROM`).  
- Very large tables may require disk spills or partitioned joins.

**Optimize & Communicate**  
- Use indexes on join columns to avoid full scans.  
- For huge datasets, consider a semi‑join strategy or distributed execution (e.g., Spark).  
- Explain trade‑offs: full outer is convenient but can be expensive; sometimes two separate left/right joins with UNION ALL and handling NULLs manually gives better control over memory usage.

This structured reasoning shows clear understanding of the operation, performance implications, and practical tips—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
