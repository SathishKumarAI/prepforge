---
qid: ing_dc83956a1b__star__local
question: 'Explain: Self-contained JWT Pattern — Selfcontainedaccesstoken'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 332
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:49:07-05:00'
sources: []
---

**Situation** – While redesigning the authentication flow for a micro‑service platform that served over 10,000 concurrent users, our legacy OAuth2 system was bottlenecked by frequent token introspection calls to the auth server, causing latency spikes during peak traffic.

**Task** – I needed to replace the opaque access tokens with self‑contained JWTs so each service could validate identity locally, reduce round‑trips, and maintain compliance with GDPR data minimization rules.

**Action** – I implemented a stateless JWT pattern using RSA256 signatures. Tokens carried user ID, roles, tenant ID, and an “exp” claim set to 30 minutes. I added a short “jti” claim for revocation lists stored in Redis. Each micro‑service was configured with the public key cache and a middleware that verified signature, expiration, and audience before processing requests. I also introduced token rotation: clients receive a refresh JWT (valid 24 h) to request new access tokens without re‑authenticating.

**Result** – Token validation time dropped from ~5 ms (with introspection) to <0.3 ms per request, cutting API latency by 40 %. We eliminated the auth server’s load during peak hours and improved auditability—each JWT included a traceable “iss” claim. I learned that proper key management and short lifetimes are critical for balancing security with performance in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
