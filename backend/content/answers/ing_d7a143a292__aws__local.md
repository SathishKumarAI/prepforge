---
qid: ing_d7a143a292__aws__local
question: 'Explain: When to use RBAC — Designing an Authorization Model for an Enterprise
  | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 461
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:26:55-05:00'
sources: []
---

**Situation & Task**  
At a $2 B SaaS firm I led the redesign of our tenant‑level access control after an audit revealed 17% of users had permissions beyond their role, risking data leaks. The goal: implement a fine‑grained RBAC model that scales to 1M users and 50+ microservices while keeping latency <5 ms.

**Action**  
I mapped all actions to **“Customer Obsession”** (protecting user data) and **“Ownership”** (owning the security stack). I chose Cerbos for policy‑as‑code because it natively supports RBAC, integrates with AWS IAM, and offers a REST API that fits our event‑driven architecture.  
*Design*:  
- Store roles and permissions in Amazon DynamoDB (partition key = tenantId, sort key = role).  
- Use **Amazon EventBridge** to propagate role changes; trigger a Lambda that updates the Cerbos cache.  
- Cache policy decisions in **Amazon ElastiCache‑Redis** (latency <1 ms).  
- Deploy Cerbos on **AWS Fargate** behind an Application Load Balancer for high availability.  

I built a CI/CD pipeline with Terraform, enforcing automated unit tests that cover 95% of policy rules. During load testing, the system handled 10K requests/sec with 99.9 th percentile latency under 4 ms.

**Result**  
Post‑migration, audit score improved from 82 % to **100 %**, and we reduced accidental privilege escalations by **90 %**. Monthly cost dropped 15 % due to efficient caching.  

**Bar‑raiser cues** – I demonstrated ownership (end‑to‑end rollout), deep dive (trade‑offs between DynamoDB vs RDS, cache consistency), quantified impact (audit score & incident reduction), and learned from a failed pilot that lacked cache invalidation, which we fixed before production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
