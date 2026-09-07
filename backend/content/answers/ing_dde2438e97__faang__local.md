---
qid: ing_dde2438e97__faang__local
question: 'Explain: TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 550
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:14:53-05:00'
sources: []
---

**Clarify**  
We’re asked to compare **TCP** and **UDP** in the context of a system‑design interview—essentially how transport‑layer choice impacts reliability, latency, ordering, and use cases (e.g., video streaming vs. DNS). I’ll assume the interviewer wants insight into protocol guarantees, overhead, and when each is preferable.

**Approach**  
1. List key guarantees of each protocol.  
2. Quantify cost/benefit trade‑offs (latency, bandwidth, complexity).  
3. Map common system designs to the right choice.  
4. Highlight edge cases that influence switching between them.

**Depth**  

| Feature | TCP | UDP |
|---------|-----|-----|
| Reliability | ACKs + retransmission; ensures all packets arrive in order. | No ACKs; packets may be lost or reordered. |
| Ordering | Guaranteed by sequence numbers. | None – application must handle ordering. |
| Congestion control | Sliding window, slow‑start, congestion avoidance (e.g., TCP Reno). | No built‑in congestion control; sender can send at any rate. |
| Overhead | 20 B header + handshake (3‑way), extra state per connection. | 8 B header, no handshake, stateless. |
| Latency | Higher due to handshakes and retransmissions. | Lower latency; suitable for real‑time traffic. |

**Typical system mapping**

- **File transfer / HTTP/HTTPS, database replication:** TCP (reliability outweighs latency).  
- **VoIP, live gaming, video streaming, DNS queries:** UDP (low jitter, acceptable packet loss).  
- **Hybrid patterns:** Use UDP for control plane and TCP for data plane.

**Edge Cases**

- High‑loss networks: UDP may need application‑layer ACKs or Forward Error Correction.  
- Security: TLS requires TCP; DTLS can run over UDP but adds complexity.  
- Firewalls/NAT: Some restrict UDP ports, forcing fallback to TCP or using NAT traversal tricks.

**Optimize & Communicate**  

Explain that the choice is a classic *trade‑off* problem: **Reliability vs. Latency**. Offer a decision tree: if “must receive all data in order” → TCP; else if “time‑sensitive, occasional loss acceptable” → UDP. Mention that many services expose both (e.g., QUIC) to combine benefits. Wrap up by asking the interviewer whether they’d like deeper dive into a specific use case or protocol internals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
