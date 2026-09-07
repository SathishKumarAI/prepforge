---
qid: ing_6e7c3f8ad5__faang__local
question: 'Explain: Data Transfer — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 425
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:00:49-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise explanation of *WebSocket* as a data‑transfer protocol, why it’s used over HTTP, and what benefits it brings to ML pipelines that need real‑time data streaming.

---

**Approach**  
1. Define WebSockets: full‑duplex, single‑TCP connection.  
2. Contrast with HTTP request/response cycle.  
3. Highlight typical use cases in ML (live model inference, sensor feeds).  
4. Note performance metrics and security hooks.  

---

**Depth**  
- **Protocol**: After a TLS‑protected HTTP handshake, the client sends an `Upgrade` header; the server accepts, and both sides switch to the WebSocket frame protocol.  
- **Full‑duplex & low latency**: No per‑message TCP handshakes → < 5 ms round‑trip for 1 KB payloads versus ~200 ms over HTTP/2 with keep‑alive.  
- **Stateful channel**: Keeps connection open; ideal for streaming sensor data, live inference requests, or model‑to‑client push of predictions.  
- **Scalability**: Non‑blocking I/O (e.g., Node.js, asyncio) handles thousands of concurrent sockets on a single thread.  
- **Security**: Uses `wss://` (TLS), same origin policies, and can integrate with OAuth/JWT for auth.  

---

**Edge Cases**  
- Network drops → automatic reconnect logic needed.  
- Browser limits (~100 sockets) require load balancing.  
- Large binary payloads may need fragmentation handling.

---

**Optimize & Communicate**  
Mention that using WebSockets reduces bandwidth overhead by eliminating HTTP headers per message, cuts server CPU cycles, and simplifies back‑pressure handling via the TCP window. Explain to interviewers that this choice is a classic trade‑off: higher initial complexity for far lower latency in real‑time ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
