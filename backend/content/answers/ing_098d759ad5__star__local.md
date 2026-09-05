---
qid: ing_098d759ad5__star__local
question: 'Explain: Model strategy — Ai System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 305
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:47:59-05:00'
sources: []
---

**Situation:** At my previous startup we were launching a real‑time recommendation engine for an e‑commerce platform that had to handle 10,000 concurrent users and process 200k events per minute.

**Task:** I was tasked with designing the AI system’s model strategy: choosing which models to deploy, how to version them, and ensuring latency under 50 ms while maintaining a 15% lift in click‑through rate.

**Action:** I started by profiling user traffic patterns and built a lightweight feature store on Redis. I selected an online gradient boosting tree (XGBoost) for its interpretability and a deep neural network with attention layers for capturing long‑term dependencies. Using MLflow, I set up a continuous training pipeline that pulled new data nightly, performed A/B tests via Kubernetes canary releases, and automated rollback if latency spiked. For inference, I containerized the models on NVIDIA Triton, leveraging batch requests to keep GPU utilization above 70 %. I also implemented an adaptive caching layer with Memcached to serve the most frequent predictions.

**Result:** The system achieved a 12% increase in CTR within two weeks of deployment and maintained average latency at 38 ms. We reduced model drift incidents by 40% thanks to automated retraining, and I documented best practices that are now part of our engineering handbook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
