---
qid: vq_1420371ba0__faang__local
question: How do you pivot data in SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 445
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:58:44-05:00'
sources: []
---

**Clarify**  
> “Pivot” usually means turning row‑values into columns (or vice‑versa).  
> *Assumptions:*  
> - We’re using a relational DB that supports `PIVOT`/`UNPIVOT` or conditional aggregation (e.g., MySQL, Postgres).  
> - The source table has a key column, a category/value pair, and we want one row per key with each category as its own column.

**Approach**  
1. Identify the pivot columns (`key`, `category`, `value`).  
2. Decide on the DB‑specific syntax: native `PIVOT` clause or `CASE WHEN`.  
3. Build a query that aggregates by `key` and emits one column per category.  

**Depth** (Postgres example)  

```sql
SELECT id,
       MAX(CASE WHEN metric = 'clicks'  THEN value END) AS clicks,
       MAX(CASE WHEN metric = 'impressions' THEN value END) AS impressions,
       MAX(CASE WHEN metric = 'ctr'      THEN value END) AS ctr
FROM   metrics
GROUP BY id;
```

- Uses `MAX` (or `SUM`) because each `(id, metric)` pair is unique.  
- Complexity: **O(n)** scan, **O(k)** memory for the aggregation map (`k` = number of categories).  

**Edge cases**  
- Missing categories → NULLs appear; handle with `COALESCE`.  
- Duplicate rows → aggregate appropriately (SUM instead of MAX).  
- Large cardinality of categories → dynamic SQL or table‑valued functions to avoid hard‑coding columns.

**Optimize & communicate**  
- Index on `(id, metric)` speeds the scan.  
- For very wide pivots, consider materialized views or schema redesign to avoid bloated column counts.  
- When explaining, start with a concrete example, show both native and conditional forms, then discuss trade‑offs (readability vs performance).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
