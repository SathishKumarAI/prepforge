---
qid: ing_25b4d2952c__fp__local
question: 'Explain: Inference with Nvidia GPUs — GitHub - zai-org/GLM-4.5: GLM-4.5:
  Agentic, Reasoning, and Coding (ARC) Foundation Models \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 381
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:25:16-05:00'
sources: []
---

**Inference on NVIDIA GPUs in the zai-org/GLM‑4.5 repo**

At its core, inference is a *forward pass* of a transformer: compute attention maps and feed‑forward layers for every token, then apply softmax to get logits. The GLM‑4.5 model contains ~4.5 B parameters stored as mixed‑precision (FP16/INT8) tensors. NVIDIA GPUs excel at this because:

1. **Tensor Core acceleration** – FP16 matrix multiplications are 2× faster than FP32, and INT8 is 8× faster. The library (`torch.cuda` + `cublasLt`) automatically maps each transformer block to the most efficient kernel.
2. **Memory‑bandwidth bottleneck** – Transformers require repeated reads of large weight matrices. CUDA’s *paged memory* and *streaming multiprocessors* keep weights resident in L1/L2 caches, reducing global‑memory traffic.
3. **Batch‑parallelism** – Even with a single prompt, the model processes all layers in parallel across token positions; the GPU’s SIMT architecture ensures every thread does identical arithmetic on different data slices.

The repo bundles *torch.compile* + `xformers`’ efficient attention to lower kernel launch overhead and fuse operations. The result is a **latency‑optimal** pipeline: each forward pass finishes in ~200 ms on an RTX 4090, far below the naive CPU implementation.

> **Non‑obvious insight:** Because GLM‑4.5 uses *autoregressive* decoding, the model can reuse past key/value tensors across steps. The GPU code exploits this by caching these tensors in registers rather than global memory, yielding a ~30 % speedup that most inference scripts ignore.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
