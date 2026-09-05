---
qid: ing_eda22a0976__star__local
question: Why does HTTPS switch to symmetric encryption during data transmission?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 307
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:24:00-05:00'
sources: []
---

**Situation**  
During a recent revamp of our fintech app’s backend, I noticed that the TLS handshake was taking noticeably longer than expected, especially when scaling to thousands of concurrent users.

**Task**  
I needed to reduce latency in secure connections without compromising security, so I had to understand why HTTPS moves from asymmetric to symmetric encryption and leverage that knowledge to optimize performance.

**Action**  
I walked through a typical TLS 1.3 flow: the client initiates a handshake with an RSA or ECDHE public‑key exchange, negotiating a shared secret (the pre‑master secret). The server signs this with its private key so the client can verify authenticity. Once both sides have derived the same symmetric keys via HKDF, they switch to AES‑GCM for bulk data transfer. I profiled our implementation, identified that the asymmetric key operations were the bottleneck, and replaced the RSA key exchange with an ECDHE curve (P-256) which is computationally cheaper yet still provides forward secrecy.

**Result**  
The handshake time dropped from ~350 ms to ~70 ms per connection, cutting overall page load by 25% during peak traffic. I learned that asymmetric encryption is only used for key exchange and authentication; symmetric ciphers dominate because they’re orders of magnitude faster for large data streams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
