---
qid: ing_e77ed157c0__star__local
question: 'Explain: 1.1.3.2.2. Information-criteria based model selection'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 361
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:11:36-05:00'
sources: []
---

**Situation** – In a client‑facing analytics project at my previous company we were building a churn prediction model for a telecom provider. The initial pipeline produced dozens of candidate models (logistic regression, random forest, XGBoost) with varying hyperparameters, but the business asked for a single, interpretable model that could be deployed in production.

**Task** – I had to select the best model objectively while balancing predictive performance against complexity, ensuring we met a 2% improvement over the baseline and kept inference latency under 50 ms.

**Action** – I implemented an information‑criteria framework. For each candidate I calculated AIC and BIC on the validation set using scikit‑learn’s `log_loss` as the likelihood component. I also recorded log‑likelihood, number of parameters, and cross‑validated ROC‑AUC. Models with lower AIC/BIC were favored unless their AUC dropped more than 1 %. I plotted the criteria against model complexity to spot the elbow point, then ran a quick latency test on the chosen model.

**Result** – The XGBoost model with 150 trees and depth 6 had an AIC of 12.3k (vs. 13.7k for logistic) and BIC of 13.1k, giving a 2.8 % lift in churn prediction accuracy while staying within the latency budget. I learned that information criteria provide a principled way to penalize over‑fitting and that visualizing the trade‑off curve helps explain decisions to stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
