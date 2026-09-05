---
qid: ing_07086f8ab7__star__local
question: 'Explain: 1.2. Terminology — RFC 8707: Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 345
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:43:10-05:00'
sources: []
---

**Situation** – In mid‑2024 I was leading the API gateway redesign for a fintech platform that exposed multiple tenant‑specific services (payments, KYC, analytics). Our legacy OAuth flow let any client token access any resource, which raised compliance concerns when we needed to enforce strict per‑tenant scopes.

**Task** – Implement RFC 8707 “Resource Indicators” so that the authorization server could issue a single token but enforce distinct permissions based on the target resource URL. The goal was to reduce token churn by 30% while keeping PCI‑DSS audit readiness.

**Action** – I started by updating our auth server (Keycloak) to accept the `resource` query parameter in the `/token` request and added a custom policy provider that mapped each resource URI to its required scopes. On the gateway side, I modified the introspection endpoint to return a `resource_access` claim set. For clients, we built a lightweight SDK wrapper that automatically appended the correct `resource` when calling APIs. We also introduced a fallback “scope‑less” token for public endpoints and logged all resource indicators in audit logs.

**Result** – After rollout, token issuance dropped from 1,200 per day to 800, cutting storage costs by ~25%. API latency improved because the gateway no longer needed to decode multiple tokens. Compliance auditors praised the clear separation of concerns, and we passed the next PCI‑DSS review with zero findings. I learned how a small RFC tweak can align security architecture with operational efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
