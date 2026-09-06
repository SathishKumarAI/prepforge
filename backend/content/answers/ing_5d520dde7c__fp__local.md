---
qid: ing_5d520dde7c__fp__local
question: 'Explain: Title: FlashAttention: Fast and Memory-Efficient Exact Attention
  with IO-Awareness'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 492
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:22:58-05:00'
sources: []
---

**Why the “attention” problem needs a new algorithm**

In transformer‑style models we compute  
\(A = \operatorname{softmax}(QK^{\top}/\sqrt d)\,V\) for each layer.  
Naïvely this is \(O(n^2d)\) in time and requires storing all \(n^2\) scores, so a single GPU can handle only modest sequence lengths before memory or bandwidth becomes the bottleneck.

**The IO‑aware reformulation**

FlashAttention rewrites the matrix product as a *kernel‑wise* block operation:  
1. **Tile the queries** into small groups of rows that fit in shared memory.  
2. For each tile, stream its \(Q\) and all \(K,V\) once from global memory, compute the softmax on‑the‑fly, multiply by \(V\), and write back the partial result.  

Because every element of \(K\) and \(V\) is read exactly once per tile, the algorithm achieves **O(1)** memory traffic per operation instead of the quadratic “cache thrashing” of standard GEMM. This matches the *information‑theoretic* lower bound for computing the exact attention matrix.

**Why it is “exact” yet fast**

The softmax is evaluated in a numerically stable, per‑row fashion; no approximation (e.g., kernel tricks or low‑rank factorisation) is used. The only extra cost is a few extra registers to hold intermediate sums, but this is dwarfed by the savings from avoiding repeated global‑memory accesses.

**Non‑obvious insight**

The key trick is *per‑tile softmax*. By computing the maximum and sum of exponentials locally within each tile, FlashAttention avoids a costly global reduction that would otherwise serialize the algorithm. This local reduction turns the softmax into a simple, parallelizable operation, allowing the entire pipeline to run in a single kernel launch with minimal synchronization.

**Bottom line**

FlashAttention turns the quadratic‑memory attention problem into a linear‑traffic, shared‑memory–efficient kernel, proving that exact attention can be both fast and memory‑friendly when we respect the hardware’s IO constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
