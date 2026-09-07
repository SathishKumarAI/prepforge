---
qid: ing_507aec870b__faang__local
question: 'Explain: Connection — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 405
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:51:38-05:00'
sources: []
---

**Clarify**  
You’re asking *what* WebSockets are and *why* a ML application would use them—i.e., to keep an open, low‑latency channel between a client (browser or mobile) and a server that streams model predictions or telemetry.

**Approach**  
1. Define the protocol stack (HTTP → upgrade → TCP).  
2. Explain bidirectional, event‑driven nature.  
3. List ML use cases: real‑time inference, streaming feature updates, model‑monitoring dashboards.  

**Depth**  
- **Protocol:** Starts as a normal HTTP/HTTPS request; client sends `Upgrade: websocket`. Server accepts → TCP socket stays open. No per‑message handshake afterward, so each frame is just a small payload (JSON, binary).  
- **Latency & Bandwidth:** Compared to REST polling or SSE, WebSockets avoid repeated handshakes and reduce overhead, critical for latency‑sensitive inference (e.g., autonomous driving).  
- **Stateful Streams:** ML pipelines can push continuous feature vectors; the client can subscribe/unsubscribe without re‑authenticating each time.  
- **Security:** Uses TLS (`wss://`) to protect payloads; authentication via tokens during handshake.  

**Edge Cases**  
- Firewalls may drop idle sockets → use heartbeat ping/pong frames.  
- Browser limits on concurrent WebSocket connections.  
- Server scaling: sticky sessions or message brokers (Kafka, Redis Pub/Sub) to fan‑out frames.

**Optimize & Communicate**  
- Use binary protocols (e.g., Protocol Buffers) to shrink payloads.  
- Close sockets when data is done; keep them alive only during active inference windows.  
- Explain to interviewers how this reduces round‑trip time, conserves bandwidth, and simplifies the ML client code—key trade‑offs for production systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
