---
qid: ing_25d9f9c492__faang__local
question: 'Explain: Choosing the Right Solution — Long Polling vs WebSockets - by
  Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 481
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:11:54-05:00'
sources: []
---

**Clarify**  
We’re deciding between long‑polling and WebSocket for a real‑time feature (e.g., chat). Assume we need low latency, bidirectional traffic, cross‑browser support, minimal server cost, and the ability to scale to millions of users.

**Approach**  
1. List trade‑offs: latency, overhead, connection count, firewall friendliness, scaling model.  
2. Map each use case (latency‑critical vs batch updates) to a protocol.  
3. Evaluate implementation complexity & monitoring.

**Depth**  

| Metric | Long Polling | WebSocket |
|--------|--------------|-----------|
| **Latency** | ~1–2 s (request/response cycle). | <50 ms (single TCP connection). |
| **Overhead** | Repeated HTTP headers, TLS handshake each poll. | Single handshake; binary frames reduce header bloat. |
| **Connection count** | One per client per poll window → many short‑lived sockets. | Persistent socket per client. |
| **Firewall/Proxy support** | Works everywhere (HTTP/HTTPS). | Requires WebSocket support (port 80/443); some corporate proxies block. |
| **Server scaling** | Easier to horizontal scale; stateless HTTP servers. | Needs sticky sessions or shared state (Redis, etc.). |
| **Implementation** | Simple to add to existing REST stack. | Requires WS library & graceful fallback. |

**Edge Cases**  
- Mobile networks with strict idle‑timeout → WebSocket may drop silently.  
- Browsers without WS support → need fallback (SockJS).  
- High churn users → long‑polling avoids connection storms.

**Optimize & Communicate**  
If latency and real‑time is critical, go WebSocket; add a long‑poll fallback for legacy clients. If you must guarantee reachability behind strict proxies, start with long‑polling, then progressively enable WS where detected. Explain to stakeholders that the trade‑off boils down to “latency vs. universality” and present a phased rollout plan with monitoring dashboards (message latency, connection failures). This structured reasoning shows clear decision logic and readiness for scale—key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
