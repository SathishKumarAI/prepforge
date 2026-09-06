---
qid: ing_4ebc2c2a7c__fp__local
question: 'Explain: What does it take, memory-wise, to fine-tune a 7B model? Compare
  full fine-tuning, LoRA, and QLoRA.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 472
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:52:43-05:00'
sources: []
---

Fine‑tuning a 7 B transformer is a memory‑budget problem that reduces to the size of the *trainable* tensors in each forward–backward pass.

| Method | Trainable parameters | Memory per GPU (≈8 GB) |
|--------|---------------------|------------------------|
| **Full** | 7 B (all weights) | 30–40 GB (requires ≥4×8 GB GPUs) |
| **LoRA** | \(k\times d\) rank‑\(k\) updates per layer (e.g. \(k=16,d=768\)) → ~0.2 M | 5–6 GB on a single GPU |
| **QLoRA** | Same LoRA tensors but stored in mixed precision (4‑bit) + optional quantised base model | 1–2 GB, can run on a single 8 GB card |

**Why this happens**

- Backpropagation needs both the activations and the *gradient* of every trainable weight.  
  For full fine‑tuning each of the ~7 B weights must be stored twice (forward + gradient), yielding ≈56 GB in FP32, plus activations (~30 GB) → >80 GB total.

- LoRA replaces most weights with low‑rank “delta” matrices. The base model is frozen and need not be duplicated; only the tiny \(k\times d\) matrices (≈0.2 M parameters) are stored twice, cutting memory by a factor of ~35.

- QLoRA further compresses these deltas to 4‑bit integers. Since gradients can still be accumulated in FP32 for stability, the memory footprint shrinks dramatically, allowing fine‑tuning on commodity GPUs.

**Non‑obvious insight**

The bottleneck is not the *model size* but the *gradient storage*. By keeping the bulk of the network frozen and only learning a tiny low‑rank subspace (LoRA/QLoRA), we transform a 7 B problem into a ~200 k parameter one, turning an otherwise impossible fine‑tune into a single‑GPU operation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
