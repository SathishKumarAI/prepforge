---
qid: ing_830a2e4f07__fp__local
question: 'Explain: HTTP/3 — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 336
total_tokens: 508
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:43:49-05:00'
sources: []
---

**Why HTTP 3 exists**

Web traffic is a *latency‑bounded* problem: every round‑trip (RTT) adds delay, and packet loss can stall entire connections.  
HTTP/1.x carried requests over one TCP stream; HTTP/2 multiplexed many streams over a single TLS connection but still relied on **TCP** for congestion control and head‑of‑line blocking. The fundamental optimisation is to *remove the RTT penalty* that TCP imposes.

**The design principle**

- **UDP + QUIC**: Use UDP so packets can be reordered or dropped without tearing the whole session.  
  QUIC implements its own loss recovery, flow control, and multiplexing, but on top of UDP’s low‑latency path.  
- **Transport‑agnostic encryption**: TLS‑1.3 is baked into QUIC, eliminating the separate handshake that would otherwise double RTTs.  
- **Stream prioritisation & resumption**: Streams are independent; a loss in one does not stall others, and sessions can resume without renegotiation.

**A non‑obvious insight**

Because QUIC runs over UDP, *packet ordering is no longer guaranteed*. This allows the protocol to drop out‑of‑order packets that would otherwise block the entire connection—effectively turning packet reordering from a problem into an optimisation. In practice, this yields faster page loads on lossy mobile links where traditional TCP would suffer catastrophic head‑of‑line stalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
