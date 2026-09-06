---
qid: ing_ccda025723__fp__local
question: 'Q: What is the risk of "Model Collapse" when training on synthetic data?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 396
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:15:46-05:00'
sources: []
---

**Model Collapse on Synthetic Data**

When a model is trained exclusively on synthetic samples, the loss minimization problem becomes ill‑posed: the training distribution \(\tilde{p}(x)\) diverges from the true one \(p(x)\). The optimiser therefore learns a function that interpolates \(\tilde{p}\), not \(p\). Because synthetic generators often collapse to a few “plausible” modes (e.g., limited pose or lighting variations), the learned decision surface can become brittle—small perturbations drive it into unseen regions, causing catastrophic misclassifications.  

Formally, let \(\theta^\ast = \arg\min_\theta \mathbb{E}_{x\sim\tilde{p}}[L(f_\theta(x),y)]\). If the Kullback–Leibler divergence \(D_{\text{KL}}(p\|\tilde{p})\) is large, the gradient of this objective has no incentive to generalise beyond \(\tilde{p}\)’s support. The model collapses onto a manifold that covers only synthetic artifacts, leading to *distributional shift* and *over‑confidence* on real data.

**Non‑obvious insight:**  
Synthetic generators often encode implicit priors (e.g., camera intrinsics). A model trained solely on such data learns these priors as if they were signal. When deployed, it misinterprets legitimate variations that violate the synthetic priors, producing *spurious confidence* rather than outright failure—a subtle, harder-to‑detect form of collapse.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
