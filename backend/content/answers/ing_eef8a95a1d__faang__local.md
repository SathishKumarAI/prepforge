---
qid: ing_eef8a95a1d__faang__local
question: 'Explain: Real-Time Media — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 532
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:55:34-05:00'
sources: []
---

**Clarify**  
We’re designing a real‑time media pipeline (e.g., live video streaming or VoIP). The key decision is whether the transport layer should use TCP (reliable, ordered) or UDP (unreliable, unordered but low latency). I’ll assume:  

- Latency < 150 ms is critical.  
- Packet loss tolerance ≈ 1–2 %.  
- Bandwidth is ample but not infinite.  
- The system must scale to millions of concurrent streams.

**Approach**  
1. **Baseline transport choice** → UDP for low latency.  
2. **Layer‑3 reliability** → implement forward error correction (FEC) and selective retransmission only on critical packets.  
3. **Congestion control** → use a jitter buffer and an adaptive bitrate algorithm that reacts to packet loss/queue size.  
4. **Fallback** → for very high loss, switch temporarily to TCP or a hybrid scheme (TCP‑based key frames + UDP media).

**Depth**  
- *UDP* gives ~10–20 ms header overhead vs 40 bytes TCP; removes Nagle’s algorithm and ACK storms.  
- FEC adds 15–25 % bandwidth but recovers lost packets without retransmission, keeping the stream smooth.  
- Selective retransmission on key frames (e.g., every 2‑3 seconds) keeps recovery latency <50 ms.  
- Congestion control: use a variant of CUBIC or BBR adapted for media; monitor jitter buffer size to back off rate.  
- Complexity: O(1) per packet processing, memory for FEC buffers (~10 kB per stream).  

**Edge Cases**  
- *Burst loss*: FEC may not cover; selective retransmission kicks in but can introduce jitter.  
- *Network path changes*: re‑establish UDP sockets and renegotiate keys.  
- *TCP fallback*: handover must preserve session state (e.g., RTP/RTCP) to avoid a full restart.

**Optimize & Communicate**  
I’d start with pure UDP + FEC, monitor packet loss metrics in production. If >2 % loss persists, enable selective retransmission or switch to TCP for key frames. I’d present this as a “latency‑first” design that gracefully degrades under poor network conditions, keeping the system modular and testable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
