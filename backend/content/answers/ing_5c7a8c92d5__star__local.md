---
qid: ing_5c7a8c92d5__star__local
question: 'Explain: Comparing RBAC and ABAC — Designing an Authorization Model for
  an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 368
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:32:32-05:00'
sources: []
---

**Situation** – At a mid‑size fintech we had a monolithic API that served both internal tools and external partners. The legacy system used role‑based access control (RBAC) but the new regulatory compliance audit demanded fine‑grained permissions on customer data, especially for GDPR “right to be forgotten.” Our metrics were a 30 % increase in unauthorized data reads after an integration with a third‑party analytics platform.

**Task** – Build an authorization model that could enforce both role constraints and attribute conditions (user’s department, data sensitivity level, request context) while remaining auditable and performant for high‑volume requests (~10k per second).

**Action** – I led a cross‑functional team to evaluate Cerbos as the policy engine. We migrated from static RBAC tables in PostgreSQL to Cerbos policies written in JSON, defining rules like:
```
allow if user.role == "analyst" and resource.sensitivity <= 2
and request.time between 9:00 and 17:00
```
We added attribute enrichment via a lightweight microservice that fetched user metadata from LDAP and enriched the JWT. We also instrumented policy evaluation metrics, ensuring latency stayed below 5 ms per call by caching compiled policies.

**Result** – The new ABAC model cut unauthorized reads by 92 % within two weeks of rollout, improved compliance scores to 99.7 %, and reduced administrative overhead: policy changes now take minutes instead of hours. I learned that a hybrid approach—starting with RBAC for broad strokes but layering attribute checks where needed—delivers both agility and security in enterprise systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
