---
qid: ing_771b5e01ef__star__local
question: 'Explain: Latency vs. Throughput — System Design: Top 15 Trade-Offs - by
  Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 346
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:32:10-05:00'
sources: []
---

**Situation** – I was leading the redesign of our real‑time fraud detection pipeline at FinTechCo. The existing batch model ran nightly, but regulators demanded instant decisions for every transaction (≈ 10k per second) with sub‑50 ms latency.

**Task** – Build a streaming inference service that meets both low latency and high throughput while staying within the $200k budget and 99.9% availability SLA.

**Action** – I first profiled the current model: inference took 120 ms on CPU, but GPU could drop it to 30 ms at the cost of higher memory. I experimented with quantization (int8) to reduce latency without accuracy loss. Then I sharded the model across a Kubernetes cluster, using gRPC for inter‑service calls and async batch aggregation to keep throughput high. To balance load, I implemented a dynamic scheduler that throttles requests when GPU queues exceed 500 ms, redirecting them to a lightweight CPU fallback. Finally, I set up Prometheus alerts on latency percentiles and used chaos engineering to validate resilience.

**Result** – Latency dropped from 120 ms to 35 ms (average) while throughput stayed above 12k TPS, meeting the SLA. The quantized GPU model saved 30% of compute costs, keeping us under budget. I learned that latency‑throughput trade‑offs are often solved by adaptive batching and dynamic resource allocation rather than a single monolithic optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
