---
qid: ing_35d282655a__star__local
question: 'Explain: Basic Requirements — Foodorderingzomatoswiggy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 357
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:15:49-05:00'
sources: []
---

**Situation:**  
At a mid‑size startup building an on‑demand food delivery service, our recommendation engine was only getting a 12 % click‑through rate (CTR) for suggested restaurants, far below the industry benchmark of ~25 %. The business needed to boost engagement and reduce churn.

**Task:**  
I had to redesign the recommendation pipeline: collect fresh user signals, build an item–user matrix, train a scalable model, and deploy it with real‑time inference latency under 200 ms per request.

**Action:**  
1. Migrated data ingestion from batch ETL to Kafka streams so we captured order history, search queries, and dwell time in near‑real time.  
2. Implemented a hybrid matrix factorization + content‑based model using implicit ALS in Spark, then distilled it into a LightGBM classifier for cold starts.  
3. Tuned hyperparameters with Optuna, targeting AUC > 0.82 while keeping feature set < 50 features to satisfy the latency constraint.  
4. Deployed the model on Kubernetes with TensorFlow Serving; added a cache layer (Redis) for frequently requested user‑restaurant pairs.

**Result:**  
CTR jumped from 12 % to 24 %, revenue per active user rose by 18 %, and churn fell by 7 %. I learned how to balance model complexity against production latency, and the importance of real‑time data pipelines in ML‑driven e‑commerce.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
