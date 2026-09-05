---
qid: ing_31fbc47f1e__star__local
question: 'Explain: have added here and we have added — UBER System design | OLA system
  design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 407
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:08:15-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with extending our ride‑hailing platform’s recommendation engine to support dynamic surge pricing for a new city launch. The existing model only handled static price multipliers and had no real‑time feedback loop.

**Task:**  
I needed to add two key capabilities: (1) an online learning component that updates the multiplier model every 5 minutes based on demand‑supply data, and (2) a monitoring dashboard that flags anomalies in the price distribution before they affect user experience.

**Action:**  
I started by refactoring the batch training pipeline into a modular microservice using FastAPI and Docker. For the online learning, I implemented an incremental gradient descent update with TensorFlow’s `tf.data` API, feeding it streaming Kafka events of rides, cancellations, and wait times. To keep latency low, I cached recent gradients in Redis and applied them to the model weights on the fly.  
For monitoring, I built a Grafana dashboard that pulls from Prometheus metrics exposed by the service, visualizing mean multiplier per region and drift scores computed via KL‑divergence against historical distributions. When drift exceeded 0.15, an alert triggers an automatic rollback to the last stable checkpoint.

**Result:**  
Within two weeks of deployment, surge accuracy improved by 22 % (measured against a holdout set), ride cancellations dropped 13 %, and we avoided any major price spikes during peak hours. I learned that coupling incremental learning with robust monitoring is essential for high‑stakes production ML systems—something directly applicable to large‑scale services like Uber or OLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
