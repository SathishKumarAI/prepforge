---
qid: ing_a37e8049b0__aws__local
question: 'Explain: Hierarchical RBAC — Designing an Authorization Model for an Enterprise
  | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 457
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:36:52-05:00'
sources: []
---

**Situation & Task (S)**  
In a mid‑size SaaS platform with 12 k users, we needed to replace an ad‑hoc “role string” approach that caused frequent security gaps and slow feature rollouts. The goal was to build a **hierarchical RBAC** system that could scale to millions of requests per day while keeping cost under $5K/month.

**Action (A)**  
I architected a policy‑driven model using **Cerbos** as the policy engine, coupled with **Amazon Cognito** for identity federation and **AWS Lambda + API Gateway** for authorization checks. Policies were expressed in Cerbos’ JSON DSL, allowing us to model a role hierarchy (e.g., *Admin > Manager > User*) without code changes.

Key design decisions:  
- **Cache tier:** `DynamoDB` with TTL for policy lookups → 99.9 % hit rate and <1 ms latency.  
- **Scalability:** Lambda provisioned concurrency + autoscaling; API Gateway throttling to protect downstream services.  
- **Cost control:** Reserved DynamoDB capacity, Lambda pay‑as‑you‑go, and Cognito free tier for up to 50K MAU.  

**Result (R)**  
After deployment:  
- Authorization latency dropped from 350 ms to <30 ms, meeting SLA.  
- Security incidents fell by **92 %** within three months.  
- Rollout time for new roles decreased from weeks to hours, enabling faster feature releases.

**Learning & Ownership**  
I owned the migration plan, ran a phased pilot with 1 k users, and iterated based on A/B test metrics. The failure point was an initial over‑provisioned Lambda concurrency that inflated costs; we adjusted scaling policies after analyzing CloudWatch traces, demonstrating *Bias for Action* and *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
