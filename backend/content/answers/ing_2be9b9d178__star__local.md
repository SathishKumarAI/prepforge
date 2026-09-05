---
qid: ing_2be9b9d178__star__local
question: 'Explain: Pushing Pandas Further with include , .agg() , and groupby'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 360
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:55:49-05:00'
sources: []
---

**Situation:**  
In a recent retail analytics project we had a 12‑month sales dataset with over 1.2 million rows. The business wanted monthly revenue per product category and the top three best‑selling SKUs in each region, but our initial script was running in minutes and producing a cluttered output.

**Task:**  
I needed to rewrite the ETL so that it generated a clean, multi‑index summary table with aggregated totals and a nested list of top SKUs, all within a single `groupby` pipeline, and ensure the code ran under two seconds on our test machine.

**Action:**  
Using `pd.read_csv(..., usecols=…)` I limited columns to only those required (`order_date`, `category`, `region`, `sku`, `revenue`). Then I applied `df.assign(month=df.order_date.dt.month)` and grouped by `[‘region’, ‘month’, ‘category’]`. Inside the groupby I used `.agg()` with a dictionary: `{'revenue': 'sum', 'sku': lambda x: list(x.value_counts().nlargest(3).index)}`. Finally, I reset the index, renamed columns, and used `.to_parquet()` for fast downstream consumption.

**Result:**  
The pipeline completed in 1.8 seconds, produced a tidy table with revenue totals and top‑SKU lists per group, and reduced memory usage by 35%. I learned how combining `include`‑style column selection, `agg` with custom lambda functions, and multi‑level grouping can dramatically improve both performance and readability in large pandas workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
