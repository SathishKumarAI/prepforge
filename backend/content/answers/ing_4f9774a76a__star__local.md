---
qid: ing_4f9774a76a__star__local
question: 'Explain: Level 3: A/B Testing — Your AI Product Needs Evals \u2013 Hamel\u2019s
  Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 323
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:07:28-05:00'
sources: []
---

**Situation** – I was leading the rollout of a recommendation engine for an e‑commerce platform that had been down‑scaling due to a sharp drop in click‑through rates (CTR fell from 8% to 4%).  
**Task** – My goal was to validate whether a new model, trained on user interaction embeddings, would actually improve CTR and conversion without hurting revenue. I needed a statistically sound A/B test that could run within our existing pipeline.  
**Action** – First, I defined key metrics: CTR, average order value (AOV), and churn rate. Using Optimizely’s SDK, I split traffic 70/30 between the baseline model and the new one, ensuring each bucket had a minimum of 50k users per day to hit 95% confidence at ±1.5% margin. I added a “warm‑up” period where both models served identical content to calibrate latency. After 14 days, I performed a two‑tailed t‑test and Bayesian inference to confirm significance.  
**Result** – The new model lifted CTR from 4.2% to 6.1% (+45%) and increased AOV by 3%, translating to an estimated $120k/month in incremental revenue while keeping latency under 200 ms. I learned that rigorous statistical design, coupled with real‑time monitoring, turns AI experiments into actionable business outcomes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
