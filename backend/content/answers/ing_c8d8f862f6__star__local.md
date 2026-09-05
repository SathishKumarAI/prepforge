---
qid: ing_c8d8f862f6__star__local
question: 'Explain: How it works — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 367
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:11:09-05:00'
sources: []
---

**Situation:**  
At my last startup we were launching a new e‑commerce platform that had to handle 50 k concurrent users during flash sales. The existing single‑instance backend was crashing under peak traffic, and our SLA required 99.9% uptime.

**Task:**  
I was tasked with designing an HTTP load balancer from scratch—capable of distributing requests across microservices, performing health checks, handling sticky sessions for cart data, and scaling automatically without downtime.

**Action:**  
1. I chose a reverse‑proxy architecture using Nginx as the entry point because it offers fine‑grained routing rules and low overhead.  
2. Implemented round‑robin with weighted least‑conn to balance across instances, and added a Redis‑backed session store for sticky sessions via cookie hashing.  
3. Built a health‑check endpoint (`/healthz`) that each service pings every 5 s; Nginx drops unhealthy backends automatically.  
4. Deployed the whole stack on Kubernetes with an Ingress controller, using HPA to spin up new pods when CPU >70% and down when <30%.  
5. Added TLS termination at the load balancer and used Let’s Encrypt for automated cert renewal.

**Result:**  
Post‑deployment traffic was distributed evenly; our peak latency dropped from 3 s to under 200 ms, and we achieved 99.97% uptime during a 24‑hour flash sale—exceeding SLA by 0.07%. I learned that combining proven tools (Nginx + Kubernetes) with custom health checks gives both reliability and flexibility in production ML‑heavy systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
