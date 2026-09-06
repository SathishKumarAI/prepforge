---
qid: vq_a67219e09e__faang__local
question: WHAT IS THE DIFFERENCE BETWEEN EXISTS AND IN?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 546
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:26:39-05:00'
sources: []
---

**Clarify**  
The question asks about the difference between `EXISTS` and `IN` in SQL (or similar set‑based languages). I’ll assume we’re comparing them for filtering rows against a subquery or list of values.

**Approach**  
1. Define each construct’s syntax & semantics.  
2. Explain how they evaluate predicates internally.  
3. Compare performance characteristics, cardinality handling, and null behavior.  
4. Mention use‑case guidelines.

**Depth**  

| Feature | `EXISTS` | `IN` |
|---------|----------|------|
| **Purpose** | Returns true if the subquery yields at least one row for each outer row. | Checks if a value is present in a set (subquery result or literal list). |
| **Evaluation** | Short‑circuit: stops scanning subquery once first match found. | May materialize entire set; depends on optimizer. |
| **Null handling** | Subquery rows with NULL are ignored unless `WHERE` clause explicitly checks them. | If the target value is NULL, comparison yields UNKNOWN; if list contains NULL, a matching NULL still returns UNKNOWN unless `IS NULL`. |
| **Cardinality** | Efficient for correlated subqueries (e.g., `SELECT * FROM A WHERE EXISTS(SELECT 1 FROM B WHERE B.id=A.id)`); optimizer can push predicates. | Best when the set is small or indexed; large IN lists may be turned into hash joins. |
| **Performance** | Usually faster with a correlated subquery and an index on the join column. | Faster with a static list of literals or a highly‑indexed subquery result. |

**Edge Cases**  
- `IN` with an empty set → always false (unless NULL).  
- `EXISTS` with no rows in subquery → always false.  
- Nulls: `WHERE col IN (NULL)` returns UNKNOWN; use `IS NULL`.  
- Correlated vs. non‑correlated subqueries behave differently.

**Optimize & Communicate**  
- Prefer `EXISTS` for correlated checks to leverage short‑circuiting and avoid unnecessary row scans.  
- Use `IN` when the set is small or pre‑indexed; otherwise consider rewriting as a join.  
- Always test with real data volumes: check execution plans (`EXPLAIN`) to confirm index usage.  

By explaining semantics, performance trade‑offs, and edge cases, I demonstrate structured problem solving, clear communication, and depth—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
