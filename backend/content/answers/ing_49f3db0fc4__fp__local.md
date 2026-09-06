---
qid: ing_49f3db0fc4__fp__local
question: 'Explain: Handshake — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 363
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:42:29-05:00'
sources: []
---

**Handshake – what is a WebSocket and why do we use it?**

At its core, the internet is a collection of *request–response* exchanges: a client sends an HTTP request; the server replies once and closes the connection. For real‑time applications (chat, gaming, live dashboards) this model is wasteful—each update would require a fresh TCP handshake, incurring latency and CPU overhead.

A WebSocket solves this by turning that one‑off exchange into a *persistent bidirectional channel*. The client initiates with an HTTP “upgrade” request; the server acknowledges, then both parties drop to a raw TCP stream where frames are exchanged without re‑authenticating or negotiating headers. This yields:

1. **Zero round‑trip latency** after the initial handshake: data can flow immediately.
2. **Reduced overhead**: no repeated HTTP headers, no TLS renegotiation per message (unless you use WSS).
3. **Full duplex**: either side can send at any time, enabling true event‑driven communication.

The deeper principle is *resource efficiency in a stateful network*. TCP already provides reliable ordering; WebSockets simply reuse that channel for higher‑level messaging, avoiding the stateless overhead of HTTP. A non‑obvious insight: because the handshake is still HTTP, existing infrastructure (proxies, firewalls) can pass it unchanged, making WebSocket a pragmatic bridge between traditional web and real‑time protocols without breaking the established TCP/IP stack.

In short, WebSockets are not a new protocol but an elegant reuse of TCP that turns the stateless web into a stateful, low‑latency medium.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
