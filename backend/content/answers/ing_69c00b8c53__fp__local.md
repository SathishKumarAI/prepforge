---
qid: ing_69c00b8c53__fp__local
question: 'Explain: SSO (Single Sign-On) — Token, Cookie, Session'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 541
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:49:18-05:00'
sources: []
---

**Why an SSO system needs a “token”**

When a user logs into an identity provider (IdP), the IdP must prove to any downstream service that this user is authenticated *without* re‑entering credentials. The fundamental problem is *authentication delegation*: we want a compact, tamper‑proof proof that can be passed around on the network and verified by any party.

A token is exactly that proof: a signed data structure (often JWT) that contains claims such as `sub` (user ID), `exp` (expiry), and possibly scopes. The IdP signs it with its private key; any service holding the public key can verify integrity and authenticity without contacting the IdP each request. This is an application of **information‑theoretic integrity**: the signature guarantees that only the IdP could have generated the token.

---

### Token vs. Cookie

A cookie is a *transport mechanism* baked into browsers. It stores arbitrary data on the client, sent automatically with every HTTP request to a domain. A session ID stored in a cookie points to server‑side state (e.g., a Redis hash). The key difference:

| | Cookie (session) | Token |
|---|---|---|
| **State** | Server‑side lookup needed | Stateless; all data inside token |
| **Scalability** | Requires shared session store | Scales horizontally; no store |
| **Revocation** | Must delete state | Can embed revocation lists or short expiry |

A cookie can hold a JWT, but the cookie itself is just transport. The real authentication lies in the signed payload.

---

### Session: The In‑Memory Counterpart

In traditional web apps, a *session* refers to server‑side data keyed by a session ID (often stored in a cookie). The session holds user attributes, CSRF tokens, etc. It solves **stateful authentication** but introduces **stateful scaling problems**—all servers must share the session store.

---

### Non‑obvious Insight

Most people think “SSO = one password.” In reality, SSO is *one cryptographic proof* that can be verified by any service with a public key. The token’s expiry and signature are not conveniences—they enforce **bounded trust**: if an attacker steals a token, it cannot be reused after `exp`. This subtle temporal dimension turns a static credential into a dynamic, revocable one, aligning SSO with the *principle of least privilege* in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
