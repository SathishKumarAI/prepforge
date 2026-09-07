---
qid: ing_a01b3e4dcf__aws__local
question: 'Explain: Success Response (200 OK) — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 406
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:26:51-05:00'
sources: []
---

**Situation & Task** – I was hired as a senior solutions architect to build a **global inference API** that serves real‑time predictions from a 4 GB TensorFlow model to ~50 k RPS. The client needed *zero downtime* while scaling out to new regions.

**Action** –  
1. **Front‑end LB**: Elastic Load Balancer (ALB) with path‑based routing (`/predict`) and SSL termination.  
2. **Back‑end pool**: EC2 Auto Scaling Group of GPU instances (p3.2xlarge), each running a Docker container that loads the model into RAM once per launch. The ALB health checks probe `/health` every 10 s; unhealthy targets are drained automatically.  
3. **Caching layer** – Amazon ElastiCache‑Redis (cluster mode) stores top‑20k feature vectors to reduce GPU load by ~35%.  
4. **Observability** – CloudWatch metrics + X-Ray tracing for latency, plus AWS Config rules enforcing *least privilege* IAM roles.  

**Result** – The architecture handled 70 k RPS with <120 ms tail latency and 99.99 % uptime during a 48‑hour regional migration. Cost dropped 28 % versus the prior on‑prem solution by using spot instances for non‑critical inference bursts.

**Reflection** – I learned that *dive deep* into model size and warm‑up times is critical; a naive 4 GB load caused OOMs in 12 % of launches. By adding a **pre‑warm step** (Lambda pre‑warming the container) we eliminated those failures, reinforcing *Ownership* and *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
