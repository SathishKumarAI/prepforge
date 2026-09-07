---
qid: ing_92ada38d0b__faang__local
question: 'Explain: What UDP Provides — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 524
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:25:32-05:00'
sources: []
---

**Clarify**  
You’re asking why a system might choose UDP over TCP and what guarantees each protocol gives you. I’ll assume we’re designing an application that needs to send real‑time data (e.g., live video or sensor telemetry) where latency matters more than perfect reliability.

**Approach**  
1. List the key properties of TCP vs UDP.  
2. Map those properties to typical use‑case requirements.  
3. Explain trade‑offs and when “best effort” wins over “guaranteed delivery.”

**Depth**  

| Feature | TCP (Transmission Control Protocol) | UDP (User Datagram Protocol) |
|---------|-------------------------------------|------------------------------|
| **Reliability** | Acknowledgements, retransmissions, sequence numbers → guaranteed in‑order delivery. | No ACKs or ordering; packets may be lost or duplicated. |
| **Flow/ congestion control** | Sliding window + congestion windows adapt to network load. | None – sends at application rate; can flood the network. |
| **Overhead** | Handshake (SYN/SYN‑ACK/FIN), headers (~40 B), per‑segment checksums, retransmission timers. | Small header (8 B), no handshake, minimal per‑packet processing. |
| **Latency** | Initial 3‑way handshake + possible retransmissions delay delivery. | Immediate send; lower jitter if packets arrive. |
| **Use‑case fit** | File transfer, HTTP, email – correctness is critical. | Live audio/video, gaming, IoT telemetry – speed > absolute accuracy. |

When you need “best effort” transmission, UDP is preferable because it avoids the handshake and retransmission overhead that can stall real‑time streams. If packet loss is tolerable or you’ll handle redundancy at the application layer (e.g., forward error correction), UDP gives lower latency.

**Edge Cases**  
- **High loss networks:** Even “best effort” may drop too many packets; consider hybrid protocols (RTP over UDP with selective ACKs).  
- **Security:** UDP is more susceptible to spoofing; need DTLS or application‑level authentication.  

**Optimize & Communicate**  
Explain that the choice hinges on the *quality of service* requirements: if you can tolerate occasional drops, pick UDP for its speed; otherwise use TCP’s guarantees. In a design interview, I’d conclude with a decision matrix and mention fallback strategies (e.g., switch to TCP after repeated failures).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
