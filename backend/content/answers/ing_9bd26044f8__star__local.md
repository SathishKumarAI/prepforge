---
qid: ing_9bd26044f8__star__local
question: 'Explain: You will see my solution next. Alright — Python Full Course for
  Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 341
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:43:44-05:00'
sources: []
---

**Situation:**  
At my last internship, the product team wanted to predict customer churn for our subscription service. The existing rule‑based model had an 85 % accuracy but was missing new behavioral signals that appeared after a recent UI overhaul.

**Task:**  
I was tasked with building a more accurate churn predictor in Python, integrating it into the nightly data pipeline and delivering actionable insights to marketing within two weeks.

**Action:**  
First, I extracted raw event logs from Kafka and stored them in Snowflake. Using pandas and NumPy, I engineered features such as session frequency, time‑to‑first purchase after onboarding, and sentiment scores from chat transcripts. I then split the data (80/20) and trained a LightGBM model with hyperparameter tuning via Optuna, monitoring AUC on a validation set. To reduce bias, I applied SMOTE to balance churners versus non‑churners. After validating the model locally, I containerized it with Docker and deployed it to our Kubernetes cluster as a REST endpoint using FastAPI. Finally, I automated nightly predictions in Airflow and visualized results in Tableau.

**Result:**  
The new model achieved an AUC of 0.92—an improvement of 7 % over the legacy system—and reduced churn by 12 % within three months after targeted retention campaigns were launched. I learned how to blend feature engineering, advanced ML libraries, and production tooling to deliver measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
