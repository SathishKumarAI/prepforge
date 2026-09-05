---
qid: vq_aabd33b728__star__local
question: How does one select EVERY Nth row from a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 364
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:14:00-05:00'
sources: []
---

**Situation** – In a recent data‑migration project I had to generate a sample of every 10th record from our legacy sales table, which held over 12 million rows. The downstream analytics pipeline only needed this subset for performance testing, but the original table was heavily indexed and we couldn’t afford a full scan.

**Task** – Produce a clean, deterministic set of every 10th row without altering the source schema or creating an intermediate copy, while keeping query runtime under two minutes on our production cluster.

**Action** – I used a window function to assign a sequential row number partitioned by date and ordered by primary key:

```sql
WITH numbered AS (
  SELECT id,
         ROW_NUMBER() OVER (PARTITION BY sale_date ORDER BY id) AS rn
  FROM sales
)
SELECT id
FROM numbered
WHERE rn % 10 = 0;
```

Because the table was partitioned by `sale_date`, the window only scanned one partition at a time, reducing I/O. I also added an index on `(sale_date, id)` to accelerate the ordering and wrapped the query in a single transaction so the planner could cache statistics.

**Result** – The query returned 1,200,000 rows (exactly 12 % of the table) in 1 min 45 s, well under our SLA. I learned that combining partitioning with window functions can extract regular samples efficiently without materialized views or expensive full‑table scans.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
