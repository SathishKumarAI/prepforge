---
qid: ing_105e4e54b6__faang__local
question: 'Explain: How UDP Works — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 420
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:21:23-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise comparison of UDP and TCP, focusing on protocol behavior and typical use cases in system design (e.g., streaming vs. file transfer). I’ll assume we’re discussing IPv4/IPv6 over IP, and that the audience knows basic networking concepts.

**Approach**  
1. Define each protocol’s core responsibilities.  
2. Contrast their reliability, ordering, flow‑control, and congestion mechanisms.  
3. Highlight design trade‑offs in real‑world systems (latency vs. throughput).  

**Depth**  
- **UDP** is a *connectionless* datagram service: it sends packets without establishing state, no ACKs, no retransmission, no ordering guarantees, and minimal header (8 bytes). It’s ideal for low‑latency or multicast scenarios (VoIP, live video, DNS).  
- **TCP** provides *reliable, ordered, flow‑controlled* byte streams. It uses a 3‑way handshake, sequence numbers, ACKs, retransmission timers, and congestion control algorithms (e.g., Reno, Cubic). Header is larger (~20 bytes). It suits data integrity needs (HTTP, FTP).

**Edge Cases**  
- Packet loss: UDP packets drop silently; TCP will buffer or back off.  
- Out‑of‑order delivery: UDP may arrive jumbled; TCP reorders automatically.  
- High congestion: TCP throttles via congestion windows; UDP can flood the network.

**Optimize & Communicate**  
Explain that choosing between them is a design decision: use UDP when *speed* outweighs *accuracy*, and TCP when *correctness* matters. Mention hybrid approaches (e.g., QUIC) that combine reliability with low‑latency multiplexing, showing awareness of modern trends. This structured answer demonstrates clear reasoning, technical depth, and practical insight—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
