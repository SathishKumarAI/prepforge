---
qid: ing_c25c4fe080__star__local
question: 'Explain: Create with Purpose — Join Us'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 330
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:58:29-05:00'
sources: []
---

**Situation:**  
At my previous startup we were launching a new subscription service and our marketing team wanted to predict churn within the first three months of signup. The existing models had an accuracy of only 68%, which meant we were losing too many high‑value customers.

**Task:**  
I was tasked with building a predictive model that would raise accuracy above 80% so we could target at-risk users with personalized offers before they left.

**Action:**  
First, I gathered and cleaned over 200k user records from our CRM and behavioral logs. Using feature engineering in Python (pandas & scikit‑learn), I created interaction terms for email open rates, app usage streaks, and support ticket history. I then trained an XGBoost classifier with a 5‑fold cross‑validation strategy, tuning the learning rate, max depth, and subsample ratio via Optuna. To handle class imbalance, I applied SMOTE on the training folds and evaluated using AUC‑PR curves. Finally, I deployed the model as a REST endpoint in FastAPI, wrapped it with Docker, and integrated it into our recommendation engine.

**Result:**  
The new model achieved 83% accuracy and an AUC‑PR of 0.72, reducing churn by 12% over six months and saving approximately $1.2 million in acquisition costs. I learned the importance of end‑to‑end pipeline automation and continuous monitoring to maintain model performance over time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
