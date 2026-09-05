---
qid: ing_827da5518e__star__local
question: 'Explain: Latency Numbers Every Programmer Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 324
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:54:24-05:00'
sources: []
---

**Situation:**  
While leading a product team at my last company, we were rolling out a real‑time recommendation engine for our e‑commerce app. The engineering manager insisted that the new model must not add more than 50 ms to page load times, otherwise user churn would spike.

**Task:**  
I had to benchmark and reduce inference latency from an initial 120 ms per request—well above the target—without sacrificing accuracy (we were at 87 % precision). The goal was to bring it below 45 ms while keeping the model’s F1 score ≥0.85.

**Action:**  
First, I profiled the pipeline with PyTorch’s `torch.profiler` and discovered that tensor allocations and a 2‑layer fully connected network were bottlenecks. I replaced the heavy layers with a lightweight depthwise separable convolution and moved to ONNX Runtime for inference. Then I applied batch‑norm folding and quantized weights to int8, using NVIDIA TensorRT to fuse kernels. Finally, I added async GPU streams so that inference ran concurrently with data fetching.

**Result:**  
Latency dropped from 120 ms to **32 ms** per request—a 73% reduction—while the model’s F1 score stayed at 0.86. User engagement rose by 12%, and we avoided a projected $2M churn cost. I learned that profiling early, simplifying architecture, and leveraging hardware‑specific runtimes are key to meeting tight latency budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
