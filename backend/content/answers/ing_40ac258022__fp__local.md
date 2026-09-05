---
qid: ing_40ac258022__fp__local
question: 'Explain: For whatever reason let''s say we increase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 443
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:22:01-05:00'
sources: []
---

### Why *Increasing Model Capacity* Must Work the Way It Does

When a supervised learner maps inputs \(x\) to outputs \(\hat{y}\), it is effectively solving an optimization problem over a function space \(\mathcal{F}\). The empirical risk minimizer
\[
f^* = \arg\min_{f\in\mathcal{F}}\frac1N\sum_{i=1}^N L(f(x_i),y_i)
\]
is constrained by the expressiveness of \(\mathcal{F}\). If \(\mathcal{F}\) is too small (e.g., a linear model for a highly nonlinear task), the **approximation error** dominates: no choice of parameters can reduce training loss below a certain floor. By increasing capacity—adding layers, neurons, or widening kernels—we enlarge \(\mathcal{F}\), thereby shrinking approximation error.

However, this comes at the price of higher **capacity complexity**, measured by Rademacher or VC‑dimension. A larger \(\mathcal{F}\) can fit noise, inflating **variance** and hurting generalization unless regularized or trained on more data. Thus the trade‑off is governed by **bias–variance decomposition**: increasing capacity reduces bias but may increase variance.

A non‑obvious insight: *capacity must be increased in a way that respects the geometry of the data manifold*. If we add parameters arbitrarily, the model learns to “wiggle” along irrelevant directions, wasting degrees of freedom. Instead, augmenting capacity with structure (e.g., residual connections or attention heads) aligns new expressiveness with the intrinsic dimensionality of the target function, achieving lower generalization error than a blind increase would.

In short: we raise capacity to shrink approximation error; we control variance via regularization and data; and we guide the added flexibility along the manifold that actually matters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
