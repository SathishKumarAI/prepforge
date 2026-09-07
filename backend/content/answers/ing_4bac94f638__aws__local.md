---
qid: ing_4bac94f638__aws__local
question: 'Explain: Load Balancers — System Design was HARD until I Learned these
  30 Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 475
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:16:11-05:00'
sources: []
---

**Customer Obsession | Ownership**

> *Situation:* In 2023 I led a migration of our recommendation engine from on‑prem to AWS. The old monolith was hitting a hard limit of 10 k QPS; every spike caused latency >300 ms and a 5% churn increase.

> *Task:* Design a resilient, cost‑effective load‑balancing layer that could scale to 200 k QPS while keeping tail latency <50 ms for 99.9% of requests.

> *Action:*  
1. **Service Discovery & Auto Scaling** – Deployed an ECS‑Fargate cluster behind an Application Load Balancer (ALB) with target group health checks every 5 s.  
2. **Weighted Routing & Canary Releases** – Used ALB’s weighted routing to shift 10% traffic to a new model version, monitoring CloudWatch metrics (`RequestCount`, `TargetResponseTime`) in real time.  
3. **Cache‑First Strategy** – Integrated Amazon ElastiCache‑Redis as a session store and pre‑cached the top 1 M recommendations; this reduced backend hits by 70%.  
4. **Dynamic Scaling & Spot Instances** – Enabled ECS Service Auto Scaling with CloudWatch alarms on `ALB_HealthyHostCount`. Added Spot instances for cost savings, backed up by a small On‑Demand safety net.  
5. **Observability & Alerting** – Created an X-Ray trace map and set up SNS alerts for latency >50 ms.

> *Result:* Traffic increased from 10 k to 200 k QPS with tail latency <50 ms, reducing churn by **12%**. Cost dropped 35% due to Spot usage, while the system maintained 99.95% availability during a regional outage thanks to cross‑AZ ALB failover.

> *Learning:* Early in the project I underestimated the importance of *dynamic scaling triggers*. By iterating on CloudWatch metrics and tightening health checks, we achieved true “Zero‑Downtime” deployments—a key win for **Ownership** and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
