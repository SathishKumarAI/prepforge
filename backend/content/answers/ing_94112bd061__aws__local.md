---
qid: ing_94112bd061__aws__local
question: 'Explain: How Health Checking Works — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 445
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:00:53-05:00'
sources: []
---

**Situation & Task**  
While leading a health‑check pipeline for an oncology SaaS platform, we noticed the ELB was routing traffic to unhealthy containers, causing 2 % SLA dips during peak hours (≈ 1 k requests/s). I owned the redesign and delivered a **zero‑downtime, cost‑effective solution**.  

**Action**  
*Built a two‑tier health‑check system:*  
1. **Application‑level probes** – Docker containers expose `/healthz` via an ECS task definition that returns 200 only when the ML model’s inference queue is below 80 % and latency < 50 ms (measured by CloudWatch metrics).  
2. **Infrastructure‑level probes** – ALB target group health checks ping the same endpoint every 30 s; if a task fails 3 consecutive times, it’s deregistered automatically.  

*Used AWS services:* ECS Fargate for stateless inference, Application Load Balancer (ALB) for L7 routing, CloudWatch Alarms + EventBridge to trigger an auto‑scaling policy that spawns new containers when CPU > 70 %.  

**Result**  
- SLA improved from 98.0 % to **99.8 %** within two weeks.  
- Cost decreased by **12 %** due to more accurate scaling and reduced overprovisioning.  
- Reduced mean time to recover (MTTR) from 15 min to < 2 min.

**Learnings & Bar‑Raiser Lens**  
I practiced *Ownership* by iterating the design until production metrics met targets, *Dive Deep* by correlating CloudWatch logs with model latency, and *Bias for Action* by deploying a blue‑green rollout. The bar‑raiser would note my quantitative impact (SLA + cost) and how I turned failure insights into a robust health‑check architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
