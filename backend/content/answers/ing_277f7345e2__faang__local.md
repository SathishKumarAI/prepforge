---
qid: ing_277f7345e2__faang__local
question: 'Explain: What HTTPS Adds — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 495
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:15:37-05:00'
sources: []
---

**Clarify**

> *“Explain what HTTPS adds compared to plain HTTP in a system‑design context.”*  
Assumptions: We’re looking at the protocol stack (application → transport → network), not just a browser‑side FAQ. I’ll treat a typical web service that receives client requests and returns data.

**Approach**

1. Outline HTTP’s flow (request/response, stateless).  
2. Identify security gaps (eavesdropping, tampering, spoofing).  
3. Show how HTTPS plugs each gap with TLS: encryption, integrity, authentication.  
4. Touch on handshake cost and how modern TLS mitigates it.

**Depth**

| Layer | HTTP | HTTPS |
|-------|------|-------|
| Transport | TCP (plain) | TCP + TLS 1.2/1.3 |
| Data | Cleartext | Encrypted via symmetric cipher; MAC or AEAD ensures integrity |
| Authentication | None | Server cert signed by CA; optional client certs |
| Handshake | N/A | 0‑RTT / full handshake (≈4 round‑trips) → TLS‑session resumption reduces latency |

*Complexity*: TLS handshake is **O(1)** per connection but adds ~5 ms on a local network. Modern browsers reuse sessions, making the overhead negligible at scale.

**Edge Cases**

- **Expired certs** → clients reject; need renewal automation.  
- **TLS downgrade attacks** → enforce minimum protocol version.  
- **Misconfigured cipher suites** → potential weak encryption.  
- **Zero‑RTT replay** → mitigate with unique session IDs.

**Optimize & Communicate**

Explain that HTTPS turns the insecure “text” channel into a *trusted conduit* by:
1. Encrypting payloads (confidentiality).  
2. Binding data to a MAC/AEAD (integrity).  
3. Binding to a CA‑issued cert (authentication).  

In design, we’d pick TLS 1.3 for speed, enable session resumption, and rotate keys via OCSP stapling or CRLSets. Summarize: *HTTPS is not just “HTTP over SSL”; it’s a full-fledged security layer that protects data integrity, confidentiality, and authenticity while keeping latency within acceptable bounds.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
