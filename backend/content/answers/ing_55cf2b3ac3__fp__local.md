---
qid: ing_55cf2b3ac3__fp__local
question: What does TensorRT / TensorRT-LLM actually do to a model to make it faster
  - and when will it *not* help?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 583
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:07:15-05:00'
sources: []
---

TensorRT is a *runtime compiler* for neural‑networks, not a model trainer.  
At its core it tackles the same problem every GPU inference engine faces: **map an abstract computation graph onto the fastest sequence of CUDA kernels while respecting memory bandwidth and occupancy limits**.

1. **Graph canonicalisation** – TensorRT rewrites the user’s model into a DAG of *canonical* operations (e.g., `Conv2D`, `MatMul`, `ReLU`).  
2. **Precision selection & calibration** – It chooses the lowest‑precision format that preserves accuracy, often FP16 or INT8, and runs a small calibration pass to compute per‑tensor scaling factors. This reduces arithmetic load and memory traffic.  
3. **Layer fusion** – Consecutive ops that can be expressed as one kernel (e.g., `Conv2D + BatchNorm + ReLU`) are fused, eliminating intermediate buffers and launch overhead.  
4. **TensorRT‑LLM specific optimisations** – For transformer‑style LLMs it fuses the attention sub‑graph into a single GEMM+softmax kernel, applies *kernel auto‑tuning* to pick the best CUDA block size for each layer, and uses *tensor‑core‑aware* math.  
5. **Memory layout optimisation** – It reorders tensors to keep them in contiguous GPU memory, avoiding costly copies.

The engine’s performance hinges on **computational intensity**: models that spend most of their time in a few large GEMMs benefit the most; models dominated by tiny ops or irregular control flow see little gain because kernel launch latency dominates.  
If a model contains unsupported ops, dynamic shapes that force fallback to generic kernels, or is already memory‑bound (e.g., huge embeddings with sparse updates), TensorRT’s optimisation surface shrinks and it may not help.

**Non‑obvious insight:** TensorRT does *not* compress the model; it merely finds the most efficient way to execute the same arithmetic. Thus, any speedup comes from better kernel scheduling, lower precision, or reduced memory traffic—not from cutting parameters or layers. This explains why a well‑quantised 8‑bit ResNet can run 4× faster on TensorRT while an unoptimised FP32 model may see negligible improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
