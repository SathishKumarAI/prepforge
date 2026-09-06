---
qid: ing_92c25c1a3d__fp__local
question: 'Explain: WebSockets vs. HTTP, Polling, and Long-Polling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 483
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:17:29-05:00'
sources: []
---

**Why a client‑server link needs two modes of “waiting”**

At the core, a web application must keep its state in sync with a server while keeping bandwidth and latency low.  
The *observation* is that a client can either **poll** (ask) or **wait** for data.

| Mode | What it does | Why it works |
|------|--------------|--------------|
| **HTTP polling** | The client sends an HTTP request, the server replies immediately with whatever it has, then the client sleeps until the next request. | It relies on stateless requests: each round‑trip is a fresh TCP connection (or keep‑alive). The cost is linear in the number of polls; latency is high because the client can’t receive new data until it initiates another request. |
| **Long‑polling** | The client sends a request and the server holds it open until an event occurs, then responds. The client immediately reopens a new request. | It trades the overhead of repeated handshakes for a single long connection per “wait”. Latency is reduced to the time until the next event; bandwidth savings come from fewer HTTP headers. |
| **WebSocket** | After a normal HTTP handshake, both sides upgrade the TCP socket to a full‑duplex channel that stays open indefinitely. Messages are framed with minimal overhead. | It eliminates repeated handshakes and framing overhead entirely. The server can push data at any time, and the client receives it immediately. This is essentially *persistent stateful* communication built on top of TCP’s reliability. |

**Non‑obvious insight:**  
All three approaches share the same underlying resource: a single TCP connection. The difference lies in how that connection’s lifecycle is managed—stateless vs. stateful, short‑lived vs. long‑lived. WebSockets simply formalize what long‑polling does “in the limit” (the request never times out), but with less protocol overhead and a true bidirectional stream. Thus, when you choose between them, you’re really deciding how aggressively you want to *bind* the client’s perception of time to the server’s event timeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
