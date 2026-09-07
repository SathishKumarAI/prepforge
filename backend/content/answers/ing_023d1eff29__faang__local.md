---
qid: ing_023d1eff29__faang__local
question: 'Explain: Long-Polling: — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 440
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:49:16-05:00'
sources: []
---

**Clarify**  
The interview asks for an explanation of **WebSockets**—what they are, how they differ from long‑polling, and why a system would choose them over other transport mechanisms. I’ll assume the audience knows basic HTTP but not the internals of real‑time web communication.

**Approach**  
1. Define WebSocket as a protocol that upgrades an HTTP connection to a full‑duplex channel.  
2. Contrast with long‑polling: repeated HTTP requests vs single persistent link.  
3. Highlight key benefits: low latency, reduced overhead, server‑initiated pushes.  
4. Mention typical use cases (chat, live dashboards, multiplayer games).  

**Depth**  
- **Handshake**: client sends `Upgrade: websocket`; server responds with 101 Switching Protocols; thereafter frames are exchanged without HTTP headers.  
- **Full duplex**: both ends can send data anytime; no need for polling loops.  
- **Efficiency**: one TCP connection, minimal framing overhead (~4 bytes per frame), no repeated request/response round‑trips.  
- **Scalability**: fewer open connections than long‑polling, which opens a new HTTP request on each poll.  
- **Stateful**: server can maintain per‑client context; easier to implement real‑time features.

**Edge Cases**  
- Browsers behind strict proxies may block non‑HTTP ports → fallback to SockJS or long‑polling.  
- Network firewalls closing idle connections → keep‑alive pings required.  
- Browser support: older IE (<10) lacks native WebSocket; polyfills needed.  

**Optimize & Communicate**  
Explain that choosing WebSockets trades a slightly higher initial handshake cost for steady, low‑latency traffic—ideal when the client–server interaction is frequent and bidirectional. Conclude by summarizing the decision matrix: use long‑polling if you need maximum compatibility or have very few messages; switch to WebSocket when real‑time interactivity and bandwidth efficiency matter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
