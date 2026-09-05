---
qid: ing_2becf649b0__star__local
question: 'Explain: QUIC and HTTP/3 — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 345
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:55:48-05:00'
sources: []
---

**Situation** – While leading the redesign of our video‑streaming platform, we noticed that live streams were buffering twice as often on mobile networks. The existing architecture relied on HTTP/1.1 over TCP, and latency spikes during handovers were killing QoE.

**Task** – I had to evaluate a transport protocol that could reduce round‑trip times, handle packet loss better, and support multiplexed streams without head‑of‑line blocking, all while staying within our existing CDN stack.

**Action** – I mapped out the trade‑offs between TCP (reliable, connection‑oriented) and UDP (low overhead, no congestion control). Then I introduced QUIC—built on UDP but adding its own congestion control, TLS 1.3 handshake, and stream multiplexing. I re‑implemented our media chunk delivery over HTTP/3 (QUIC), enabling zero‑RTT handshakes for repeat viewers and per‑stream flow control that prevented a single bad packet from stalling all streams. We used BPF probes to monitor RTT variance and tuned QUIC’s congestion window accordingly.

**Result** – Buffering events dropped by 58 %, average startup latency fell from 1.8 s to 0.9 s, and mobile data usage decreased by 12 % due to fewer retransmissions. I learned that protocol choice is a first‑class design decision: moving from TCP to UDP‑based QUIC can unlock significant performance gains when paired with thoughtful congestion management.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
