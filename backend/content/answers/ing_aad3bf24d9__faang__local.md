---
qid: ing_aad3bf24d9__faang__local
question: 'Explain: Summary — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 468
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:21:44-05:00'
sources: []
---

**Clarify**  
The interview asks for a concise comparison of **TCP (Transmission Control Protocol)** and **UDP (User Datagram Protocol)**, framed as a system‑design discussion. I’ll assume the context is designing a networked service where latency vs reliability trade‑offs matter (e.g., video streaming vs file transfer).

**Approach**  
1. List core differences (connection state, ordering, flow control).  
2. Map each property to design implications.  
3. Highlight scenarios favoring one over the other.  
4. Mention hybrid patterns and error handling.

**Depth**  
| Feature | TCP | UDP |
|---------|-----|-----|
| Connection | Three‑way handshake; stateful | Stateless, datagram |
| Reliability | ACKs, retransmission, sequence numbers | No guarantees |
| Ordering | Guarantees in‑order delivery | Out‑of‑order possible |
| Congestion control | Slow start, AIMD | None (simple rate limiting) |
| Overhead | ~20 B header + TCP flags | ~8 B header |
| Latency | Higher due to handshakes & retransmissions | Lower; best‑effort |

*Design implications*:  
- **TCP** is ideal for bulk data, APIs, and any application needing exact delivery (e.g., RESTful services).  
- **UDP** suits real‑time media, gaming, or IoT telemetry where occasional packet loss is acceptable.  
Hybrid patterns: use UDP with application‑level sequencing/retransmission for low‑latency streaming; employ TCP for control channels.

**Edge Cases**  
- High jitter networks can break UDP ordering; implement buffering.  
- TCP slow start may throttle bursty traffic—use congestion window tuning or QUIC (UDP‑based).  

**Optimize & Communicate**  
Explain that choosing a protocol is a first‑layer design decision impacting scalability, latency, and complexity. I’d recommend profiling the use case: if throughput > 1 Mbps with tolerable loss, UDP + custom reliability is efficient; otherwise default to TCP for simplicity. This structured rationale shows clear trade‑off analysis, aligning with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
