---
qid: ing_777d411db1__faang__local
question: 'Explain: RIGHT JOIN — How do SQL Joins Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 481
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:21:35-05:00'
sources: []
---

**Clarify**  
You’re asking how a **RIGHT JOIN** behaves in SQL and how joins work in general. I’ll assume we’re dealing with relational tables (no distributed or NoSQL nuances) and that the goal is to return all rows from the right table, matching rows from the left where possible.

**Approach**  
1. Explain the semantics of a RIGHT JOIN.  
2. Contrast it with LEFT, INNER, and FULL OUTER joins.  
3. Highlight key implementation details (hash join vs merge join).  
4. Mention performance knobs and common pitfalls.

**Depth**  
A `RIGHT JOIN` (`RIGHT OUTER JOIN`) returns **every row from the right table** plus any matching rows from the left table based on the join condition; unmatched left rows become `NULL`.  

```sql
SELECT *
FROM A
RIGHT JOIN B ON A.id = B.a_id;
```

If `B` has 5,000 rows and only 2,000 match `A`, you’ll get 5,000 rows: 2,000 with data from both tables and 3,000 where `A.*` is NULL.  

Internally most engines use a hash or merge join. A hash join builds a hash table of the smaller side (here, `B`) and probes it for each row in `A`. For an outer join, unmatched rows are added after probing. Complexity: **O(n + m)** time, **O(min(n,m))** memory.

**Edge Cases**  
- Duplicate keys produce Cartesian‑like expansions.  
- NULLs in join columns never match unless you use `IS NOT DISTINCT FROM`.  
- Large right tables may trigger spills to disk; ensure proper statistics for optimizer hints.

**Optimize & Communicate**  
Use indexes on the join key of the *right* table if it’s large. Prefer an INNER JOIN when you only need matched rows; a RIGHT JOIN is syntactic sugar for LEFT JOIN with operand order swapped, so rewrite as `LEFT JOIN` to aid readability. Explain these trade‑offs clearly to the interviewer: “I’d choose a hash join because…”, then show how I would validate performance with explain plans and sample data sizes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
