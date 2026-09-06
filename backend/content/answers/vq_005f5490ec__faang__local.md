---
qid: vq_005f5490ec__faang__local
question: Difference between Row number and Dense Rank in SQL?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 478
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:54:31-05:00'
sources: []
---

**Clarify**  
You’re asking how `ROW_NUMBER()` differs from `DENSE_RANK()` when used in a windowed query.  
Assumptions:  
- The same partitioning and ordering are applied to both functions.  
- We want to know the numeric value each returns for rows that share identical sort keys.

**Approach**  
Explain each function’s definition, then illustrate with an example table. Show how ties affect the output, then summarize the key distinction.

**Depth**  

| Function | Behavior on ties (identical ordering values) |
|----------|---------------------------------------------|
| `ROW_NUMBER()` | Assigns a unique sequential number to every row, **ignoring duplicates**. The numbering continues without gaps even if multiple rows have the same sort key. |
| `DENSE_RANK()` | Gives the same rank to all tied rows and then increments by one for the next distinct value—no gaps between ranks. |

Example (partitioned by `dept`):

```sql
SELECT dept, score,
       ROW_NUMBER()  OVER (PARTITION BY dept ORDER BY score DESC) AS rn,
       DENSE_RANK()  OVER (PARTITION BY dept ORDER BY score DESC) AS dr
FROM   employee;
```

If scores are {100, 90, 90, 80} → `rn` = 1,2,3,4; `dr` = 1,2,2,3.

**Edge Cases**  
- When all rows tie: `ROW_NUMBER()` gives 1…N, while `DENSE_RANK()` always returns 1.  
- Nulls in the ordering column are treated as a distinct value but may be ordered last or first depending on `NULLS FIRST/LAST`.

**Optimize & Communicate**  
Highlight that `ROW_NUMBER()` is useful for pagination (unique offsets), whereas `DENSE_RANK()` is preferred when you need logical ranking without gaps. Explain trade‑offs: `ROW_NUMBER()` guarantees uniqueness, but can hide duplicates; `DENSE_RANK()` preserves tie grouping but may produce fewer distinct values. Conclude with a quick mnemonic: *“Row → unique sequence; Dense Rank → grouped, no holes.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
