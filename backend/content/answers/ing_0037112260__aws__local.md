---
qid: ing_0037112260__aws__local
question: 'Explain: Scaling the Client-Server Model — Client-Server Architecture |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 399
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:24:56-05:00'
sources: []
---

**Situation & Task**  
In my last role I was tasked with redesigning a legacy client‑server app that served ~200k concurrent users during peak e‑commerce events. The single‑instance backend crashed every holiday sale, and our SLA slipped to 99.5 %.  

**Action**  
I owned the migration to a *stateless microservice* architecture on AWS.  
1. **Decouple** the monolith into **AWS Lambda** functions behind an **Amazon API Gateway** – this gives automatic scaling (cold start <200 ms) and removes server‑side bottlenecks.  
2. Store session state in **Amazon DynamoDB** with TTL, enabling horizontal scaling without sticky sessions.  
3. Use **Amazon SQS** for asynchronous tasks (image processing, recommendation jobs), decoupling compute from request latency.  
4. Deploy all services via **AWS CloudFormation + Terraform**, ensuring repeatable, versioned infrastructure.  
5. Implement **CloudWatch alarms** and a **step‑function orchestrator** to auto‑scale based on queue depth and CPU utilization.

**Result**  
- SLA improved to 99.999 % during Black Friday traffic (>1M requests).  
- Peak latency dropped from 750 ms to <80 ms (90th percentile).  
- Cost fell by 35 % YoY because of the server‑less pay‑per‑invoke model.

**Reflection**  
I *dove deep* into Lambda’s cold‑start profile, discovered a memory‑threshold issue, and iterated until performance met targets. I also built an automated rollback pipeline to learn from failures quickly.  

> **Leadership Principles:** *Ownership*, *Dive Deep*, *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
