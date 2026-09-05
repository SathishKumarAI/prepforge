---
qid: ing_d227344254__star__local
question: 'Explain: Hi. Welcome to another system design video'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 340
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:29:57-05:00'
sources: []
---

**Situation:**  
At my previous startup, the product team wanted to launch a real‑time recommendation engine for our e‑commerce platform. The existing batch‑processing pipeline was too slow; customers were seeing stale recommendations that lowered conversion rates by ~15 %.

**Task:**  
I had to design an end‑to‑end ML system that could ingest clickstream data, train models incrementally, and serve predictions with <200 ms latency, all while keeping infrastructure costs under $2k/month.

**Action:**  
I chose a microservice architecture on Kubernetes. Data streaming was handled by Kafka; feature extraction ran in Spark Structured Streaming to keep stateful user profiles up‑to‑date. For modeling, I built a LightGBM ensemble that trained every 30 minutes using incremental learning, and deployed it via TensorFlow Serving behind an NGINX API gateway. To meet latency, I cached the top 10 predictions per user in Redis, refreshed on each request. Cost control was achieved by auto‑scaling the inference pods based on queue depth and setting a maximum of 4 vCPUs per pod.

**Result:**  
The new pipeline reduced recommendation latency from ~2 seconds to <150 ms, boosting click‑through rates by 23 % and conversions by 12 %. I learned that balancing real‑time requirements with cost constraints often means layering caching, incremental training, and careful resource throttling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
