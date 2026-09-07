---
qid: ing_6ec94028d0__faang__local
question: 'Explain: Minimal Data Permissions — How do we manage sensitive data in
  a system?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 510
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:01:16-05:00'
sources: []
---

**Minimal Data Permissions – Managing Sensitive Data**

| Step | What I’d say |
|------|--------------|
| **Clarify** | *Restate*: We need a strategy that limits who can see or modify sensitive data to the minimum required for business logic, while ensuring compliance and auditability. <br>*Assumptions*: Data classification is already in place; we have an identity‑and‑access‑management (IAM) system; encryption at rest/transport is supported. |
| **Approach** | 1️⃣ Classify data by sensitivity (public, internal, confidential). 2️⃣ Apply the principle of least privilege via role‑based access control (RBAC) or attribute‑based access control (ABAC). 3️⃣ Enforce fine‑grained field‑level masking and tokenization for PII. 4️⃣ Use a secure data lake with separate storage tiers and audit logs. 5️⃣ Automate policy enforcement through CI/CD pipelines. |
| **Depth** | *Implementation*: <br>• Create IAM roles (e.g., `ml_engineer`, `data_scientist`) each tied to specific datasets via policies.<br>• Use AWS Lake Formation / Azure Purview for cataloging and access control.<br>• Apply encryption‑in‑transit (TLS) and at‑rest (KMS‑managed keys).<br>• Leverage data masking in SQL views or using Spark UDFs to hide sensitive columns.<br>*Complexity*: Policy evaluation is O(1) per request; tokenization introduces negligible latency (<10 ms). |
| **Edge Cases** | • “Just‑in‑time” access for emergency analytics – need a short‑lived role with multi‑factor authentication.<br>• Data residency constraints: enforce region‑specific storage policies. <br>• Audit failures: implement automated alerts when unauthorized reads occur. |
| **Optimize & Communicate** | • Periodically review roles and de‑provision stale accounts (rotating credentials).<br>• Use a single source of truth for access logs to simplify compliance audits.<br>When explaining, I’d narrate “We start by classifying data, then map the least privilege policy, enforce encryption & masking, audit continuously, and finally automate reviews.” This showcases structured reasoning, technical depth, and a clear implementation roadmap. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
