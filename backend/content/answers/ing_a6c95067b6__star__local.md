---
qid: ing_a6c95067b6__star__local
question: 'Explain: Designing an authorization model — Designing an Authorization
  Model for an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 354
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:06:37-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a new SaaS platform that needed fine‑grained access control across dozens of internal and external teams. The existing role‑based system was brittle, causing frequent policy misconfigurations and slow onboarding for new clients.

**Task:**  
I had to design an authorization model that could scale to 5 000 users, support dynamic tenant policies, and integrate with our CI/CD pipeline—all while meeting compliance audits within two months.

**Action:**  
I chose a capability‑based approach using Cerbos’ policy engine. First, I mapped out the domain entities (projects, datasets, APIs) and defined attribute hierarchies (user role, team, project ownership). Then I wrote JSON policies in Cerbos’ DSL that expressed “who can read/write” per resource type, leveraging condition expressions for time‑based access. To ensure performance, I cached policy evaluations at the application layer with a 5‑second TTL and used vector clocks to detect stale policy changes. I also built a lightweight UI for admins to edit policies in real time, which automatically triggered re‑validation tests against our test suite.

**Result:**  
The new model reduced permission errors by 92 % and cut onboarding time from 3 days to under 6 hours. The policy engine handled over 20 000 requests per second with sub‑10 ms latency. I learned that blending capability‑based control with a declarative policy language dramatically improves both security posture and developer velocity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
