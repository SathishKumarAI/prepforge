---
qid: vq_4a54c9a976__fp__local
question: Q20- When should you use classification over regression?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 476
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:34:12-05:00'
sources: []
---

**From the problem’s geometry to its loss landscape**

A supervised learner is asked to predict a function \(f(x)\) given data \((x_i,y_i)\).  
The *type* of output dictates the feasible set of functions and the shape of the optimality criterion.

1. **Output space** – If the target values lie on a continuous manifold (e.g., temperature, weight), the hypothesis class must be able to interpolate between observed points. The loss is naturally an \(L_2\) or cross‑entropy over real numbers, yielding convex quadratic programs in linear models.  
   Conversely, if the outputs belong to a finite set of discrete labels \(\{1,\dots,K\}\), the feasible functions are mappings into a simplex. The natural loss is log‑loss (cross‑entropy) or 0–1 error; the optimization becomes a multiclass classification problem with a convex surrogate.

2. **Probabilistic interpretation** – Regression estimates \(p(y|x)\) as a continuous density, often Gaussian; its MAP solution minimizes expected squared error.  
   Classification models \(p(k|x)\) as categorical distributions; maximizing likelihood is equivalent to minimizing Kullback–Leibler divergence, which penalizes misclassifications asymmetrically.

3. **Information‑theoretic gap** – The *mutual information* between \(X\) and a continuous \(Y\) can be arbitrarily large; discretizing \(Y\) reduces entropy but makes the decision boundary piecewise constant. When the task is to recover a *categorical* outcome (e.g., disease diagnosis), retaining discrete structure preserves interpretability and avoids unnecessary variance.

**Non‑obvious insight:**  
Choosing regression for a naturally categorical target forces the model to output probabilities that must later be thresholded, introducing an extra hyperparameter and potentially violating calibration. In contrast, classification’s loss directly optimizes the decision boundary, yielding better generalization when the true underlying process is discrete—even if the labels are highly imbalanced—because the loss can incorporate class‑specific weights without altering the hypothesis space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
