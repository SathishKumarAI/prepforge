---
qid: vq_69e917511b__fp__local
question: What kind of joins are offered by Pandas?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 361
total_tokens: 530
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:39:06-05:00'
sources: []
---

In pandas, a *join* is essentially an **equivalence join** on one or more keys—just like SQL’s `INNER`, `LEFT`, `RIGHT`, and `FULL OUTER` but expressed through the DataFrame API.  
The fundamental problem it solves is: given two tabular data structures, combine rows that share matching key values while preserving the semantics of the desired set operation.

| Join type | Method | What it keeps |
|-----------|--------|---------------|
| **Inner** | `df1.merge(df2, on=…, how='inner')` | Only rows with keys present in *both* frames. |
| **Left**  | `df1.merge(df2, on=…, how='left')`  | All rows of the left frame; NaNs where no right key matches. |
| **Right** | `df1.merge(df2, on=…, how='right')` | Symmetric to left. |
| **Outer** | `df1.merge(df2, on=…, how='outer')` | Union of keys from both frames; NaNs for missing sides. |

These four cover all set‑theoretic joins because a merge is fundamentally a *Cartesian product* filtered by key equality, then projected onto the union of columns.  
**Non‑obvious insight:** pandas automatically aligns on column names when `on` isn’t specified, but it treats index levels as keys too. Thus an “index‑based” join (e.g., `df1.join(df2)`) is just a special case of `merge` where the keys are the indices—this explains why `join` defaults to a left outer merge on indexes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
