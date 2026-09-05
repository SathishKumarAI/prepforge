---
qid: ing_7d427937d8__star__local
question: 'Explain: Um, another important thing that is uh — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 317
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:44:17-05:00'
sources: []
---

**Situation** – While leading a cross‑functional team on the Google Ads recommendation engine, we hit a plateau: model latency was 350 ms per request and throughput dropped below our SLA of 10k QPS during peak hours.

**Task** – I had to redesign the inference pipeline so that it met the latency target (<200 ms) and could scale to 30k QPS without compromising accuracy.

**Action** – First, we profiled with *TensorFlow Lite* and identified a bottleneck in the feature extraction stage. I introduced a lightweight C++ microservice using *ONNX Runtime* to offload that step, while keeping heavy‑weight models on GPU nodes managed by *Kubeflow*. We switched from eager execution to graph mode and applied mixed‑precision (FP16) training to reduce model size by 40 %. To keep data consistency, I implemented a feature store with *Spanner* for low‑latency joins. Finally, we automated A/B tests in production using *Google Cloud Monitoring* dashboards to catch drift early.

**Result** – Latency dropped to 140 ms and throughput rose to 35k QPS, exceeding the SLA by 40 %. Accuracy remained within 0.3 % of the baseline. I learned that micro‑service isolation combined with precision tuning can unlock significant performance gains in large‑scale ML systems without sacrificing model quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
