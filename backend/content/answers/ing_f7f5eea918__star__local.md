---
qid: ing_f7f5eea918__star__local
question: How do load balancers work? — What is Load Balancing?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 337
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:44:46-05:00'
sources: []
---

**Situation** – At my previous company, we deployed a real‑time fraud detection model behind an API gateway. Within a month traffic spiked from ~5k requests/second to over 30k during peak hours, and our single inference node was hitting >95 % CPU, causing latency to climb past the SLA of 150 ms.

**Task** – I had to design a scalable architecture that kept response times below SLA while minimizing cost. The goal was to distribute incoming requests evenly across multiple GPU workers without adding significant overhead.

**Action** – I introduced an NGINX load balancer configured with least‑conn and round‑robin strategies, backed by Kubernetes HPA that spun up new pod replicas based on CPU usage. Each pod ran a FastAPI wrapper around the PyTorch model and exposed a health endpoint for NGINX health checks. I also added sticky sessions via cookies to keep stateful inference where needed, and implemented graceful draining so that in‑flight requests completed before pods were removed.

**Result** – Traffic was balanced across 8 GPU nodes during peak load, keeping latency under 120 ms on average and reducing the cost of idle GPUs by ~30 %. I learned how subtle configuration choices—like session affinity vs. pure round robin—can dramatically affect both performance and resource utilization in production ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
