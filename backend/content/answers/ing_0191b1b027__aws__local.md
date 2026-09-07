---
qid: ing_0191b1b027__aws__local
question: Which Pattern Should You Choose? — Design Load Balancer | System Design
  Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 551
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:27:47-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:** A fintech startup needed to serve a real‑time fraud‑detection model to ~200 k transactions per second while keeping latency < 50 ms.  
> **Task:** Design the load‑balancing layer that routes traffic to a fleet of inference containers without becoming a bottleneck.  
> **Action (Technical):**  
> *Pattern chosen:* **Edge‑to‑Cluster Routing with an Application Load Balancer (ALB) + ECS Fargate**.  
> 1. **ALB** receives HTTPS requests, performs TLS termination and path/host routing.  
> 2. Traffic is forwarded to **target groups** pointing at ECS tasks running the model. Each task exposes a lightweight HTTP endpoint that forwards to the inference engine (e.g., SageMaker Runtime).  
> 3. **Auto Scaling** on ALB (based on target response time) and ECS (CPU/Memory) ensures capacity matches traffic spikes.  
> 4. **Health checks** at both layers guarantee failover to healthy tasks; requests that hit a dead container are automatically retried.  
> *AWS services:* ALB, ECS Fargate, CloudWatch, Auto Scaling, SageMaker Runtime, IAM for fine‑grained permissions.  
> *Scalability/Availability:* ALB is fully managed and scales horizontally with no single point of failure; ECS Fargate abstracts underlying EC2 instances.  
> *Cost trade‑offs:* Using Fargate eliminates infrastructure overhead but adds per‑second billing; we mitigated by right‑sizing containers (0.5 vCPU, 1 GiB RAM) and using Spot for non‑critical batches.  
> **Result:** Post‑deployment, request latency dropped from 120 ms to 38 ms (−68 %) and throughput increased by 4× with a 12 % reduction in monthly spend. The system handled a 300 % traffic surge during peak trading hours without manual intervention.  

**Leadership Principles Highlighted**

- **Customer Obsession:** Prioritized end‑user latency and reliability.  
- **Ownership & Dive Deep:** Built a resilient, auto‑scaling pipeline; iterated on metrics to fine‑tune thresholds.  

*Bar‑raiser notes:* Look for ownership of the entire flow, deep understanding of ALB vs NLB trade‑offs, quantified impact, and evidence of learning from a prior failure (e.g., a traffic spike that caused timeouts before redesign).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
