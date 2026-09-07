---
qid: ing_5560d6fd64__faang__local
question: 'Explain: Security guidelines — ''A cheat sheet for API designs'''
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 554
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:02:34-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise security‑focused cheat sheet that developers can reference when designing REST/GraphQL APIs.  
Assumptions: *All* traffic is over TLS, we have an OAuth2 or JWT auth flow in place, and the API may be consumed by third‑party clients.

---

**Approach**  
1. **Authentication & Authorization** – enforce token validation, scopes, least privilege.  
2. **Transport & Data Protection** – HTTPS only, HSTS, CSP headers.  
3. **Input Validation & Sanitization** – whitelist, length limits, OWASP sanitizers.  
4. **Rate‑Limiting & Throttling** – per‑IP and per‑token quotas.  
5. **Logging & Monitoring** – audit logs, anomaly detection, alerting.  
6. **Error Handling** – generic error messages, no stack traces in production.  
7. **Secrets Management** – never hardcode; use Vault/Secret Manager.  
8. **Versioning & Deprecation** – clear API versioning strategy to avoid breaking changes.

---

**Depth (Key Rules)**  

| Rule | Why it matters | Typical implementation |
|------|----------------|------------------------|
| **Token binding** | Prevent token replay | TLS client certs or PKCE for OAuth2 |
| **CORS + CSRF** | Guard against cross‑site attacks | `Access-Control-Allow-Origin`, double submit cookie |
| **Content Security Policy (CSP)** | Mitigate XSS | `Content-Security-Policy: default-src 'self'` |
| **Input sanitization** | Stop injection | Use libraries like OWASP ESAPI or built‑in ORM escaping |
| **Rate limiting** | Thwart DoS | Redis‑backed token bucket per IP/token |

---

**Edge cases**  
* Token expiration during a request – refresh flow must be atomic.  
* Large file uploads – enforce size limits and scan for malware.  
* Mobile clients with intermittent connectivity – retry logic should not re‑expose secrets.

---

**Optimize & Communicate**  
- **Batch validations** to reduce latency (e.g., validate JWT once per batch of requests).  
- Use **OpenAPI security schemes** to auto‑generate client SDKs that enforce scopes.  
- Document the cheat sheet in a living README and run periodic security drills.  

Narrate your reasoning by walking through the threat model first, then mapping each rule to an OWASP Top 10 control—this shows structured thinking and depth expected at FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
