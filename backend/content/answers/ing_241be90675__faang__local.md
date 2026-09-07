---
qid: ing_241be90675__faang__local
question: 'Explain: Long Polling — Long Polling vs WebSockets - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 615
total_tokens: 857
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:08:24-05:00'
sources: []
---

**Clarify**  
You’re asking why we’d choose *long‑polling* over *WebSocket* for real‑time communication, and what trade‑offs exist. I’ll assume a web app that needs near‑instant updates (e.g., chat, notifications) and runs on browsers with varying support and network conditions.

**Approach**  
1. Define each protocol’s mechanics.  
2. List key dimensions: latency, connection overhead, server resources, compatibility, scalability, security.  
3. Compare them along those axes.  
4. Highlight when long‑polling is preferable despite WebSocket’s popularity.

**Depth**  

| Dimension | Long‑Polling | WebSocket |
|-----------|--------------|-----------|
| **Latency** | Request–response cycle → 1–2 round trips; ~200 ms+ on average. | Single TCP connection, duplex; <50 ms typical. |
| **Connection overhead** | Each poll opens/closes HTTP, incurring TLS handshake and header cost. | One persistent TCP/TLS handshaking; lower per‑message bytes (≈5–10 B). |
| **Server resources** | Idle threads/processes for each long request; easier to scale horizontally with stateless servers. | Single open socket consumes thread or event loop slot; may need dedicated workers or async IO. |
| **Compatibility** | Works on all browsers, proxies, and firewalls; no special headers needed. | Requires WebSocket support (rarely blocked) but some corporate proxies strip it. |
| **Scalability** | Statelessness lets you use standard load balancers; easier to add more instances. | Persistent connections can strain NAT tables and reverse proxies; may need WebSocket‑aware LB. |
| **Security** | Same as HTTP/HTTPS; no extra headers. | Requires secure handshake (wss://) but otherwise similar. |

**Edge Cases**  
- *High‑traffic chat*: WebSockets shine due to lower latency and overhead.  
- *Mobile data with flaky connectivity*: Long‑polling is more robust because the server can close a stale request quickly.  
- *Legacy browsers or strict corporate proxies*: Long‑polling works out of the box; WebSocket may fail.

**Optimize & Communicate**  
If I must use long‑polling, I’d:
1. Keep request bodies minimal and use HTTP/2 to multiplex many polls over one connection.  
2. Implement exponential backoff on client retries to avoid thundering herd.  
3. Use server‑push mechanisms (e.g., SSE) as a middle ground if full duplex isn’t needed.

When explaining this in an interview, I’d frame the choice as “pick the protocol that balances *latency* vs *resource cost* for your user base.” That shows I understand both technical constraints and business trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
