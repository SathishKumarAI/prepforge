---
qid: ing_ebb09a1694__star__local
question: 'Explain: Connection Setup — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 355
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:20:09-05:00'
sources: []
---

**Situation** – In my last role I was building a real‑time fraud detection system that ingested transaction streams from thousands of ATMs worldwide. The incoming traffic was bursty and latency‑sensitive, but we also needed reliable delivery for audit logs.

**Task** – Design the transport layer so that the ML inference service could process events with sub‑100 ms latency while guaranteeing no data loss for critical records.

**Action** – I evaluated TCP and UDP. For high‑volume telemetry I opted for UDP combined with a custom sequence/acknowledgment scheme: packets were timestamped, checksummed, and sent to a Kafka buffer that replayed lost frames. This gave us < 30 ms round‑trip for most messages. For audit logs, we switched to TCP via TLS to ensure ordered, guaranteed delivery; the connection was pooled per region to reduce handshake overhead. I also added an application‑level backpressure mechanism: if the inference queue hit 80 % capacity, the UDP source throttled itself by raising the packet interval.

**Result** – The system achieved a 95 % reduction in processing latency for real‑time alerts and maintained 100 % log fidelity. We handled peak loads of 200k transactions per second with only 2 % packet loss on the UDP path. I learned that blending transport protocols—using UDP for speed and TCP for reliability, complemented by application‑level controls—is often the sweet spot in ML pipeline design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
