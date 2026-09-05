---
qid: ing_42ad90625e__star__local
question: 'Explain: What is an authorization model — Designing an Authorization Model
  for an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 326
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:42:05-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were launching a new API platform that would allow partners to access customer data for fraud‑analysis services. The existing RBAC system was too rigid: every partner got a single role and could’t request finer permissions, leading to over‑privileged access and regulatory concerns.

**Task** – I had to design an authorization model that supported fine‑grained, attribute‑based controls (ABAC), integrated with our OAuth2/OIDC flow, while keeping the implementation maintainable for developers.

**Action** – I started by mapping out all data assets and potential partner use cases, then defined a policy language based on JSON‑Policy (Cerbos). Using Cerbos’ Policy Decision Point (PDP) as a microservice, I wired it into our API gateway so each request passed through the PDP with subject, resource, action, and context attributes. I introduced role hierarchies for common partner tiers but kept custom rules per project. For auditability, every decision was logged to Elasticsearch with latency <5 ms.

**Result** – The new model cut over‑privileged incidents by 78% in the first quarter, reduced compliance review time from days to hours, and let developers add a new partner type in under an hour. I learned that embedding policy as code and decoupling it from business logic gives both security and agility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
