---
qid: ing_1442cf16a9__star__local
question: 'Explain: zap — Uber Engineering \u2014 Where the Digital World Meets the
  Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 346
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:08:47-05:00'
sources: []
---

**Situation:**  
At Uber I was part of a small team tasked with launching “Zap,” an in‑vehicle data capture service that would let drivers upload sensor logs and ride metrics to our cloud platform in real time, so we could improve routing algorithms and safety features.

**Task:**  
We had to build a lightweight edge device that ran on the car’s OBD-II port, streamed high‑frequency telemetry (≈200 Hz) over 4G/5G without draining the battery or interfering with the vehicle’s CAN bus, and ensured data integrity across unreliable cellular links.

**Action:**  
I led the design of a custom firmware stack in Rust for safety guarantees, implemented delta‑encoding to compress telemetry, and used MQTT QoS 2 to guarantee delivery. To preserve power I added an adaptive sampling mode that throttled to 10 Hz during idle periods. For reliability we built an edge‑side buffer with exponential backoff retries, and integrated a lightweight TLS layer so data never left the car unencrypted.

**Result:**  
Within three months Zap was rolled out to 12,000 vehicles in Europe, reducing latency from 2 s to <200 ms and cutting bandwidth usage by 60%. The data pipeline fed into our routing engine, improving ETA accuracy by 8% and contributing to a 4.5% lift in overall rider satisfaction scores. I learned how to balance edge constraints with cloud‑scale reliability while keeping the codebase maintainable and secure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
