---
qid: ing_edd53eca92__star__local
question: 'Explain: ML Coding From Scratch (Asked at AI Labs)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 373
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:24:23-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with building a churn prediction model for a telecom client whose quarterly churn rate had spiked from 8 % to 12 %. The analytics team had only a handful of labeled examples and the product owner demanded an end‑to‑end solution that could run on their existing Python stack without proprietary libraries.

**Task**  
I needed to design, code, and deploy a fully reproducible ML pipeline—from raw log ingestion to a production‑ready inference script—using only NumPy, Pandas, and scikit‑learn, while keeping model latency under 50 ms per request.

**Action**  
First, I wrote a data‑cleaning module that handled missing values, encoded categorical fields with target‑encoding, and performed feature scaling. Next, I implemented a logistic regression classifier from scratch in NumPy to understand every matrix operation, then wrapped it in a scikit‑learn `BaseEstimator` for compatibility. I added L2 regularization via gradient descent, tuned the lambda hyperparameter with cross‑validation, and used SHAP values to interpret feature importance. Finally, I packaged the model into a lightweight Flask API, containerized it with Docker, and deployed it on AWS Lambda using serverless‑ml.

**Result**  
The new pipeline cut churn prediction latency from 2 s to < 50 ms, improved AUC‑ROC from 0.68 to 0.81, and reduced the client’s monthly churn by 3.5 % (≈ 1,200 customers). I learned that building ML “from scratch” forces deeper algorithmic insight, which in turn makes debugging and scaling far easier.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
