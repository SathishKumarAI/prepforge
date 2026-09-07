---
qid: ing_62118a1810__faang__local
question: How do WebSockets work? — What are WebSockets and Why are they Used?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 573
total_tokens: 813
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:31:59-05:00'
sources: []
---

**1️⃣ Clarify**  
*Question:* “What are WebSockets and why are they used?”  
Assumptions: We’re targeting a web‑app that needs real‑time, bidirectional communication (chat, live dashboards). The audience knows HTTP but not the low‑level handshake.

---

**2️⃣ Approach**  
1. Define WebSocket as a full‑duplex TCP protocol over a single long‑lived connection.  
2. Contrast with HTTP: request/response vs. continuous stream.  
3. Explain the upgrade handshake and framing.  
4. Highlight use cases and benefits (latency, bandwidth, server push).

---

**3️⃣ Depth**  

| Step | What happens | Why it matters |
|------|--------------|----------------|
| **Handshake** | Client sends `GET /chat HTTP/1.1` + `Upgrade: websocket`. Server replies with 101 Switching Protocols, same headers. Both switch to raw TCP stream. | One‑time overhead; establishes a persistent link. |
| **Full‑duplex** | Either side can send frames at any time without waiting for the other’s request. Frames are tiny (≤ 8 KiB default) and have opcode + mask bits. | Eliminates HTTP round‑trips, reducing latency to ~ms. |
| **Stateful connection** | Connection remains open until closed by either party or network error. No new TCP handshakes per message. | Saves TCP/TLS handshake costs (~200 ms). |
| **Use cases** | Real‑time chat, multiplayer games, live data feeds, collaborative editing. | Requires low latency and server‑initiated pushes; WebSocket fits naturally. |

---

**4️⃣ Edge Cases**  

- **Network proxies/firewalls**: Some block non‑HTTP ports; fall back to long‑polling or SockJS.  
- **Browser support**: All modern browsers support WebSocket, but older IE <10 needs Polyfills.  
- **Scaling**: Sticky sessions or message brokers (e.g., Redis Pub/Sub) needed for multi‑server setups.

---

**5️⃣ Optimize & Communicate**  

- Use secure `wss://` to avoid MITM and satisfy CSP.  
- Implement heartbeats (ping/pong frames) to detect dead connections early.  
- Compress payloads with permessage-deflate to reduce bandwidth on high‑frequency updates.  

*Narrative tip:* Start with a concrete example (“Imagine a chat app”), then step through the handshake, highlight the shift from request/response to push, and finish by tying it back to performance gains. This shows both technical depth and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
