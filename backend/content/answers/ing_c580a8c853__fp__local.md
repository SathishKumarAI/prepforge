---
qid: ing_c580a8c853__fp__local
question: 'Explain: Informational responses — HTTP response status codes - HTTP |
  MDN'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 423
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:01:47-05:00'
sources: []
---

### Informational Responses (1xx) – The “Handshake” of HTTP

At its core, a client‑server interaction is an *information exchange* that must be **coordinated** before any substantive payload can be transferred.  
When the server receives a request it first has to decide whether it can even process it—does it have the right protocol version? Is authentication required? Will it accept the payload size? These preliminary checks are performed **without committing resources**, which is why the response is *informational*.

The 1xx codes formalize this “handshake” principle:

| Code | Meaning | Why it matters |
|------|---------|----------------|
| **100 Continue** | The client may continue sending the request body. | Avoids sending large bodies when the server will reject (e.g., auth failure). |
| **101 Switching Protocols** | Server switches to another protocol (WebSocket, SPDY). | Enables dynamic protocol negotiation while keeping the same TCP connection. |

From an optimization standpoint, these codes **decouple** the *decision* phase from the *transfer* phase. The server can release the network socket immediately after sending 100, freeing bandwidth for other connections—an application of *resource pre‑allocation* in concurrent systems.

#### Non‑obvious insight
Most developers treat 1xx as “just a status line” and ignore it. In fact, a **persistent connection** (HTTP/2 or HTTP/3) relies on the ability to send multiple 100–Continue responses for pipelined requests; otherwise the client would block until the entire request arrives. Thus, 1xx codes are not merely informational—they are *protocol‑level synchronization primitives* that enable high‑throughput, low‑latency communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
