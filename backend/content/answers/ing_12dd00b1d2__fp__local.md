---
qid: ing_12dd00b1d2__fp__local
question: 'Explain: so that''s one problem another problem is'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 534
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:45:48-05:00'
sources: []
---

**Bias–Variance Trade‑off – first‑principles view**

When a learner \(f_\theta\) is trained on data \(\{(x_i,y_i)\}_{i=1}^n\), we care about its *expected prediction error* on fresh samples:

\[
\mathbb E_{D,\; (x,y)}[(y-f_D(x))^2]
 = \underbrace{\bigl(\mathbb E_D[f_D(x)]-f^\*(x)\bigr)^2}_{\text{bias}^2}
 + \underbrace{\mathbb E_D[(f_D(x)-\mathbb E_D[f_D(x)])^2]}_{\text{variance}}
 + \sigma^2,
\]

where \(f^\*\) is the true regression function and \(\sigma^2\) is irreducible noise.  
This decomposition follows from expanding the square, taking expectations over both data and new points, and recognizing that any randomness comes either from the sampling of training sets (variance) or from systematic mis‑specification (bias).  

**Why it must hold**

- *Bias* measures how far the learner’s average prediction is from reality; it arises when the model class cannot capture \(f^\*\).
- *Variance* captures sensitivity to which particular sample was drawn; highly flexible models fit noise, inflating this term.

The two terms move in opposite directions as model complexity grows: a richer hypothesis set reduces bias but increases variance. The optimal point balances them, minimizing overall error.

**Non‑obvious insight**

Often people think “increase data → lower both bias and variance.” In fact, more data mainly shrinks *variance*; bias remains governed by the chosen model class. Thus, if your algorithm is biased (e.g., linear regression on a nonlinear relationship), adding samples will not help—only changing the hypothesis space will. This subtle distinction clarifies why regularization or architecture changes sometimes outperform sheer data scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
