---
qid: vq_60eb24e131__fp__local
question: SQL basics concepts such as Rank, Dense Rank, Row Number?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 397
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:37:27-05:00'
sources: []
---

**Ranking in SQL is a formal way of imposing an *ordering* on rows and then assigning them unique identifiers that respect that order.**  
The core problem: when you query a table with `ORDER BY`, the database still has to decide how many distinct values exist before it can number the rows, especially if duplicates occur. Three window functions solve this:

| Function | What it does | Why it behaves so |
|----------|--------------|-------------------|
| **ROW_NUMBER()** | Assigns a unique integer 1…N to every row in the partition, strictly following the `ORDER BY`. | It ignores value equality; each physical row gets its own slot. |
| **RANK()** | Gives the same rank to equal values but leaves gaps for ties (e.g., 1,2,2,4). | It reflects *positions* in a sorted list: a tie occupies multiple positions, so subsequent ranks jump. |
| **DENSE_RANK()** | Same as `RANK()` but no gaps (1,2,2,3). | It counts distinct values only, not positions; useful when you care about the *number of distinct levels* rather than absolute placement. |

All three are derived from the same underlying principle: **partition → order → assign numbers**.  
The subtle insight most overlook is that `RANK()` and `DENSE_RANK()` depend on the *definition of equality*. If you use a composite key or a non‑deterministic expression, two rows that appear identical to the user may still receive different ranks because SQL treats them as distinct under the hood. This becomes critical when generating reports that must remain stable across schema changes—always define the `ORDER BY` precisely to avoid hidden rank shifts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
