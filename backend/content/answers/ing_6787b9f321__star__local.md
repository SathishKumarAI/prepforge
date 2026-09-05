---
qid: ing_6787b9f321__star__local
question: Only Four Circles? — Clean Coder Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 397
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:54:51-05:00'
sources: []
---

**Situation** – At my previous fintech startup we needed an early‑stage churn predictor for the mobile app. The compliance team insisted that only four user attributes could be stored in the model (age, last login, subscription tier, and number of support tickets) because any additional data would violate GDPR. Our marketing metrics were lagging: churn predictions were 30 % off, leading to a $200k monthly revenue loss.

**Task** – Build a reliable churn classifier that achieved at least 85 % precision while strictly using only those four features and no raw logs.

**Action** – I first encoded the categorical tier with target‑encoding to preserve predictive power. For last login I engineered “days since last activity” and added a binary flag for weekend logins, keeping the total feature count under four after one-hot encoding. I experimented with LightGBM and XGBoost, tuning depth to avoid overfitting. To validate, I ran a 5‑fold cross‑validation against a holdout set, tracking precision/recall. I also created an online A/B test script that updated the model every two weeks.

**Result** – The final model achieved 88 % precision and 82 % recall, reducing churn by 12 % over three months—saving roughly $250k annually. I learned that strict feature limits can drive creativity in encoding and that lightweight tree models can outperform heavy neural nets when interpretability and speed matter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
