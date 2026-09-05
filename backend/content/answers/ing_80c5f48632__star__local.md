---
qid: ing_80c5f48632__star__local
question: 'Explain: Routing Engine — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 372
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:50:59-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup we launched a real‑time payment gateway that needed to handle 50 k concurrent users during peak hours. The existing single‑instance API was throttling, with latency spiking above 300 ms and occasional timeouts.

**Task:**  
I had to design a routing engine (load balancer) that could distribute traffic across multiple backend microservices, guarantee high availability, support session stickiness for payment flows, and provide real‑time health checks without adding significant overhead.

**Action:**  
I chose an Nginx‑based reverse proxy with Lua scripting. The engine maintained a dynamic pool of service instances registered in Consul; each instance reported its current CPU and request queue size via Prometheus metrics. A custom Lua script performed weighted round‑robin, using real‑time metrics to adjust weights (lower latency, fewer queued requests = higher weight). I added health‑check endpoints that returned 200 only if the service had processed a transaction in the last 10 s; failed instances were temporarily removed from rotation. For sticky sessions, I used encrypted cookies containing a short‑lived token mapped to a backend instance, ensuring stateful payment flows stayed on the same node.

**Result:**  
After deployment, average latency dropped from 320 ms to 85 ms, and 99.9% of requests were served within SLA. The system scaled to 120 k concurrent users during a holiday sale with zero downtime. I learned that coupling real‑time metrics with adaptive weighting yields a resilient, low‑latency routing layer without hard‑coding thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
