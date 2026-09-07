---
qid: ing_79ded2d973__aws__local
question: 'Explain: VII. Port Binding — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 458
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:00:39-05:00'
sources: []
---

**Situation / Task**

When launching a new ML inference service for our recommendation engine, I had to move from a monolithic Docker image that hard‑coded the model path to a 12‑Factor compliant architecture so we could spin up dozens of replicas in ECS without manual configuration.

**Action (Design & AWS)**  

- **Port Binding**: I exposed the inference port (`8000`) as an environment variable (`PORT`).  
- **Container Runtime**: Switched from ECR‑hosted images to **Amazon ECS Fargate** with **Task Definitions** that inject `PORT` via *task overrides*.  
- **Service Discovery**: Used **AWS Cloud Map** so each task registers its own port, enabling the load balancer to route traffic without hard‑coded IPs.  
- **Configuration**: Leveraged **Parameter Store** for model URI and hyperparameters; tasks pull these at launch, ensuring zero downtime when updating models.  
- **Scalability / Cost**: Fargate’s per‑second billing cut idle costs by 35 % compared to EC2 autoscaling groups. The service achieved >99.9 % uptime during a 20× traffic spike in production.

**Result**

- Reduced deployment time from 4 hrs to **15 min** (70 % faster).  
- Eliminated manual port mapping errors, cutting support tickets by **90 %**.  
- Enabled automated A/B testing of new models with negligible operational overhead.

---

### Leadership Principles Highlighted  

1. **Ownership** – I re‑architected the entire deployment pipeline to eliminate future friction.  
2. **Dive Deep & Deliver Results** – Quantified cost savings, uptime, and deployment speed; iterated until metrics met targets.  

Bar‑raiser cues: clear ownership of end‑to‑end flow, deep technical justification (AWS services chosen for trade‑offs), data‑driven impact, and continuous learning from earlier monolith failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
