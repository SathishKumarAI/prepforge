---
qid: ing_25c0d63bf2__faang__local
question: 'Explain: TCP vs UDP — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 515
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:11:37-05:00'
sources: []
---

**Clarify**  
You’re asking how the two transport protocols differ and when you’d pick each in a machine‑learning system (e.g., model serving or data ingestion). Key assumptions: we need low latency for inference, but we also care about reliability and ordering for training data streams.

**Approach**  
1. List core properties of TCP vs UDP.  
2. Map those properties to ML workloads (inference vs training).  
3. Highlight trade‑offs and typical hybrid patterns.

**Depth**  

| Feature | TCP | UDP |
|---------|-----|-----|
| **Reliability** | ACKs, retransmission, guaranteed delivery | No guarantees; packets may be lost |
| **Ordering** | In‑order delivery | Out‑of‑order allowed |
| **Connection‑oriented** | Handshake, stateful session | Stateless, “fire‑and‑forget” |
| **Overhead** | Sequence numbers, congestion control | Minimal headers, no flow control |
| **Latency** | Higher due to handshake and retransmissions | Lower; useful for real‑time streams |

*Inference*: Use TCP when the response must be exact (e.g., critical medical diagnosis). For latency‑critical but tolerant tasks (e.g., recommendation), UDP or a lightweight protocol (QUIC) can reduce round‑trips.  
*Training data ingestion*: Prefer TCP to guarantee all samples reach the parameter server; optionally layer a loss‑tolerant protocol (e.g., gRPC over HTTP/2) if some drop is acceptable.

**Edge Cases**  
- **Packet loss**: UDP will silently drop, harming model accuracy.  
- **Congestion spikes**: TCP’s congestion control may throttle throughput, hurting training speed.  
- **Security**: Both can be wrapped in TLS; UDP needs DTLS for encryption.

**Optimize & Communicate**  
Explain that many modern ML serving stacks (e.g., TensorFlow Serving) use gRPC (TCP) for reliability but expose a REST/HTTP/2 endpoint (still TCP). For streaming inference, we might deploy QUIC (UDP‑based with built‑in congestion control) to combine low latency and ordered delivery. Conclude by noting that the choice hinges on whether *exactness* outweighs *latency*, and that hybrid designs—TCP for control + UDP for data bursts—often yield the best balance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
