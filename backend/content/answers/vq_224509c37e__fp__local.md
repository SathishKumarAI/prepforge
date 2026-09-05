---
qid: vq_224509c37e__fp__local
question: Can I Update From Another Table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 430
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:26:29-05:00'
sources: []
---

**Answer**

Yes—you can update rows in one table by pulling values from another table.  
In SQL this is usually written as  

```sql
UPDATE t1
SET    t1.col = t2.new_val
FROM   t1
JOIN   t2 ON t1.id = t2.id;
```

**Why it works**

* The `UPDATE` clause declares *which rows* to touch (`t1`).  
* The `SET` clause tells *how* to change each row.  
* The `FROM … JOIN …` part supplies a **lookup table** that the engine treats as a temporary result set.  
  It is essentially performing a **set‑based join** before applying the mutation, so the update respects the same relational algebra rules that govern ordinary queries.

**Deeper principle**

Updating from another table is just *in‑place rewriting of a derived set*.  
The database first evaluates the `JOIN` as a logical plan (a graph of operations).  
Then it streams through the matching rows and rewrites the target columns.  
Because the source (`t2`) can be arbitrarily large, the engine must use efficient hash or merge joins to avoid O(n²) scans—this is why indexes on the join key are critical.

**Non‑obvious insight**

Many developers assume an update will read each row of `t1`, then for every row perform a separate lookup in `t2`.  
In reality, relational engines *batch* the join: they materialize a single hash table from `t2` once and probe it for all rows of `t1`.  
Consequently, the cost is roughly linear in the sum of both tables’ sizes, not quadratic.  This subtle optimisation explains why large‑scale “update from” operations can finish in seconds rather than minutes when properly indexed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
