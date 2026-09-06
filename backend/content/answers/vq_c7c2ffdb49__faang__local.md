---
qid: vq_c7c2ffdb49__faang__local
question: What are the different types of Joins?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 606
total_tokens: 838
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:33:09-05:00'
sources: []
---

## Clarify  
*Question:* “What are the different types of joins?”  
Assume we’re discussing relational‐database joins (SQL) and that the interviewer wants a quick yet complete taxonomy: inner, outer, cross, self, natural, and semi/anti‑joins.

---

## Approach  
1. List each join type with its semantics.  
2. For each, give an example of syntax or use‑case.  
3. Note performance implications (indexes, cardinality).  

---

## Depth  
| Join | What it returns | Typical SQL | When to use |
|------|-----------------|-------------|--------------|
| **INNER** | Rows with matching keys in both tables | `SELECT * FROM A JOIN B USING(id)` | Most common; filter on equality. |
| **LEFT (OUTER)** | All rows from left, matched right or NULL | `SELECT * FROM A LEFT JOIN B ON A.id=B.id` | Preserve all left data. |
| **RIGHT** | Symmetric to LEFT | `SELECT * FROM A RIGHT JOIN B ON …` | Rare; keeps all right side. |
| **FULL (OUTER)** | Union of left and right, NULLs where no match | `... FULL OUTER JOIN ...` | Need every row from both tables. |
| **CROSS** | Cartesian product | `SELECT * FROM A CROSS JOIN B` | Small tables; generate combinations. |
| **SELF** | Join a table to itself | `FROM employees e1 JOIN employees e2 ON …` | Hierarchies, ancestor/descendant queries. |
| **NATURAL** | Implicit join on all same‑named columns | `SELECT * FROM A NATURAL JOIN B` | Quick but can be error‑prone. |
| **SEMI / ANTI** (in many engines) | Rows from left that have / don’t have a match in right | `WHERE EXISTS (…)` or `NOT EXISTS …` | Filtering by existence; cheaper than full join. |

*Complexity:* Inner/outer joins cost O(n log n) with indexes, cross joins are O(n*m). Semi‑joins often cheaper because they stop after first match.

---

## Edge Cases  
- **Duplicate keys** → many rows in result (Cartesian explosion).  
- **NULL handling** → `ON` vs. `USING`; natural joins treat NULLs as non‑matching.  
- **Non‑equijoin predicates** → use `WHERE` clause; may require full scan.  

---

## Optimize & Communicate  
Explain that choosing the right join type balances correctness and performance. For large data, prefer semi/anti joins with indexes; avoid cross joins unless table sizes are tiny. Conclude by noting that understanding each join’s semantics lets you write efficient ETL pipelines and query plans.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
