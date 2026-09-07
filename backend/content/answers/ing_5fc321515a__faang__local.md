---
qid: ing_5fc321515a__faang__local
question: 'Explain: Choose UDP When — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 427
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:27:03-05:00'
sources: []
---

**Clarify**  
The question asks when to pick **UDP** over **TCP** in a system‑design context. I’ll assume we’re designing a networked service where the choice of transport protocol impacts latency, reliability, and application semantics.

**Approach**  
1. List core TCP guarantees (ordered delivery, flow control, congestion control).  
2. Contrast with UDP’s minimal overhead: no handshake, no retransmission, no ordering.  
3. Map those differences to typical use‑cases: real‑time media, gaming, telemetry, etc.  
4. Highlight trade‑offs: reliability vs. latency, packet loss tolerance, and implementation complexity.

**Depth**  
- **TCP** is ideal when *exactly‑once* delivery, ordering, or large data integrity matters (e.g., file transfer, HTTP).  
- **UDP** shines for *low‑latency, real‑time* traffic where occasional loss is acceptable: VoIP, live video, multiplayer games, sensor streams. UDP’s small header (8 bytes vs. 20+ for TCP) reduces packet size and CPU overhead; the lack of a three‑way handshake cuts connection setup time to ~1 ms.  
- In UDP‑based protocols (e.g., RTP), application layers implement selective retransmission or forward error correction, trading off protocol simplicity for controlled reliability.

**Edge Cases**  
- If packet loss >5–10 % degrades quality, consider adding FEC or hybrid schemes.  
- Firewalls may block raw UDP; encapsulation in DTLS/TLS is needed for security.  
- High throughput scenarios may suffer from bufferbloat without congestion control—implement application‑level pacing.

**Optimize & Communicate**  
I’d recommend using UDP when *latency outweighs perfect reliability* and the application can tolerate or compensate for loss. For any scenario where ordering or guaranteed delivery is critical, TCP remains the safe choice. This decision balances performance with robustness while keeping implementation complexity manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
