---
qid: ing_eff53d3e55__faang__local
question: 'Explain: HTTP: — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 488
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:57:29-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of **WebSockets**—the protocol that allows full‑duplex communication over HTTP—and why we use them in modern web apps.

---

### Approach
1. **Define WebSocket** – handshake, persistent TCP connection, bi‑directional frames.  
2. **Contrast with traditional HTTP** – request/response, statelessness, overhead.  
3. **List practical motivations** – real‑time data, low latency, reduced bandwidth, server push.  
4. **Mention trade‑offs** – complexity, security, firewall issues.

---

### Depth
WebSocket is a standardized protocol (RFC 6455) that upgrades an HTTP/1.1 or HTTPS connection via an `Upgrade: websocket` header to a long‑lived TCP socket. Once established, both client and server can send frames at any time without re‑initiating the handshake, eliminating per‑message round‑trips.  

Typical use cases:

| Scenario | Why WebSocket shines |
|----------|----------------------|
| Live chat / multiplayer games | Sub‑millisecond latency, continuous streams |
| Financial tickers / IoT dashboards | Server‑push updates without polling |
| Collaborative editing | Real‑time sync of changes |

Compared to long‑polling or server‑sent events, WebSockets reduce overhead (no repeated HTTP headers), lower CPU usage, and enable true two‑way communication. They also work well with HTTP/2 multiplexing and can be secured via `wss://` (TLS).

---

### Edge Cases
- **Firewalls/NAT**: May block persistent sockets; fallback to polling needed.  
- **Browser support**: Older browsers require polyfills.  
- **Message framing errors**: Improperly sized frames can cause crashes.

---

### Optimize & Communicate
Explain that while WebSockets bring efficiency, they increase state management complexity on both client and server. In practice, we often expose a RESTful API for initial data load and upgrade to WebSocket only for the high‑frequency parts. Emphasize monitoring connection health (ping/pong) and graceful reconnection strategies. This balanced approach satisfies both performance goals and maintainability—exactly what FAANG teams prioritize.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
