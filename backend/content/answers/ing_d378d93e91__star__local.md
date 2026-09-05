---
qid: ing_d378d93e91__star__local
question: 'Explain: Load Balancer / API Gateway — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 294
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:32:26-05:00'
sources: []
---

**Situation:** While working on a new photo‑sharing app for a startup, we noticed that our prototype’s API layer was bottlenecked during peak traffic—latency spiked to 2 s and the backend servers started throttling requests.

**Task:** I had to design a scalable load balancing and API gateway solution that could distribute traffic evenly, provide rate limiting, and allow for easy rollout of new features without downtime.

**Action:** I chose NGINX as the reverse proxy and integrated it with AWS ELB for external traffic. For the API gateway, I built a lightweight Node.js service using Express‑Gateway to route requests to microservices, enforce JWT authentication, and apply per‑user rate limits (100 req/min). I added health checks and automatic failover to spare instances, and used Redis for session caching to reduce DB hits. To monitor performance, I set up Prometheus + Grafana dashboards that tracked request latency, error rates, and instance CPU usage.

**Result:** After deployment, average API response time dropped from 2 s to 350 ms, and the system handled a 3× increase in concurrent users with zero outages. The rate‑limiting feature reduced abusive traffic by 40%. I learned how to balance between open‑source tooling and cloud services for cost‑effective scalability while keeping observability tight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
