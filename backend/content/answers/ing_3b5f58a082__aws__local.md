---
qid: ing_3b5f58a082__aws__local
question: 'Explain: 2.3 Health Check Overhead — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 453
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:40:29-05:00'
sources: []
---

**Situation & Task**  
At my previous company we migrated a 50‑node microservice fleet to an **Application Load Balancer (ALB)**. The health‑check interval was set to 5 s, but latency on the backend spiked during traffic surges – the ALB’s frequent probes were eating up CPU and I/O, causing service degradation.

**Action**  
1. *Ownership & Dive Deep*: I profiled request/response paths with **AWS X-Ray** and found health‑check traffic consumed ~15 % of each instance’s 2 vCPU budget during peak hours.  
2. *Design* – Replaced the default ALB health checks with a **custom Lambda authorizer** that queries a lightweight in‑memory cache (Redis) for service status, reducing probe load to <1 %.  
3. Configured the ALB to use a longer interval (30 s) and increased the unhealthy threshold to 5 consecutive failures before routing traffic away.  
4. Implemented **CloudWatch metrics** (latency, CPU, health‑check count) and an automated SNS alert if latency >200 ms.

**Result**  
- CPU usage dropped from 60 % to 35 %.  
- Mean request latency fell from 350 ms to 190 ms (≈45 % improvement).  
- Cost savings of ~$1,200/month on EC2 and Lambda invocations.  

**Reflection & Learning**  
The bar‑raiser looked for ownership, quantified impact, and a learning loop: I documented the change in Confluence, ran A/B tests to confirm stability, and added automated rollback logic if health checks failed >3 times consecutively.

> **Leadership Principles:** Customer Obsession (reduce latency), Ownership (end‑to‑end solution), Dive Deep (profiling & metrics).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
