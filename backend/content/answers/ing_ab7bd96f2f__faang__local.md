---
qid: ing_ab7bd96f2f__faang__local
question: 'Explain: WebSockets — Long Polling vs WebSockets - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 701
total_tokens: 942
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:23:01-05:00'
sources: []
---

**Clarify**  
You’re asking how *Long Polling* differs from a true *WebSocket* connection for real‑time web communication. I’ll assume the goal is low latency, bi‑directional messaging between browser and server over HTTP/HTTPS.

**Approach**  
1. Outline each protocol’s handshake & data flow.  
2. Compare key attributes: latency, overhead, scalability, firewall friendliness.  
3. Summarize use‑cases where one outperforms the other.

**Depth**  

| Aspect | Long Polling | WebSocket |
|--------|--------------|-----------|
| **Handshake** | Client sends a normal GET; server holds until data or timeout, then responds with HTTP 200 and JSON/HTML. Next request is issued immediately. | RFC 6455 upgrade: client sends `Upgrade: websocket`; server replies with 101 Switching Protocols. Connection switches to raw TCP stream. |
| **Data Path** | Each message triggers a full HTTP round‑trip (request/response headers + body). | After handshake, messages are framed on the same open socket; no extra headers per frame. |
| **Latency** | Initial delay equals request time + server wait. Subsequent messages incur at least one HTTP request overhead (~200 ms typical). | Minimal – each frame is ~1–2 bytes of metadata plus payload; round‑trip latency ≈ network RTT. |
| **Overhead** | High: headers (~500 B per message), TCP re‑establishment for each new request (if keep‑alive disabled). | Low: single persistent connection, small framing overhead (~6 B). |
| **Scalability** | Each client consumes an HTTP thread or async event until timeout; server resources grow linearly with #long‑poll connections. | One socket per client; lighter on CPU/memory; better for tens of thousands of concurrent users. |
| **Firewall/NAT traversal** | Works over standard ports 80/443, no special configuration needed. | Same, but some corporate proxies may block non‑HTTP traffic or require WebSocket support. |
| **Security** | Uses HTTPS; TLS per request (but can be reused via keep‑alive). | Also uses TLS (`wss://`). |

**Edge Cases**  
- **Idle clients**: Long polling times out after a preset period, causing extra overhead if re‑established frequently. WebSockets stay alive unless the server closes or network drops.  
- **Proxy support**: Legacy proxies may drop persistent connections; long polling remains safe.  
- **Server crash**: In long polling, pending requests return errors; in WebSocket, the socket is closed and client must reconnect.

**Optimize & Communicate**  
For high‑volume real‑time apps (chat, gaming, live dashboards), I’d choose WebSockets for lower latency and resource usage. For environments with strict proxy constraints or where maintaining a single open TCP stream is risky, long polling provides robustness at the cost of higher overhead. When explaining this to stakeholders, emphasize that “WebSocket = true duplex over one connection; Long Polling = request‑response loop masquerading as push.” This trade‑off narrative aligns with FAANG interview expectations: clear framing, technical depth, and pragmatic decision‑making.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
