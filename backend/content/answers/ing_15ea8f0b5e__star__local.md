---
qid: ing_15ea8f0b5e__star__local
question: 'Explain: Enterprise Sales Director, Retail — Careers | Sierra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 361
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:12:14-05:00'
sources: []
---

**Situation:**  
At a mid‑size e‑commerce startup, the quarterly revenue fell 18 % because our product recommendations were stale and customers churned after one purchase.

**Task:**  
I was tasked with turning data into action: build an ML‑driven recommendation engine that would increase average order value (AOV) by at least 12 % within three months while keeping latency under 200 ms on the mobile app.

**Action:**  
First, I partnered with data scientists to clean and label a 2 M transaction dataset. We engineered features—session time, click‑through patterns, and cohort tags—and trained a LightGBM model that scored items per user. I then worked with the dev ops team to containerize the model using Docker, deploy it on AWS SageMaker endpoints, and integrate it into our REST API with FastAPI. To reduce latency, we added a Redis cache for the top 1 k recommendations per segment. Throughout, I ran A/B tests, iterated on feature importance, and adjusted hyperparameters based on real‑time metrics.

**Result:**  
Within three months, AOV rose from $42 to $47 (11 % lift), overall conversion climbed 9 %, and churn dropped by 5 %. The project taught me how to translate ML insights into production‑ready solutions that directly impact sales.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
