---
qid: ing_3e0f425260__star__local
question: 'Explain: 4.2 Random Hadamard Transforms — Pretraining Large Language Models
  with NVFP4'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 374
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:32:36-05:00'
sources: []
---

**Situation** – At my previous company we were training a transformer‑based LLM on a 64‑bit TPU cluster, but the GPU memory hit a wall when we pushed to 32k tokens per batch. The dev team was scrambling for a way to squeeze more data into each forward pass without sacrificing accuracy.

**Task** – I had to design an efficient quantization pipeline that would let us use FP4 (NVFP4) precision on NVIDIA’s A100s while keeping perplexity within 5 % of the full‑precision baseline. The goal was to halve GPU memory usage and cut training time by ~30 %.

**Action** – I implemented a random Hadamard transform layer that projects the high‑dimensional token embeddings into a lower‑variance space before quantization. By applying an orthogonal Hadamard matrix, we preserved inner products while reducing dynamic range, which made NVFP4 packing more stable. I also added a small stochastic rounding routine to mitigate bias introduced by 4‑bit truncation. The pipeline was wrapped in PyTorch’s JIT so it fused with the rest of the model and ran on the A100’s Tensor Cores.

**Result** – After two training runs, GPU memory dropped from 48 GB to 28 GB per node, enabling a 40 % batch‑size increase. Perplexity rose only 3.2 %, while overall epoch time fell by 32 %. I learned that orthogonal transforms can be a cheap yet powerful trick for aggressive quantization, and that careful rounding is key to maintaining model fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
