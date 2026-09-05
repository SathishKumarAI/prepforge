---
qid: ing_c2d7d213d9__star__local
question: 'Explain: Measuring Latency — Latency vs Throughput vs Bandwidth | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 315
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:59:28-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we were rolling out a real‑time fraud detection service that had to process every transaction within 150 ms or risk missing suspicious activity. The previous batch pipeline was too slow; our latency target was not met, and throughput dropped during peak hours.

**Task:** I needed to redesign the system so it achieved sub‑200 ms end‑to‑end latency while still handling 10k transactions per second (throughput) without exceeding our network limits (bandwidth).

**Action:** I profiled the existing stack with *Jaeger* and identified a serialization bottleneck in the Kafka consumer. Switching to *Protobuf* reduced message size by 35 %, cutting bandwidth usage. Then, I re‑architected the inference step: moved the model into a lightweight TensorRT container on GPU instances and used async event loops (Python `asyncio`) to batch requests without blocking. Finally, I added a rate limiter that throttled incoming traffic during spikes, ensuring we never exceeded our 1 Gbps link.

**Result:** Latency dropped from 350 ms to 120 ms, throughput increased from 5k to 12k TPS, and bandwidth consumption fell by 30 %. The system now reliably flags fraud in real time. I learned that balancing latency, throughput, and bandwidth requires profiling, choosing the right serialization format, and leveraging async processing with hardware acceleration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
