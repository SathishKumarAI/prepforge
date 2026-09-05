---
qid: ing_3484fd869f__fp__local
question: 'Explain: 1.11.1.1.3. Sample weight support — 1.11. Ensembles: Gradient
  boosting, random forests, bagging, voting, stacking \u2014 scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 212
output_tokens: 518
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:56:25-05:00'
sources: []
---

**Why ensembles need sample‑weight support**

At the heart of any learning algorithm is a *loss function* \(L(y,\hat y)\) that we minimise over training data \(\{(x_i,y_i)\}\). If some observations are more “trustworthy” or simply more abundant, we should penalise errors on them more heavily. Formally we replace the empirical risk  

\[
R=\frac1N\sum_{i}L(y_i,\hat y_i)
\]

with a *weighted* risk  

\[
R_w=\frac{1}{W}\sum_{i}w_i\,L(y_i,\hat y_i), \qquad W=\sum_i w_i .
\]

Every ensemble algorithm that builds many weak learners (trees, stumps, etc.) solves this optimisation implicitly: each tree is fitted to a weighted empirical distribution. Hence the API must expose *sample weights*.

**Why it matters for different ensembles**

| Ensemble | How weights enter |
|----------|-------------------|
| **Bagging / Random Forests** | Each bootstrap sample is drawn from the weighted distribution; trees see more of the high‑weight data. |
| **Gradient Boosting** | The residuals are re‑weighted by \(w_i\) before fitting each new tree, effectively changing the gradient step size for different points. |
| **Voting / Stacking** | Base learners receive weights during training; meta‑learner can also be trained on weighted errors. |

All of them optimise a *global* objective that is a sum over weighted losses, so the API must expose `sample_weight` consistently.

**Non‑obvious insight**

Weights are not merely “importance” knobs—they *redefine the underlying probability measure*. If you think in terms of **expectation under a distribution \(P\)**, training with weights \(w_i\) is equivalent to sampling from a new distribution \(Q(x)=w(x)P(x)\). Thus, ensemble hyper‑parameters (e.g., max depth, number of trees) should be tuned not just for accuracy but also for the *effective* sample size induced by those weights. Ignoring this can lead to overfitting on highly weighted minority samples while under‑learning the rest. Recognising weights as a change of measure provides a principled way to adjust stopping criteria and regularisation terms in any scikit‑learn ensemble.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
