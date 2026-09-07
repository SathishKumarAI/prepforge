---
qid: ing_febf9b8f0f__faang__local
question: 'Explain: UDP — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 677
total_tokens: 910
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:32:20-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the differences between **TCP and UDP** from a system‑design perspective—i.e., why you’d pick one over the other, what guarantees each provides, and typical use cases.

**Approach**  
1. List core properties of each protocol.  
2. Map those properties to real‑world requirements (latency vs reliability).  
3. Provide concrete design patterns that leverage TCP or UDP.  
4. Highlight pitfalls/edge cases.  
5. Summarize trade‑offs and how you’d decide in a new service.

**Depth**

| Property | TCP | UDP |
|----------|-----|-----|
| **Connection model** | Stateful, 3‑way handshake → establishes a reliable session. | Stateless; packets sent without prior negotiation. |
| **Reliability** | Guarantees ordered delivery, retransmission of lost segments, flow control (windowing). | No guarantees; packets may be dropped or arrive out of order. |
| **Congestion & Flow Control** | Built‑in congestion avoidance (Reno, Cubic), per‑connection pacing. | None – sender must implement its own back‑pressure if needed. |
| **Overhead** | Header 20 bytes + ACKs/handshake → ~30–40 % overhead on small payloads. | Header 8 bytes; minimal control traffic. |
| **Latency** | Higher due to handshakes, retransmissions, and flow control. | Lower; ideal for real‑time media or high‑frequency telemetry. |
| **Use cases** | HTTP/HTTPS, database replication, file transfer, any “must‑receive” data. | VoIP, live streaming, gaming, DNS, NTP, telemetry. |

Design patterns:

* **TCP microservice RPC** – use gRPC over TLS; benefits from flow control and ordered streams for request/response semantics.
* **UDP streaming service** – design a custom packet format with sequence numbers & optional ACKs only on critical frames (e.g., keyframes in video).
* **Hybrid approach** – send control messages over TCP, stream payload over UDP to combine reliability where needed.

**Edge cases**

* Packet loss > ~30 % → UDP becomes unreliable; you may need forward error correction or retransmit logic.
* High jitter on UDP can break time‑sensitive protocols unless you add buffering/clock sync.
* TCP slow start can cause bursty traffic; use pacing or explicit congestion notification (ECN) to mitigate.

**Optimize & communicate**

When presenting this answer, I’d emphasize that the choice is not binary but depends on *data criticality vs. latency*. I’d show a quick decision tree:

1. **Must‑receive & order?** → TCP.  
2. **Real‑time & occasional loss acceptable?** → UDP (optionally add lightweight reliability).  

I would conclude by noting that many large systems layer UDP with application‑level protocols (QUIC, WebRTC) to get the best of both worlds—low latency plus congestion control and encryption. This framing demonstrates structured thinking, depth in protocol mechanics, and practical system‑design insight expected at FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
