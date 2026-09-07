---
qid: ing_55feb16d38__faang__local
question: How Do WebSockets Work? — Long Polling vs WebSockets - by Ashish Pratap
  Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 539
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:03:52-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to explain how WebSocket communication differs from long‑polling, and why it’s often preferred for real‑time web apps. Assume the audience knows HTTP basics but not the TCP handshake details.

**2️⃣ Approach**  
- Define the problem: client↔server needs low‑latency, bi‑directional data exchange.  
- Outline two patterns: long polling (HTTP request/response cycle) vs WebSocket (TCP upgrade).  
- Highlight key metrics: connection overhead, latency, bandwidth, scalability.

**3️⃣ Depth**  

| Feature | Long Polling | WebSocket |
|---------|--------------|-----------|
| **Handshake** | HTTP GET → server holds until data or timeout. | HTTP `Upgrade` header → TCP SYN/ACK → persistent duplex channel. |
| **Latency** | ~ request‑response latency + polling interval (often > 100 ms). | Near zero after handshake; frames are small and sent instantly. |
| **Connection count** | One per client, but each request spawns a new HTTP connection if not using keep‑alive. | Single TCP socket per client persists forever. |
| **Bandwidth** | Each response includes full HTTP headers (≈ 500 B). | Only minimal framing bytes (≤ 2 bytes) plus payload. |
| **Scalability** | Requires many concurrent connections or a message broker; high server load. | Efficient multiplexing, fewer sockets, better suited for thousands of clients. |

*Implementation notes*:  
- WebSocket frames are length‑prefixed and optionally masked (client→server).  
- Server can push events at any time without the client polling.  
- Browser support is ubiquitous; fallbacks to long polling/HTTP2 streams if unavailable.

**4️⃣ Edge Cases**  
- Network middleboxes that drop non‑standard ports → use port 443 with `wss://`.  
- Proxy or CDN that does not preserve TCP state → fallback to HTTP2 server push.  
- Browser limits on concurrent WebSocket connections (~6 per domain) – cluster load balancers accordingly.

**5️⃣ Optimize & Communicate**  
Explain trade‑offs: long polling is simpler and works everywhere, but incurs higher latency and overhead; WebSockets deliver true real‑time interactivity with lower resource usage, making them ideal for chat, gaming, or live dashboards. Conclude by recommending a hybrid strategy: use WebSocket for core features, fallback to long polling only when unavoidable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
