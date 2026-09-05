---
qid: ing_598bf66bd5__star__local
question: 'Explain: When to use ABAC — Designing an Authorization Model for an Enterprise
  | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 391
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:26:54-05:00'
sources: []
---

**Situation:**  
I was leading the security overhaul for a mid‑sized fintech platform that had grown from 20 to over 120 users in just two years. The legacy role‑based access control (RBAC) model couldn’t keep up with new product lines and regulatory requirements, causing frequent permission “false positives” and slow onboarding.

**Task:**  
Design an authorization system that could dynamically adapt to multiple user contexts—department, project, data sensitivity—while meeting PCI‑DSS compliance. I needed a solution that was auditable, scalable, and integrated cleanly with our microservice architecture.

**Action:**  
I chose Attribute‑Based Access Control (ABAC) using Cerbos as the policy engine. First, I mapped out all user attributes (role, tenure, team, region) and resource tags (data classification, account type). Then I authored JSON policies in Cerbos that expressed fine‑grained rules such as “a compliance officer can view any transaction over $10k only if it’s within their jurisdiction.” I integrated the Cerbos SDK into our Go services, so each request automatically fetched attributes from our LDAP and JWT claims before evaluating the policy. To handle performance, I implemented a caching layer for frequently accessed policies and set up CI/CD pipelines to validate policy changes against a test suite of simulated requests.

**Result:**  
The new ABAC model cut permission‑related support tickets by 45 % in the first quarter, reduced onboarding time from two weeks to three days, and gave us a single audit trail that passed PCI‑DSS review with zero findings. I learned that ABAC’s flexibility can replace rigid RBAC when coupled with a well‑structured attribute taxonomy and an expressive policy engine like Cerbos.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
