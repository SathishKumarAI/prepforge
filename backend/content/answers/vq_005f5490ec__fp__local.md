---
qid: vq_005f5490ec__fp__local
question: Difference between Row number and Dense Rank in SQL?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 416
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:20:21-05:00'
sources: []
---

**Why two “rank” functions?**  
When a query sorts rows it must assign each row an *ordinal* that respects the order.  
Two properties can be desired:

1. **Uniqueness** – every row gets its own number (useful for pagination).  
2. **Grouping of ties** – equal‑key rows share the same ordinal, and the next
   ordinal is simply “previous + 1” (no gaps).

`ROW_NUMBER()` implements property 1 by enumerating rows in the order given,
ignoring any value equality. It is essentially a *bijection* between the set of
rows and ℕ; mathematically it’s a total order on the result.

`DENSE_RANK()` implements property 2.  It assigns the same rank to equal
values, then increments by one for the next distinct value—exactly the
definition of a **dense** mapping from the sorted set to ℕ that preserves
order but collapses ties.  

> **Non‑obvious insight:**  
> `DENSE_RANK()` is equivalent to applying the *order‐statistics* function
> to the distinct values first, then mapping each row to that statistic.
> This means its rank depends only on the *set of distinct keys*, not on how many rows share a key.  
> Consequently, adding or removing duplicate rows that are tied does **not**
> change any `DENSE_RANK()` value, whereas `ROW_NUMBER()` will shift all
> subsequent numbers.

In short: use `ROW_NUMBER()` when you need a stable, gap‑free sequence; use
`DENSE_RANK()` when you want to reflect the logical “place” of each distinct
value in the ordering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
