---
qid: ing_db305933ff__fp__local
question: 'Explain: Abstract — RFC 8707: Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 315
total_tokens: 492
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:45:17-05:00'
sources: []
---

**Abstract – RFC 8707 (Resource Indicators for OAuth 2.0)**  
OAuth 2.0 was designed to let a client obtain an access token that the resource server can validate without inspecting the token itself. In practice, a single authorization server often issues tokens for many APIs (resource servers). The problem is *token ambiguity*: a token could be accepted by any of those APIs unless the token carries explicit information about its intended audience.  

RFC 8707 solves this by introducing **Resource Indicators**—a simple HTTP header (`X-Forwarded-Host`‑style `audience`) that the client includes in each request to specify *which* resource server it targets. The authorization server, upon receiving a token request, records the indicated audience into the token’s `aud` claim. When a resource server receives an access token, it verifies that the token’s `aud` matches its own identifier (or one of its allowed values).  

This mechanism is grounded in *information‑theoretic security*: the audience claim acts as a lightweight cryptographic binding between token and target, reducing the need for complex introspection or shared secrets. A non‑obvious insight: because the indicator travels with the request, it also protects against token replay across APIs—an attacker who steals a token cannot simply redirect it to another API without the correct audience header.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
