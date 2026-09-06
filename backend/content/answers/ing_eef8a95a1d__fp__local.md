---
qid: ing_eef8a95a1d__fp__local
question: 'Explain: Real-Time Media — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 426
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:26:58-05:00'
sources: []
---

**Real‑time media (audio/video) is a *latency‑critical* data flow**: the receiver must consume packets within a tight window (≈ 100 ms for interactive video). The fundamental trade‑off is between **reliability/ordering** and **timeliness**.

| Feature | TCP | UDP |
|---------|-----|-----|
| Reliability | Retransmits lost segments → *zero packet loss* but adds variable delay. |
| Ordering  | Implicit (sequence numbers) → packets arrive in order, but re‑ordering incurs buffering. |
| Congestion Control | Explicit AIMD → conservative rate adjustment that can starve real‑time traffic. |
| Overhead   | ACKs, three‑way handshake, checksum → higher per‑packet cost. |
| Flexibility | Stateless application layer must encode loss tolerance (e.g., FEC). |

**Why UDP wins for live media**

1. **Bounded delay:** The sender never waits for an ACK; packets are pushed to the network immediately.
2. **Stateless transport:** No handshake, no flow control per se – the application can dictate bitrate.
3. **Scalable congestion handling:** RTP‑over‑UDP can implement *rate‑controlled* or *loss‑tolerant* mechanisms (e.g., ECN, pacing) without TCP’s global AIMD.

**Design insight**  
Most systems mistakenly treat packet loss as a binary problem. In real‑time media, *partial* recovery (FEC, retransmission windows limited to < 30 ms) yields the best trade‑off: you recover lost data when it matters, but avoid buffering that turns jitter into latency.

Thus, a typical architecture uses **UDP** for transport, layers RTP/RTCP for timing and control, and adds *application‑level* congestion & loss recovery tailored to the session’s QoS constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
