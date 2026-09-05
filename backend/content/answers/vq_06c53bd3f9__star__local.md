---
qid: vq_06c53bd3f9__star__local
question: What is a RANKING function and what are the four RANKING functions?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 428
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:46:33-05:00'
sources: []
---

**Situation:**  
At my last company we were building a monthly sales dashboard for the marketing team. The dashboard required showing each product’s rank by revenue within its category, but we also had to handle ties and provide percentile buckets for comparison.

**Task:**  
I needed to generate accurate rankings and percentiles in a single SQL query so that the BI tool could consume the data without extra processing.

**Action:**  
I used PostgreSQL’s window functions. I applied `ROW_NUMBER()` to give a unique sequential ID per row, `RANK()` to assign ranks with gaps for ties, `DENSE_RANK()` to avoid those gaps when we wanted a continuous rank, and `NTILE(10)` to split the data into deciles. The query looked like:

```sql
SELECT product_id,
       category,
       revenue,
       ROW_NUMBER() OVER (PARTITION BY category ORDER BY revenue DESC) AS rn,
       RANK() OVER (PARTITION BY category ORDER BY revenue DESC) AS rk,
       DENSE_RANK() OVER (PARTITION BY category ORDER BY revenue DESC) AS drk,
       NTILE(10) OVER (PARTITION BY category ORDER BY revenue DESC) AS decile
FROM sales;
```

I tested it on a sample dataset, verified the gaps and buckets, and then embedded the view into our data pipeline.

**Result:**  
The dashboard now shows four ranking perspectives—unique order, gap‑aware rank, continuous rank, and percentile buckets—allowing analysts to choose the metric that best fits their narrative. The query runs in under 200 ms on a dataset of 1M rows, and we received positive feedback from stakeholders who could quickly spot top performers and outliers. I learned how each ranking function serves different analytical needs and how to combine them efficiently in production queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
