---
qid: ing_8286330829__faang__local
question: 'Explain: Glean API Tokens — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 530
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:48:29-05:00'
sources: []
---

**Clarify**

You’re asking how Glean’s *API tokens* work with the **Glean Machine‑Learning‑Platform (MCP) server**—i.e., what a token represents, why it’s needed, and how the MCP uses it to serve models securely.

**Approach**

1. Identify the security flow: client → token issuance → authentication → request → inference.  
2. Explain token structure (JWT/opaque), scopes, expiration.  
3. Show how MCP validates tokens per‑request before routing to a model container.  
4. Mention role of token revocation and audit.

**Depth**

- **Token Issuance**: A Glean Auth Service issues a signed JWT containing `sub` (client ID), `aud` (MCP endpoint), `exp`, and scopes like `model.read:modelA`.  
- **Transport**: Clients embed the token in an HTTP `Authorization: Bearer <token>` header when calling `/v1/models/<id>/predict`.  
- **Validation**: The MCP’s API gateway verifies signature against a public key, checks `exp`/`nbf`, and enforces scopes. Invalid or expired tokens result in 401/403.  
- **Model Isolation**: Once authenticated, the request is forwarded to the appropriate container (Docker/Kubernetes pod) via an internal gRPC channel; the token is stripped to prevent leakage.  
- **Revocation & Rotation**: Glean maintains a revocation list and short‑lived tokens (e.g., 15 min). Clients refresh via `/auth/refresh`.  

Complexity: O(1) per request for signature check; network hop to container adds ~10–20 ms latency. Trade‑off is stronger security vs. a minimal auth layer.

**Edge Cases**

- Clock skew causing `exp` misread → test with NTP drift.  
- Token replay across regions → mitigate by including a nonce or IP binding.  
- Overly broad scopes leading to privilege escalation → enforce least‑privilege policies.

**Optimize & Communicate**

- Use JWT introspection only when needed; otherwise, stateless validation keeps latency low.  
- Cache public keys and revocation lists to avoid per‑request DB lookups.  
- Explain that the MCP’s design mirrors OAuth2 best practices, ensuring that each inference request is authenticated, auditable, and scoped—critical for compliant ML deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
