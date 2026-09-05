---
qid: ing_191f6d28e4__fp__local
question: 'Explain: OAuth 2.0 — Token, Cookie, Session'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 397
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:59:34-05:00'
sources: []
---

**OAuth 2.0 Tokens, Cookies and Sessions – a principled view**

At its core, authentication is an *information‑theoretic* problem: the client must prove to the server that it possesses some secret (the user’s credentials) without sending that secret repeatedly. OAuth 2.0 solves this by issuing a short‑lived **access token**—a signed opaque value whose cryptographic signature guarantees authenticity and whose payload encodes scopes, expiry and issuer. The token is *stateless* on the server: the resource server can validate it with a public key or shared secret without looking up session state, satisfying the optimization principle of O(1) lookup.

A **cookie** is simply a transport mechanism for that token (or a session ID). It leverages the browser’s built‑in persistence and same‑origin policy to reduce round‑trips. Cookies can be flagged `HttpOnly` or `Secure` to mitigate XSS and MITM attacks, but they still live in the client’s storage.

A **session** is an explicit server‑side state mapping a session ID (often stored in a cookie) to user data. It introduces O(n) lookup cost and requires cleanup, but allows revocation and fine‑grained control. OAuth’s bearer tokens are *stateless*; sessions are *stateful*.  

**Non‑obvious insight:** The choice between token, cookie and session is not about security per se but about the *entropy budget* of the client. Stateless tokens let the server offload all entropy to the client (the token itself), freeing server memory. Stateful sessions concentrate entropy on the server, enabling instant revocation—essential for highly regulated domains. Thus, architecture choice follows where you can afford to keep or discard secret state.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
