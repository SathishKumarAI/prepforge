---
qid: vq_aabd33b728__fp__local
question: How does one select EVERY Nth row from a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 367
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:50:45-05:00'
sources: []
---

**Selecting every *N*‑th row in SQL**

The problem is to filter a sequence of rows according to their position in the natural order defined by the data set.  
A naïve approach (`LIMIT`/`OFFSET`) fails because it requires counting and jumping, which is expensive for large tables.  

Use a *row number* window function:

```sql
WITH numbered AS (
  SELECT *, ROW_NUMBER() OVER (ORDER BY <key>) AS rn
  FROM   table_name
)
SELECT *
FROM   numbered
WHERE  rn % :n = 0;          -- every nth row
```

**Why it works**

1. **Deterministic ordering** – `ORDER BY` fixes the sequence, turning the problem into a pure indexing one.
2. **Linear scan** – `ROW_NUMBER()` assigns consecutive integers in a single pass, O(n).
3. **Modulo test** – selecting rows where `rn % n = 0` is equivalent to “every nth”.

**Deeper principle**

This leverages *order statistics*: the row number is an order statistic of the dataset; filtering by modulo exploits the arithmetic progression property of consecutive integers. It’s essentially a discrete sampling at regular intervals, analogous to taking every *n*‑th sample in signal processing.

**Non‑obvious insight**

The modulo filter can be applied **before** any aggregation or join. Since the window function is computed once per row, you avoid re‑scanning the table for each downstream operation—greatly reducing I/O compared to `LIMIT`/`OFFSET`. This makes the method scalable even on very large tables.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
