---
qid: ing_f203dc2da6__faang__local
question: 'Explain: HTTP vs HTTPS — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 476
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:02:14-05:00'
sources: []
---

**Clarify**

The interviewer wants a system‑level comparison of HTTP and HTTPS—how they differ, why HTTPS is preferred, and what changes in architecture or deployment are required.

**Approach**

1. Summarize the protocol layers involved.  
2. Highlight key differences (encryption, handshake, port).  
3. Explain impact on traffic flow and latency.  
4. Note deployment considerations (certificates, HSTS, middle‑boxes).

**Depth**

| Layer | HTTP | HTTPS |
|-------|------|-------|
| Transport | TCP over port 80 | TLS over TCP (port 443) |
| Encryption | None – plaintext | Symmetric session key negotiated via asymmetric RSA/ECDHE; all payload encrypted |
| Integrity | No built‑in protection | MAC in TLS guarantees message integrity |
| Authentication | Optional headers | Server cert signed by CA; optional client certs |
| Performance | One round‑trip for request/response | 1–2 extra round‑trips for handshake (can be reduced with session resumption, HTTP/2 multiplexing) |

HTTPS requires a valid X.509 certificate, which is issued by a trusted CA and cached in browsers. The TLS handshake establishes a secure channel; once established, the overhead per request is minimal thanks to session tickets or PSK.

**Edge Cases**

- **Legacy clients**: fail if they cannot parse TLS certificates.  
- **Proxy caching**: HTTP can be cached transparently; HTTPS requires decrypting at the proxy (e.g., via SSL‑intercept).  
- **Performance under load**: TLS handshake cost dominates when many short connections are opened.

**Optimize & Communicate**

If latency is critical, use HTTP/2 over TLS with session resumption and keep‑alive connections to amortize handshake cost. For internal services that don’t need public trust, mutual TLS or mTLS can replace CA‑issued certs for stronger authentication. Always enable HSTS preload to force browsers to use HTTPS by default.

*Key takeaway:* HTTPS adds a cryptographic layer (encryption, integrity, authentication) atop HTTP, incurring a small handshake overhead but providing end‑to‑end security essential in modern web systems.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
