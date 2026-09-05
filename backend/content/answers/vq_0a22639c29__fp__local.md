---
qid: vq_0a22639c29__fp__local
question: WHAT HAPPENS WHEN THERE IS NO MATCH IN A RIGHT JOIN?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 403
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:21:58-05:00'
sources: []
---

When you write

```sql
SELECT … FROM L
RIGHT JOIN R ON … ;
```

you ask the engine to keep **every** row from `R` and pair it with a matching row from `L`.  
If no `L` row satisfies the join condition, SQL still returns that `R` row, but all columns coming from `L` are filled with *NULL*.

### Why this happens

1. **Set‑theoretic definition** – A right outer join is the union of:
   - The Cartesian product of matching pairs (`L ∩ R`), and
   - All rows in `R` that have no partner in `L`, each paired with a “null tuple”.
2. **Nulls as placeholders** – NULL represents *unknown or non‑existent* data.  
   Since there is nothing from `L` to supply, the only consistent value for those columns is NULL.

### Deeper principle

Outer joins embody *information preservation*.  
If you dropped unmatched rows, you would lose all knowledge that “there exists a row in R with these values but no corresponding L row”.  
By keeping them and marking missing data with NULLs, SQL preserves the full information set of `R`, enabling later filtering or aggregation to treat absent matches appropriately.

### Non‑obvious insight

Many people assume that a right join is just a left join on reversed tables.  
In practice, however, **the cost model differs**: engines often implement it as an inner join plus a *left anti‑join* (to find unmatched `R` rows) followed by a union.  
Thus the planner may choose different indexes or hash strategies depending on which side is larger, making the “right” vs. “left” choice affect performance even though the logical result is equivalent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
