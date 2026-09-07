---
qid: ing_5b6d370998__aws__local
question: 'Explain: ABAC — Designing an Authorization Model for an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 479
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:51:57-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked to replace a brittle Role‑Based Access Control (RBAC) system with an Attribute‑Based Access Control (ABAC) model for a global SaaS platform that served > 200k users across 15 countries. The goal was to reduce manual policy updates, enable fine‑grained data access, and meet GDPR compliance.

**Action – Design & Implementation**  
I drove the architecture around **AWS Cognito** for user identity, **DynamoDB** for a central *Policy Store*, and **Lambda@Edge** to evaluate policies at request time. Policies were expressed in Cerbos’ JSON format, leveraging **S3** for versioning and **KMS** for encryption. The Lambda authorizer queried Cognito’s attribute set (e.g., department, clearance level) and the policy store, returning a JWT with scoped permissions. I introduced **step‑function orchestrations** to batch policy updates, ensuring idempotent writes and rollback on failure.

Key decisions:  
- *Scalability*: DynamoDB’s auto‑scaling handled 1M policy reads/sec during peak events.  
- *Availability*: Multi‑AZ deployment with read replicas; Lambda concurrency reserved for critical API paths.  
- *Cost*: Estimated $12k/month vs the old $30k/year RBAC system, saving 60 % on licensing and operational overhead.

**Result**  
Within three months post‑deployment, we cut policy change time from **2 weeks to 5 minutes**, reduced security incidents by **85 %**, and achieved a 99.998 % request success rate during the global rollout—meeting our SLA.  

**Reflection & Learning**  
I learned that *ownership* means owning the full data‑flow, not just one component; *dive deep* into policy evaluation latency uncovered a hidden bottleneck in Cognito attribute retrieval, which I resolved by caching attributes in DynamoDB. This iteration sharpened my ability to quantify impact and iterate quickly—principles that align with Amazon’s “Bias for Action” and “Deliver Results.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
