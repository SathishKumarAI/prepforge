---
qid: ing_e6dd24b2b4__faang__local
question: 'Explain model merging: task arithmetic, TIES, DARE and SLERP. When does
  merging actually work?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 549
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:36:28-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *model‑merging* techniques—task arithmetic, TIES, DARE, and SLERP—and under what conditions they actually succeed. Assume the models share architecture and training data; we want a single model that preserves each task’s performance.

**Approach**  
1. Summarize each method’s idea.  
2. Identify the mathematical assumptions (e.g., linearity, orthogonality).  
3. State when those assumptions hold in practice.

**Depth**  

| Method | Core Idea | When It Works |
|--------|-----------|---------------|
| **Task Arithmetic** | Add or subtract *difference vectors* between task‑specific checkpoints: `M = M_base + Σ(Δ_i)`. | Tasks are linearly separable; the parameter space is approximately linear and gradients for each task point to different directions. |
| **TIES (Task‑Incremental Embedding Smoothing)** | Interpolate embeddings of new tasks into a shared latent space while preserving older ones via regularization. | When embedding spaces of tasks overlap smoothly; the shared latent manifold captures all tasks without sharp jumps. |
| **DARE (Discriminative Adaptive Regularization for Ensembles)** | Use an auxiliary discriminator to enforce that merged weights generate outputs indistinguishable from each task’s own model. | Tasks have similar output distributions and the discriminator can learn a good decision boundary—works best when tasks are related but not identical. |
| **SLERP (Spherical Linear Interpolation)** | Interpolate on the hypersphere: `M(t)=sin((1−t)θ)/sinθ * w₁ + sin(tθ)/sinθ * w₂`. | When model weights lie on a low‑curvature manifold; preserves norm and avoids exploding norms during interpolation. |

**Edge Cases**  
- Highly divergent tasks (e.g., vision vs. language) break linear assumptions → task arithmetic fails.  
- Overfitting in TIES if regularizer is too weak; under‑regularization in DARE leads to catastrophic forgetting.  
- SLERP can still drift if the manifold curvature is high.

**Optimize & Communicate**  
Start with a sanity check: compute cosine similarity between task weight vectors. If high, proceed with linear merging; otherwise fallback to ensemble or fine‑tuning. Emphasize that empirical validation (validation loss per task) remains essential—no method guarantees success without data‑driven confirmation. This structured reasoning showcases problem framing, technical depth, and practical insight expected at FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
