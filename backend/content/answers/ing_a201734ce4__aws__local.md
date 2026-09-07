---
qid: ing_a201734ce4__aws__local
question: 'Explain: Fine-grained authorization — The five laws of cloud-native authorization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 405
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:31:22-05:00'
sources: []
---

**Fine‑grained Authorization – “The Five Laws of Cloud‑Native Authorization”**

*Leadership Principles:* **Ownership**, **Dive Deep**  
*Situation*: I led a migration of our on‑prem policy engine to a serverless, multi‑tenant SaaS platform for a global retail client. The old system could not scale beyond 5 k requests/sec and had a 15 % error rate under peak load.

*Task*: Design an authorization service that satisfies five core laws:  
1️⃣ *Identity first* – authenticate via Cognito/Okta.  
2️⃣ *Least privilege* – policy evaluation at the request level.  
3️⃣ *Declarative policies* – JSON‑LD stored in DynamoDB with TTL for freshness.  
4️⃣ *Audit & observability* – CloudWatch logs + Kinesis for real‑time alerts.  
5️⃣ *Zero trust* – enforce encryption in transit (TLS) and at rest (KMS).

*Action*: Built a Lambda‑based microservice behind an API Gateway, using AWS IAM roles per tenant. Policies are cached in ElastiCache Redis; evaluation latency < 2 ms. Employed Step Functions to orchestrate multi‑resource checks for complex workflows.

*Result*: Throughput rose to **50 k req/s** with <0.5 % error, cost dropped 35 % versus the legacy VM cluster, and compliance score improved from 82 % to 99 %.  

**Bar‑raiser cues:** Ownership—owning end‑to‑end SLA; Dive Deep—explain cache invalidation strategy; Quantified impact—metrics above; Learning—from initial 15 % error to <0.5 % by iterating policy engine design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
