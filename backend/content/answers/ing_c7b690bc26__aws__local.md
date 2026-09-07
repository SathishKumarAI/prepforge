---
qid: ing_c7b690bc26__aws__local
question: 'Explain: Mean Time Between Failures (MTBF) — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 419
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:53:41-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked with redesigning the inference pipeline for a recommendation engine that served 5 M users daily. The existing on‑prem cluster had an MTBF of only **12 hours**, causing frequent outages and degrading user experience.

**Action (Technical Design)**  
1. **Shift to managed services** – moved from self‑hosted EC2 + custom autoscaling to **Amazon SageMaker Endpoint** with *Serverless Inference* for stateless inference and **ECS Fargate** for auxiliary microservices.  
2. **Health & self‑healing** – added CloudWatch Alarms on `CPUUtilization`, `MemoryUtilization` and SageMaker `InvocationLatency`. Triggered Lambda to restart the endpoint if latency > 200 ms or CPU > 70 %.  
3. **Redundancy** – deployed the endpoint in a *multi‑AZ* configuration; used Route 53 weighted routing for blue/green rollouts.  
4. **Cost & scaling** – leveraged SageMaker’s *pay‑per‑second* pricing and autoscaling to keep capacity ~20 % above peak, reducing monthly spend from $45K to $28K.

**Result (Data‑driven)**  
- MTBF increased from **12 h → 10 days**.  
- Mean time to recovery dropped by 90 %.  
- Latency SLA (95th percentile < 120 ms) was met 99.7 % of the time, up from 92 %.  

**Reflection**  
I owned the failure analysis, dove deep into CloudWatch logs to identify root causes, and iterated quickly—demonstrating *Ownership*, *Dive Deep*, and *Bias for Action*. The success taught me that shifting to managed services not only boosts reliability but also frees engineers to innovate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
