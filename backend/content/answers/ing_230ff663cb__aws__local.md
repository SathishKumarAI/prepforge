---
qid: ing_230ff663cb__aws__local
question: 'Explain: Load Balancers — Loadbalancer'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 416
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:45:51-05:00'
sources: []
---

**Situation / Task**  
At a previous cloud‑platform company I was responsible for launching an online recommendation engine that processed ~5 M inference requests per hour. The team needed a highly available, low‑latency front end that could scale automatically while keeping cost in check.

**Action (Design)**  
I chose **Application Load Balancer (ALB)** because it supports HTTP/2 and WebSocket, essential for our real‑time API.  
* Target groups were split by model version (A/B testing).  
* Health checks used the `/health` endpoint on each inference container (EC2 Spot + ECS Fargate).  
* I enabled **sticky sessions** via application cookies to maintain user context across requests, reducing cache misses.  
* Auto‑Scaling policies were set on target group metrics (target CPU 70 %) and ALB’s request count (200 req/s per target).  
* For burst traffic during promotion events I added an **NLB** in front of the ALB to absorb TCP spikes, then routed to the ALB for HTTP routing.

**Result**  
The solution handled peak loads of 12 M req/h with <30 ms average latency and 99.999 % availability, while reducing infra cost by **28 %** compared to a static EC2 fleet.  

**Reflection (Bar‑raiser)**  
I demonstrated *Ownership* by taking end‑to‑end responsibility, *Dive Deep* through metric‑driven scaling, and *Deliver Results* with quantifiable performance gains. I also learned that enabling sticky sessions reduced cache evictions—an insight we documented for future ML deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
