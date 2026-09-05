---
qid: ing_3e0f425260__fp__local
question: 'Explain: 4.2 Random Hadamard Transforms — Pretraining Large Language Models
  with NVFP4'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 377
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:16:33-05:00'
sources: []
---

**Random Hadamard Transforms in Pre‑Training with NVFP4**

The core problem is *efficiently projecting high‑dimensional token embeddings into a lower‑dimensional space* without destroying the geometry that governs language modeling. A linear projection \(W\in\mathbb{R}^{d\times k}\) (with \(k<d\)) would normally be learned, but learning such dense matrices is costly and prone to overfitting when \(d\) is huge.

A *Hadamard transform* \(H_d\) is an orthogonal matrix whose entries are \(\pm1/\sqrt{d}\). Multiplying a vector by \(H_d\) mixes all coordinates uniformly while preserving Euclidean norms (Parseval’s identity). Randomly flipping the signs of each column before applying \(H_d\) yields a *randomized orthonormal basis*. Because the transform is fast (\(O(d\log d)\)) and requires no trainable parameters, it serves as an implicit dimensionality reduction that still respects the inner‑product structure crucial for language modeling.

NVFP4 (NVIDIA’s 4‑bit floating‑point format) quantizes these transforms to 4 bits per coefficient. The key insight is that *quantization noise is isotropic* when applied after a random orthogonal transform: every direction in embedding space experiences the same variance, so the model can learn robustly without biasing any particular feature.

Thus, Random Hadamard Transforms + NVFP4 provide a principled, low‑cost pre‑training step that preserves geometry, reduces memory bandwidth, and accelerates training—an elegant marriage of linear algebra, information theory, and hardware constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
