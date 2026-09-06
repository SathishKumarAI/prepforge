---
qid: ing_d557f4e192__fp__local
question: 'Explain: Transfer Learning in Keras with Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 353
total_tokens: 530
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:33:58-05:00'
sources: []
---

**Transfer learning in Keras for computer‑vision models**  
The core problem is *data scarcity*: training a deep CNN from scratch requires millions of labeled images to estimate ~10⁶ weights without overfitting. In practice we often have only thousands, so the loss surface becomes highly ill‑posed.  

Keras solves this by reusing a **pre‑trained backbone** (e.g., ResNet50) that has already minimized a surrogate objective—ImageNet classification. Its convolutional layers encode generic visual primitives (edges, textures, shapes). By *freezing* these early weights and attaching a new dense head tuned to the target task, we effectively perform **regularized transfer**: we constrain the solution space to a manifold spanned by the pre‑trained features, thereby reducing variance.  

This is an instance of **Bayesian prior learning**: the ImageNet weights act as a prior distribution over parameters; fine‑tuning updates this posterior with new data. The deep network’s hierarchical feature hierarchy embodies a *representation learning* principle—lower layers capture invariant patterns useful across domains.

**Non‑obvious insight:**  
Fine‑tuning *only* the last few convolutional blocks (not all) often yields better generalization than freezing everything. Because those deeper layers are already tuned to high‑level semantics, slight adaptation allows them to reconcile domain shift while preserving low‑level invariants. This subtle “partial‑freeze” strategy balances bias–variance trade‑off more effectively than the common “freeze‑all/replace‑head” approach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
