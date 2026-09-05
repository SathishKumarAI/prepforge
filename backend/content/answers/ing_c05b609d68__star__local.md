---
qid: ing_c05b609d68__star__local
question: 'Explain: Now, in this case, because one of — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 364
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:55:05-05:00'
sources: []
---

**Situation:**  
During my senior capstone, our team was tasked with building a fraud‑detection model for a regional bank that had seen a 12 % spike in unauthorized transactions last quarter. The dataset comprised over 1.2 million rows of transaction logs, but the client’s data governance policy restricted us to using only open‑source tools and allowed no external APIs.

**Task:**  
I needed to design an end‑to‑end pipeline that could ingest the raw CSV streams, engineer meaningful features, train a high‑accuracy classifier, and deploy it on a lightweight Flask service for real‑time scoring—all within six weeks and under a $3 k budget.

**Action:**  
Using Python, I leveraged Pandas for ETL, scikit‑learn’s `Pipeline` to chain preprocessing (imputation, one‑hot encoding) with a Gradient Boosting Classifier. To reduce dimensionality and avoid overfitting, I applied Recursive Feature Elimination with cross‑validation. I containerized the model with Docker, then deployed it on an AWS Lightsail instance using Gunicorn, exposing a REST endpoint. Continuous evaluation was automated via a CI/CD pipeline that ran unit tests and performance metrics on every push.

**Result:**  
The final model achieved 94 % precision and 91 % recall, cutting false positives by 30 % compared to the bank’s legacy rule‑based system. Deployment latency stayed under 200 ms per request. I learned how to balance model complexity against operational constraints, and that a well‑structured Python pipeline can deliver production‑ready ML within tight budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
