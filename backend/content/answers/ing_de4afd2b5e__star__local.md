---
qid: ing_de4afd2b5e__star__local
question: 'Explain: How to prepare — Figure Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 296
total_tokens: 529
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:53:12-05:00'
sources: []
---

**Situation** – In the spring of 2024, I was asked by our product manager to create a visual dashboard for the new AI‑powered recommendation engine we were rolling out in Q3. The team needed a clear “Figure AI” that mapped model accuracy against user engagement metrics across three key demographics.

**Task** – My goal was to design an interactive figure that could be embedded into the internal portal, allowing stakeholders to drill down by region and product category while keeping load times under two seconds.

**Action** – I started by extracting 12 million inference logs from our data lake and aggregated them with Spark. Using Python’s Pandas and Plotly Dash, I built a layered heatmap: the base layer showed accuracy (top‑5 recall) per region; hover overlays displayed click‑through rate and churn reduction. To keep performance high, I pre‑computed 24‑hour rolling averages and cached them in Redis. I also added a slider for model version to illustrate A/B test results.

**Result** – The final figure was adopted by the executive team, leading to a 15 % increase in adoption of the recommendation engine in the targeted regions within two months. I learned how to balance visual complexity with performance constraints and that interactive dashboards can drive data‑driven decisions faster than static reports.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
