---
qid: ing_56e5b79cca__fp__local
question: 'Explain: Contrastive Learning — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 526
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:09:26-05:00'
sources: []
---

**Contrastive learning for embeddings**

At its core we want a *function* \(f\) that maps raw data \(x\in \mathcal X\) into a vector space \(\mathbb R^d\) such that *similar* pairs are close and *dissimilar* pairs far apart.  
The problem is that we rarely have explicit similarity labels; instead we possess *positive pairs* (e.g., two augmentations of the same image) and an abundance of negative examples.

**Why a contrastive loss works**

Let \(z_i=f(x_i)\). We define the probability that \(i\) selects \(j\) as its match from a set \(\mathcal C_i\) by a softmax over cosine similarities:

\[
p_{ij}=\frac{\exp(z_i^\top z_j / \tau)}{\sum_{k\in\mathcal C_i}\exp(z_i^\top z_k / \tau)} .
\]

Minimizing the negative log‑likelihood of true positives forces
\(\exp(z_i^\top z_{\text{pos}}/\tau)\) to dominate the denominator, i.e. the dot product (cosine similarity) with its partner must be larger than that with any other candidate by a margin governed by \(\tau\).  
This is precisely *max‑margin* optimization in a high‑dimensional Hilbert space: we are learning an embedding where each sample’s neighborhood is defined by angular distance.

**Geometric insight**

Because the loss only depends on inner products, the learned vectors lie on a sphere of radius \(r=\|z\|\). The training objective thus enforces *equidistribution* of points on that sphere while preserving local neighborhoods.  
A non‑obvious consequence: if we choose too many negatives per sample, the model will collapse to all points becoming orthogonal (cosine ≈ 0) to satisfy the margin—an effect called **negative saturation**.

**Deep principle**

Contrastive learning is an instance of *self‑supervised* representation learning. It leverages the *information bottleneck*: by forcing the embedding to encode only what is shared between two views, we discard view‑specific noise and retain semantically relevant structure. This is why contrastive methods excel at downstream tasks: they learn a *probability kernel* that captures intrinsic data geometry without labels.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
