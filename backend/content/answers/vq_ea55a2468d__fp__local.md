---
qid: vq_ea55a2468d__fp__local
question: What should you do if you're Overfitting or Underfitting?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 387
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:02:06-05:00'
sources: []
---

**Over‑ vs. under‑fitting: a principled guide**

The core objective of supervised learning is to minimize the *expected risk*  
\(R(f)=\mathbb{E}_{(x,y)\sim P}[L(y,f(x))]\).  
Because we only observe \(n\) samples, we approximate this by the *empirical risk*  
\(R_n(f)=\frac1n\sum_{i=1}^n L(y_i,f(x_i))\).  

- **Over‑fitting** occurs when the model’s capacity is so large that it minimizes \(R_n(f)\) but fails to generalize: the variance of the estimator dominates.  
  *Solution*: shrink the hypothesis space (e.g., lower‑rank matrices, fewer layers), add regularization (\(\ell_1,\ell_2\)), or increase data via augmentation or synthetic generation. Each technique reduces the VC‑dimension or Rademacher complexity, tightening the bound \(R(f)\le R_n(f)+O(\sqrt{d/n})\).  

- **Under‑fitting** is the converse: the hypothesis space cannot capture the true function; bias dominates.  
  *Solution*: enlarge capacity (more neurons, higher‑order kernels), reduce regularization strength, or employ richer feature engineering. This increases expressivity and lowers bias until the variance term becomes acceptable.

**Non‑obvious insight**: Regularization does **not** merely penalize weights; it implicitly imposes a prior over functions, steering learning toward smoother, more probable solutions under Bayesian interpretation. Adjusting this “prior” (via λ or dropout rate) is equivalent to navigating between bias and variance in a principled way rather than ad‑hoc tweaking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
