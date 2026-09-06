---
qid: ing_d32b720b22__fp__local
question: 'Explain: Tools you''ll learn — Supervised Machine Learning: Regression
  and Classification  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 399
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:30:04-05:00'
sources: []
---

**Supervised learning** turns data into a predictive engine by fitting a function  
\(f:\mathcal X\to \mathcal Y\) that maps inputs \(x\) to outputs \(y\).  

### Regression  
The goal is to approximate a *continuous* target.  
Mathematically we minimise a loss, usually squared error, over the training set:  

\[
\min_{\theta}\;\frac1N\sum_{i=1}^{N}(y_i-f_\theta(x_i))^2 .
\]

This is equivalent to projecting the true function onto the span of our basis functions (linear regression) or a richer space (kernel methods, neural nets). The key insight: **regression estimates the conditional expectation \(E[Y|X]\)**. If the model is unbiased and variance low, predictions are optimal in mean‑squared sense.

### Classification  
Targets are *discrete* labels. We learn a decision boundary that maximises class separation. Logistic regression or support vector machines solve:

\[
\min_{\theta}\;\sum_{i} \ell(y_i,f_\theta(x_i)) + \lambda\|\theta\|^2 ,
\]

where \(\ell\) is a convex surrogate (log‑loss, hinge). This is an instance of **maximum likelihood under a probabilistic model** or **margin maximisation**, both rooted in information theory and convex optimisation.

### Non‑obvious insight  
Both problems share the same underlying structure: *estimating a function that minimises expected loss*. The choice of loss dictates whether we’re approximating expectations (regression) or probabilities/decision boundaries (classification). Recognising this unifying principle lets you transfer intuition, regularisation tricks, and diagnostics across tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
