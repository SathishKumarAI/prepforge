---
qid: ing_2b86872040__star__local
question: 'Explain: Here is the framework you can use to write your introduction:'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 356
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:54:56-05:00'
sources: []
---

**Situation**  
During my senior capstone project, our team was tasked with predicting customer churn for a telecom provider that had over 1.2 million monthly active users. The client’s existing rule‑based system only achieved an 68 % accuracy, and their SLA required at least 85 % precision to reduce costly retention campaigns.

**Task**  
I needed to design and deploy a machine learning model that improved churn prediction accuracy while keeping inference latency under 50 ms per user so it could be integrated into the provider’s real‑time recommendation engine.

**Action**  
First, I performed feature engineering on raw call logs, usage patterns, and customer support tickets, creating over 200 engineered features. I then compared several algorithms—gradient boosting (XGBoost), random forests, and a shallow neural net—in a cross‑validation loop. Using Bayesian hyperparameter optimization with Optuna, I tuned the XGBoost model, achieving a 92 % precision at 80 % recall. To meet latency constraints, I distilled the boosted tree into a lightweight CatBoost model and wrapped it in a FastAPI microservice, deploying on an AWS Lambda layer for serverless scaling.

**Result**  
The new model lifted overall churn prediction accuracy from 68 % to 92 %, cutting retention campaign costs by roughly $1.8 M annually. I learned that balancing model complexity with operational constraints often yields the most business‑impactful solutions, and that iterative experimentation with both algorithm choice and deployment architecture is essential in production ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
