---
qid: ing_9ab426d990__star__local
question: 'Explain: So we''re definitely going to play around'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 321
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:41:46-05:00'
sources: []
---

**Situation:**  
At my last role, the product team wanted a quick prototype for predicting churn in our subscription service. The data set was huge (over 2 M rows) and our timeline was only two weeks before the quarterly review.

**Task:**  
I had to build a model that delivered >80 % precision on the top‑10% risk group, deploy it into a lightweight API, and explain trade‑offs to non‑technical stakeholders.

**Action:**  
First, I used **feature hashing** to reduce dimensionality while preserving high‑cardinality categorical fields. Then I trained an **XGBoost** ensemble with early stopping on a validation split, tuning `max_depth` and `learning_rate` via Bayesian optimization in Optuna. For deployment, I wrapped the model in a Flask app and containerized it with Docker, exposing a `/predict` endpoint that streamed predictions to our monitoring dashboard. To keep latency low (<50 ms), I serialized the model with **ONNX** and used GPU inference on the edge server.

**Result:**  
The prototype achieved 82 % precision on the risk cohort and ran at 35 ms per request, meeting the SLA. It helped the product team prioritize outreach efforts, reducing churn by 12 % over the next quarter. I learned how to balance model complexity with operational constraints and that clear communication of trade‑offs is as critical as the code itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
