---
qid: ing_2186b05f9c__faang__local
question: 'Explain: Multiplayer Online Games — What are WebSockets and Why are they
  Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 479
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:03:00-05:00'
sources: []
---

**1️⃣ Clarify**  
*Question:* “What are WebSockets, and why do multiplayer online games use them?”  
Assumptions:  
- The audience knows basic HTTP.  
- We’re focusing on real‑time client↔server communication (player state, chat, events).  

**2️⃣ Approach**  
Explain the protocol stack → the problem it solves → the game‑specific benefits.  

**3️⃣ Depth**  
WebSocket is a full‑duplex, persistent TCP connection standardized in RFC 6455.  
- **Handshake:** starts as an HTTP/1.1 upgrade request (`Upgrade: websocket`). Once accepted, the HTTP tunnel is closed and a binary/text frame stream remains open.  
- **Frames & ping/pong keep‑alive** let clients send/receive data with minimal overhead (≈2 bytes header).  
- **No polling:** Eliminates the 100–200 ms latency of long‑poll or repeated HTTP requests, critical for action games where dozens of events per second occur.  

*Why games love it:*  
1. **Low round‑trip time** – essential for fast feedback (movement, combat).  
2. **Scalability** – a single TCP connection per player is cheaper than many HTTP connections; servers can multiplex thousands of sockets in the same thread/event loop.  
3. **Bidirectional flow** – server can push state updates instantly; client can send commands immediately.  
4. **Stateful session** – authentication and session data persist across frames without re‑authenticating each request.  

**4️⃣ Edge Cases**  
- Network firewalls may block non‑standard ports → use port 443 or TLS (`wss://`).  
- Browser support: all modern browsers, but older IE versions require polyfills.  
- Backward compatibility: fallback to long‑polling for legacy clients.  

**5️⃣ Optimize & Communicate**  
For production, combine WebSockets with a message broker (e.g., Redis Pub/Sub) and horizontal scaling via sticky sessions or stateful proxies.  
Narrate the reasoning by highlighting latency → user experience → server cost trade‑offs—exactly what FAANG interviewers look for in a structured answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
