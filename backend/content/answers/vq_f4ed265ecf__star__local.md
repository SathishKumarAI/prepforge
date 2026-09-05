---
qid: vq_f4ed265ecf__star__local
question: WHAT IS THE DIFFERENCE BETWEEN LEAD() AND LAG() FUNCTIONS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 315
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:26:51-05:00'
sources: []
---

**Situation:**  
In a recent BI project for our retail client, we were tasked with creating a sales trend dashboard that highlighted month‑over‑month revenue changes. The data warehouse already had a daily fact table, but the reporting layer required a calculated column showing each month's total versus the previous month’s total.

**Task:**  
I needed to generate two new columns: one showing the next month’s revenue (for forecasting) and another showing the prior month’s revenue (to compute growth). Both had to be computed efficiently within a single SQL query and work on our Snowflake platform.

**Action:**  
I used the `LEAD()` window function to pull the next row’s revenue into the “NextMonthRevenue” column, partitioning by product category and ordering by month. For the previous month’s value, I employed `LAG()`, which references the prior row in the same partition. Both functions were wrapped in a CTE, then joined back to the main fact table for further calculations. This approach avoided self‑joins and kept the query readable.

**Result:**  
The dashboard now displays accurate month‑over‑month growth percentages with a 25% reduction in query runtime compared to our earlier join‑based method. I learned that `LEAD()` is ideal when you need future context, while `LAG()` is for historical context—both are zero‑cost window functions but serve opposite directions of data flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
