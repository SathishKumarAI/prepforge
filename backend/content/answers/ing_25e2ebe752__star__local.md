---
qid: ing_25e2ebe752__star__local
question: You've been a backend engineer for six years. Why AI engineering now, and
  what actually transfers?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 297
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:44:35-05:00'
sources: []
---

**Situation:**  
Three months ago I was leading the migration of our legacy order‑processing API from monolithic Java to a microservice architecture on Kubernetes. The new services were handling 1.2 million requests per day, but latency had risen by 30% during peak hours.

**Task:**  
I needed to reduce average response time below 120 ms while keeping cost under the $15k/month budget and maintaining full transactional integrity.

**Action:**  
I evaluated several options: caching layers, async queues, and lightweight ML inference. I decided to prototype a small TensorFlow model that predicted which orders would likely hit downstream throttling. The model ran on a single GPU pod, using ONNX Runtime for low overhead. I integrated the predictor into the request pipeline with a fallback path, monitored via Prometheus, and tuned the threshold by A/B testing. To keep engineering effort manageable, I reused our existing CI/CD pipeline and added automated retraining triggers when prediction accuracy dropped below 92%.

**Result:**  
Latency fell from 150 ms to 110 ms on average, cutting our Cloud spend by 18% while keeping SLA compliance at 99.9%. This experience showed me that my strengths in performance profiling, container orchestration, and production‑grade ML deployment translate directly into AI engineering, where the same rigor around observability, cost, and incremental rollout is essential.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
