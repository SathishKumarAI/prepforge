---
qid: ing_e97dd90a05__fp__local
question: 'Explain: FlashAttention-3 (FP8 & H100 Optimization)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 481
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:15:10-05:00'
sources: []
---

**FlashAttention‑3: Why FP8 on an H100 makes self‑attention linear in practice**

The core problem is that a naïve attention layer computes  
\(O(n^{2})\) dot products and then stores all \(n\times n\) scores, where \(n\) is the sequence length. On modern GPUs this quadratic memory dominates; it forces either *chunking* (extra communication) or *sparsity* (complex kernels).  

FlashAttention‑3 flips the order: it **streams** queries and keys through a single‑pass GEMM, generating each score on‑the‑fly and immediately applying softmax. Thus only \(O(n)\) intermediate activations survive in fast memory, and the kernel becomes *linear* in both time and space.

The H100’s Tensor Cores now support **FP8** (both 8‑bit weight and activation formats). In FlashAttention‑3 we quantize queries, keys, and values to FP8 with a learned per‑tensor scale. The softmax numerator is computed in *bfloat16* to preserve probability mass, while the denominator uses an approximate log‑sum‑exp that only requires a few extra reductions. Because the Tensor Cores can perform 8‑bit multiply‑accumulate at 4× the throughput of FP32, the overall speedup becomes *hardware‑bound*: latency is limited by memory bandwidth rather than compute.

**Non‑obvious insight:**  
The quantization error introduced by FP8 does not simply add a constant bias; it **shifts the softmax distribution’s peak**. FlashAttention‑3 compensates by adaptively scaling each query row before softmax, effectively *re‑normalizing* the logits to counteract the quantization drift. This subtle re‑scaling preserves attention quality even when the underlying dot products are only 8‑bit accurate.

In short, FlashAttention‑3 turns quadratic attention into a streaming, FP8‑friendly kernel that sits squarely on the H100’s Tensor Core sweet spot, delivering order‑of‑magnitude throughput without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
