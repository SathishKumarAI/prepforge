---
qid: ing_ad4a50951e__faang__local
question: 'Explain: 28 System Design - WebSockets — What are WebSockets and Why are
  they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 626
total_tokens: 869
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:26:25-05:00'
sources: []
---

**Clarify**

> *“Explain what WebSockets are and why we use them.”*  
> I’ll assume the interviewer wants a concise, interview‑ready explanation that covers: (1) the protocol itself, (2) its benefits over HTTP for real‑time scenarios, and (3) typical use cases.

**Approach**

1. Define the handshake and binary framing of WebSocket.  
2. Highlight key properties: persistent connection, low latency, bi‑directional flow.  
3. Contrast with request/response HTTP.  
4. List common patterns (chat, gaming, live feeds).  
5. Mention trade‑offs (complexity, scaling, firewall traversal).

**Depth**

- **Protocol**: WebSocket starts as an HTTP `GET` with `Upgrade: websocket`. The server replies with a 101 Switching Protocols response, after which the TCP socket is reused for full‑duplex framing. Frames carry opcodes (`text`, `binary`, `ping/pong`, `close`) and optional masking (client → server).  
- **Low overhead**: No per‑request headers; only a few bytes of frame header per message.  
- **Bi‑directional flow**: Either side can send data at any time, eliminating the need for polling or long‑polling hacks.  
- **Latency & throughput**: Because the connection stays open, round‑trip times are minimal (≈1–2 ms on a local network). Throughput scales linearly with message size; large payloads can be sent in binary frames.  
- **Use cases**: Real‑time chat, multiplayer games, collaborative editors, live dashboards, IoT telemetry.  

**Edge Cases**

| Scenario | Potential Issue | Mitigation |
|----------|-----------------|------------|
| Firewall blocks non‑HTTP ports | Connection fails | Use WebSocket over TLS on port 443 (wss://) |
| High churn clients | Resource exhaustion | Implement heartbeat (`ping/pong`) and graceful close; use a load balancer that preserves TCP connections |
| Large payloads | Fragmentation overhead | Chunk data into multiple frames or switch to HTTP/2 if appropriate |

**Optimize & Communicate**

- *Scalability*: Horizontal scaling via sticky sessions or a message broker (e.g., Redis Pub/Sub) to fan‑out messages across workers.  
- *Security*: Enforce TLS, validate origin headers, and implement rate limiting on the server side.  
- *Observability*: Log connection lifecycle events, frame counts, and latency metrics; expose them through Prometheus.

**TL;DR**  
WebSocket is a TCP‑based, low‑overhead protocol that upgrades an HTTP request to a persistent, full‑duplex channel. It eliminates repeated handshakes, reduces latency, and supports real‑time bidirectional communication—ideal for chat, gaming, live feeds, and any scenario where instant data exchange outweighs the added complexity of maintaining long‑lived connections.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
