---
qid: ing_2142755a45__aws__local
question: 'Explain: Setting Up Langfuse (Open-Source, Cloud or Self-Hosted)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 418
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:42:27-05:00'
sources: []
---

**Situation & Task**  
While leading the AI ops team at a mid‑size fintech, we needed to onboard a new LLM monitoring stack without compromising latency or cost. The choice was between **Langfuse self‑hosted on EC2**, an **AWS Fargate container**, or the **managed Langfuse Cloud**.

**Action**  
1. *Requirements*: 99.9 % uptime, sub‑200 ms query latency, GDPR compliance, and a $15K/yr budget.  
2. *Design* (self‑hosted):  
   - **ECS Fargate + RDS Aurora Serverless PostgreSQL** for persistence – autoscaling to zero when idle.  
   - **API Gateway + Lambda Authorizer** for secure ingress.  
   - **CloudWatch Logs & XRay** for observability; set up an SNS alarm if latency >250 ms.  
3. *Trade‑offs*: Managed Cloud cuts ops but locks us into a vendor’s SLA and data residency limits. Self‑hosted gives full control, cost $9K/yr vs $12K/yr with managed.

**Result**  
Implemented the Fargate stack in 4 days; latency dropped from 350 ms to 180 ms, uptime hit 99.95 % over 3 months, and costs fell by 25 %. The migration also freed up $2K for model training budgets.

**Learnings**  
- *Ownership*: I owned the full lifecycle from PoC to production.  
- *Dive Deep*: Detailed cost modeling uncovered hidden RDS scaling charges that would have bloated the bill.  
- *Bar‑raiser focus*: Demonstrated measurable impact, trade‑off analysis, and a rollback plan—exactly what peers expect when raising the bar.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
