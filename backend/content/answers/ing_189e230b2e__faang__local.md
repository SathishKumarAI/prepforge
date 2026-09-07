---
qid: ing_189e230b2e__faang__local
question: 'Explain: Glean OAuth Authorization Server — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 517
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:41:56-05:00'
sources: []
---

**Clarify**  
The question asks for an explanation of *Glean’s OAuth Authorization Server* and how it ties into the *Glean Machine‑Learning (MCP) server*. I’ll assume:  

1. The audience knows standard OAuth flows (client‑credentials, auth‑code).  
2. “MCP” refers to Glean’s internal ML inference engine that consumes data from authenticated users.  

**Approach**  
1. Briefly describe the OAuth stack in Glean.  
2. Map each token type to its role in the MCP pipeline.  
3. Highlight security and scalability concerns.  

**Depth**  
- **Authorization Server (AS)**: Runs on a dedicated domain, exposes `/token`, `/authorize`. It validates client credentials against Glean’s registry, issues short‑lived access tokens (JWT) with scopes (`search.read`, `ml.infer`).  
- **Token flow**:  
  - *Client‑Credentials*: Apps that run server‑to‑server (e.g., internal analytics services) exchange a secret for an access token.  
  - *Auth‑Code PKCE*: End‑user apps redirect users to the AS; after consent, they receive an auth code, which is swapped for an access token plus a refresh token.  
- **MCP integration**: The ML inference service (MCP) validates incoming JWTs against the AS’s public keys (JWKS endpoint). It then pulls user‑specific data from Glean’s storage only if scopes allow. Refresh tokens are rotated via a secure `/refresh` endpoint, ensuring minimal exposure.  

**Edge Cases**  
- Token revocation: The AS must support a `/revoke` endpoint; MCP caches revoked JTI values to prevent stale access.  
- Scope exhaustion: If an app requests `ml.infer` without `search.read`, the AS denies it—tests should verify this gate.  
- Rate limits on `/token`: Ensure MCP can handle bursty inference traffic without hitting OAuth throttling.  

**Optimize & Communicate**  
- Use asymmetric signing (RS256) for tokens to avoid shared secrets across services.  
- Cache JWKS locally in MCP to reduce latency; refresh keys every 24 h or on `Cache-Control` header expiry.  
- Document the flow with sequence diagrams so interviewers see my holistic view and ability to explain complex security plumbing succinctly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
