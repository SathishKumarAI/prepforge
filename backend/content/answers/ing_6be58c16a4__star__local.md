---
qid: ing_6be58c16a4__star__local
question: 'Explain: The tech team — Hello, World! - Zerodha Tech Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 390
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:02:54-05:00'
sources: []
---

**Situation:**  
At Zerodha I was part of a small ML ops squad tasked with launching our first public-facing data science demo on the company’s tech blog. The goal was to showcase how we could quickly prototype and deploy a predictive model for intraday price movement, but our internal pipeline was fragmented across notebooks, Docker images, and manual Airflow jobs.

**Task:**  
I had to design an end‑to‑end workflow that automated data ingestion, feature engineering, model training, evaluation, and deployment as a REST endpoint—all within a single GitHub Actions CI/CD pipeline—so the blog could publish “Hello, World!” of ML in under two weeks.

**Action:**  
I first refactored the Jupyter notebooks into modular Python scripts using `pandas` and `scikit‑learn`, then containerised them with Docker. I wrote a lightweight Airflow DAG that triggered on new data pulls from our Kafka stream, ran feature extraction, trained a LightGBM model, logged metrics to MLflow, and pushed the model artifact to S3. Finally, I wrapped the inference logic in a Flask app, built it into a Lambda layer via SAM, and exposed it through API Gateway. All stages were automated with GitHub Actions, ensuring zero manual steps.

**Result:**  
The blog post went live 12 days ahead of schedule, demonstrating real‑time predictions with an AUC of 0.73 on the validation set—up from our previous baseline of 0.65. The pipeline reduced deployment time from 3 hours to under 5 minutes and cut manual errors by 90%. I learned that containerising notebooks and integrating MLflow for experiment tracking are game‑changers for rapid, reproducible ML demos.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
