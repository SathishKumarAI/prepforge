---
qid: ing_a3843a0cb3__star__local
question: 'Explain: My Favourites — Eugene Yan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 344
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:00:06-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we launched a new investment app that struggled to keep users engaged. The analytics dashboard showed a 35 % drop in daily active users within the first month of release.

**Task**  
I was tasked with building a personalized recommendation engine to surface “my favourites” – the top stocks and ETFs each user is likely to invest in – and increase retention by at least 15 %.

**Action**  
First, I collected clickstream and transaction data (≈1.2 M events/day) into an AWS Redshift cluster. Using Python/Scikit‑Learn, I engineered features such as recent portfolio turnover, sector affinity, and time‑to‑buy ratios. I trained a matrix‑factorization model with implicit feedback via the LightFM library, fine‑tuned hyperparameters using Bayesian optimization (Optuna), and deployed it in a Docker container on ECS. The API served top‑10 personalized suggestions in under 120 ms per request.

**Result**  
Within three weeks of rollout, daily active users rose from 12 k to 14 k (+17 %), and the click‑through rate for recommended assets increased from 3.8 % to 7.5 %. The success taught me that blending domain‑specific features with scalable ML pipelines can deliver tangible business impact in a production environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
