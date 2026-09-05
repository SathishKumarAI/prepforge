---
qid: ing_a3daabf0b0__star__local
question: 'Explain: Enterprise Sales Leader — Careers | Sierra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 436
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:01:05-05:00'
sources: []
---

**Situation:**  
During my last role at a mid‑size SaaS firm, we were launching a new tiered pricing model for enterprise customers. The sales leadership team was skeptical about the projected quota attainment because historical data showed a 25 % drop in conversion rates when upselling to larger accounts.

**Task:**  
I was tasked with building a predictive model that would forecast which enterprise prospects had the highest likelihood of closing within the next quarter, so we could prioritize the most promising leads and set realistic sales targets for our leaders.

**Action:**  
Using Python and scikit‑learn, I cleaned over 3,000 prospect records, engineered features such as “average deal size per industry” and “time since last engagement.” I trained a gradient‑boosting classifier (XGBoost) with cross‑validation to avoid overfitting. After tuning the hyperparameters, I integrated the model into our CRM via an API that surfaced a probability score on each lead’s detail page. I also ran weekly A/B tests against manual prioritization, adjusting feature weights based on feedback from the sales leaders.

**Result:**  
Within two months, quota attainment for enterprise accounts rose from 68 % to 84 %, a 16 percentage‑point improvement. The model’s top‑10 leads conversion rate hit 42 % versus the historical average of 29 %. I learned that marrying data science with direct stakeholder input not only drives metrics but also builds trust in ML solutions across non‑technical teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
