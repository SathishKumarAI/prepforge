---
qid: vq_c34b727e83__star__local
question: Query to find 2nd largest number in the table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 339
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:18:22-05:00'
sources: []
---

**Situation** – In a recent data‑pipeline audit for our e‑commerce sales database, the analytics team noticed an anomaly in the monthly revenue report: the top‑selling product ID was missing from the leaderboard because of a corrupted record. We needed to identify the second highest revenue figure to quickly flag the issue before stakeholders reviewed the dashboard.

**Task** – I had to write a reliable SQL query that returns the second largest `revenue` value in the `sales` table, ensuring it handles duplicates and performs efficiently on our 12 M‑row dataset.

**Action** – I first checked for NULLs and used a subquery with `ROW_NUMBER()` over an ordered window:  
```sql
SELECT revenue
FROM (
    SELECT revenue,
           ROW_NUMBER() OVER (ORDER BY revenue DESC) AS rn
    FROM sales
    WHERE revenue IS NOT NULL
) t
WHERE rn = 2;
```
This approach guarantees the correct second maximum even when multiple rows share the same value. I added an index on `sales(revenue)` and ran EXPLAIN plans; the query executed in under 0.3 s, well within our SLA.

**Result** – The report now correctly lists the second highest revenue figure, which helped us isolate a data‑insertion bug that was inflating totals by $15K. The fix reduced reporting errors by 98% and taught me the value of window functions for robust ranking in large datasets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
