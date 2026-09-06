---
qid: ing_e4b757d6a2__think__local
question: 'Explain: Per-tenant scoping with audience binding (RFC 8707)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 532
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:03:59-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - *What* is “per‑tenant scoping” and how does it relate to RFC 8707 (“Audience Binding for OAuth 2.0”)?  
   - Assume the reader knows basic OAuth flows but not the audience‑binding extension.  
   - Define “tenant” in multi‑tenant services (e.g., SaaS with separate customer domains).  

**2️⃣ Adopt a mental model: “Scope + Audience = Authorization boundary”**  
   - Treat *scope* as the set of actions an access token permits.  
   - Treat *audience* (RFC 8707) as the intended recipient(s) of that token.  
   - In multi‑tenant contexts, each tenant is a distinct audience; per‑tenant scoping means scopes are evaluated separately for each tenant.

**3️⃣ Step‑by‑step reasoning**  
   1. **Token issuance** – Authorization server receives an audience claim (`aud`) specifying the target tenant’s URI or identifier.  
   2. **Scope filtering** – The server checks that requested scopes are valid for that specific tenant (e.g., a tenant may only allow `read:orders`).  
   3. **Audience binding** – Token contains the exact tenant audience; resource servers verify that `aud` matches their own tenant ID before accepting any scope claims.  
   4. **Enforcement at the resource server** – Even if a token lists multiple scopes, the server enforces only those that belong to its tenant’s policy set.  

**4️⃣ Common pitfalls to avoid**  
   - *Mixing global and per‑tenant scopes*: treat them separately; otherwise cross‑tenant privilege escalation can occur.  
   - *Ignoring audience validation*: a malicious token with a wrong `aud` could bypass scope checks if the server only looks at scopes.  
   - *Over‑restrictive tenant policies*: ensure that legitimate scopes aren’t inadvertently denied because of misconfigured tenant boundaries.

**5️⃣ Sanity‑check & verbalize**  
   - Ask: “If a user from Tenant A requests `write:files` but Tenant B only allows `read:files`, will the token be rejected?” → Yes, because scope filtering occurs per‑tenant.  
   - Summarize: *Per‑tenant scoping with audience binding* is essentially applying OAuth scopes in isolation for each tenant’s audience claim, ensuring that a token cannot be misused across tenants.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
