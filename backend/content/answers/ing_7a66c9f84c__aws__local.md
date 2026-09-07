---
qid: ing_7a66c9f84c__aws__local
question: 'Explain: Link to Bank Account — Unified Payments Interface (UPI)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 406
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:02:09-05:00'
sources: []
---

**Situation & Task**  
At my last fintech role I led the “UPI‑Bank Link” feature that let users connect their bank accounts to our wallet app. The goal was to reduce onboarding friction by 30 % while meeting RBI’s security standards.

**Action (Design)**  
- **API Gateway + Lambda**: Exposed a stateless `/link` endpoint; Lambda validated the UPI ID, called the banking partner’s OAuth flow and stored tokens in **AWS Secrets Manager**.  
- **Step Functions** orchestrated the multi‑step consent process, retry logic, and error handling.  
- **DynamoDB (global secondary index on user_id)** persisted link status; read/write capacity auto‑scales to 10 k RCU/WCU for peak traffic.  
- **SNS + CloudWatch Events** sent real‑time notifications to the mobile app.  
- **IAM roles with least privilege** and **KMS‑encrypted** secrets ensured compliance.

**Result**  
Launch yielded a 35 % drop in user drop‑off during onboarding, a 25 % faster link time (0.8 s vs 1.2 s), and cost savings of $12k/month by eliminating on‑prem servers. The system handled 500 k concurrent users with <99.9 % availability.

**Reflection**  
I owned the end‑to‑end flow, dived deep into latency bottlenecks, and iterated after a failed test that exposed an IAM misconfiguration—fixing it prevented potential data leaks.  

*Leadership Principles*: **Customer Obsession** (streamlined user journey), **Ownership** (full lifecycle responsibility), **Dive Deep** (performance tuning & security audit).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
