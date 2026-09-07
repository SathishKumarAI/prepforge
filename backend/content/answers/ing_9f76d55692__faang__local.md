---
qid: ing_9f76d55692__faang__local
question: 'Explain: Why Traditional HTTP Isn’t Enough — Long Polling vs WebSockets
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 501
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:54:54-05:00'
sources: []
---

**Clarify**  
The interviewer asks why a plain HTTP request‑response model can be insufficient for real‑time apps and how long polling and WebSockets differ in handling continuous data flow. I’ll assume we’re targeting low latency, bidirectional communication (chat, live feeds) on mobile/desktop clients.

**Approach**  
1. Summarize the classic HTTP lifecycle.  
2. Explain long polling as an extension of that model.  
3. Contrast with WebSocket’s full‑duplex protocol.  
4. Highlight trade‑offs: latency, overhead, server scaling, firewall friendliness.

**Depth**  
- **HTTP**: request → server processes → single response; connection closed afterward. Each round‑trip costs a TCP handshake (or TLS), headers, and re‑authentication.
- **Long Polling**: client sends a GET that the server holds until data is ready or timeout. When data arrives, server responds, client immediately issues another GET. Latency ≈ one HTTP round‑trip; but each message still incurs full header overhead and reconnection costs. Works over any proxy/firewall because it’s just HTTPS.
- **WebSocket**: initial HTTP/HTTPS handshake upgrades to a persistent TCP connection. After that, frames are sent in both directions with minimal framing (2–8 bytes). Latency drops to sub‑millisecond; throughput scales linearly with message size. Requires the client and server to keep the socket alive; firewalls may drop idle connections unless heartbeats are sent.

**Edge Cases**  
- **Network churn**: long polling gracefully reconnects on intermittent loss; WebSocket needs a reconnection strategy or a fallback like SockJS.  
- **Server capacity**: long polling can tie up threads per pending request; WebSockets use event‑driven I/O to scale better.  
- **Security**: WebSocket endpoints must enforce origin checks; long polling inherits HTTPS security.

**Optimize & Communicate**  
For high‑scale real‑time services (e.g., live dashboards), recommend WebSockets with a reconnection/backoff strategy and heartbeats. If the environment has strict proxy restrictions or low client support, fallback to long polling. I’d explain this trade‑off succinctly, emphasizing latency vs. infrastructure simplicity, matching the interviewer’s likely interest in production decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
