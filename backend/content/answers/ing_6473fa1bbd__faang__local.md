---
qid: ing_6473fa1bbd__faang__local
question: 'Explain: Agent-card signed identity, not shared session cookies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 609
total_tokens: 842
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:37:52-05:00'
sources: []
---

**Clarify**  
You’re asking why an *agent‑card* (a signed token that carries the user’s identity) is preferable to using shared session cookies for authentication/authorization in AI services.  
Assumptions:  
- “Agent” refers to a client app or service acting on behalf of a user.  
- The card contains cryptographic signatures, not just a session ID stored in a cookie.  
- We’re comparing stateless token flow vs stateful cookie storage.

**Approach**  
1. List the security properties each mechanism offers.  
2. Map those to common AI‑service scenarios (API calls, federated learning, model inference).  
3. Highlight operational trade‑offs: scalability, revocation, cross‑origin constraints.

**Depth**  

| Feature | Agent‑Card (Signed Identity) | Shared Session Cookie |
|---------|------------------------------|-----------------------|
| **Statelessness** | Token is self‑contained; server needn’t store session state. | Server stores session data; each request must look it up. |
| **Replay protection** | Signature + nonce or short expiry prevents replay. | Cookies can be stolen and reused unless HTTPS & SameSite are strict. |
| **Cross‑origin** | Token sent in `Authorization` header – works across domains. | Browser cookies are limited to same domain unless CORS policies allow. |
| **Revocation** | Short TTL + revocation list or introspection endpoint. | Requires server‑side invalidation; stale cookies may linger until expiry. |
| **Auditability** | Token payload (claims) can include user ID, scopes, timestamps – auditable at edge. | Cookie value opaque; audit relies on server logs. |
| **Performance** | No DB lookup per request → lower latency and better horizontal scaling. | Each request hits session store → potential bottleneck. |

In AI workloads, requests are frequent (model inference, data ingestion). A signed card reduces round‑trips to a session database, improves throughput, and mitigates cookie theft by binding the token to client credentials.

**Edge Cases**  
- **Token leakage**: if an agent card is intercepted, it can be used until expiry. Mitigate with short TTL + HTTPS.  
- **Clock skew**: signed tokens use timestamps; ensure NTP sync across services.  
- **Revocation lag**: a revoked token may still be valid until its expiry unless you implement introspection.

**Optimize & Communicate**  
Explain that switching to agent‑cards scales linearly with traffic, removes a single point of failure (session store), and aligns with microservice best practices. Emphasize the trade‑off: you lose persistent server‑side state but gain stateless security and performance—exactly what large AI platforms need when serving millions of requests per second.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
