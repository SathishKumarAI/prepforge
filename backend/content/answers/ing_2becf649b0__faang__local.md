---
qid: ing_2becf649b0__faang__local
question: 'Explain: QUIC and HTTP/3 — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 520
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:25:15-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how QUIC (the transport layer for HTTP/3) differs from classic TCP‑based HTTP, focusing on the choice of UDP over TCP and the implications for system design. I’ll assume the audience knows basic networking but not QUIC internals.

**Approach**  
1. Summarize the layering: TCP → TLS → HTTP/2 vs UDP + TLS 1.3 (QUIC) + HTTP/3.  
2. Highlight key trade‑offs: connection establishment, multiplexing, loss recovery, security.  
3. Map these to system design concerns: latency, head‑of‑line blocking, scalability, and firewall/NAT traversal.

**Depth**  
- **Connection Handshake**: TCP requires 3‑way handshake; QUIC embeds TLS 1.3 in a single round‑trip (0‑RTT), reducing latency for new connections.  
- **Multiplexing & Head‑of‑Line Blocking**: HTTP/2 multiplexes streams over one TCP stream; packet loss stalls all streams due to TCP’s sequential ACKs. QUIC uses separate flow control per stream on UDP, so loss in one stream doesn’t block others.  
- **Security**: TLS is built into QUIC (QUIC‑TLS), eliminating the separate handshake of HTTPS/TCP and enabling faster renegotiation.  
- **Firewall/NAT Traversal**: Since QUIC runs over UDP, it can be blocked by strict firewalls; however, most modern NATs forward UDP fine, and QUIC’s port 443 is allowed.  

**Edge Cases**  
- Early‑access clients with old OS kernels may lack QUIC support → fall back to HTTP/2.  
- Network paths that drop large UDP packets can degrade performance; QUIC mitigates via congestion control but still suffers from packet loss.  
- 0‑RTT data can be replayed, so servers must guard against replay attacks.

**Optimize & Communicate**  
When scaling a CDN, we’d deploy QUIC to cut per‑request latency by ~10–15 ms and reduce server load due to fewer retransmissions. In the interview, I’d emphasize that choosing QUIC means redesigning congestion control logic (e.g., using BBR), updating firewall rules, and ensuring TLS‑1.3 support on edge servers. This shows a holistic view of transport‑layer decisions impacting overall system performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
