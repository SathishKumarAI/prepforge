---
qid: ing_0c106eb1b4__star__local
question: 'Explain: Um, and try to avoid disseeks if — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 260
total_tokens: 506
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:52:52-05:00'
sources: []
---

**Situation:** While leading a cross‑functional team on Google's new recommendation engine, we noticed our model’s latency was creeping above the 100 ms SLA during peak traffic, threatening user experience.

**Task:** I had to redesign the inference pipeline so it met the latency target without sacrificing accuracy or increasing infrastructure costs.

**Action:** First, I profiled the entire stack using Cloud Profiler and identified that TensorFlow Serving’s default batching strategy was suboptimal for our sparse feature set. I introduced a custom inference service written in Rust, leveraging ONNX Runtime for faster CPU execution, and implemented dynamic batching with a 5 ms trigger to keep latency low while still aggregating enough requests for throughput. I also added an A/B testing framework in Cloud AI Platform to monitor accuracy drift in real time.

**Result:** The new pipeline reduced average inference latency from 210 ms to 85 ms, keeping the SLA margin and saving $1.2M annually on compute resources. This taught me that micro‑optimizing at the system level—profiling, language choice, dynamic batching—is often more cost‑effective than simply scaling hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
