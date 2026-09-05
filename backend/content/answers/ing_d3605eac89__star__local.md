---
qid: ing_d3605eac89__star__local
question: 'Explain: because otherwise we are really screwed all'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 369
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:32:11-05:00'
sources: []
---

**Situation**  
In the last quarter I was tasked with launching a churn‑prediction model for our subscription service. The business required a 5 % lift in retention within six months, but early training runs showed an AUC of 0.82 on the test set while dropping to 0.55 on live data—clearly overfitting.

**Task**  
I needed to build a robust model that would generalize to unseen customers and deliver consistent performance across regions without sacrificing too much predictive power.

**Action**  
First, I switched from a single train‑test split to stratified k‑fold cross‑validation (k = 5) to better estimate variance. Then I introduced L2 regularization and early stopping on the XGBoost pipeline, tuning the learning rate and max depth through Bayesian optimization in Optuna. I also engineered interaction features between usage frequency and support ticket count, which captured churn drivers more effectively. Finally, I deployed a rolling‑window validation script that retrains monthly with a 90/10 split of recent data to capture evolving patterns.

**Result**  
The final model achieved an AUC of 0.91 on hold‑out data and delivered a 4.2 % lift in retention after three months—just shy of the target but within acceptable variance for production. I learned that rigorous validation, regularization, and continuous monitoring are essential to prevent the “screwed” outcome of overfitting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
