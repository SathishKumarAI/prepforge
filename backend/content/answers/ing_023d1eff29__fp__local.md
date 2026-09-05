---
qid: ing_023d1eff29__fp__local
question: 'Explain: Long-Polling: — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 422
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:09:49-05:00'
sources: []
---

**WebSockets vs. Long‑Polling – the problem of “real‑time” on the web**

At its core, a browser and a server communicate over HTTP: *client → request → server → response*.  
For an interactive app (chat, live scores, collaborative editing) the client needs to be notified **as soon as** data changes.  
If we keep sending short HTTP requests (polling), every round‑trip costs TCP handshakes, headers, and latency—wasting bandwidth and CPU.

Long‑polling solves this by letting the server hold a request open until an event occurs or a timeout expires. Once the response arrives, the client immediately re‑issues another long‑poll. It gives the illusion of push but still relies on repeated HTTP handshakes.

**WebSockets** break the HTTP paradigm: after an initial handshake (an upgrade request), the TCP connection is *kept alive* and upgraded to a bidirectional stream. Messages can be sent in either direction without the overhead of new requests, headers, or TLS renegotiations.  

Why they work:

- **Optimization:** A single persistent socket eliminates per‑message latency.
- **Information theory:** The channel’s capacity is maximized because each byte carries payload rather than protocol framing.
- **Geometry:** The state space of client‑server interactions collapses from a sequence of independent exchanges to a continuous path, reducing the dimensionality of control.

**Non‑obvious insight:**  
Because WebSockets reuse the same TCP connection, they are *stateful* at the transport layer. This allows them to share cookies, TLS session tickets, and even multiplex over existing HTTP/2 streams (WebSocket over HTTP/2), yielding far less handshake overhead than long‑polling which must re‑establish each HTTP request. Thus WebSockets aren’t just “faster”; they enable fundamentally different communication semantics that align with modern real‑time web requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
