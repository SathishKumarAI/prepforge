---
qid: ing_5a7ad12077__fp__local
question: 'Explain: Coarse-grained roles don’t provide enough resolution'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 466
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:16:35-05:00'
sources: []
---

In supervised learning we view the data as a set of feature vectors \(\mathbf{x}\) paired with labels \(y\).  
The **objective** is to learn a mapping \(f:\mathcal{X}\rightarrow\mathcal{Y}\) that generalises beyond the training samples.  

A *coarse‑grained* role (e.g., “image” or “text”) treats every instance of that category as homogeneous. Formally, we impose a prior that all \(\mathbf{x}\in\mathcal{X}_{\text{cat}}\) share the same feature distribution \(p_{\text{cat}}(\mathbf{x})\).  
This is equivalent to projecting the high‑dimensional data onto a single latent factor:  

\[
f_{\text{coarse}}(\mathbf{x}) \approx g(z),\qquad z = \phi(\mathbf{x}),\; \phi:\mathcal{X}_{\text{cat}}\rightarrow \mathbb{R}.
\]

Because \(z\) collapses many distinct sub‑clusters into one dimension, the *mutual information* \(I(\mathbf{x};y)\) that can be captured is bounded by \(H(z)\), which is far smaller than \(H(\mathbf{x})\). Consequently, any decision boundary derived from \(f_{\text{coarse}}\) cannot separate classes that differ only within a coarse category.

The deeper principle here is **information bottleneck**: the capacity of an encoder must match the *intrinsic* dimensionality required to encode class‑relevant variations. Coarse roles impose an artificial bottleneck, discarding fine‑grained structure that carries discriminative power.

**Non‑obvious insight:**  
Coarsening also biases the model toward *average* features of a category. In high‑dimensional spaces, averages lie in low‑density regions; thus the learned decision surface is pushed into the “void” between true class manifolds, increasing susceptibility to adversarial perturbations and reducing calibration. Fine‑grained roles keep the encoder near the manifold where data actually reside, yielding more robust and interpretable decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
