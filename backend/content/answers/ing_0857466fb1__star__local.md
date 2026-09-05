---
qid: ing_0857466fb1__star__local
question: 'Explain: Stack (7 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 393
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:45:37-05:00'
sources: []
---

**Situation**  
At my last internship I was tasked with building a lightweight ML inference pipeline for an edge device that had only 256 MB of RAM and no GPU. The product manager insisted the model must run in under 50 ms on the device, but our initial TensorFlow Lite build hit 120 ms and used 180 MB.

**Task**  
I needed to reduce latency below 50 ms while keeping accuracy within 2% of the baseline and fitting the memory budget. The project required applying a stack‑based optimization approach: quantization, pruning, knowledge distillation, model architecture tweaking, batch size control, operator fusion, and dynamic graph execution.

**Action**  
I first performed post‑training quantization to int8, cutting size by 40 % and latency by ~30 %. Next, I applied structured pruning (80 % sparsity) guided by L1‑norm importance, then fine‑tuned the remaining weights. To further shrink the model, I swapped the ResNet backbone for MobileNetV3 using knowledge distillation from the original network. I also enabled operator fusion in TensorRT and set a micro‑batch size of 1 to avoid buffering overhead. Finally, I profiled the graph to identify bottlenecks and removed redundant ops.

**Result**  
The final model ran at 42 ms with only 140 MB memory usage, staying within the 2% accuracy loss target (0.9 % drop). The team adopted this stack‑based pipeline for production releases, and I documented a reusable recipe that cut deployment time by 35 %. This experience taught me how to layer multiple optimization techniques systematically rather than cherry‑picking one trick.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
