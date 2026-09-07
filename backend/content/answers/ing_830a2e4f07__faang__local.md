---
qid: ing_830a2e4f07__faang__local
question: 'Explain: HTTP/3 — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 556
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:49:24-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer asks how HTTP/3 (the next‑generation web protocol) differs from its predecessors (HTTP/1.x, HTTP/2) and what system‑design implications it has for building scalable HTTPS services. I’d confirm we’re focusing on transport layer changes, performance gains, and deployment concerns (TLS, server multiplexing, packet loss).

**2️⃣ Approach**  
- Map the evolution: TCP → QUIC (UDP + TLS 1.3) → HTTP/3.  
- Highlight key benefits: lower latency, connection migration, head‑of‑line (HoL) protection.  
- Discuss how these translate to design decisions for load balancers, edge caches, and back‑end services.

**3️⃣ Depth**  
| Feature | HTTP/2 | HTTP/3 |
|---------|--------|--------|
| Transport | TCP + TLS 1.2 | QUIC (UDP) + TLS 1.3 |
| Multiplexing | Streams over one connection – still suffers HoL on packet loss | Independent streams; lost packets don’t stall others |
| Connection setup | 1–2 round‑trips (TLS handshakes) | 0/1 RTT via zero‑RTT resumption + integrated TLS |
| Migration | None – TCP binds to IP | Works across Wi‑Fi ↔ cellular; same session ID |
| Security | TLS‑only | TLS embedded in QUIC, simplified crypto handshake |

**System‑design impact:**  
- **Edge routers** must support QUIC sockets and UDP port 443.  
- **TLS termination** moves into the application layer; load balancers need QUIC‑capable proxies (e.g., Envoy).  
- **Back‑ends** can keep persistent connections without re‑establishing TCP handshakes, reducing CPU overhead.  
- **Observability**: metrics shift from TCP congestion windows to QUIC loss/retransmission rates.

**4️⃣ Edge cases**  
- Legacy clients (no QUIC support) fall back to HTTP/2/TCP.  
- Network middleboxes blocking UDP can break connections; need fallback or port‑knocking.  
- Early adoption may double network traffic during migration, requiring careful capacity planning.

**5️⃣ Optimize & Communicate**  
Explain trade‑offs: lower latency vs. increased complexity in debugging QUIC streams; higher CPU cost for TLS handshakes on the server side but mitigated by session resumption. Conclude that adopting HTTP/3 demands updating infrastructure (proxies, monitoring) and careful rollout to ensure backward compatibility while reaping performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
