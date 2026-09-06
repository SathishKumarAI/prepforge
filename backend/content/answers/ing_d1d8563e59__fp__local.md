---
qid: ing_d1d8563e59__fp__local
question: 'Explain: Training memory math (why you can''t full-fine-tune 7B on a 24
  GB card)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 516
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:26:39-05:00'
sources: []
---

**Why a 7 B‑parameter model can’t be fully fine‑tuned on a single 24 GB GPU**

1. **Parameter storage** – A 7 B transformer needs *≈*28 GB in float32 (4 bytes each). Even with mixed precision (float16) it still requires ≈14 GB for the weights alone.

2. **Optimizer state** – Optimisers such as Adam keep two auxiliary vectors per weight (first‑ and second‑moment estimates). That doubles the memory: 7 B × 2 × 4 bytes = 56 GB in float32, or 28 GB in float16. On a 24 GB card this already exceeds capacity.

3. **Activations** – Backpropagation must keep every hidden state for gradient computation. For an average sequence length *L* and hidden size *H*, the activation tensor per layer is *O(L·H)*. With deep transformers (≈30 layers) this can add 10–15 GB or more, depending on batch size.

4. **Gradient accumulation & parallelism** – To use a larger effective batch, we accumulate gradients over several micro‑batches, but each micro‑batch still consumes the full activation memory. The optimizer state remains unchanged, so it never shrinks.

5. **Deep‑learning‑specific overheads** – CUDA graph handles, workspace buffers for fused ops, and intermediate tensors further inflate usage by a few GB.

Putting these together:  
28 GB (weights) + 14 GB (Adam moments in float16) + ~10 GB (activations) ≈ 52 GB > 24 GB. Even aggressive tricks like *gradient checkpointing* (re‑computing activations on the fly) only reduce activation memory; optimizer state still dominates.

**Non‑obvious insight:**  
The bottleneck is **optimizer state, not weights or activations**. Many tutorials ignore this because they fine‑tune small models or use SGD (no moment estimates). For large models, *sharding the optimizer across devices* or using *memory‑efficient optimisers* (e.g., LAMB with ZeRO‑2) is essential; otherwise, the GPU’s RAM becomes a hard wall regardless of how much compute you add.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
