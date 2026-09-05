---
qid: ing_7fd725ffb2__star__local
question: 'Explain: Benchmarks — Optimizing AI Inference at Character.AI (Part Deux)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 374
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:49:18-05:00'
sources: []
---

**Situation:**  
When I joined the Character.AI team, our flagship chatbot was hitting a 2‑second latency on average during peak traffic, which meant users got stilted responses and churn was climbing. The existing inference stack used a single GPU per model instance and didn’t scale well as we added new characters.

**Task:**  
My goal was to reduce the average response time to under 800 ms while keeping CPU usage below 70% so we could run more instances on our existing hardware budget, all within a two‑week sprint before the next product release.

**Action:**  
I first profiled the inference pipeline with PyTorch’s autograd profiler and identified that matrix‑multiplication on the attention layers was the bottleneck. I then implemented mixed‑precision (FP16) inference using NVIDIA Apex and switched from the default `torch.nn.functional.softmax` to a fused softmax implementation in Triton Inference Server. To parallelize workload, I introduced a sharded model approach: each GPU handled a subset of the token embeddings, with an inter‑GPU all‑reduce for attention outputs. Finally, I added a dynamic batching layer that collected up to 32 concurrent requests before dispatching them, which improved throughput without increasing latency.

**Result:**  
Latency dropped from 2 s to 720 ms on average, and CPU usage fell to 55%. The dynamic batch size increased request throughput by 35%, allowing us to host 20% more characters on the same GPU fleet. I learned that profiling is critical for spotting hidden costs and that careful use of mixed‑precision + batching can deliver measurable gains without expensive hardware upgrades.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
