---
qid: ing_92ada38d0b__star__local
question: 'Explain: What UDP Provides — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 330
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:26:15-05:00'
sources: []
---

**Situation** – In my last role I led the redesign of our real‑time telemetry pipeline for a fleet of autonomous delivery drones. The existing HTTP/TCP stack was adding 120 ms latency, pushing us past the 250 ms window required for safe in‑air adjustments.

**Task** – My job was to reduce end‑to‑end latency while keeping data integrity high enough for non‑critical status updates (battery level, GPS fix) and still ensuring that critical commands were reliably delivered.

**Action** – I switched the telemetry channel from TCP to UDP. With UDP I dropped connection overhead: no three‑way handshake, no per‑packet acknowledgements, and minimal header size (8 bytes vs 40 bytes). I added a lightweight application‑level sequence number and checksum so that out‑of‑order or lost packets could be identified and optionally retried for the most important messages. For control commands I layered a simple ACK mechanism on top of UDP to guarantee delivery where needed.

**Result** – Latency dropped from 120 ms to under 30 ms, keeping us comfortably within the safety window. Packet loss remained below 0.2 % due to the checksum and retransmit logic. The team learned that UDP’s “fire‑and‑forget” model is ideal for high‑throughput, low‑latency telemetry, while still allowing selective reliability when required.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
