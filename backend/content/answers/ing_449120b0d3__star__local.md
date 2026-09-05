---
qid: ing_449120b0d3__star__local
question: 'Explain: Machine Learning in Production — Machine Learning in Production
  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 335
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:46:06-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we had built a credit‑risk model that scored applicants with an AUC of 0.87 during offline testing. The product team wanted to roll it out as a real‑time API for the loan origination portal, but our infrastructure was still prototype‑grade and there were no monitoring or retraining pipelines in place.

**Task:**  
I needed to move the model from a research notebook into a fully supported production service that could handle 5k requests per minute, log predictions for auditability, and automatically detect concept drift so we could trigger re‑training without manual intervention.

**Action:**  
I set up a Dockerized microservice with FastAPI, deployed it on Kubernetes, and used Prometheus/Grafana for latency and error metrics. For monitoring, I added an MLflow model registry and a Drift Detector that compared the incoming feature distribution against the training set using KS‑test thresholds; when drift exceeded 0.2, it queued a retraining job in Airflow. I also implemented A/B testing through Feature Flags to roll out predictions gradually while collecting post‑deployment performance data.

**Result:**  
The API achieved sub‑50 ms latency for 99% of requests and reduced manual model updates from monthly to on‑demand triggers, cutting drift‑related misclassifications by 35%. The experience taught me that production ML is as much about observability and automation as it is about algorithmic accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
