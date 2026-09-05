---
qid: ing_241be90675__fp__local
question: 'Explain: Long Polling — Long Polling vs WebSockets - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 437
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:22:34-05:00'
sources: []
---

**Long‑polling vs. WebSocket: a principled comparison**

Both techniques solve the *real‑time data delivery* problem: the client needs to be notified when server state changes without polling at high frequency (wasting bandwidth and latency).  
1. **Long‑polling** keeps an HTTP request open until the server has new data or a timeout occurs. The request is then closed, and the client immediately issues a fresh one. This works because HTTP/1.1’s request–response model guarantees that once a response is sent the connection can be reused for the next request. It trades off latency (only one round‑trip per update) against overhead: each new message requires establishing a TCP handshake, TLS negotiation, and HTTP headers—O(n) cost per event.

2. **WebSocket** upgrades a single TCP/TLS connection to a bidirectional protocol that preserves an open channel. The server can push frames at any time; the client and server both send messages independently. This is essentially a *continuous stream* of events over one persistent socket, which eliminates per‑message handshake cost and reduces latency to the propagation delay only.

**Underlying principle:** Both are manifestations of *event‑driven communication*—the server publishes whenever state changes, and the client subscribes. The difference lies in how they implement the “subscription” channel: long‑polling uses a stateless request–response loop; WebSocket creates a persistent stateful stream.

**Non‑obvious insight:** In environments where *TCP congestion control* is aggressive (e.g., mobile networks), long‑polling can actually outperform WebSockets because each new connection forces the kernel to re‑enter slow‑start, giving the network time to “settle” before sending the next burst. Thus, for sporadic updates on highly variable links, a well‑tuned long‑polling strategy may be more robust than a continuously open socket.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
