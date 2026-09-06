---
qid: ing_aad3bf24d9__fp__local
question: 'Explain: Summary — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 415
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:08:46-05:00'
sources: []
---

### Why the distinction matters in ML‑system design

At its core, an ML pipeline is a **data flow**: sensors → ingestion → feature store → training or inference service. The *transport* protocol decides how reliably that flow traverses the network.

| Feature | TCP | UDP |
|---------|-----|-----|
| Guarantees | Ordered, loss‑free delivery; retransmits lost packets | No ordering, no guarantee; best‑effort only |
| Overhead | Handshake, sequence numbers, ACKs, congestion control | Minimal header (8 bytes) |
| Latency | Higher due to handshakes & retransmissions | Lower, suitable for “fire‑and‑forget” |

#### First principles

1. **Reliability vs speed** – ML workloads that can tolerate missing samples (e.g., streaming features for online learning) may favor UDP to avoid the RTT penalty of TCP’s congestion window. Conversely, batch training requires exact data; TCP is mandatory.
2. **Statefulness** – TCP is inherently stateful: a connection persists, allowing flow control and protection against buffer overflow—essential when the ML server must not be overwhelmed by bursts from edge devices.
3. **Congestion control as implicit load‑shedding** – TCP’s congestion window acts as a regulator; in high‑volume feature pipelines it prevents downstream queues from exploding, which would otherwise corrupt model consistency.

#### Non‑obvious insight

*UDP packets can still carry a lightweight acknowledgment scheme (e.g., acks embedded in the payload). This hybrid approach yields **partial reliability** with minimal overhead, letting an ML inference service drop only the truly critical samples while keeping latency low.*

In short: pick TCP when *exactness* is non‑negotiable; choose UDP (or a custom lightweight acked layer) when *throughput* and *low latency* dominate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
