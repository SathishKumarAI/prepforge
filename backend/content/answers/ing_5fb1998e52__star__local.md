---
qid: ing_5fb1998e52__star__local
question: 'Explain: Reference — Loadbalancer'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 345
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:39:45-05:00'
sources: []
---

**Situation**  
At my last role I was responsible for deploying a real‑time fraud detection model that had to serve predictions for ~10 k requests per second across two data centers. The traffic spiked during peak hours, and our single inference server started throttling.

**Task**  
I needed to design a reference load balancer layer that could distribute incoming prediction requests evenly, keep latency under 30 ms, and automatically failover when a node went down.

**Action**  
I chose Nginx Plus as the front‑end proxy because of its built‑in health checks and sticky session support. I configured it to use least‑conn load balancing with an upstream group pointing to our TensorFlow Serving instances. Health probes pinged `/v1/models/model:predict` every 5 s; if a node returned >3 consecutive errors, Nginx removed it from rotation. I also enabled rate limiting per IP (200 rps) and added a small Lua script that logged request latency into Prometheus for real‑time monitoring. To reduce cold starts, each TensorFlow container was preloaded with the model on boot.

**Result**  
After rollout, we saw average inference latency drop from 48 ms to 22 ms, and the system handled peak traffic without drops. The load balancer also cut manual intervention by 90% during outages. I learned that a simple, well‑configured proxy can be more robust than complex auto‑scaling logic for ML inference workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
