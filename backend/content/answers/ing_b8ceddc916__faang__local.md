---
qid: ing_b8ceddc916__faang__local
question: Why are WebSockets used? — What are WebSockets and Why are they Used?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 377
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:52:47-05:00'
sources: []
---

**Clarify**  
The interviewer asks why we use WebSocket in web apps. I’d confirm: “You’re asking about the protocol’s purpose, typical use‑cases, and its advantages over HTTP polling or long‑polling.”  

**Approach**  
1. Define what a WebSocket is (full‑duplex TCP‑based).  
2. Explain why it solves latency/overhead problems of HTTP.  
3. List concrete scenarios (real‑time chat, live dashboards, multiplayer games).  

**Depth**  
WebSocket is a bi‑directional, low‑latency protocol that upgrades an initial HTTP handshake to a persistent TCP connection. Unlike HTTP’s request–response model, both client and server can push messages whenever they wish. This eliminates the need for repeated polling or long‑polling, reducing bandwidth and server load. It also keeps the TLS session alive, so no new handshakes are required per message. In practice it powers real‑time chat, collaborative editing, live financial tickers, multiplayer games, and IoT dashboards where milliseconds matter.

**Edge Cases**  
- Firewalls or proxies that drop idle TCP connections may break WebSockets; fallbacks to long‑polling are needed.  
- Browsers’ maximum open sockets per domain can limit scale; load balancers must support sticky sessions or use a message broker.  

**Optimize & Communicate**  
I’d mention using compression (permessage-deflate), heartbeat ping/pong frames, and reconnection logic to keep the channel healthy. I would close by summarizing that WebSockets trade the simplicity of HTTP for persistent, low‑overhead communication—exactly what real‑time applications require.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
