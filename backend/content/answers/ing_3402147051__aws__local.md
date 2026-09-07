---
qid: ing_3402147051__aws__local
question: What is load balancing? — Grokking-System-Design-Interview-Quizzes/Quizzes/Load
  Balancer.org at master \u00b7 ema2159/Grokking-System-Design-Interview-Quizzes \u00b7
  GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 422
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:22:37-05:00'
sources: []
---

**Question:** *What is load balancing?*  

> **Answer (Amazon‑style)**  

I lead the traffic‑routing layer for our recommendation engine, where we serve 10 M requests per day.  
**Situation:** Our single application server crashed during a holiday spike, dropping 15 % of conversions and costing us ~$20K in lost revenue.  
**Task:** Design a highly available, cost‑effective load balancer that scales with traffic and provides real‑time health checks.  

**Action:**  
1. **Use AWS Elastic Load Balancing (ALB)** for HTTP(S) traffic – it supports path‑based routing and integrates natively with ECS/EKS.  
2. **Enable Target Group Health Checks** on a 30 s interval, healthy threshold of 3, unhealthy threshold of 5; this ensures rapid failover without manual intervention.  
3. **Deploy across two AZs** (one ALB per AZ) and enable cross‑AZ load balancing to maintain *99.999%* availability.  
4. **Set up CloudWatch metrics** (`HTTPCode_Target_5XX_Count`, `TargetResponseTime`) and an SNS alarm that triggers a Lambda to scale the ECS service by 20 % when latency >200 ms for >10 s.  

**Result:** Post‑deployment, we observed a *95 % reduction* in request failures during peak events and a *30 % drop* in average latency (from 350 ms to 245 ms). Cost increased by only 12 % due to auto‑scaling, but the ROI is >$200K per month from higher conversion rates.  

**Reflection:** I own the end‑to‑end traffic flow and *dive deep* into metrics to fine‑tune thresholds. The bar‑raiser will note my ownership of SLA impact, quantitative results, and continuous learning (e.g., adjusting health‑check intervals after a false‑positive spike).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
