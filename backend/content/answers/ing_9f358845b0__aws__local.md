---
qid: ing_9f358845b0__aws__local
question: 'Explain: Step 3: Authentication & Authorization — What is an API Gateway?
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 447
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:24:41-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** While architecting a multi‑tenant ML inference service for a fintech client, we needed to expose model endpoints securely and cost‑effectively.  
> **Task:** Design the API layer that authenticates users, authorizes tenant access, and throttles traffic without becoming a bottleneck.  
> **Action:** I chose **Amazon API Gateway** as the façade. It natively supports OAuth2 (via Cognito), JSON Web Tokens, and custom Lambda‑authorizers for fine‑grained RBAC. By enabling **usage plans**, we enforced per‑tenant rate limits (e.g., 5 k requests/min) and integrated with CloudWatch for real‑time metrics. For low‑latency inference, I routed traffic from API Gateway to an **ECS Fargate** cluster behind a **ALB**, using path‑based routing (`/model/{name}`).  
> *Scalability:* API Gateway auto‑scales to millions of calls per second; the ALB scales via ECS task autoscaling based on CPU utilization.  
> *Availability:* The service runs across 3 AZs with health checks, ensuring < 0.01 % outage probability (per SLA).  
> *Cost:* With request‑based pricing (~$3.50/1M calls) and minimal backend overhead, we reduced ops costs by **30 %** compared to a self‑hosted Nginx gateway.  
> **Result:** Within 2 weeks of launch, the system handled 12 M requests/day with 99.99 % uptime, and tenant churn dropped from 8 % to < 1 %.  

**Bar‑raiser focus:** Ownership (I took full responsibility for security & cost), Dive Deep (understood API Gateway’s throttling internals), Quantified Impact (30 % cost savings, 12 M RPS), and Learning (iterated on authorizer logic after a mis‑configured role caused a 5 min outage).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
