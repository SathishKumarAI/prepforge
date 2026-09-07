---
qid: ing_c0a606bf52__aws__local
question: 'Explain: Conclusion — Designing an Authorization Model for an Enterprise
  | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 479
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:39:27-05:00'
sources: []
---

**Situation (S)**  
I led a cross‑function team that had to replace an ad‑hoc access matrix for a multi‑tenant SaaS platform used by 200+ enterprise customers. The legacy system caused *30 %* of support tickets related to permission errors and made it impossible to audit compliance.

**Task (T)**  
Design a reusable, policy‑driven authorization model that scales with tenant growth, meets PCI‑DSS/ISO 27001 requirements, and reduces manual admin effort by 80 %.

**Action (A)**  
- **Ownership & Customer Obsession:** I partnered with product, security, and Ops to surface real pain points.  
- **Dive Deep & Invent & Simplify:** Chose Cerbos as the policy engine because it supports JSON‑policy language and fine‑grained ABAC out of the box.  
- **AWS Stack:**  
  - *Cognito* for user identity;  
  - *Lambda@Edge* to inject tenant context into API Gateway requests;  
  - *DynamoDB* (global tables) to store policies per tenant, ensuring <5 ms latency;  
  - *CloudWatch* and *X-Ray* for observability.  
- Implemented a “policy‑as‑code” pipeline: GitHub Actions validate JSON against Cerbos schema → deploy via CloudFormation.  
- Added an audit log in S3 (Glacier) for compliance.

**Result (R)**  
- Reduced permission‑related tickets by **42 %** within 90 days.  
- Cut manual admin hours from 20 h/month to 4 h/month, a **80 %** cost saving on the support team.  
- Achieved 99.999 % availability in two regions with an estimated monthly spend of $1.2k vs. the legacy $3.5k.

---

*Bar‑raiser focus:* clear ownership of cross‑team effort, depth in policy design and AWS integration, measurable impact on support metrics, and iterative learning from pilot failures (e.g., initial latency spike resolved by sharding DynamoDB).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
