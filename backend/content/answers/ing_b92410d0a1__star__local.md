---
qid: ing_b92410d0a1__star__local
question: 'Explain: Life at Abridge — Machine Learning Systems Engineer (Staff/Senior)
  @ Abridge | Colorwave Job Board'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 315
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:41:27-05:00'
sources: []
---

**Situation:** At my previous startup, we were launching a real‑time speech‑to‑text service for medical dictation. Our accuracy target was 98 % WER, but early tests hovered around 92 %, and the latency kept creeping past our 150 ms SLA.

**Task:** I had to redesign the inference pipeline so it met both accuracy and speed requirements while keeping the model size under 2 GB for edge deployment.

**Action:** First, I profiled the end‑to‑end system with PyTorch Profiler and identified that the convolutional front‑end was the bottleneck. I replaced the heavy 3×3 kernels with depthwise separable convolutions and pruned redundant channels using magnitude‑based pruning. To boost accuracy without increasing size, I fine‑tuned a distillation setup: a larger teacher model ran on the server while a lightweight student learned from its softened logits. I wrapped the inference in a Rust service exposed via gRPC, leveraging ONNX Runtime for efficient CPU execution.

**Result:** The new pipeline cut latency to 110 ms and raised WER to 97.8 %. Deployment succeeded on ARM‑based edge devices with only 1.6 GB of memory. I learned that careful profiling, architectural tweaks, and cross‑team collaboration (with devops for Rust deployment) are key to scaling ML systems in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
