---
qid: ing_bf2d4b8e6a__faang__local
question: 'Explain: TCP — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 433
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:06:58-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise comparison of TCP and UDP, plus how that choice informs a system‑design decision (e.g., real‑time streaming vs. bulk data transfer). I’ll assume we’re evaluating reliability, ordering, flow control, and latency trade‑offs.

**Approach**  
1. Contrast protocol guarantees (reliability, ordering, congestion control).  
2. Map those guarantees to typical application requirements.  
3. Illustrate a design choice using a concrete example (e.g., video streaming service).

**Depth**  

| Feature | TCP | UDP |
|---------|-----|-----|
| **Reliability** | ACKs + retransmit on loss | No ACKs, no retransmit |
| **Ordering** | Sequence numbers guarantee order | Out‑of‑order packets allowed |
| **Congestion Control** | RTO, slow start, congestion avoidance | None (application must throttle) |
| **Header Size** | 20 bytes + options | 8 bytes |
| **Latency** | Higher due to handshakes & retransmits | Lower; single‑packet send |

*Example*: In a live‑video platform, latency is critical. We use UDP for RTP payloads (fast, ordered via sequence numbers) and overlay a lightweight protocol (e.g., QUIC) that adds selective ACKs if needed. For file downloads, we stick with TCP to guarantee complete data delivery.

**Edge Cases**  
- High loss networks: UDP may drop many frames → quality drops; TCP may stall due to congestion control.  
- Small bursts: TCP’s three‑way handshake overhead dominates.  

**Optimize & Communicate**  
Explain that the choice is application‑driven: if *exact* data integrity outweighs latency, pick TCP; if you can tolerate some loss for smooth playback, UDP (or QUIC) wins. Convey this trade‑off clearly to interviewers, showing both technical depth and architectural insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
