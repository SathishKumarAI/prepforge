---
qid: ing_e8c6e9c2e9__star__local
question: 'Explain: Authorization — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 324
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:13:36-05:00'
sources: []
---

**Situation:** In my last role I led the redesign of an internal recommendation engine that exposed model predictions through a REST API. The service was being used by multiple business units, each with different data access policies, and we noticed several unauthorized requests slipping through our basic token check.

**Task:** My goal was to build a fine‑grained authorization layer that could enforce per‑user, per‑model, and per‑feature permissions while keeping latency below 50 ms for production traffic.

**Action:** I introduced an attribute‑based access control (ABAC) system backed by Redis‑cached policy sets. Every API call first hit an auth microservice that validated a JWT, extracted user claims, and then queried Redis for the relevant policy rules. If a rule matched, we attached a “role” header to the request; otherwise we returned 403. On the model side, I wrapped the inference pipeline with a lightweight middleware that checked the role against a per‑model capability map stored in PostgreSQL. This split allowed us to update policies without redeploying the ML service.

**Result:** Unauthorized requests dropped from ~12 % of traffic to <0.1 %. Latency increased by only 8 ms on average, staying within SLA. The project also reduced security incidents and gave the product team a clear audit trail for compliance. I learned that coupling ABAC with in‑memory caching can deliver robust authorization without hurting ML inference performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
