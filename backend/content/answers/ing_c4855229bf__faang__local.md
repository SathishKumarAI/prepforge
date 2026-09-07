---
qid: ing_c4855229bf__faang__local
question: How Does Long Polling Work? — Long Polling vs WebSockets - by Ashish Pratap
  Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 529
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:18:02-05:00'
sources: []
---

**Clarify**  
We’re asked how long‑polling works and how it compares to WebSockets. I’ll assume we’re dealing with HTTP/1.x clients (browsers or mobile apps) that can’t keep a TCP connection alive indefinitely, and we want real‑time updates from the server.

**Approach**  
Explain the request–response cycle of long polling, then contrast it with the full duplex nature of WebSockets. Highlight when each is preferable (e.g., limited infrastructure vs low latency).

**Depth**  

| Feature | Long Polling | WebSocket |
|---------|--------------|-----------|
| **Transport** | HTTP/1.x request that stays open until server has data or timeout expires. | TCP upgrade to RFC 6455, persistent bi‑directional stream. |
| **Latency** | ~round‑trip time + processing; a new request is sent after each response (often 200–300 ms). | Near zero once established; messages flow instantly. |
| **Server load** | Each pending request consumes an HTTP thread/worker until it returns. | Single persistent connection per client; less context switching. |
| **Scalability** | Works on any web stack; scales with statelessness but limited by max concurrent connections. | Requires support for upgrade headers and a protocol‑aware server (e.g., Node, Nginx + uWSGI). |
| **Firewall friendliness** | Uses standard HTTP ports (80/443), so NAT/firewalls pass it easily. | Same initial handshake; subsequent frames are opaque but still over TCP 80/443, so generally fine. |

**Edge cases**  
- *Network hiccups*: long polling will automatically retry on timeout, while WebSocket may need a reconnection strategy.  
- *Server restarts*: long polling clients simply re‑issue the request; WebSocket connections drop and must be re‑established.  
- *Browser limits*: browsers cap concurrent sockets (~6 per domain), affecting both models.

**Optimize & communicate**  
For high‑volume chat, WebSockets are preferable due to lower overhead and instant delivery. For occasional updates or legacy infrastructure, long polling is a lightweight fallback. I’d explain this trade‑off to stakeholders and recommend implementing exponential back‑off for reconnection in both cases. This demonstrates clear problem framing, technical depth, and practical decision‑making—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
