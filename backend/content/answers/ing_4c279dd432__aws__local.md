---
qid: ing_4c279dd432__aws__local
question: 'Explain: Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 443
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:17:14-05:00'
sources: []
---

**Situation / Task**  
I led a redesign of an AI‑inference platform that served 3 M daily predictions for a global retail client. The existing monolith had 99.2 % uptime and was cost‑intensive ($1.2 M/month). I needed to increase availability to >99.95 %, cut costs by 35 %, and keep latency <200 ms.

**Action**  
* **Ownership & Bias for Action:** I broke the system into stateless inference workers, a request router, and a persistent feature store.  
* **Dive Deep & Invent & Simplify:** Deployed *Amazon ECS Fargate* with *Application Load Balancer* (ALB) to auto‑scale workers per CPU/Memory thresholds. Feature data was cached in *ElastiCache for Redis*, backed by *DynamoDB* for durability.  
* **AWS services chosen**: ALB + ECS Fargate, ElastiCache, DynamoDB, CloudWatch Alarms, and *Amazon SageMaker Endpoint* for heavy models.  
* **Scalability & Availability:** 3 AZs with cross‑region failover; ALB health checks kept unhealthy tasks out of rotation. Auto‑scaling policies were fine‑tuned to avoid cold starts (max 10 % latency increase).  
* **Cost optimization:** Spot instances for non‑critical inference, reserved capacity for baseline traffic; overall cost dropped by 38 %.

**Result**  
Availability rose to **99.97 %**, latency averaged 140 ms, and monthly spend fell from $1.2 M to $0.74 M— a **36 %** savings. The team learned that coupling stateless compute with managed cache yields both resilience and cost control.  

*Leadership Principles highlighted:* **Customer Obsession (better uptime & speed)**, **Ownership**, **Dive Deep**, **Bias for Action**, **Invent & Simplify**, **Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
