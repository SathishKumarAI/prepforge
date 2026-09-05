---
qid: ing_99ab90101d__star__local
question: 'Q: How would you estimate GPU requirements for serving a model?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 385
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:40:03-05:00'
sources: []
---

**Situation** – In my last role I was tasked with deploying a vision‑model that needed to serve 10k requests per second for an e‑commerce product search app. The existing GPU pool was underutilized and the engineering budget was tight.

**Task** – Estimate how many GPUs (and what size) were required to meet the target latency of 150 ms while keeping costs below $2,000/month.

**Action** – I first profiled a single inference on our dev cluster using PyTorch’s `torch.profiler`, measuring FLOPs and memory usage per image. Then I built a lightweight benchmark harness with `ONNX Runtime` that could run variable batch sizes (1–64) and logged GPU utilisation, throughput, and latency. Using the benchmark I performed a load‑test simulation with k6 to mimic 10k QPS, recording the peak GPU utilisation at each batch size. I plotted utilisation vs. batch size and identified the sweet spot where GPUs were >70 % busy but latency stayed under target. From that curve I extrapolated that four NVIDIA T4s would suffice, adding a buffer of one spare GPU for maintenance.

**Result** – We launched with 5 GPUs (four active + one spare) and achieved 145 ms average latency at full load, costing $1,800/month—10% under budget. The exercise taught me the value of profiling, realistic batching, and using open‑source runtimes to bridge development and production estimates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
