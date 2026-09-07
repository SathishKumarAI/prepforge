---
qid: ing_e9804a2812__faang__local
question: 'Explain: How to achieve real-time communication — Long Polling vs WebSockets
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 541
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:42:33-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise comparison of **Long‑Polling** and **WebSocket** for real‑time client–server messaging. I’ll assume we’re targeting web browsers, low latency, bi‑directional traffic, and a typical cloud backend.

**Approach**  
1. Define each protocol’s handshake and data flow.  
2. Contrast latency, resource usage, scalability, and failure handling.  
3. Summarize use‑case suitability and trade‑offs.

**Depth**  

| Aspect | Long‑Polling | WebSocket |
|--------|--------------|-----------|
| **Handshake** | HTTP GET → server holds until data or timeout; client re‑issues request. | TCP upgrade via `Upgrade: websocket`; single persistent TCP connection. |
| **Latency** | ~request‑response + reconnection delay (≈ 100–200 ms). | Minimal once opened (< 10 ms). |
| **Bandwidth** | Overhead per request (headers, cookies). | Single framing header (~2 bytes) per message. |
| **Scalability** | Each client consumes an HTTP connection for the poll duration; can strain servers at scale. | One long‑lived socket per client; fewer connections, better throughput. |
| **Firewall/NAT Traversal** | Works through proxies and firewalls (HTTP). | Requires websockets support; may be blocked behind strict proxies. |
| **Server Push** | Implicit via re‑opening requests; no true push. | Native bi‑directional push without reconnection logic. |
| **Error Handling** | Simple HTTP status codes; retry on timeout. | Need to detect `close` frames and implement heartbeat pings. |

**Edge Cases**  
- **Idle timeouts**: Long‑polling suffers from repeated re‑auth, WebSocket may drop on idle.  
- **Network partitions**: WebSocket reconnection logic must be robust; long‑polling naturally retries.  
- **Browser support**: Old browsers lack `WebSocket`; fallback to long‑polling is required.

**Optimize & Communicate**  
For high‑throughput, low‑latency apps (chat, live dashboards), WebSockets are preferred due to persistent connections and lower overhead. If you must support legacy clients or strict firewall environments, use long‑polling with exponential backoff and keep‑alive headers. I’d present this trade‑off matrix to stakeholders and recommend a hybrid approach: WebSocket for modern browsers, graceful degradation to long‑polling otherwise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
