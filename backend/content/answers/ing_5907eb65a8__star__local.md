---
qid: ing_5907eb65a8__star__local
question: 'Explain: Details to know — Machine Learning in Production | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 342
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:25:38-05:00'
sources: []
---

**Situation** – At my last company we were building a churn‑prediction model for a telecom client. The model scored well on the test set (AUC 0.87), but when we deployed it to the live recommendation engine, the latency spiked and the accuracy dropped to 0.73 because of feature drift and serialization overhead.

**Task** – I had to bring the model into production so that predictions were delivered in under 50 ms, maintained at least 0.80 AUC, and could be updated automatically every week with new data.

**Action** – First, I containerized the pipeline using Docker and orchestrated it with Kubernetes for autoscaling. I switched from a heavy Pandas‑based preprocessing script to a vectorized implementation in NumPy and added a feature cache (Redis) to avoid recomputing embeddings on each request. For drift detection, I set up a monitoring service that computed KL divergence between the training and live feature distributions every hour; if it exceeded 0.1, an automated retraining job was triggered via Airflow. Finally, I integrated Prometheus metrics into the inference microservice to track latency, error rates, and AUC in real time.

**Result** – The new deployment cut prediction latency from 180 ms to 35 ms and kept AUC above 0.82 over a month of production use. We also reduced retraining cost by 40% thanks to the automated pipeline. I learned that scaling ML is as much about observability and automation as it is about model accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
