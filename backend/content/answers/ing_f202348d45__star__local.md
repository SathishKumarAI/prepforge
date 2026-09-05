---
qid: ing_f202348d45__star__local
question: 'Explain: Used Mobiles, Tablets — Designing Data-Intensive Applications
  Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 371
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:32:07-05:00'
sources: []
---

**Situation** – At my last company we launched a health‑monitoring app for Android tablets that streamed real‑time ECG data to the cloud. The backend was built per *Designing Data‑Intensive Applications*, but our mobile clients were struggling with latency and battery drain when running on-device inference.

**Task** – I had to redesign the pipeline so that the tablet could perform quick anomaly detection locally, reducing round‑trips while keeping the model size under 10 MB. The goal was a <200 ms inference time and ≤5 % extra battery usage over baseline.

**Action** – First, I refactored the data ingestion layer to use protobuf streams instead of JSON, cutting payloads by 70 %. Then I ported our TensorFlow model to TensorFlow Lite with quantization, trimming it to 8.4 MB. On the tablet I implemented a background worker that buffers ECG samples in a circular queue and runs inference every 500 ms using the `Interpreter` API, offloading heavy ops to the NNAPI accelerator when available. For edge‑to‑cloud sync I used gRPC with flow control to avoid network spikes.

**Result** – In production we saw a 65 % drop in cloud traffic, inference latency fell to 140 ms on average, and battery consumption increased by only 3 %. The project also earned us the “Best Mobile Innovation” award at our annual tech summit. I learned that marrying data‑intensive architecture principles with mobile‑specific optimizations can deliver both scalability and a great user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
