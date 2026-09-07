---
qid: ing_6b629e0454__faang__local
question: 'Explain: Where UDP Fits — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 476
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:53:33-05:00'
sources: []
---

**Clarify**  
You’re asking how UDP fits into the TCP/UDP decision for system‑level design—i.e., when a service should use connection‑oriented or datagram transport and what trade‑offs that entails. I’ll assume we’re talking about typical web‑scale services (microservices, media streaming, telemetry) where latency, throughput, reliability, and ordering matter.

**Approach**  
1. List key properties of TCP vs UDP.  
2. Map those to common use‑cases in distributed systems.  
3. Highlight design patterns that mitigate UDP’s weaknesses.  

**Depth**  
| Feature | TCP | UDP |
|---------|-----|-----|
| Reliability | ACKs, retransmit, flow control | No guarantees; application must handle loss |
| Ordering | In‑order delivery | Out‑of‑order possible |
| Overhead | Handshake, congestion window, per‑packet headers | Minimal header (8 bytes) |
| Latency | Higher due to handshake & retransmissions | Lower, good for real‑time |
| Throughput | Constrained by congestion control | Can saturate link; no flow control |

**Use‑cases**  
- **Web APIs, RPCs, database replication** → TCP (guaranteed delivery).  
- **Live video/audio, gaming, IoT telemetry** → UDP + application‑level sequencing or Forward Error Correction.  
- **Logging/metrics ingestion** → UDP for high volume; use a retry queue if needed.

**Edge Cases**  
- Packet loss > 1% breaks real‑time streams; need FEC or congestion control.  
- Large bursts can cause buffer overflow on receivers lacking flow control.  
- NAT traversal: both protocols require port mapping, but TCP’s handshake is easier for hole punching.

**Optimize & Communicate**  
Explain that “UDP fits when you value low latency and can tolerate loss” and that design patterns—like adding sequence numbers, acknowledgments, or using QUIC (TLS‑over‑UDP)—bridge the gap. Emphasize that choosing UDP isn’t a binary switch; it’s about matching protocol guarantees to business requirements while keeping an eye on complexity and observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
