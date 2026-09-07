---
qid: ing_a8456cb552__faang__local
question: 'Explain: Online Games — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 467
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:16:00-05:00'
sources: []
---

**Clarify**

We need to design the network layer for a real‑time online game that runs over both TCP and UDP.  
Key assumptions:  
* The game requires low latency, high throughput, and tolerance for some packet loss (e.g., position updates).  
* Reliable delivery is critical for state‑changing actions (shots, inventory changes).  
* We control the client–server protocol but can use OS sockets.

**Approach**

1. **Protocol mix** – use UDP for continuous telemetry; fall back to TCP for critical messages.  
2. **Message framing & ordering** – add sequence numbers and acknowledgments on UDP streams.  
3. **Reliability layer** – implement selective repeat ARQ for important packets (e.g., “kill” events).  
4. **Congestion control** – use a lightweight token‑bucket per client to smooth bursts.  
5. **Security & NAT traversal** – embed DTLS over UDP and use STUN/TURN where needed.

**Depth**

*UDP path:*  
- Client sends `pos_update(seq, x,y,z)` every 50 ms.  
- Server acknowledges only the last in‑order packet; out‑of‑order packets are dropped to avoid buffering delays.  
- If a client misses >3 consecutive updates, server triggers a full state sync via TCP.

*TCP path:*  
- All state‑critical messages (`action_start`, `item_pickup`) are queued on a dedicated TCP socket.  
- ACKs guarantee ordering; if latency spikes, the client can still render using cached UDP data.

**Edge Cases**

*Packet reordering*: handled by sequence numbers.  
*NAT timeouts*: keep‑alive pings on both sockets.  
*High packet loss*: fallback to “reliable UDP” for a brief period before switching to TCP.

**Optimize & Communicate**

Future improvements: implement QUIC (UDP + built‑in congestion control) to unify layers, reduce handshakes, and improve security. I would explain that this design keeps latency low while ensuring correctness where it matters, aligning with the scalability and reliability expectations of a FAANG game backend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
