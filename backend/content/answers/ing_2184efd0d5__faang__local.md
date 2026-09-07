---
qid: ing_2184efd0d5__faang__local
question: 'Explain: Pros ✅ — Long Polling vs WebSockets - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 642
total_tokens: 883
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:02:58-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Compare the pros of **Long‑Polling** and **WebSocket** for real‑time data exchange in a web app (e.g., chat or live feed).  
*Assumptions to confirm:*  
- Clients are browsers on modern OSes.  
- Server can maintain persistent TCP connections if needed.  
- Latency tolerance is < 1 s.  

**2️⃣ Approach**  
Outline the trade‑offs: connection overhead, latency, server load, browser support, and security. Then enumerate concrete advantages for each technology.

**3️⃣ Depth (Core Answer)**  

| Aspect | Long‑Polling | WebSocket |
|--------|--------------|-----------|
| **Connection model** | Client sends HTTP GET; server holds until data ready or timeout → new request. | Single TCP handshake upgrades to bi‑directional frame stream. |
| **Latency** | One round‑trip per message + possible wait time → ~200–500 ms typical. | Near‑instant (≤30 ms) once connected, no HTTP overhead. |
| **Server load** | Many idle connections; each request incurs HTTP parsing & TLS handshake. | Fewer TCP handshakes; lightweight frames reduce CPU and memory per client. |
| **Scalability** | Limited by number of simultaneous pending requests; can hit request pool limits. | Handles thousands of concurrent sockets with minimal per‑connection cost. |
| **Browser support** | Works everywhere, even old browsers or restrictive proxies. | Requires modern browser; some corporate firewalls block non‑HTTP ports. |
| **Security & NAT traversal** | Uses standard HTTPS port 443 → no extra firewall rules. | Same port but persistent socket can be blocked by strict NAT/firewall configs. |
| **Data framing** | JSON over HTTP body; easy to debug via devtools. | Binary or text frames; requires WebSocket protocol handling (but libraries exist). |

**4️⃣ Edge Cases**  
- *Slow clients*: Long‑polling keeps request open, may time out; WebSockets keep connection alive but consume more memory if many idle sockets.  
- *Proxy / CDN caching*: Long‑polling can be cached unintentionally; WebSocket bypasses cache layers.  
- *Server crashes*: With long‑polling, clients automatically retry on next poll; with WebSocket you need reconnection logic.

**5️⃣ Optimize & Communicate**  
Explain that **Long‑Polling** is a pragmatic fallback when you cannot guarantee WebSocket support or have strict firewall constraints—its biggest advantage is ubiquity. **WebSockets** shine in high‑frequency, low‑latency scenarios (gaming, live trading) where the reduced overhead and bidirectional flow outweigh the need for extra configuration.  
When interviewing, emphasize that choosing depends on *environment* (client reachability, server capacity, security policies) rather than one size fits all. This demonstrates structured reasoning and deep technical insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
