---
qid: ing_57f629b2e5__aws__local
question: 'Explain: Group rows that have the same values into summary rows'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 511
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:44:32-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was asked to generate quarterly sales dashboards for a global retailer that had > 1 M rows of transaction data per day in S3. The requirement: “group rows with the same SKU, store, and date into summary rows (total units, revenue) and deliver the result within 30 min.”  

**Action – Technical Design**  
I built an **AWS Glue ETL job** that reads the raw Parquet files, partitions by `date` and `store_id`, and writes a *compact* table to S3 in ORC format.  
- **Glue** handles schema evolution and incremental crawls.  
- I used **Spark SQL**’s `groupBy()` with `agg(sum(unit), sum(price))`.  
- The job is scheduled via **EventBridge** to run nightly, leveraging Glue’s *job bookmarks* for incremental loads.  

For the ad‑hoc report I leveraged **Amazon Athena** on top of the compacted ORC table:  
```sql
SELECT sku_id, store_id, date,
       SUM(units)   AS total_units,
       SUM(price)   AS total_rev
FROM sales_summary
GROUP BY sku_id, store_id, date;
```
Athena’s serverless execution gives instant query performance; the partitioned ORC format reduces scanned data to < 5 % of raw size.  

**Result**  
- Query latency dropped from 15 min (raw CSV) to **< 2 sec** on average.  
- Cost per query fell from $3.50 to <$0.05, saving ~70 % annually.  
- The dashboard load time improved by **90 %**, enabling real‑time KPI monitoring for executives.  

**Leadership Principles Reflected**  
- *Ownership*: I took full responsibility for the end‑to‑end pipeline and ensured SLA compliance.  
- *Dive Deep*: I profiled data skew, tuned Glue’s memory, and selected ORC over Parquet to balance cost & performance.  

**Bar‑raiser Takeaway** – The candidate should demonstrate hands‑on AWS service choices, quantify impact, and show how iterative learning (profiling → tuning) drove measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
