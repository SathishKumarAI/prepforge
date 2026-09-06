---
qid: ing_aef02b2f0a__fp__local
question: 'Explain: Key Selection Factors — Model Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 503
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:16:35-05:00'
sources: []
---

**Key Selection Factors – A Model‑Selection Guide**

When a problem is posed—“predict the next word,” “classify images,” or “plan a route”—the underlying mathematical task is to approximate an unknown mapping \(f^*\) from inputs \(\mathcal{X}\) to outputs \(\mathcal{Y}\). The *model family* \(\{\hat f_\theta\}_{\theta\in\Theta}\) we choose must be expressive enough that there exists a parameter setting close to \(f^*\), yet constrained so that the empirical risk minimizer generalises. This trade‑off is governed by three principles:

1. **Capacity vs. Data** – The *VC dimension* or Rademacher complexity of \(\Theta\) quantifies how many patterns it can fit. If \(n\) training samples are scarce, a high‑capacity model overfits; if data are plentiful, richer families (e.g., deep nets) unlock better approximations.

2. **Bias–Variance Decomposition** – A highly regularised model (low bias, high variance) will err systematically on unseen data unless the true function is simple. Conversely, an under‑regularised model (high bias, low variance) may ignore subtle structure. The optimal point balances these terms, which can be formalised via *PAC‑Bayesian* bounds.

3. **Computational Geometry of Loss Landscapes** – Optimisation algorithms traverse a loss surface whose curvature depends on the architecture. Models with smooth, convex‑like landscapes (e.g., linear models) converge quickly but may miss complex patterns; highly non‑convex nets can represent richer functions but require careful initialization and regularisation to avoid local minima.

**Non‑obvious insight:** *Regularisation is not merely a penalty term—it shapes the *inductive bias* of the optimisation trajectory.* A small \(L_2\) weight decay forces gradients to remain in a subspace where parameters grow slowly, effectively pruning irrelevant features before overfitting can occur. This early‑stage bias steering explains why models with identical capacity but different regularisers often diverge dramatically in performance.

In practice, start by estimating data size versus model complexity, then iteratively tune regularisation while monitoring validation loss to keep the optimisation trajectory within a favourable basin of attraction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
