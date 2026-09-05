---
qid: ing_494f42edd9__star__local
question: 'Explain: Context — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 337
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:55:11-05:00'
sources: []
---

**Situation** – At my last company we launched a mobile banking app that needed real‑time data from multiple legacy services (payments, fraud checks, user profiles). The front‑end team complained that the existing microservices returned raw JSON with dozens of fields they never used, causing slow loads and bloated payloads.  

**Task** – I was asked to design a lightweight API layer that would expose only the data required by each UI, reduce round trips, and keep security intact while not breaking any downstream services.

**Action** – I introduced an API Gateway + Backends‑for‑Frontends (BFF) pattern. The gateway (Kong with Lua plugins) handled authentication, rate limiting, and routing to a Node.js BFF per mobile platform. Each BFF composed data from the three legacy services using async/await, applied caching via Redis for idempotent calls, and performed field filtering before returning a 150‑byte payload instead of the original 1 KB. I also set up automated contract tests with Pact to ensure UI teams saw consistent schemas.

**Result** – The mobile app’s first‑screen load time dropped from 3.2 s to 1.4 s, and API traffic fell by 60%. User satisfaction scores rose by 8 points in the subsequent survey. I learned that a well‑designed BFF can dramatically improve performance without touching the core services, and that automated contract tests are essential for maintaining trust between front‑end and back‑end teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
