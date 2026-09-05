---
qid: vq_7951eb659f__fp__local
question: Query to find duplicate value in SQL?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 404
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:42:08-05:00'
sources: []
---

**Why the “duplicate‑finder” query works**

At its core a duplicate is *a value that appears more than once*.  
SQL stores rows as immutable tuples; to detect multiplicity we need two operations:

1. **Grouping** – collapse all rows with identical key(s) into one bucket.  
   This collapses the combinatorial explosion of pairwise comparisons into a single pass over the data, which is the *principle of reduction* in combinatorics.

2. **Counting** – compute how many members each bucket contains.  
   The count is a sufficient statistic for multiplicity; if it exceeds one, we have a duplicate.

Hence the canonical query:

```sql
SELECT key_column,
       COUNT(*) AS cnt
FROM   table_name
GROUP  BY key_column
HAVING COUNT(*) > 1;
```

The `HAVING` clause filters buckets after aggregation, ensuring only those with `cnt>1` surface.  
Because `COUNT(*)` is a *linear* aggregator (it scans each row once), the whole operation is \(O(n)\) in time and \(O(k)\) in space where \(k\) is the number of distinct keys—optimal for large tables.

**Non‑obvious insight**

When you need *exactly one duplicate instance per key*, replace `COUNT(*)` with `MIN(id)` (or any deterministic column).  
This turns the result into a “representative” row without extra joins:

```sql
SELECT MIN(id) AS dup_id, key_column
FROM   table_name
GROUP  BY key_column
HAVING COUNT(*) > 1;
```

Most people overlook that `MIN` or `MAX` can act as an implicit *canonical* selector for duplicates, saving a subsequent lookup.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
