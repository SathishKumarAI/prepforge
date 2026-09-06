---
qid: ing_92ada38d0b__fp__local
question: 'Explain: What UDP Provides — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 383
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:17:14-05:00'
sources: []
---

**What UDP Provides**

At its core, a transport protocol solves *“How do we get byte streams from point A to B with minimal overhead while tolerating failures?”*  
TCP answers this by treating data as an **ordered, reliable stream**: it adds sequencing, acknowledgements, congestion control, and retransmission. The cost is extra bytes, stateful connections, and latency that grows with round‑trip time.

UDP flips the trade‑off. It supplies a *connectionless datagram* service: packets are sent without sequencing or guarantees, each carrying its own header (source/dest ports, length, checksum). This minimalism removes per‑connection state on both ends, so:

1. **Zero‑copy & low latency** – packets can be forwarded without buffering or re‑ordering.
2. **Scalability for broadcast/multicast** – a single send reaches many recipients; no connection negotiation is needed.
3. **Deterministic timing** – useful in real‑time audio/video where “good enough” beats delayed retransmission.

The deeper principle is *information efficiency*: UDP’s header (≤ 8 bytes) preserves bandwidth for payload, enabling higher throughput when reliability can be outsourced to the application layer or isn’t required.

> **Non‑obvious insight**  
> Because UDP lacks built‑in congestion control, it can actually *discover* network capacity faster than TCP. In bursty traffic patterns, a UDP sender may send more data before being throttled, allowing applications to probe link performance with lower overhead. This makes UDP the de facto choice for protocols that embed their own loss or timing handling (e.g., QUIC’s early draft, RTP).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
