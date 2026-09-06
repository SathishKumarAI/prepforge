---
qid: ing_e4b757d6a2__fp__local
question: 'Explain: Per-tenant scoping with audience binding (RFC 8707)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 328
total_tokens: 503
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:04:55-05:00'
sources: []
---

**Per‑tenant scoping with audience binding (RFC 8707)**

At its core, the OAuth2 token is a *claim bundle* that tells an API who may use it and for what purpose. In multi‑tenant clouds each tenant has its own namespace of resources; without explicit isolation, a token issued to one tenant could be replayed against another’s APIs.  
The RFC solves this by treating the *audience* (`aud`) claim not as a generic “who is allowed” flag but as a **namespace discriminator**: it must match the *exact* identifier of the tenant’s API endpoint that issued the token.  

Why does this work?  
1. **Information‑theoretic isolation** – The audience string carries entropy unique to each tenant; any mismatch forces the recipient to reject the token, guaranteeing that only the intended tenant can consume it.  
2. **Optimization of trust boundaries** – By embedding the tenant ID in the JWT header rather than in a separate lookup table, servers avoid costly database joins for every request, reducing latency linearly with the number of tenants.  

A non‑obvious insight: because audience binding is part of the token’s cryptographic signature, *audience misconfiguration* (e.g., using a wildcard) silently erodes tenant isolation without triggering runtime errors—making rigorous configuration management essential in large deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
