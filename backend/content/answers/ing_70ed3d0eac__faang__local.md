---
qid: ing_70ed3d0eac__faang__local
question: 'Explain: Real-World Examples — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 462
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:06:13-05:00'
sources: []
---

**Clarify**

The interviewer wants a concrete explanation of when and why we’d choose TCP over UDP (or vice‑versa) in real systems.  
*Assumptions:*  
- We’re designing networked services that need reliable or low‑latency delivery.  
- The audience knows basic socket APIs but not the deep trade‑offs.

**Approach**

1. List key properties of each protocol.  
2. Map those to typical use cases (e.g., file transfer vs gaming).  
3. Highlight design decisions: ordering, flow control, congestion avoidance, header size.  

**Depth**

| Feature | TCP | UDP |
|---------|-----|-----|
| Reliability | ACKs + retransmit | No ACK; packets may be lost |
| Ordering | Guaranteed FIFO | No guarantee |
| Congestion control | Slow‑start, AIMD | None (simple rate limiting) |
| Overhead | 20–40 B header, connection handshake | 8 B header, no handshake |

**Real‑world examples**

- **TCP:**  
  *Web browsers* download HTML/CSS/JS → need ordered, error‑free data.  
  *File transfer (SFTP, SMB)* requires integrity; retransmission is acceptable.

- **UDP:**  
  *Online gaming* or VoIP: latency matters more than occasional packet loss; small headers keep jitter low.  
  *DNS queries*: single request/response pair—no need for connection setup.

**Edge Cases**

- High‑loss networks: UDP can degrade user experience unless application‑level error correction is added (e.g., forward error correction).  
- Large data streams over UDP risk IP fragmentation; must keep packets < MTU.

**Optimize & Communicate**

I’d stress that protocol choice is a design decision, not a “pick one” trick. Explain how adding application‑layer reliability to UDP (like QUIC) can combine low latency with guarantees. Conclude by summarizing the trade‑off: *reliability + order* vs *low overhead & latency*. This showcases structured thinking and depth within 200 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
