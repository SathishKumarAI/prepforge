---
qid: ing_9412c6133c__star__local
question: Tell me about the AI project you're most proud of. Why that one?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 253
total_tokens: 493
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:29:10-05:00'
sources: []
---

**Situation** – At my previous company we had a customer churn rate of 27 % in our SaaS analytics platform, and the marketing team was struggling to predict which accounts were at risk.  
**Task** – I was tasked with building an AI‑driven churn prediction model that could be deployed in real time and give actionable insights to the sales team within two weeks.  
**Action** – I gathered 1.2 M user‑event logs from Snowflake, engineered features (daily active usage, feature adoption, support ticket frequency), and used a LightGBM pipeline with early stopping to avoid overfitting. I wrapped the model in an AWS Lambda function behind API Gateway so it could score new users every minute. I also built a simple dashboard in Power BI that highlighted high‑risk accounts and suggested personalized outreach scripts.  
**Result** – The model achieved 83 % precision at 70 % recall, reducing churn by 5 % over the next quarter (≈$1.2 M in ARR). I learned how to balance performance with operational simplicity, and how small data‑science projects can have a direct revenue impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
