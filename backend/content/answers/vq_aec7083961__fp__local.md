---
qid: vq_aec7083961__fp__local
question: How to implement if-then-else in a select statement?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 422
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:51:29-05:00'
sources: []
---

**Why an `IF‑THEN‑ELSE` is needed in SQL**

A relational query is declarative: we describe *what* rows we want, not *how* to compute them.  
But sometimes the value of a column depends on a condition—e.g., “if the sale price is > $1000, apply a 10 % discount; otherwise no discount.”  
The relational model supplies the **`CASE` expression** as the only language construct that can embed conditional logic into a projection. It is essentially a vectorized `IF‑THEN‑ELSE`: each row evaluates its own predicate and returns one of several possible results.

**Why `CASE` works**

1. **Locality** – The condition is evaluated per tuple, so no intermediate tables are needed.
2. **Determinism** – For any given input row the result is a single deterministic value; this preserves referential integrity and allows indexes to be used on the predicate if it’s simple enough.
3. **Optimization** – Query planners can fold `CASE` into predicates or rewrite it as a *partial* filter, keeping execution plans efficient.

**Implementation example**

```sql
SELECT order_id,
       quantity,
       price,
       CASE 
           WHEN price > 1000 THEN price * 0.90   -- discount
           ELSE price                           -- no discount
       END AS final_price
FROM orders;
```

**Non‑obvious insight:**  
`CASE` can be used not only in `SELECT`, but also in `WHERE` and `ORDER BY`. When placed in a `WHERE`, it effectively becomes a *conditional filter* that the optimizer may transform into two separate predicates, each guarded by an index. Thus, clever use of `CASE` can yield both cleaner code and better performance compared to writing multiple `SELECT`s or using procedural extensions like PL/SQL blocks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
