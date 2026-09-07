---
qid: ing_4d90b2ec83__faang__local
question: 'Explain: Web and APIs — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 499
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:45:07-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how the transport protocols **TCP** and **UDP** differ when used by web services or APIs, and why a system designer chooses one over the other.

**Approach**  
1. List key properties of each protocol (reliability, ordering, flow control).  
2. Map those properties to typical API use‑cases (HTTP REST vs real‑time streaming).  
3. Highlight trade‑offs in latency, overhead, and failure handling.  

**Depth**  
| Feature | TCP | UDP |
|---------|-----|-----|
| Reliability | ACKs + retransmit → guaranteed delivery | No guarantees; packets may be lost or duplicated |
| Ordering | Maintains byte order | Packets arrive as sent; reordering possible |
| Congestion control | Slow‑start, congestion window | None – sends at application rate |
| Overhead | 20 B header, handshake (3‑way) | 8 B header, no handshake |
| Latency | Higher due to handshakes & retransmissions | Lower; suitable for time‑sensitive data |

*Web APIs*:  
- **HTTP/HTTPS** runs on TCP because clients expect all requests and responses to arrive intact. The overhead of a few milliseconds is acceptable compared to the risk of missing data.
- **Real‑time streaming (e.g., WebRTC, live telemetry)** often uses UDP (or DTLS over UDP) to keep latency minimal; occasional packet loss is tolerable.

*System Design*:  
- Choose TCP when correctness outweighs speed.  
- Opt for UDP when time‑to‑first byte matters and the application can tolerate or compensate for losses (e.g., using application‑level error correction).

**Edge Cases**  
- High packet loss → TCP stalls; consider QUIC.  
- Large file transfer over UDP → need to implement segmentation/reassembly.  

**Optimize & Communicate**  
Explain that modern protocols like **QUIC** merge UDP’s low latency with built‑in reliability, offering a middle ground for many web APIs. Emphasize the designer’s decision tree: *“Is data critical? Is latency critical?”* and communicate trade‑offs clearly to stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
