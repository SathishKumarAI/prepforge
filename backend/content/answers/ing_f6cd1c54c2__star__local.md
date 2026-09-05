---
qid: ing_f6cd1c54c2__star__local
question: 'Explain: Coursework — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 359
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:42:02-05:00'
sources: []
---

**Situation**  
During my senior year, I took CS324 – Advanced Machine Learning – where the capstone was a predictive model for student dropout rates at our university. The department had collected 3,000 anonymized records with features like attendance, grades, and engagement metrics, but the data were highly imbalanced (only 8% dropouts).  

**Task**  
I needed to build an algorithm that achieved >85 % precision on identifying likely dropouts while keeping false positives below 10 %, so the advising office could intervene early without over‑loading counselors.  

**Action**  
First, I preprocessed the data with scikit‑learn pipelines: one‑hot encoded categorical variables, imputed missing values using KNN, and applied SMOTE to balance classes. Then I compared several models—logistic regression, random forest, XGBoost—and tuned hyperparameters via Bayesian optimization (optuna). To interpret feature importance, I used SHAP values, revealing that low attendance and high absenteeism were the strongest predictors. Finally, I wrapped the best model in a Flask API for deployment on the university’s intranet.  

**Result**  
The XGBoost model achieved 87 % precision and 92 % recall with only 9 % false positives, surpassing the target metrics. The project was showcased at the campus Data Science Fair, where advisors reported that early alerts led to a 12 % reduction in actual dropouts the following semester. I learned how to balance performance with interpretability and the importance of end‑to‑end deployment in real‑world settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
