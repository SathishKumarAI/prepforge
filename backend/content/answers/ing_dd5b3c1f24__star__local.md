---
qid: ing_dd5b3c1f24__star__local
question: What are the 4 basics of machine learning?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 329
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:50:44-05:00'
sources: []
---

**Situation:**  
In my last role as a data scientist at a fintech startup, we were tasked with building an automated fraud detection system for credit card transactions. The existing rule‑based engine had a high false‑positive rate and couldn’t keep up with new attack patterns.

**Task:**  
I needed to design a machine learning model that could learn from labeled transaction data, adapt quickly to emerging fraud tactics, and be explainable enough for compliance auditors.

**Action:**  
First, I outlined the four foundational concepts of ML—supervised learning, unsupervised learning, feature engineering, and evaluation metrics. I chose a supervised ensemble (XGBoost) trained on 1 M labeled transactions, engineered 200 features (time‑of‑day patterns, device entropy, merchant clustering), and used ROC‑AUC & precision‑recall as our key metrics. To handle concept drift, I implemented an online learning pipeline that retrained weekly with fresh data. Finally, I added SHAP value explanations to satisfy audit requirements.

**Result:**  
The model reduced false positives by 35% while catching 92% of fraudulent transactions—up from 78%. Deployment cut investigation time by 2 hours per day and earned a “Best Use of AI” award at the company’s annual innovation showcase. I learned that grounding solutions in ML fundamentals, coupled with rigorous feature work and continuous evaluation, turns theoretical concepts into tangible business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
