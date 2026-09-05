---
qid: ing_8c7e5c49a0__eli5__local
question: Your churn model has 0.9 AUC. Product wants to send retention discounts
  to the top 5%. Why might that be a bad plan?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 208
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:19:20-05:00'
sources: []
---

Think of your churn model like a weather forecast for a city’s rain chances. An AUC of 0.9 means the forecast is *good* – it usually tells you whether it will rain or not, but it isn’t perfect. If the product team decides to give umbrellas only to the top 5 % of people predicted to get wet, they’re treating the forecast as if it were 100 % accurate.

In reality, even a great forecast mis‑labels some sunny days as rainy and some rainy days as sunny. By focusing only on the top 5 %, you’ll miss many customers who actually need help (false negatives) and waste money on those who don’t (false positives). The model’s overall performance is useful for ranking all customers, not just a tiny elite group. A better plan would use the full list of scores to target a broader, more balanced set of customers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
