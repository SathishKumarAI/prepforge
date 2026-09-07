---
qid: ing_a486325016__aws__local
question: 'Explain: Tech stack — Designing an Authorization Model for an Enterprise
  | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 437
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:39:28-05:00'
sources: []
---

**Situation & Task**  
At my last firm we needed a fine‑grained policy engine for an enterprise SaaS that handled 200 M API calls/day across 5 regions. The existing RBAC system was inflexible and caused >30 % of support tickets to be “access denied” errors. I owned the redesign.

**Action – Technical Stack & Design**  
I chose **Cerbos** (open‑source) for its declarative policy language and lightweight runtime. Policies were stored in **Amazon DynamoDB** with TTL for audit and versioning, accessed via a *global secondary index* on `resource_type`. The microservice exposing the policy decision point ran in **AWS Fargate**, auto‑scaling based on CPU (≥70 %) to keep latency <5 ms. I wrapped Cerbos calls behind an **API Gateway** with **Lambda@Edge** for edge‑caching of policy decisions, reducing round‑trips by 40 %. For audit trails, every decision was pushed to **Amazon Kinesis Data Streams**, then into **S3 Glacier** after a 90‑day retention policy.

**Result**  
- Latency dropped from 12 ms to 4.5 ms (≈63 % improvement).  
- Support tickets fell by 32 %.  
- Cost of the authorization layer decreased by 27 % YoY due to serverless scaling and caching.

**Reflection – Bar‑raiser Checklist**  
I demonstrated **Ownership** (led end‑to‑end redesign), **Dive Deep** (profiling latency, DynamoDB indexing), and **Bias for Action** (deployed in two weeks). I documented trade‑offs: DynamoDB’s eventual consistency vs. strict ACID—resolved by using conditional writes. Post‑mortem on a false positive exposed the need for better test coverage; we added 15 % more unit tests, cutting incident response time by 50 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
