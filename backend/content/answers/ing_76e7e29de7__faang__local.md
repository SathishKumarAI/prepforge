---
qid: ing_76e7e29de7__faang__local
question: 'Explain: Financial Market Data Feeds — What are WebSockets and Why are
  they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 440
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:20:30-05:00'
sources: []
---

**Clarify**  
You’re asking why real‑time financial data streams use WebSocket connections instead of polling HTTP. Assume the data provider offers a public API, low latency is critical, and clients need push updates for tickers, order book changes, or trade events.

**Approach**  
1. Define WebSockets: a TCP‑based protocol that upgrades an HTTP request to a persistent duplex channel.  
2. Contrast with polling/long‑polling: repeated HTTP requests, higher overhead, latency spikes.  
3. Highlight key benefits for market feeds: low round‑trip time, efficient bandwidth, scalability, and ordered delivery.

**Depth**  
- **Handshake & Upgrade:** Client sends `GET …` with `Upgrade: websocket`; server responds with 101 Switching Protocols.  
- **Persistent Connection:** One TCP socket stays open; messages are framed (opcode, payload).  
- **Low Latency:** No new handshake per message → milliseconds saved, crucial for high‑frequency trading.  
- **Bidirectional:** Brokers can send control frames (ping/pong) to keep the link alive and detect drops instantly.  
- **Bandwidth Efficiency:** Binary framing eliminates HTTP headers; only payload is transmitted.  
- **Scalability:** Server can push many clients from a single process, reducing connection churn.

**Edge Cases**  
- Network partitions or firewalls that drop idle sockets → use ping/pong keep‑alive.  
- Message ordering: WebSocket guarantees in‑order delivery per stream; but out‑of‑order data can be detected by sequence numbers.  
- Security: TLS (wss://) is mandatory for sensitive market data.

**Optimize & Communicate**  
Explain that while HTTP/2 multiplexing could reduce overhead, it still requires a request per update and cannot guarantee sub‑millisecond latency. Emphasize that WebSockets are the de‑facto standard in fintech because they offer a simple, low‑latency, bidirectional channel that scales to thousands of concurrent feeds—exactly what high‑frequency traders need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
