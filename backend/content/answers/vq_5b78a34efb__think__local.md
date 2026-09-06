---
qid: vq_5b78a34efb__think__local
question: How to combine dataframes in Pandas?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 524
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:38:29-05:00'
sources: []
---

**1️⃣ Clarify the goal and assumptions**  
   - *What exactly do we want to merge?* Rows, columns, or both?  
   - *Which key(s) will link the tables?* Assume we have one or more common columns (e.g., `id`).  
   - *Do we need an inner join, outer join, left‑only, etc.?* Default to a full outer merge unless specified.  

**2️⃣ Pick the right mental model**  
   - Treat each DataFrame as a table in relational algebra.  
   - Think of Pandas’ `merge()` (SQL‑style) vs. `concat()` (stacking).  
   - Remember that `join()` is syntactic sugar for `merge()` on indexes or columns.

**3️⃣ Step‑by‑step reasoning**  

1. **Identify key columns**: ensure they exist in both frames and are of compatible types.  
2. **Decide join type**:  
   - `inner` → keep only matching rows.  
   - `outer` → keep all rows, filling missing values with NaN.  
   - `left/right` → keep all from one side.  
3. **Call `pd.merge(df1, df2, on='key', how='type')`.**  
4. If the key is an index, use `left_index=True/ right_index=True`.  
5. For concatenation along rows or columns, use `pd.concat([df1, df2], axis=0/1)` and set `ignore_index` if needed.

**4️⃣ Avoid common pitfalls**  

- Mixing up `on`, `left_on/right_on`; they’re for different key names.  
- Forgetting to drop duplicate columns after merge (e.g., the key appears twice).  
- Using `join()` when you need a multi‑column join; default uses index only.  
- Not resetting index after concatenation, leading to duplicated indices.

**5️⃣ Sanity‑check & communicate**  

- Inspect the resulting shape: `df.shape` should match expectations (e.g., rows = len(df1)+len(df2) for outer concat).  
- Spot‑check a few key rows with `.loc[]`.  
- Explain clearly: “We merged on `user_id`, performed an inner join to keep only users present in both datasets, and dropped the duplicate column.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
