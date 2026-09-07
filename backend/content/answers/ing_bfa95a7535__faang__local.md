---
qid: ing_bfa95a7535__faang__local
question: 'Explain: 1.2. Terminology — RFC 8707: Resource Indicators for OAuth 2.0
  | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 583
total_tokens: 832
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:07:55-05:00'
sources: []
---

**Clarify**  
The question asks for an explanation of the *terminology* used in **RFC 8707 – “Resource Indicators for OAuth 2.0”**.  
Assumptions:  
- The audience knows basic OAuth 2.0 flow (authorization server, client, resource server).  
- They need to understand what a *resource indicator* is and how it’s expressed.

---

### Approach  
1. Define the core concepts introduced by RFC 8707.  
2. Show how they fit into an existing OAuth flow.  
3. Highlight the syntax/semantics of the new HTTP header (`X‑OAuth2-Resource`) and its use cases.

---

### Depth  

| Term | Meaning in RFC 8707 | Role |
|------|---------------------|------|
| **Resource Indicator** | An opaque string that identifies the target *resource server* for which an access token is intended. | Enables a single authorization endpoint to issue tokens for multiple resource servers without extra parameters. |
| **X‑OAuth2-Resource** (header) | The HTTP header where the client sends the indicator when requesting a token (`POST /token`). | Acts as a request‐time hint to the auth server. |
| **Scope** | Existing OAuth scope that describes *what* the client wants; still required. | Remains unchanged – resource indicators only add *where*. |
| **Audience (aud)** | Claim in the JWT token indicating the intended recipient(s). | The indicator is reflected in `aud` so the resource server can validate it. |

**Flow Integration**  
1. Client → Auth Server: `POST /token` with `X‑OAuth2-Resource: https://api.bank.com`.  
2. Auth Server issues a token whose `aud` claim equals that URL.  
3. Client presents token to `https://api.bank.com`; the server checks that `aud` matches its own URI.

---

### Edge Cases  
- **Missing header** – auth server may default to a pre‑configured audience or reject the request.  
- **Multiple indicators** – not allowed; RFC 8707 specifies a single string per request.  
- **Invalid format** – e.g., non‑URI strings – should be rejected with `400 Bad Request`.

---

### Optimize & Communicate  
To scale, auth servers can cache indicator-to-client mappings to avoid per‑request lookups.  
When explaining this to interviewers: start by framing OAuth’s “who” (resource server) and “what” (scope), then show how the indicator cleanly plugs into the existing protocol without breaking backward compatibility. This demonstrates structured reasoning, clear communication, and depth in technical detail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
