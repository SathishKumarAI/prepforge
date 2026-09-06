---
qid: ing_6473fa1bbd__fp__local
question: 'Explain: Agent-card signed identity, not shared session cookies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 383
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:38:33-05:00'
sources: []
---

**Why an “agent‑card signed identity” beats shared session cookies**

The core problem is *stateless authentication*: the server must verify that a request comes from a legitimate user without storing per‑session data that can be stolen, replayed or forged.  
A shared cookie works only if the server keeps a secret table of active sessions; any compromise of that table instantly invalidates all clients. Moreover, cookies are automatically sent on every request to the domain, making them vulnerable to CSRF and side‑channel leakage.

An agent card is a *public‑key credential* issued once per user (e.g., via WebAuthn). The server stores only the public key; the client signs each request with its private key. Because the signature is bound to the exact request payload, replay attacks are impossible—each message is cryptographically unique. The server need not maintain any session state: it simply verifies the signature against the stored public key. This satisfies **information‑theoretic minimality** (only the required public key is kept) and **optimization** (no per‑request database lookups).

**Non‑obvious insight:**  
The agent card’s *binding to the request payload* also protects against CSRF without additional tokens, because a forged request from another origin would contain a different payload, producing an invalid signature. Thus, the same mechanism that gives statelessness also eliminates a major class of cross‑site attacks—something most designs overlook when replacing cookies with signed identities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
