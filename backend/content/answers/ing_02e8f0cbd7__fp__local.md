---
qid: ing_02e8f0cbd7__fp__local
question: What is TensorRT-LLM? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 400
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:11:16-05:00'
sources: []
---

**TensorRT‑LLM: a runtime for fast, low‑latency language models**

The core problem in deploying large‑scale transformers is the *mismatch* between their training graph (high‑precision, dense matrix multiplications) and inference constraints (real‑time latency, limited GPU memory). TensorRT‑LLM rewrites the transformer computation as a sequence of fused kernels that exploit **tensor‑core acceleration** while respecting the model’s *attention sparsity* and *layer‑wise quantisation*.

1. **Graph optimisation** – It compiles the PyTorch or ONNX graph into an **engine** that merges consecutive GEMMs, bias‑additions, and activation functions into single CUDA kernels. This reduces launch overhead to a few microseconds per layer.
2. **Quantisation & sparsity** – By analysing the *entropy* of weight distributions, it automatically selects 8‑bit or mixed‑precision schemes that preserve perplexity while cutting memory bandwidth by ~4×. It also prunes low‑attention‑weight connections, turning dense attention into a sparse matrix multiply that saves compute.
3. **Memory layout** – The runtime rearranges tensors into *column‑major* formats optimal for NVIDIA’s Tensor Cores, ensuring contiguous memory accesses and eliminating padding.

A non‑obvious insight: **the transformer’s self‑attention can be expressed as a batched GEMM with a softmax mask that is almost always zero except for the top‑k entries**. TensorRT‑LLM exploits this by performing *top‑k selection* on the GPU before the matrix multiply, reducing the effective sequence length from $N$ to $k$, which yields linear speedups in practice.

In short, TensorRT‑LLM is a compiler + runtime that turns a training‑grade transformer into an inference‑grade engine without manual tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
