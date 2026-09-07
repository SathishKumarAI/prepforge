---
qid: vq_c34b727e83__aws__local
question: Query to find 2nd largest number in the table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 397
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:12:54-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation & Task** – While refactoring our nightly ETL for the retail sales data lake, I was asked to provide a quick way to surface the *second‑largest* sale amount from a 10 M row fact table in Redshift. The downstream BI dashboards needed this value to trigger a threshold alert for high‑value orders.

> **Action** – I wrote a single‑statement query that uses `ROW_NUMBER()` over an ordered window, then filters on the rank:

```sql
SELECT sale_amount
FROM (
  SELECT sale_amount,
         ROW_NUMBER() OVER (ORDER BY sale_amount DESC) AS rn
  FROM sales_fact
)
WHERE rn = 2;
```

I added a materialized view that pre‑aggregates `sale_amount` per day, reducing scan time from ~30 s to <5 s. For scalability I used Redshift Spectrum to read cold data directly from S3 and partitioned the table by `order_date`. Cost was cut by 40% because we avoided full‑table scans.

> **Result** – The alert system now runs in real time with a 0.1 s latency, enabling the marketing team to act on high‑value orders within minutes. The query also served as a template for other “N‑th largest” metrics across teams.

> **Leadership Principles**  
> *Customer Obsession* – Delivered an instant, reliable metric that directly improved campaign ROI.  
> *Dive Deep & Ownership* – Investigated performance bottlenecks, engineered a reusable solution, and documented it in the team wiki for future reference.  

This demonstrates ownership, deep technical insight, and measurable impact—all key to Amazon’s bar‑raising standards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
