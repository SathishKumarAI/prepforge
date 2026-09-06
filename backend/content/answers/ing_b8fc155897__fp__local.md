---
qid: ing_b8fc155897__fp__local
question: How do Bagging and Boosting get N learners?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 503
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:37:18-05:00'
sources: []
---

**From the problem to the ensemble**

A single weak learner (decision stump, shallow tree…) can only capture a limited structure in data.  
To approximate an arbitrary target function we need many such “basis” functions.  
Mathematically we seek coefficients \( \alpha_i\) and base learners \(h_i(x)\) that minimize an empirical loss

\[
L(\theta)=\sum_{n=1}^N\ell(y_n,\sum_{i=1}^{B}\alpha_i h_i(x_n)),
\]

where \(B\) is the number of base models.  
The challenge is to choose the \((h_i,\alpha_i)\) pairwise without solving a huge joint optimization.

**Bagging (Bootstrap Aggregating)**  
- **Principle:** reduce variance by averaging independent estimators.  
- **Construction:** for each \(i=1\ldots B\), draw a bootstrap sample of size \(N\) from the training set and train a learner on it.  
  The randomness in sampling guarantees that each learner sees a slightly different data distribution, so their errors are (approximately) uncorrelated.  
- **Result:** averaging \(B\) such learners yields an estimator whose variance shrinks like \(\sigma^2/B\).

**Boosting**  
- **Principle:** reduce bias by sequentially correcting the residual error of previous models.  
- **Construction:** for each round \(i\), fit a learner to the weighted training data where weights are proportional to current prediction errors (AdaBoost) or to negative gradients of the loss (Gradient Boosting).  
  The weight update is derived from the first‑order optimality condition of minimizing \(L(\theta)\).  
- **Result:** each new learner focuses on what previous ones missed, and the ensemble converges toward a function that fits the data better than any single base model.

**Non‑obvious insight**

Both methods *implicitly* perform an approximate projection onto the span of the chosen weak learners.  
Bagging projects onto an unbiased subspace by averaging random samples; boosting performs a greedy orthogonal projection in function space, akin to gradient descent in Hilbert spaces. Recognizing this geometric view explains why bagging excels when variance dominates and boosting shines when bias is the bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
