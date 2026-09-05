---
qid: ing_a37e8049b0__star__local
question: 'Explain: Hierarchical RBAC — Designing an Authorization Model for an Enterprise
  | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 359
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:00:06-05:00'
sources: []
---

**Situation**  
At my previous company we had a SaaS platform serving over 30 enterprise customers. Each customer could have up to 1,000 users, and every user needed fine‑grained access to dozens of services (billing, analytics, data export). The existing flat RBAC model was blowing up—roles were duplicated across tenants and the admin console became unwieldy.

**Task**  
I had to design a scalable authorization system that let us enforce tenant‑specific policies while reusing common roles, reduce API latency on auth checks, and keep the policy language simple for product managers.

**Action**  
I introduced a Hierarchical RBAC model with Cerbos as the policy engine. First, I mapped out an inheritance tree: *Global Admin* → *Tenant Admin* → *Team Lead* → *Member*. Each node inherited permissions from its parent but could also override or add new ones. Using Cerbos’s JSON‑policy format, I encoded tenant‑level scopes and role overrides, then integrated it with our microservices via the Cerbos SDK. To keep latency low, I cached policy evaluations in Redis for 30 seconds per request. I also built a lightweight UI that let ops generate policies from templates, reducing manual errors.

**Result**  
The new model cut the number of distinct role definitions by 70%, lowered auth‑check latency from 120 ms to 25 ms, and eliminated policy drift incidents. We deployed it across all tenants in 6 weeks with zero downtime. I learned that combining hierarchical inheritance with a purpose‑built engine like Cerbos lets you balance flexibility, performance, and maintainability in enterprise authorization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
