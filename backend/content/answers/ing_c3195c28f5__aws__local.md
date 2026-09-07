---
qid: ing_c3195c28f5__aws__local
question: 'Explain: IV. Backing Services — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 521
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:44:12-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation & Task** – While leading a team that migrated an on‑prem ML inference pipeline to a cloud‑native architecture, we discovered that the legacy “backing services” (DBs, caches, message queues) were tightly coupled and prevented us from scaling model serving. The goal was to refactor the system into a *12‑factor* compliant, serverless solution that could handle 200k predictions per minute with < 1 % latency variance.

> **Action** –  
> 1. **Customer Obsession & Ownership**: I mapped every downstream consumer’s SLA and built a “service contract” for each backing service (e.g., read‑through cache, batch job queue).  
> 2. **Dive Deep**: We instrumented the existing stack with CloudWatch metrics to surface bottlenecks; discovered that the relational DB was hitting 90 % CPU during peak hours.  
> 3. **Design**: Replaced monolithic DBs with *Amazon DynamoDB* (eventual consistency, auto‑scaling) and *ElastiCache for Redis* (0.2 ms read latency). The message queue became *Amazon SQS*, decoupling batch jobs from inference workers.  
> 4. **AWS Services & Trade‑offs**: Leveraged *Lambda* + *API Gateway* for stateless inference, *Step Functions* to orchestrate post‑processing, and *AppConfig* for dynamic config changes—achieving > 99.999% availability with a 30 % cost reduction vs the previous EC2‑based approach.  
> 5. **Bias for Action**: Deployed in a blue/green pattern; automated rollback on any metric drift above threshold.

> **Result** – The refactored pipeline handled 350k predictions/min with < 0.8 ms average latency, cutting operational costs by 28 % and improving uptime from 99.7 % to 99.999%. Post‑deployment, we reduced incident response time by 60 % thanks to the new observability stack.

> **Bar‑raiser Takeaway** – Demonstrated *ownership* (full end‑to‑end redesign), *depth* (metrics‑driven decisions), and *quantified impact* (cost & performance gains). Learned that decoupling backing services early allows rapid scaling without overhauling core logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
