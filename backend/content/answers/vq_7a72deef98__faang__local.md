---
qid: vq_7a72deef98__faang__local
question: How to find count of duplicate rows?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 466
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:18:23-05:00'
sources: []
---

**Clarify**

> *“Find the count of duplicate rows.”*  
> I’ll assume we have a relational table with multiple columns and want, for each distinct row value set, how many times it appears (i.e., number of duplicates). We’re working in SQL‑style engines (PostgreSQL/MySQL/BigQuery).  

**Approach**

1. Group by all columns to aggregate identical rows.  
2. Count occurrences per group.  
3. Return groups where count > 1 (duplicates) and the duplicate count (`count - 1` if you want only extra copies).

**Depth**

```sql
SELECT t.*, cnt AS dup_count
FROM (
    SELECT *, COUNT(*) OVER (PARTITION BY col1, col2, col3) AS cnt
    FROM my_table
) t
WHERE cnt > 1;
```

- `COUNT(*) OVER (…)` gives total rows per distinct combination without a full group‑by scan.  
- Complexity: **O(n)** time, **O(k)** extra space where *k* is number of distinct rows (window materialization).  

Alternatively, if you only need the duplicate counts:

```sql
SELECT col1, col2, col3, COUNT(*) AS total, COUNT(*) - 1 AS dup_count
FROM my_table
GROUP BY col1, col2, col3
HAVING COUNT(*) > 1;
```

**Edge Cases**

- Empty table → returns nothing.  
- Columns with NULLs: in most SQL engines `NULL` is treated as a distinct value; if you want to treat all NULLs as equal, add `ISNULL(col)` logic.  
- Very wide tables may hit column‑list limits; use a composite key or hash column.

**Optimize & Communicate**

For huge datasets (big data platforms), push the aggregation to distributed engines (Spark/Presto) and consider using a hashed surrogate key to reduce shuffle size. Explain trade‑offs: window vs group‑by, memory usage, and how indexing on all columns can speed up grouping. Conclude with a quick sanity check: run on a sample subset and verify counts manually before production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
