---
qid: ing_cca0aa8509__star__local
question: 'Explain: Choosing Between TCP, UDP, and QUIC — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 354
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:18:09-05:00'
sources: []
---

**Situation** – While leading a real‑time inference pipeline at my previous company, we had to stream high‑frequency sensor data from edge devices to a central model server. The latency target was under 50 ms and packet loss tolerance was up to 1%.  

**Task** – I needed to decide whether to use TCP, UDP, or QUIC for the transport layer so that the inference latency stayed within limits while keeping CPU usage low on the edge devices.  

**Action** – First, I benchmarked raw throughput and round‑trip times using a lightweight C++ client: TCP gave 1 Gbps but added ~30 ms head‑of‑line blocking; UDP dropped packets but required custom retransmission logic that increased CPU load by 25%. I then evaluated QUIC (via the quiche library) because it offers multiplexed streams, header compression, and in‑built congestion control. I implemented a minimal QUIC client on the edge device, configured 2 concurrent streams for sensor data and telemetry, and used UDP sockets under the hood. Profiling showed latency of ~15 ms and CPU usage only 10% higher than raw UDP, with built‑in loss recovery keeping packet loss below 0.5%.  

**Result** – Switching to QUIC reduced end‑to‑end inference latency by 60%, met our SLA, and cut edge device power consumption by 12% compared to the custom UDP retransmission approach. I learned that protocol choice can be as critical as model optimization in system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
