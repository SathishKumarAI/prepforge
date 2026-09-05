---
qid: ing_ad620e11e8__star__local
question: 'Explain: Okay? so, now let''s run our program — Python Full Course for
  Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 363
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:18:50-05:00'
sources: []
---

**Situation** – In my senior capstone I was tasked with building a real‑time fraud detection system for a fintech startup that had just hit $5 M in monthly transactions. Their existing rule‑based engine flagged only 20% of fraudulent activity and produced a high false‑positive rate, clogging the support desk.

**Task** – My goal was to design a supervised learning pipeline that could increase true‑positive detection by at least 30% while keeping false positives below 5%, all within a 3‑month deadline and on a modest cloud budget.

**Action** – I started with data exploration in Jupyter, using pandas to clean noisy logs and feature engineering (e.g., time‑since last transaction, device entropy). I split the data into train/validation/test sets, then trained several models—Logistic Regression, Gradient Boosting, and a LightGBM ensemble. Hyperparameters were tuned with Optuna, leveraging early stopping to prevent overfitting. After choosing LightGBM, I wrapped it in a Flask microservice, containerized with Docker, and deployed to AWS Fargate. For monitoring, I set up Prometheus alerts on the false‑positive rate.

**Result** – The new model lifted fraud detection from 20% to 48%, while false positives dropped from 12% to 3%. This translated into a $1.2 M annual savings for the client and earned me an “Innovation Award” from the university. I learned how critical end‑to‑end pipeline design is—from feature engineering to deployment—in turning raw data into business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
