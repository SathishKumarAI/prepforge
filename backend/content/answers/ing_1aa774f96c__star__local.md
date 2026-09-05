---
qid: ing_1aa774f96c__star__local
question: 'Explain: Q127: The MCP stateless core replaced sessions with server-minted
  state handles, and an audit found 91.8% of internet-facing MCP servers run without
  OAuth. Design a secure multi-tenant MCP server on the stateless spec.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 276
output_tokens: 410
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:22:48-05:00'
sources: []
---

**Situation** – In a recent audit of our MCP infrastructure we discovered that 91.8 % of the internet‑facing servers were running without OAuth, exposing them to credential leakage and tenant bleed‑through. The new stateless core had already replaced session cookies with server‑minted state handles, but there was no unified security model for multi‑tenant access.

**Task** – I needed to design a secure, fully stateless MCP server that enforces tenant isolation, protects against replay attacks, and meets compliance audit requirements—all while keeping latency under 80 ms per request.

**Action** – I introduced signed JSON Web Tokens (JWTs) as the “state handle.” Each token contains `tenant_id`, `iat`, `exp` (15 min), and a unique nonce. The server signs tokens with an HMAC‑SHA256 key stored in AWS KMS, ensuring that only the MCP can issue or verify them. I added a tenant‑specific public‑private key pair for TLS client auth; each tenant’s requests present its client certificate, which the server validates against a distributed Redis cache of active certificates. To mitigate replay attacks, I implemented a short‑lived nonce store in DynamoDB with TTL 30 s and an LRU eviction policy. Finally, I integrated a per‑tenant audit log that writes immutable entries to S3 Glacier for forensic retention.

**Result** – After deployment, the new stateless MCP handled 10 k TPS with a 75 ms average latency, while audit logs showed zero tenant data bleed incidents over six months. The team also achieved ISO 27001 compliance in one month and learned that coupling token issuance tightly to tenant identity and short expirations is key to secure multi‑tenant stateless architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
