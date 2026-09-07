---
qid: ing_31fbb4aaeb__faang__local
question: 'Explain: Live Notifications — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 438
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:40:24-05:00'
sources: []
---

**Live Notifications – WebSockets**

---

### Clarify  
The problem: We need to push real‑time alerts (e.g., chat messages, stock ticks) from server to client with minimal latency and overhead. Assumptions: clients are web browsers or mobile apps; we care about scalability, bandwidth, and cross‑domain support.

### Approach  
1. **Why WebSockets?**  
   * Bidirectional, full‑duplex communication over a single TCP connection.  
   * Avoids HTTP request/response cycle after handshake.  
2. **How they work**  
   * Client initiates an `Upgrade: websocket` request → server accepts.  
   * Connection stays open; frames are sent in both directions with tiny headers (~4 bytes).  
3. **Use‑cases**  
   * Real‑time chat, live feeds, multiplayer games, IoT dashboards.

### Depth  
* **Latency:** ~1–10 ms versus 100 ms+ for long‑polling.  
* **Bandwidth:** Frame overhead negligible compared to full HTTP requests.  
* **Scalability:** Can be load‑balanced with sticky sessions or protocols like WebSocket over TLS (wss://).  
* **Fallbacks:** If a browser doesn’t support WS, use SockJS/long‑polling.

### Edge Cases  
* **Network interruptions** → automatic reconnection logic.  
* **Firewall/NAT restrictions** → use secure websockets (`wss`) and keep‑alive pings.  
* **Server overload** → backpressure via flow control or message queue.

### Optimize & Communicate  
Explain that WebSockets give us a persistent, low‑overhead channel ideal for live notifications, outperforming polling in latency and resource usage. Highlight trade‑offs: requires stateful server logic vs. stateless HTTP; mention how we’d integrate with existing REST APIs and monitor connection health. This structured narrative showcases clear problem framing, technical depth, and practical considerations—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
