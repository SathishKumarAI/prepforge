---
qid: ing_4b6e2ca8b5__star__local
question: 'Explain: Sales Rank table — Salesrankbycategory'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 342
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:59:07-05:00'
sources: []
---

**Situation:**  
At a mid‑size e‑commerce startup, we were launching a new recommendation engine for the apparel line. The marketing team noticed that our sales conversion dropped by ~12% after the last update because customers kept seeing products that weren’t truly popular within their preferred style categories.

**Task:**  
I had to build a dynamic “Sales Rank by Category” feature that would surface the top‑selling items in each category, so the recommendation model could weight them higher and improve click‑through rates.

**Action:**  
First, I extracted daily sales logs from our data warehouse (Redshift) and joined them with product metadata. Using SQL window functions (`ROW_NUMBER() OVER(PARTITION BY category ORDER BY total_sales DESC)`), I generated a per‑category ranking table, then materialized it as a view for low‑latency access. In the model pipeline (Python + Scikit‑Learn), I added this rank as an engineered feature—mapping each product’s rank to a numeric score and feeding it into a gradient‑boosted tree classifier. I also set up a scheduled Lambda job that refreshed the ranking table every 12 hours, ensuring freshness without heavy compute.

**Result:**  
After deployment, conversion on recommended items rose from 3.8% to 4.5%, a 18.4% lift, and revenue increased by $42k in the first month. I learned how to turn raw sales data into actionable features quickly while balancing performance with real‑time accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
