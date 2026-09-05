---
qid: vq_06c53bd3f9__fp__local
question: What is a RANKING function and what are the four RANKING functions?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 539
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:21:22-05:00'
sources: []
---

**Ranking functions** are *order‑statistics* tools built into SQL (and many analytic languages) that map a sorted set of rows to integer “positions” while respecting ties.  
They solve the fundamental problem of **disambiguating order**: given an arbitrary ordering key, we often need a stable, repeatable index for each row—e.g., top‑N reports, percentile buckets, or gap‑free sequence numbers.

Four canonical ranking primitives exist:

| Function | Definition | Behaviour on ties |
|----------|------------|-------------------|
| `ROW_NUMBER()` | 1 + the number of preceding rows in the current partition. | Assigns a unique number even if keys are equal; gaps can appear when duplicates exist. |
| `RANK()` | 1 + the count of distinct key values that are *strictly* smaller. | Gaps after ties (e.g., ranks 1,2,4 if two rows tie for rank 3). |
| `DENSE_RANK()` | Same as `RANK()` but no gaps: consecutive ranks even when duplicates occur. |
| `NTILE(n)` | Distributes the partition into *n* buckets; each row receives an integer from 1 to n indicating its bucket. | Useful for quantiles or load‑balancing partitions. |

**Why they work this way:**  
Ranking is essentially a *bijection* between an ordered multiset and the natural numbers, but ties force us to decide whether to treat equal keys as occupying the same “rank” (dense) or as distinct positions with gaps (ordinary rank). `ROW_NUMBER()` simply enumerates rows without regard for value equality, which is useful when you need a strict sequence (e.g., pagination).  

**Non‑obvious insight:**  
`NTILE(n)` can be seen as the discrete analogue of the inverse cumulative distribution function (quantile function) in probability theory. It partitions the empirical distribution into equal‑size buckets without regard to the actual key values, which is often more useful than percentile ranks when you need *balanced* workload slices rather than strictly value‑based percentiles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
