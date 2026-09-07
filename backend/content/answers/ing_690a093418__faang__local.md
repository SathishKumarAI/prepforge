---
qid: ing_690a093418__faang__local
question: 'Explain: AI Systems — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 532
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:47:57-05:00'
sources: []
---

**Clarify**  
The interviewer wants you to compare how an AI‑driven service (e.g., real‑time inference or model updates) would use *TCP* versus *UDP* for inter‑component communication, and what trade‑offs that choice implies in a production system.

Assumptions to confirm:  
- Latency sensitivity of the workload.  
- Whether the data stream is loss‑tolerant (e.g., video frames).  
- Need for ordering/acknowledgment.  
- Scale (number of nodes, throughput).

**Approach**  
1. List key properties of TCP and UDP.  
2. Map those to typical AI system patterns: inference pipelines, model‑parameter sync, telemetry.  
3. Discuss failure modes and mitigation strategies.  

**Depth**  
| Property | TCP | UDP |
|----------|-----|-----|
| Reliability | ACKs, retransmissions → guarantees delivery. | No guarantee; drops packets. |
| Ordering | Maintains sequence automatically. | Order must be handled at application layer. |
| Latency | Higher overhead (handshake, congestion control). | Minimal header, lower per‑packet latency. |
| Throughput | Efficient at high load due to flow control. | Can burst more data but risk packet loss. |

*Use‑cases*:  
- **Inference requests** → TCP for guaranteed delivery; small payloads so latency penalty is acceptable.  
- **Streaming telemetry or video frames** → UDP with application‑level sequence numbers and error concealment, as occasional loss is tolerable and low latency is critical.  
- **Parameter server sync** → TCP for consistency; optional use of QUIC (TLS + multiplexing) to reduce handshake cost.

**Edge cases**  
- Network partitions: TCP retries may block inference; fallback to UDP or cached models.  
- Congestion: UDP can starve other traffic; need pacing or QoS policies.  
- Security: UDP is more vulnerable to spoofing; must enforce authentication (DTLS/QUIC).

**Optimize & Communicate**  
Explain that a hybrid design—TCP for control plane, UDP (or QUIC) for data plane—offers the best of both worlds. Highlight monitoring (packet loss %, RTT), auto‑tuning congestion windows, and graceful degradation. Conclude by stressing how this aligns with FAANG’s emphasis on scalability, reliability, and low latency in AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
