---
qid: vq_c34b727e83__fp__local
question: Query to find 2nd largest number in the table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 359
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:54:59-05:00'
sources: []
---

Finding the **second‑largest** value is a classic “top‑k” problem on a single column, but it has a subtlety that many overlook: you must exclude *all* instances of the maximum before you can rank the next one.  
From an optimization viewpoint, the goal is to scan the column once and keep only two candidates – the best and the runner‑up. A window function implements exactly this pattern:

```sql
SELECT value
FROM (
  SELECT value,
         DENSE_RANK() OVER (ORDER BY value DESC) AS rnk
  FROM   my_table
) t
WHERE rnk = 2;
```

**Why it works**

1. `DENSE_RANK` assigns the same rank to equal values, ensuring that duplicates of the maximum don’t “steal” the second place.
2. The subquery materializes a single pass over the data; the outer filter then extracts the row(s) with rank = 2.

**Non‑obvious insight**

If you only need *one* value (the numeric second largest), you can avoid a full sort by using an **aggregation + negation trick**:

```sql
SELECT MAX(value)
FROM   my_table
WHERE  value < (SELECT MAX(value) FROM my_table);
```

This leverages the database’s ability to push down the `MAX` predicate, often resulting in a much faster plan than a window function when only one row is required. The key principle: *filter before aggregating* to reduce work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
