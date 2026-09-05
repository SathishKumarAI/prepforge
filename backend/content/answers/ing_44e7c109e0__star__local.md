---
qid: ing_44e7c109e0__star__local
question: 'Explain: Hannon: Welcome. Thank you for coming to'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 343
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:46:37-05:00'
sources: []
---

**Situation** – In my last role I was part of a fraud‑detection team that had to reduce false positives in credit card transactions from 12% to under 5%. The existing rule‑based engine was overfitting and lagged real‑time processing.

**Task** – Build an end‑to‑end machine‑learning pipeline that could ingest millions of transaction logs daily, train a model with minimal latency, and deploy it in production while keeping the inference throughput above 200k requests per second.

**Action** – I chose a LightGBM ensemble because of its fast training and GPU support. First, I engineered features (merchant entropy, time‑of‑day patterns) using Spark, then used Optuna for hyperparameter tuning across 50 trials in parallel on an EMR cluster. For deployment, I containerized the model with Docker and served it via a FastAPI endpoint behind an Nginx load balancer, scaling horizontally with Kubernetes autoscaling based on CPU usage. To monitor drift, I set up a real‑time alerting dashboard in Grafana that compared predicted fraud scores against ground truth over 24‑hour windows.

**Result** – The new model cut false positives from 12% to 4.3%, increasing merchant revenue by roughly $1.2 M per month. It also reduced inference latency from 120 ms to 45 ms, meeting our SLA. I learned that balancing feature complexity with production constraints is key, and that continuous monitoring can catch model drift before it hurts business metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
