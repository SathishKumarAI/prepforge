---
qid: ing_230ff663cb__star__local
question: 'Explain: Load Balancers — Loadbalancer'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 317
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:39:08-05:00'
sources: []
---

**Situation** – In my last role I was responsible for a real‑time fraud detection model that ran on a cluster of GPU servers. The traffic spiked by 400 % during holiday sales and our single inference endpoint began to timeout, causing a drop in the model’s accuracy because some requests were never scored.

**Task** – I needed to design a system that could distribute incoming prediction requests evenly across the GPUs, keep latency below 50 ms, and allow us to scale out quickly without redeploying the model code.

**Action** – I introduced an NGINX‑based load balancer with round‑robin and least‑conn strategies. The balancer forwarded each request to a pool of Docker containers that exposed the TensorFlow Serving API. To maintain state, I added sticky sessions using client IP hashing so that sequential requests from the same user hit the same GPU, reducing cache misses. I also set up health checks that removed unhealthy nodes from rotation and configured autoscaling rules based on CPU utilisation and queue length.

**Result** – After deployment, average inference latency dropped to 32 ms, the error rate fell by 90 %, and we handled a peak of 12,000 requests per second with zero downtime. I learned how critical proper load‑balancing is for ML workloads and that simple open‑source tools can be tuned to meet strict performance SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
