---
qid: ing_c26502e4cd__star__local
question: 'Explain: Hear from Our Associates — Careers | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 364
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:58:37-05:00'
sources: []
---

**Situation:**  
At my previous firm we were launching a new “Talent Radar” program to accelerate hiring for data science roles. The internal ATS was flagging over 4,000 candidates per month, but the time‑to‑fill was creeping past our target of 45 days.

**Task:**  
I needed to build an ML model that could predict candidate success and recommend the top 10% for interview, cutting down manual reviews by at least 50%.

**Action:**  
Using Python and Scikit‑Learn, I engineered features from resumes (degree, years of experience, Kaggle scores), LinkedIn activity, and past hiring data. After cleaning and encoding categorical variables with OneHotEncoder, I trained a Gradient Boosting Classifier, tuning hyperparameters via Optuna. I integrated the model into our ATS using an API endpoint in Flask, logging predictions and human feedback to refine the pipeline.

**Result:**  
Within three months, the average time‑to‑fill dropped from 48 to 32 days—a 33% improvement—and interview volume per recruiter fell by 55%. The project also highlighted the importance of monitoring for bias; we added a fairness audit that reduced gender disparity in candidate scores by 12%. I learned how end‑to‑end ML deployment can directly impact business metrics while maintaining ethical standards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
