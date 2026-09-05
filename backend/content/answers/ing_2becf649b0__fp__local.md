---
qid: ing_2becf649b0__fp__local
question: 'Explain: QUIC and HTTP/3 — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 403
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:38:06-05:00'
sources: []
---

**Why QUIC moves from TCP to UDP**

The fundamental problem of web‑transport is *low latency, high throughput under packet loss*.  
TCP solves this by a **stateful handshake + congestion control** that guarantees in‑order delivery and retransmission.  
However, the same mechanisms that make TCP reliable also impose *head‑of‑line (HoL) blocking*: if any packet is lost, all subsequent data on that stream must wait for its recovery before the application can consume it.

QUIC re‑imagines transport as an **application‑level protocol** built on UDP.  
*UDP* gives the kernel no control over packet ordering or retransmission; it merely delivers bytes or discards them. This statelessness lets QUIC implement:

1. **Multiplexed streams with independent flow control** – a loss in one stream does not stall others.  
2. **Zero‑round‑trip (0‑RTT) handshakes** – the cryptographic context can be cached, so the first request–response pair incurs no handshake latency.  
3. **Built‑in TLS 1.3 encryption** – eliminating the need for separate TLS over TCP and reducing connection setup time.

The deeper principle is *optimizing the end‑to‑end path*: by moving reliability, congestion control, and security into the application layer, QUIC can adapt its algorithms to traffic patterns (e.g., mobile networks) without kernel changes.

**Non‑obvious insight:**  
Because UDP carries no sequencing information, a single lost packet can still be recovered *without* re‑transmitting all subsequent packets. This fine‑grained recovery is what allows HTTP/3 to sustain higher throughput over lossy links, something TCP’s HoL blocking cannot achieve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
