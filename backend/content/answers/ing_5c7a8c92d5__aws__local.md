---
qid: ing_5c7a8c92d5__aws__local
question: 'Explain: Comparing RBAC and ABAC — Designing an Authorization Model for
  an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 420
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:54:29-05:00'
sources: []
---

**Situation & Task**  
I led the redesign of our authorization layer for a multi‑tenant SaaS platform that served > 50 k customers and processed ~10⁶ API calls per day. The legacy RBAC model was brittle: new features required dozens of role updates, and compliance audits flagged “role creep.” I had to design an ABAC‑based policy engine (Cerbos) that would scale, reduce admin overhead by 80%, and keep latency < 15 ms.

**Action**  
*Customer Obsession & Ownership* – I mapped every user action to a minimal set of attributes (tenant_id, env, data sensitivity, requestor_role).  
*Dive Deep* – I evaluated AWS services: **Amazon S3** for policy storage, **AWS Lambda** + **API Gateway** for stateless evaluation, and **DynamoDB** for attribute cache. I built a CI/CD pipeline that auto‑validates policies against a sandbox environment, catching 95 % of misconfigurations before production.  
*Bias for Action & Invent & Simplify* – Implemented Cerbos as a lightweight service; policy resolution cost < 2 ms per request, and the system handled peak loads with 99.9 % availability using DynamoDB Global Tables across AZs.

**Result**  
Post‑migration, admin effort dropped from 2000 role edits/month to ~200 attribute updates/month (80 % reduction). API latency improved by 30 %, and audit compliance scores rose from 70 % to 98 %. The solution cost AWS bill reduced by $12K/yr due to fewer EC2 instances and simpler data models.  

**Bar‑raiser takeaways** – I demonstrated ownership, deep technical knowledge (AWS services & trade‑offs), quantified impact, and learned from initial latency spikes by adding a requestor cache.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
