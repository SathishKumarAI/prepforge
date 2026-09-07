---
qid: ing_b95882ea17__aws__local
question: 'Explain: Attribute-based access control — Designing an Authorization Model
  for an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 505
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:23:07-05:00'
sources: []
---

**Situation & Task**  
At my previous firm we had to replace a legacy role‑based system with a fine‑grained, attribute‑based access control (ABAC) model for our data lake. The goal was to give the analytics team instant, policy‑driven read/write rights while keeping regulatory compliance intact.  

**Action & Design**  
I led a cross‑functional squad that adopted Cerbos as the ABAC engine and built an AWS‑native stack:

| Component | Service | Reasoning |
|-----------|---------|-----------|
| Policy store | **Amazon DynamoDB** (global table) | Low‑latency, multi‑region reads for policy evaluation. |
| Policy engine | **Cerbos (open‑source)** | Declarative JSON policies; integrates via gRPC into our Lambda authorizers. |
| API gateway | **Amazon API Gateway + Lambda** | Serverless authorizer that forwards request context (user ARN, job ID, resource tags) to Cerbos. |
| Auditing | **AWS CloudTrail + Athena** | Immutable logs of every policy decision for compliance reviews. |

The policies were written in Cerbos’s DSL, e.g.:

```json
{
  "resource": "s3://analytics-data/*",
  "action": ["read","write"],
  "condition": {
    "user.department == 'Finance'",
    "time < 18:00"
  }
}
```

I introduced a **policy‑versioning** workflow in CI/CD, ensuring rollback on failures. For scalability we leveraged DynamoDB’s auto‑scaling and API Gateway’s throttling; for cost, the Lambda authorizer runs only when an API call is made (≈$0.20 per million calls).  

**Result**  
After rollout:  
- **Read latency** dropped from 150 ms to <10 ms due to in‑memory policy cache.  
- **Policy churn** decreased by 70% because of automated versioning and tests.  
- Compliance audit time fell from 3 days to 2 hours (manual vs. Athena query).  

**Reflection**  
I owned the end‑to‑end transition, diving deep into Cerbos’s internals to debug a subtle “policy not found” bug that would have cost us $5k in SLA penalties. The experience taught me to balance rapid delivery with rigorous validation—exactly what AWS expects from its leaders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
