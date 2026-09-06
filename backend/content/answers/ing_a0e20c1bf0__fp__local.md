---
qid: ing_a0e20c1bf0__fp__local
question: 'Explain: 1.11. Ensembles: Gradient boosting, random forests, bagging, voting,
  stacking'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 653
total_tokens: 835
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:47:55-05:00'
sources: []
---

**Why ensembles help**

A single learner \(h\) is a mapping \(\mathcal{X}\rightarrow\mathcal{Y}\).  
Its expected loss \(E[L(h(X),Y)]\) can be split (bias‑variance trade‑off) into
* bias*: systematic error, *variance*: sensitivity to the training set.  
If we could keep bias low and average out variance, risk would drop.

**Bagging & Random Forests**

Take many bootstrap samples \(S_i\). Train base models \(h_i\).
The ensemble prediction is \(\hat{y}=\frac1B\sum h_i(x)\).
Because each \(h_i\) sees a different dataset,
their errors are *partially independent*.  
Mathematically, \(\operatorname{Var}\!\left[\hat{y}\right]
= \frac{\sigma^2_{\text{indep}}}{B}+\rho\sigma^2_{\text{dep}}\),
where \(\rho\) is the correlation between models.
Thus variance shrinks as \(1/B\), but correlated errors (\(\rho>0\))
limit gains.  
Random forests decorrelate trees by randomising feature subsets at each split,
minimising \(\rho\) and achieving near‑optimal bias–variance reduction.

**Boosting (Gradient Boosting)**

Instead of averaging, we sequentially fit residuals:
\(h_t = \arg\min_{h}\sum L(y_i, f_{t-1}(x_i)+\alpha h(x_i))\).
This is a functional gradient descent in the space of predictors.
Each step reduces training loss by moving opposite to the gradient,
thus aggressively lowering bias while keeping variance controlled
through shrinkage (\(\alpha\)).

**Bagging vs. Boosting**

*Bagging* stabilises high‑variance, low‑bias learners (e.g., trees).  
*Boosting* turns weak, biased learners into a strong one by correcting errors.

**Voting & Stacking**

- **Hard/soft voting**: final class is majority or weighted probability.
  Works because different models err on different subsets; the majority
  often corrects individual mistakes.
- **Stacking** trains a meta‑learner \(g\) on predictions \((h_1(x),…,h_B(x))\).
  It learns to weight each base model’s confidence, effectively performing
  *adaptive weighting*—a form of second‑order optimization.

---

### Non‑obvious insight  
Ensembles are **not just “more data”**; they approximate an implicit Bayesian posterior over hypotheses.  
Bagging averages over a posterior induced by bootstrap resampling; boosting follows the gradient of the loss, equivalent to performing variational inference in function space. This perspective explains why ensembles often generalise better than any single model and how hyperparameters (tree depth, shrinkage) shape the *shape* of that posterior rather than merely fitting data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
