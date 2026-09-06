---
qid: ing_ab7bd96f2f__fp__local
question: 'Explain: WebSockets — Long Polling vs WebSockets - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 485
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:09:51-05:00'
sources: []
---

### From the fundamental problem

A browser must keep an open channel with a server so that data can flow **bidirectionally** whenever it becomes available, without the client having to hammer the server for updates.  
Two approaches solve this: **Long‑Polling** and **WebSockets**.

---

#### Long‑Polling  

1. Client sends a request → server holds it until new data arrives or a timeout occurs.  
2. Server responds with the data (or “no change”) → client immediately re‑issues another request.  

*Why it works:* It leverages the HTTP/1.1 keep‑alive stack; the browser never opens a persistent socket, so firewalls and proxies happily pass it.  
*Cost:* Each roundtrip incurs an HTTP header overhead (~2 KB) and a TCP connection teardown/re‑establishment latency (≈100 ms on a congested network).  
*Limitation:* The effective bandwidth is capped by the request/response cycle; any burst of updates must wait for the next poll.

#### WebSockets  

1. Client initiates an HTTP upgrade → server acknowledges, then both sides open a single TCP stream.  
2. Either side can push frames at will; no per‑message handshake.  

*Why it works:* The TCP stream is a **continuous random‑access memory buffer**; the OS scheduler multiplexes I/O without re‑authenticating each message.  
*Benefit:* Latency collapses to one roundtrip for the first message, then essentially zero for subsequent frames; bandwidth scales linearly with payload size.  

---

### Non‑obvious insight

WebSockets are *not* just “faster HTTP”; they expose a **full duplex channel** that behaves like an in‑process pipe. Because of this, a single WebSocket connection can multiplex multiple logical streams (e.g., chat, telemetry) by framing messages with small headers—effectively turning a shared resource into several independent channels without extra sockets or TLS renegotiations.

In practice:  
- Long‑polling is a *best‑effort* fallback for restrictive networks.  
- WebSockets are the optimal solution when you need low‑latency, high‑throughput bidirectional data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
