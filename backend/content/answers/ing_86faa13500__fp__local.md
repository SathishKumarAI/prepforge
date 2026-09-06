---
qid: ing_86faa13500__fp__local
question: 'Explain: Explore more from Machine Learning — Supervised Machine Learning:
  Regression and Classification  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 462
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:51:25-05:00'
sources: []
---

**Supervised learning is the problem of inferring a mapping \(f:\mathcal{X}\rightarrow\mathcal{Y}\)** from labeled examples \((x_i,y_i)\).  
The fundamental goal is to *predict* unseen outputs with minimal error, which can be framed as an **optimization problem**:  

\[
\min_{f\in\mathcal{F}}\;\frac1n\sum_{i=1}^n L(f(x_i),y_i)+\lambda R(f),
\]

where \(L\) is a loss that measures deviation from the true label and \(R\) regularizes complexity.  

*Regression* tackles continuous \(\mathcal{Y}\). The most common choice, *squared‑error*, yields a convex objective whose minimizer satisfies the normal equations—an algebraic solution when \(f\) is linear. This arises because we implicitly assume Gaussian noise: maximizing likelihood equals minimizing squared error.

*Classification* deals with discrete \(\mathcal{Y}\). The loss must respect class membership; *cross‑entropy* (or logistic loss) emerges naturally from a probabilistic model where the output is a probability distribution \(p(y|x;\theta)\). Minimizing cross‑entropy maximizes likelihood under a multinomial assumption, and its gradient has a clean form \(\nabla_\theta L = -\sum_i x_i (y_i - p_i)\), which links directly to the *information* content of misclassifications.

**Non‑obvious insight:**  
In both settings, the regularizer \(R(f)\) can be interpreted as imposing a prior over functions. For linear models, \(\lambda\|w\|^2_2\) corresponds to a Gaussian prior on weights; for more complex hypotheses (e.g., neural nets), *dropout* or *weight decay* implicitly perform Bayesian model averaging by encouraging flat minima that generalize better. Thus regularization is not merely a trick but a principled way of encoding uncertainty about the mapping itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
