---
qid: ing_02d5206c1f__fp__local
question: 'Explain: Two Common Types of Fine-Tuning — Fine-Tuning Explained for Noobs
  (How Pretrained Models Learn New Skills)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 447
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:11:08-05:00'
sources: []
---

**Fine‑tuning is the bridge between a generic learner and a task‑specific expert.**  
At its core we have a pretrained transformer that has already solved the *general* problem of mapping tokens to predictions via millions of gradients on a broad corpus. The model’s internal representation space is thus a high‑dimensional manifold capturing syntax, semantics, and world statistics. Fine‑tuning reshapes only a small portion of this manifold so that it aligns with the loss surface of a new objective.

### 1. **Full‑model fine‑tuning (gradient descent over all parameters)**  
*Why it works:* Every parameter contributes to the manifold’s geometry; adjusting them jointly allows the model to carve a new optimal basin while preserving useful priors.  
*Deeper principle:* It is an instance of *continual learning* where we perform joint optimization on two loss terms: the original pretraining loss (regularizer) and the task loss. This keeps the manifold from drifting too far, akin to elastic regularization in Bayesian inference.

### 2. **Adapter‑based fine‑tuning (injecting small trainable modules)**  
*Why it works:* The pretrained weights act as a fixed backbone; adapters only tweak local affine maps that re‑weight activations along a few latent directions. Because the backbone already encodes most of the world knowledge, we need to adjust only a tiny subspace to fit the new task.  
*Deeper principle:* This is an efficient *low‑rank projection* of the gradient onto a low‑dimensional subspace, exploiting the observation that task‑specific updates lie in a manifold of rank ≈ O(1) relative to model size.

**Non‑obvious insight:** Adapter modules implicitly enforce **parameter efficiency through group sparsity**. Each adapter learns a sparse pattern of which hidden dimensions are most informative for the new task; this sparsity emerges automatically because the training objective penalizes unnecessary weight changes, effectively performing feature selection in high‑dimensional latent space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
