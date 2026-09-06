---
qid: ing_919eed6009__fp__local
question: 'Explain: HTTP/3 — Explaining 8 Popular Network Protocols in 1 Diagram'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 439
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:14:34-05:00'
sources: []
---

**HTTP / 3 – the “quic‑first” network stack**

At its core, a web request is a *point‑to‑point* exchange: a client sends a packet and awaits an answer.  
In HTTP 1.0 this was serialised over TCP, which guarantees in‑order delivery but incurs **head‑of‑line (HOL) blocking**: one lost or delayed packet stalls every other stream on the same connection.  

HTTP 2 fixed concurrency by multiplexing streams over a single TCP stream, yet HOL blocking still persisted at the transport level.  
HTTP 3 abandons TCP entirely and adopts **QUIC**, a UDP‑based protocol that embeds:

| Layer | Role |
|-------|------|
| 1️⃣ UDP | Low‑latency datagram transport (no connection setup). |
| 2️⃣ TLS 1.3 + 0‑RTT | End‑to‑end encryption and zero‑round‑trip key establishment, enabling *fast* handshakes. |
| 3️⃣ QUIC stream layer | Multiplexed, independent streams that are **fully independent**; a packet loss on one stream does not stall others. |
| 4️⃣ HTTP 3 application layer | Uses the same request/response semantics as HTTP 2 but can now leverage QUIC’s features (0‑RTT, server push, connection migration). |

> **Why it works:**  
> The elimination of TCP’s flow control and HOL blocking turns the network into a *stateless* sequence of packets. Because each stream has its own congestion window, loss is isolated.  

**Non‑obvious insight:** QUIC’s *connection identifiers* allow the same logical connection to survive IP address changes (e.g., mobile handover) without renegotiation—something TCP cannot do without tearing down and re‑establishing. This subtle design gives HTTP 3 resilience that is invisible to application developers but crucial for modern, mobile‑first users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
