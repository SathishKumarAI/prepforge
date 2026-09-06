---
qid: ing_6ae09a85d6__fp__local
question: 'Explain: Authorization Code Flow — OAuth 2.0 Flows'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 382
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:51:54-05:00'
sources: []
---

**Authorization‑Code Flow: the “why”**

When an app (the *client*) wants a user’s protected data, it must convince the resource server that the request is legitimate **without ever exposing the user’s credentials to the client**.  
The flow solves this by turning the problem into two independent optimisations:

1. **Credential safety** – keep the secret (client‑id/secret) and the token out of the public channel.  
2. **Delegated access** – let the user grant scope explicitly, so the server can issue a short‑lived token.

The client redirects the user to the *authorization server* with its own identifier and a randomly generated *state*. The server authenticates the user, then sends back an opaque **code** to the redirect URI.  
Because the code is bound to the original request (via state) and only the client’s secret can exchange it for a token, any interception of the code cannot be reused by an attacker: the server verifies the secret before issuing the access‑token.

The deep principle here is *information‑theoretic separation*: the authorization decision (user consent) happens in one trusted domain; the token issuance (access delegation) happens in another. This guarantees that the client never sees the user’s password, yet still obtains a usable credential.

**Non‑obvious insight:**  
The code itself is not a JWT or bearer token; it is merely an opaque handle. That means the authorization server can revoke or rotate its internal state without affecting existing tokens, giving administrators fine‑grained control over session lifetimes that would be impossible if the client held the token directly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
