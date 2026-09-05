---
qid: ing_1ede860bbf__fp__local
question: About 10% of your training labels are wrong. What happens, and what do you
  do about it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 615
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:11:51-05:00'
sources: []
---

**What happens when ~10 % of labels are wrong?**

At the core, supervised learning minimizes an empirical risk  
\(R(\theta)=\frac1N\sum_{i}\ell(f_\theta(x_i),y_i)\).  
If a fraction \(\epsilon\) of \(y_i\) are corrupted, the loss no longer reflects true data‑generating process. For convex losses (e.g., cross‑entropy), wrong labels contribute gradients that pull the parameters toward *incorrect* decision boundaries. This introduces a bias proportional to \(\epsilon\); variance increases because the model tries to fit noise rather than signal. In deep nets, large \(\epsilon\) causes memorization of mislabeled samples—an overfitting regime where training loss can still drop while test performance plateaus or degrades.

**Why it must be handled specially**

The learning objective assumes i.i.d. labels; label noise violates this assumption, breaking the convergence guarantees that hinge on unbiased gradients. Thus, a naive optimizer will chase an ill‑posed target distribution.

**Practical remedies (derived from the same principle)**

| Strategy | Principle | Key idea |
|----------|-----------|----------|
| **Robust loss functions** (e.g., mean absolute error, generalized cross‑entropy) | Down‑weight large residuals → reduces influence of mislabeled points | Replace \(\ell\) with a concave surrogate so that high‑loss samples contribute less to the gradient |
| **Co‑Teaching / MentorNet** | Use two networks to mutually identify clean data | Each network trains on the subset it deems “most confident,” implicitly filtering noise |
| **Semi‑supervised consistency regularization** | Leverage unlabeled or weakly labeled data as a prior | Enforce that predictions remain stable under perturbations, discouraging overfitting to noisy labels |
| **Label smoothing / soft targets** | Regularize the target distribution | Replace hard 0/1 labels with \((1-\alpha)\) for true class and \(\alpha/(K-1)\) for others, reducing the penalty of mis‑labelled samples |

**Non‑obvious insight**

Even a small noise level (≈10 %) can dominate learning if the model capacity is high enough to memorize. The *effective* training signal then comes from the *clean* subset; thus, any method that **identifies and concentrates on clean examples**—whether via robust losses or co‑teaching—acts as an implicit *data‑cleaning* step. This reframes label noise handling not merely as a regularization trick but as an active **subset selection problem** governed by the same bias–variance trade‑off that drives all supervised learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
