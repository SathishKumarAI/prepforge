---
qid: ing_cdd2e0594d__fp__local
question: 'Explain: JWT — Token, Cookie, Session'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 448
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:18:07-05:00'
sources: []
---

**Why we need a “token” at all**

When a client authenticates, the server must prove that future requests come from the same user without keeping state for every browser.  
The fundamental problem is *statelessness*: HTTP has no built‑in session store. A stateless credential can be verified on any server in a cluster and scales horizontally.

**JWT (JSON Web Token)**  
A JWT is a self‑contained message:  

```
header.payload.signature
```

* **Header** – algorithm used for the signature (e.g., HS256).  
* **Payload** – claims (user id, roles, expiry).  
* **Signature** – HMAC or RSA hash over header+payload.  

Because the payload is signed, any tampering is detectable; the server can validate it with a shared secret or public key without querying a database. Thus a JWT is *an authenticated statement* that anyone holding it can present.

**Cookie vs Token**  
A cookie is just an HTTP header (`Set‑Cookie`). It stores arbitrary data and is sent automatically on every request to its domain. When you put a JWT in a cookie, you combine the benefits: stateless verification + automatic transport.  

*Security nuance:* If the cookie is `HttpOnly` and `Secure`, JavaScript cannot read it (mitigating XSS) but browsers still send it on HTTPS requests.

**Session (server‑side)**  
A session keeps an identifier (`session_id`) in a cookie; the server stores all user data keyed by that id. The server must persist state, so scaling requires shared storage or sticky sessions.  

*Non‑obvious insight:* **The choice between JWT and session is not about security per se but about *statelessness vs. revocation latency*.**  
With a session you can instantly revoke access by deleting the record; with a JWT you must wait for its expiry or maintain a blacklist—making revocation an explicit design problem rather than a side‑effect of authentication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
