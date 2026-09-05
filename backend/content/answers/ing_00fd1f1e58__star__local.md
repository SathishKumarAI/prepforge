---
qid: ing_00fd1f1e58__star__local
question: 'Explain: When to Use Pub/Sub — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 325
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:30:34-05:00'
sources: []
---

**Situation:** At my last company we built a real‑time recommendation engine for an e‑commerce platform that had to process ~10,000 user events per second during peak traffic. Our existing monolithic batch pipeline couldn’t deliver low latency or handle the spike without throttling.

**Task:** I needed to decouple event ingestion from downstream ML inference so we could scale horizontally, guarantee at‑least‑once delivery, and maintain a clean separation of concerns while keeping end‑to‑end latency under 200 ms.

**Action:** We introduced Google Cloud Pub/Sub as the backbone. User actions were published to a “user‑events” topic; a pool of subscriber services (Python workers using TensorFlow Serving) pulled messages, ran feature extraction, and queried the inference model. To avoid duplicate predictions we added a deduplication key in message attributes and used Pub/Sub’s ack deadline extensions for long‑running jobs. We also set up dead‑letter topics to capture malformed events and automated scaling via Cloud Run triggers.

**Result:** Latency dropped from ~1 s batch to <150 ms real‑time, throughput increased 3× during traffic spikes, and error rates fell by 40% due to the dead‑letter mechanism. I learned that Pub/Sub’s decoupling and built‑in reliability are ideal for ML pipelines where data velocity exceeds processing capacity, but careful ack management is essential to avoid duplicate inferences.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
