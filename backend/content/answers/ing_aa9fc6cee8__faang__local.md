---
qid: ing_aa9fc6cee8__faang__local
question: 'Explain: Cons ❌ — Long Polling vs WebSockets - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 603
total_tokens: 845
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:21:10-05:00'
sources: []
---

**Clarify**

We need to compare the drawbacks of *long polling* versus *WebSocket* for real‑time data transfer in a client–server architecture.  
Assumptions:  
1. Clients are web browsers on mobile/desktop.  
2. Server is stateless or has limited session memory.  
3. Bandwidth and latency matter; we’re focusing on protocol overhead, scalability, and reliability.

**Approach**

1. List key dimensions (latency, resource usage, scalability, error handling).  
2. For each dimension, describe how long polling behaves and contrast with WebSocket.  
3. Highlight the main pain points that make long polling “cons” compared to WebSockets.

**Depth**

| Dimension | Long Polling | WebSocket |
|-----------|--------------|-----------|
| **Latency** | Each update requires a new HTTP request → round‑trip delay (≈ 200–500 ms). | Persistent TCP connection → immediate push, sub‑100 ms. |
| **Connection overhead** | New HTTP handshake per message; headers (~5 KB) sent every time; expensive for high‑frequency data. | Single upgrade request + minimal framing (~2 bytes) reused indefinitely. |
| **Scalability / Server load** | Every poll spawns a new request thread/async task → O(N) threads or event loops, hard to scale beyond tens of thousands of clients. | One socket per client; OS handles many connections with low memory (≈ 10 KB/socket). |
| **Resource consumption** | Browser keeps idle HTTP requests alive → increased CPU and battery drain on mobile devices. | Keeps a lightweight connection; less power‑hungry once established. |
| **Reliability & Flow control** | No built‑in back‑pressure; server may overwhelm client if polls are frequent. | Built‑in flow control (TCP), optional application‑level ACKs, better for bursty traffic. |
| **Firewall/NAT traversal** | Works through HTTP proxies and firewalls; no special ports needed. | Requires open WebSocket port or fallback to SockJS/long‑polling; can be blocked by strict corporate firewalls. |

**Edge Cases**

- Clients behind restrictive proxies may block persistent TCP, making long polling the only viable option.  
- Serverless environments (e.g., Lambda) struggle with long‑running sockets; long polling fits better there.

**Optimize & Communicate**

*Optimizations*: Use HTTP/2 multiplexing to reduce header overhead for long polling; implement exponential backoff on client side.  
When explaining, start with a quick scenario (chat app), show the cost per message, and finish by recommending WebSockets when firewall constraints are relaxed and you need low latency at scale. This keeps the answer concise yet demonstrates deep protocol insight expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
