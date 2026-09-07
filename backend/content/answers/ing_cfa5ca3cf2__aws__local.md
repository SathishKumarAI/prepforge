---
qid: ing_cfa5ca3cf2__aws__local
question: 'Explain: Design the scheduler for a continuous-batching inference engine.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 445
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:10:10-05:00'
sources: []
---

**Situation / Task**  
I was tasked with building a scheduler for a *continuous‑batching inference* engine that would process streaming requests from millions of IoT devices while keeping latency under 200 ms and maximizing GPU utilization.

**Action**  
- **Requirements & Constraints** – Batch size (≥ 32), SLA 99.9% availability, cost ≤ $0.10 per inference.  
- **Design** – A *priority‑based, adaptive scheduler* running on Amazon ECS with Fargate Spot for elasticity.  
  - **Work‑queue**: Kinesis Data Streams → Lambda → SQS FIFO (dedup).  
  - **Scheduler Service**: EC2 spot fleet + Auto Scaling; polls SQS, groups requests by model & GPU type, submits to SageMaker Neo containers via ECS task definition.  
  - **Batching Logic** – Uses exponential back‑off to wait for min batch size or timeout (50 ms).  
- **AWS Services** – Kinesis, Lambda, SQS, ECS Fargate Spot, SageMaker Neo, CloudWatch Metrics.  
- **Scalability/Availability** – Multi‑AZ deployment; spot fleet fallback to on‑demand ensures 99.9% uptime.  
- **Cost** – Spot pricing ~ 70% cheaper; batching reduces GPU idle time by 40%, cutting inference cost from $0.12 → $0.07 per request.

**Result**  
After a pilot, we achieved **95 % batch hit rate**, reduced average latency to **145 ms**, and cut inference spend by **35 %** while meeting the SLA.  

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end flow, dived deep into spot market dynamics, quantified impact with real metrics, and learned that a simple adaptive timeout outperformed a rigid batch window—an insight I shared in our post‑mortem to prevent future regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
