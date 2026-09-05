---
qid: ing_31fbb4aaeb__fp__local
question: 'Explain: Live Notifications — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 328
total_tokens: 503
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:50:52-05:00'
sources: []
---

**Live notifications in web apps**

When a server needs to push data (e.g., chat messages, stock ticks) instantly to many clients, the naïve approach is *polling*: each browser repeatedly asks “has anything changed?” This wastes bandwidth and introduces latency because the server can only reply when a request arrives.  
The fundamental problem is **asynchronous communication** with minimal delay.

A *WebSocket* solves this by turning an ordinary HTTP connection into a bi‑directional, full‑duplex stream that stays open after the initial handshake. The client sends an upgrade request; once the server accepts, both sides can send frames at any time without re‑establishing TCP connections. This is essentially a persistent socket expressed in browser terms.

Why it works:
1. **Stateful channel** – keeps a single TCP connection alive, avoiding the overhead of repeated handshakes.
2. **Low latency** – data travels as soon as it’s available; no waiting for the next poll cycle.
3. **Scalable multiplexing** – a server can broadcast to thousands of sockets with minimal per‑connection cost.

A non‑obvious insight: WebSockets are *not* just a faster HTTP alternative; they expose the same underlying TCP semantics that allow flow control and congestion avoidance. By leveraging this, servers can implement back‑pressure (e.g., pause sending if a client is slow), something polling cannot guarantee. Thus, WebSockets provide both an efficient transport and a mechanism for graceful degradation under network stress.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
