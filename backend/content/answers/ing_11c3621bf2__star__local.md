---
qid: ing_11c3621bf2__star__local
question: 'Explain: Latency Estimation — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 350
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:04:16-05:00'
sources: []
---

**Situation** – At my last company we were rolling out a real‑time fraud detection model for credit card transactions. The SLA required a prediction latency of under 50 ms per request, but our initial benchmark from the training cluster was 120 ms on average.

**Task** – I had to produce a quick back‑of‑the‑envelope estimate to identify whether we could meet the SLA with the current architecture or if we needed architectural changes.

**Action** – I broke the pipeline into three stages: data ingestion (10 µs per record), feature extraction (≈30 µs), and model inference (≈60 µs on a single CPU core). Using Python’s `timeit` and profiling tools, I measured each stage at 1‑kHz load. Then I multiplied the worst‑case time by the expected concurrency (10 requests per second) to get an upper bound of ~600 ms. Recognizing that inference dominated, I tested a quantized ONNX version on a GPU and saw inference drop to 15 µs. Recalculating gave ~250 ms total—still above target but now within a feasible margin for scaling.

**Result** – The back‑of‑the‑envelope exercise highlighted the bottleneck early, saved us 3 weeks of trial‑and‑error, and led to deploying a GPU pool that ultimately brought latency down to 35 ms. I learned that simple arithmetic, combined with micro‑benchmarks, can quickly steer system design decisions before full‑scale implementation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
