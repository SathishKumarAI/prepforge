---
qid: ing_ec99180966__star__local
question: 'Explain: Let''s call this directory e commerce. So'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 346
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:21:59-05:00'
sources: []
---

**Situation:**  
When I joined a mid‑size startup, the product team wanted to boost conversion on their new “e‑commerce” directory app. Sales had plateaued at 12 % conversion, and we were launching a seasonal promotion in just three weeks.

**Task:**  
I was tasked with building a lightweight recommendation engine that could surface the top 5 personalized listings for each visitor in real time without exceeding our existing server budget.

**Action:**  
First, I extracted click‑stream logs (≈200 k rows/day) and used Pandas to engineer user‑item interaction features—recency, frequency, and category affinity. I trained a LightGBM model with 10‑fold cross‑validation, tuning the `num_leaves` and `min_data_in_leaf` hyperparameters to avoid overfitting. To serve predictions, I wrapped the model in FastAPI, deployed it on an AWS Lambda layer, and used DynamoDB for caching the top 50 items per user. I also added a feedback loop: every recommendation click updated a small “user_vector” in Redis, allowing incremental learning without full retraining.

**Result:**  
Within two weeks of rollout, conversion rose from 12 % to 18 % (a 6‑point lift), and the average session duration increased by 23 %. I learned how to balance model complexity with latency constraints and that a simple gradient‑boosted tree can outperform deep nets when engineered features are strong.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
