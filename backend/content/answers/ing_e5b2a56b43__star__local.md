---
qid: ing_e5b2a56b43__star__local
question: 'Explain: TensorRT-LLM: Peak NVIDIA Throughput, Operational Cost'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 397
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:07:14-05:00'
sources: []
---

**Situation**  
In my last role as a DevOps engineer for a fintech startup, we had to deploy an LLM‑powered fraud detection model that processed ~10,000 user transactions per second in real time. Our existing inference pipeline on V100 GPUs was hitting 3 ms latency but the monthly GPU bill ballooned to $12k.

**Task**  
I needed to cut inference cost by at least 30% while maintaining or improving throughput and keeping latency under 5 ms per request.

**Action**  
I ported the model from PyTorch to TensorRT‑LLM, leveraging its mixed‑precision (FP16/INT8) kernels. First, I used `trtexec` to profile the graph, identifying a 40 % slowdown on the attention layer due to suboptimal tensor shapes. I reshaped tensors and enabled TensorRT’s dynamic shape optimizations. Next, I compiled the engine with the “TensorRT‑LLM” plugin for efficient rotary embeddings, reducing kernel launch overhead by ~25%. Finally, I migrated from V100s to A10 GPUs, using NVIDIA’s multi‑instance GPU (MIG) feature to run three isolated inference instances per card.

**Result**  
Peak throughput jumped from 3.2k tokens/s to 8.5k tokens/s on the same hardware, and latency dropped to 2.1 ms. Switching to A10s cut the monthly GPU cost from $12k to $7.4k—a 38% savings—while keeping the model within SLA limits. I learned that profiling early, exploiting TensorRT‑LLM’s kernel optimizations, and using MIG can drastically improve both performance and economics in production LLM deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
