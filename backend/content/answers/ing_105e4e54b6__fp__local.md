---
qid: ing_105e4e54b6__fp__local
question: 'Explain: How UDP Works — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 366
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:40:14-05:00'
sources: []
---

**UDP: a minimalist transport layer that trades guarantees for speed**

At its core, the Internet must move data between hosts. Two competing goals emerge:

1. **Latency‑critical applications (video, gaming)** need packets delivered *as fast as possible*, accepting occasional loss.
2. **Reliability‑critical applications (file transfer, HTTP)** require *exactly‑once* delivery, even if it costs extra round‑trips.

UDP is the *first‑principles* solution for goal 1. It defines a packet structure with only a checksum and length header—no sequence numbers, no acknowledgments, no congestion control. The sender simply writes to the socket; the kernel copies the payload into an IP datagram and hands it to the network stack. The receiver receives whatever arrives, discarding duplicates or out‑of‑order packets without complaint.

This design follows the *information‑theoretic principle of minimalism*: by eliminating protocol overhead, we reduce per‑packet latency and CPU cycles. TCP, in contrast, embeds a full state machine (handshake, retransmission timers, sliding window) that enforces *causal consistency* at the cost of extra bytes and delays.

**Non‑obvious insight:** Because UDP lacks any flow control, it can be used as a “raw” conduit for **multicast or broadcast** traffic. A single sender can fan out millions of packets without per‑client bookkeeping—something TCP’s connection model forbids. Thus, UDP is not just “faster”; it enables fundamentally different communication patterns that TCP cannot support efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
