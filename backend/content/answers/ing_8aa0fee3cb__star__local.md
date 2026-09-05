---
qid: ing_8aa0fee3cb__star__local
question: 'Explain: OpenAI System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 374
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:09:42-05:00'
sources: []
---

**Situation** – At my previous company we were asked to build a real‑time recommendation engine for a video streaming service with a target latency of 30 ms and a 99th‑percentile throughput of 10k requests per second, all while keeping model accuracy above 0.87 AUC.

**Task** – I had to design the system architecture that could ingest live user interaction data, update embeddings every hour, and serve predictions at scale without overloading GPU resources or compromising SLA.

**Action** – I started by profiling the current inference pipeline; it was bottlenecked in the feature‑store lookup. I replaced the monolithic SQL store with a Redis cluster keyed on user ID, adding an LRU eviction policy to keep hot keys resident. For model serving, I containerized the TensorFlow Serving backend and deployed it behind a Kubernetes autoscaler that spun up GPU nodes only when the request queue exceeded 1k. To reduce inference time, I pruned the embedding matrix using Singular Value Decomposition, cutting the dimensionality from 512 to 128 with only a 0.4 % drop in AUC. Finally, I added a Prometheus‑Grafana stack for real‑time monitoring and automated alerts on latency spikes.

**Result** – The new architecture cut average inference latency from 75 ms to 22 ms, pushed the 99th percentile below 30 ms, and sustained 12k RPS. Accuracy stayed at 0.875 AUC. I learned that a hybrid approach—combining cache optimization, model compression, and dynamic scaling—is often more effective than brute‑force hardware upgrades for FAANG‑level ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
