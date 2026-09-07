---
qid: ing_42ad90625e__aws__local
question: 'Explain: What is an authorization model — Designing an Authorization Model
  for an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 471
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:56:43-05:00'
sources: []
---

**Situation & Task**  
At my previous company we migrated a legacy on‑prem SaaS product to a multi‑tenant cloud architecture on AWS. The existing “role‑based” access control was brittle—every new feature required manual edits in dozens of configuration files, and developers couldn’t guarantee that least‑privilege policies were enforced across services. I was tasked with designing an enterprise‑wide authorization model that would be auditable, scalable, and developer‑friendly.

**Action**  
I chose a **policy‑as‑code** approach using the open‑source **Cerbos** engine (or AWS Cognito + IAM Policies as an alternative). The key design decisions were:  

| Requirement | Solution | AWS Services |
|-------------|----------|--------------|
| Fine‑grained, context‑aware access | Cerbos policy files in S3, loaded via Lambda at runtime | S3, Lambda |
| Single source of truth & audit | CloudTrail logs + Athena queries on policy evaluation events | CloudTrail, Athena |
| Low latency for API gateway calls | Policy cache in ElastiCache (Redis) with TTL 5 s | ElastiCache |
| Cost‑effective scaling | Serverless Lambdas auto‑scaling; only pay per request | Lambda |

I wrote unit tests that exercised all policy paths and integrated the engine into our CI pipeline. The resulting system reduced manual code changes by **90%**, cut security incidents related to over‑privileged access from 12/month to <1/month, and decreased IAM‑policy churn by 75%.

**Result**  
- **Customer Obsession**: End users now see consistent permissions without downtime.  
- **Ownership & Dive Deep**: I own the policy repo, monitor CloudTrail metrics, and iteratively refine policies based on real usage data.  

The bar‑raiser will note my ownership of the full stack (policy definition → deployment), deep dive into performance trade‑offs (cache vs. fresh evaluation), quantified impact (incident reduction, cost savings), and learning loop from early mis‑scoping that led to a temporary policy outage—resolved by adding an automated rollback in Lambda.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
