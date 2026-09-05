---
qid: ing_37971d3f60__fp__local
question: When does model merging work, and what's actually going on underneath?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 415
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:02:35-05:00'
sources: []
---

**Why and when can we merge two neural nets?**

At the heart of a trained model is a *distribution* over its parameters that approximates the posterior \(p(\theta|D)\) induced by data \(D\).  
When two models, say \(\theta_A\) and \(\theta_B\), are trained on disjoint or complementary datasets, their posteriors overlap in regions of high probability density. Merging—typically a weighted average or more elaborate Bayesian averaging—replaces each posterior with a mixture that still concentrates where both posteriors agree.  
If the overlap is substantial (e.g., similar task, compatible inductive biases), the mixture remains unimodal and the resulting network can retain performance: the gradient directions from either model are consistent, so interpolation in parameter space follows a low‑loss ridge.  

**What actually happens under the hood?**

1. **Parameter alignment:** Before averaging we align layers (e.g., via permutation or optimal transport) so that analogous neurons occupy the same indices; otherwise the average collapses useful features into noise.  
2. **Implicit ensembling:** The merged weights are a point estimate of a *Bayesian model average*; downstream inference behaves like an ensemble, reducing variance and bias.  
3. **Regularization by contraction:** Averaging pulls parameters toward each other, effectively imposing an \(\ell_2\) penalty that smooths the loss landscape.

**Non‑obvious insight**

The success hinges not on the *size* of overlap but on its *geometry*: a narrow ridge of high probability allows interpolation without crossing sharp valleys. Even when individual posteriors are multi‑modal, as long as the modes align along a low‑dimensional manifold, merging can traverse that manifold safely. Thus, model merging is fundamentally about *geometric alignment* in parameter space rather than mere statistical similarity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
