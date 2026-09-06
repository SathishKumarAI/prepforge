---
qid: ing_fe247ac447__fp__local
question: 'Explain: Aug. 27, 2026 — Simon Willison\u2019s Weblog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 488
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:00:16-05:00'
sources: []
---

**Why Gradient‑Boosted Trees Work (Simon Willison’s Aug 27 2026 post)**  

The core problem any supervised learner solves is *approximate a function* \(f^*(x)=\mathbb{E}[Y|X=x]\) with minimal expected loss.  
Gradient boosting tackles this by iteratively adding weak learners \(h_t(x)\) that move the current model \(F_{t-1}(x)\) in the direction of the negative gradient of the loss:
\[
F_t(x)=F_{t-1}(x)+\eta\,h_t(x),\qquad
h_t=\arg\min_h \sum_i \bigl(-g_i\bigr) h(x_i),
\]
where \(g_i=\partial L(y_i,F_{t-1}(x_i))/\partial F_{t-1}\).  
Thus each tree is fit to *pseudo‑residuals*—the gradient of the loss with respect to predictions. This is functional gradient descent on an infinite‑dimensional space; the “shrinkage” parameter \(\eta\) controls step size, ensuring convergence and preventing overfitting.

**Deeper insight:** The ensemble’s bias–variance trade‑off is governed not just by tree depth but by how the residuals are reweighted. Early stopping is mathematically equivalent to adding an \(L_2\) penalty on the leaf weights—regularization emerges from the optimization dynamics themselves, not as a separate hyperparameter.

**Non‑obvious takeaway:** In practice, the *distribution* of pseudo‑residuals after each iteration shapes the next tree’s splits. If residuals become highly skewed, subsequent trees will focus almost exclusively on minority regions, automatically adapting to heteroscedastic noise—something most practitioners miss when tuning only depth or learning rate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
