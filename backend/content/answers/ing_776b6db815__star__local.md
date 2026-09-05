---
qid: ing_776b6db815__star__local
question: How to populate Sales Rank table? — Salesrankbycategory
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 374
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:32:44-05:00'
sources: []
---

**Situation** – In a retail analytics project at my last company, the marketing team wanted a weekly “Sales Rank by Category” report to identify top‑performing product lines. The existing data warehouse had raw daily sales facts but no pre‑computed rank table, so each dashboard refresh ran an expensive window function over millions of rows.

**Task** – Build a scheduled ETL that populates a compact `salesrankbycategory` table: one row per category per week with the rank (1 = highest revenue) and cumulative revenue. The solution had to run in under 10 minutes, use only SQL on our Redshift cluster, and be maintainable for new categories.

**Action** – I wrote a nightly Spark‑SQL job that:
1. Extracts weekly sales from `fact_sales` using `DATE_TRUNC('week', sale_date)`.
2. Aggregates revenue per category (`SUM(amount)`).
3. Uses the `RANK()` window function over the aggregated results partitioned by week, ordering by revenue descending.
4. Inserts/updates a partitioned table `salesrankbycategory(week_start DATE, category VARCHAR, rank INT, revenue NUMERIC)`.
   I added an incremental refresh by joining on `max(week_start)` to avoid reprocessing old data.

**Result** – The new table loads in 7 minutes each night, cutting dashboard query time from ~15 seconds to <1 second. It delivered a clear weekly ranking that helped the sales team increase promotion spend on top categories by 12% YoY. I learned how to balance window functions with partitioning for performance and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
