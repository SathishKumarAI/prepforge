---
qid: ing_50ba075383__faang__local
question: 'Explain: How HTTP Works — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 438
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:51:51-05:00'
sources: []
---

**Clarify**  
*What is the interviewer looking for?*  
Explain the request‑response cycle of HTTP/HTTPS, how it maps to system design (client → load balancer → web tier → application tier), and mention TLS handshakes, statelessness, caching, and scalability concerns.  
Assumptions: we’re talking about RESTful APIs over HTTPS, not low‑level TCP.

**Approach**  
1. Describe the HTTP protocol layers.  
2. Map a typical request path through a distributed system.  
3. Highlight design knobs (caching, connection pooling, TLS termination).  

**Depth**  
- **Request flow:** Client → DNS resolves → Load Balancer → Web Server → Application Tier → DB; response travels back.  
- **Statelessness:** Each HTTP/1.1 request is independent; session state lives in cookies or tokens (JWT) to keep servers stateless and horizontally scalable.  
- **TLS handshake:** 3‑way exchange + key derivation, then encrypted payload; offload to TLS terminator (e.g., Nginx, CloudFront).  
- **Caching & CDNs:** ETag/Last‑Modified headers; edge caches reduce latency and load on origin.  
- **Connection reuse:** HTTP/2 multiplexing or keep‑alive reduces head‑of‑line blocking.  

**Edge Cases**  
- Large file uploads: chunked transfer, multipart/form-data.  
- Downtime of TLS certs: automated renewal (Let’s Encrypt).  
- Zero‑downtime deployments: blue‑green with load balancer routing.

**Optimize & Communicate**  
Explain trade‑offs: HTTPS adds ~5–10 ms latency but is mandatory for security; HTTP/2 reduces round trips at the cost of increased header compression complexity. Emphasize that keeping services stateless and using CDNs + caching are key to scale. Conclude by summarizing how each design choice impacts reliability, performance, and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
