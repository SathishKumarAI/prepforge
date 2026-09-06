---
qid: ing_7aa6dd2581__fp__local
question: 'Explain: 1.1.6. Multi-task Elastic-Net — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 733
total_tokens: 929
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:25:40-05:00'
sources: []
---

### Why a *Multi‑Task* Elastic‑Net is Needed

When several related regression problems are solved **jointly**, we can borrow strength across them.  
Suppose we have \(K\) tasks (e.g., predicting drug response in different cell lines) and \(p\) features.  
A naive approach trains \(K\) independent Lasso/Elastic‑Net models:

\[
\min_{\beta^{(k)}} \frac{1}{2n}\|y^{(k)}-X\beta^{(k)}\|_2^2
      +\lambda_1\|\beta^{(k)}\|_1+\lambda_2\|\beta^{(k)}\|_2^2 .
\]

Each task learns its own sparsity pattern.  
If the tasks are truly related, this wastes information: a feature that is useful for one task but not selected by another may be discarded altogether.

### The Multi‑Task Elastic‑Net Formulation

The multi‑task version imposes **joint sparsity** across tasks while preserving elastic‑net regularisation:

\[
\min_{B\in\mathbb{R}^{p\times K}}
  \frac{1}{2n}\sum_{k=1}^K \|y^{(k)}-X\beta^{(k)}\|_2^2
  +\lambda_1 \sum_{j=1}^p \|\mathbf{b}_j\|_2
  +\frac{\lambda_2}{2}\sum_{k=1}^K \|\beta^{(k)}\|_2^2 .
\]

- **Group‑Lasso term** \( \sum_j \|\mathbf{b}_j\|_2 \) (with \(\mathbf{b}_j\) the \(j\)-th row of \(B\)) forces a feature to be either *present in all tasks* or *absent in all*, yielding shared sparsity.
- **Elastic‑net ridge part** \( \frac{\lambda_2}{2}\sum_k \|\beta^{(k)}\|_2^2 \) keeps the model stable when features are highly correlated, a known issue for plain Group‑Lasso.

### Deeper Principle: Structured Sparsity as Convex Relaxation

The underlying combinatorial problem is to select a subset of features that optimises performance across tasks.  
This is NP‑hard; convex relaxation (Group‑Lasso + ridge) yields a tractable surrogate while preserving the “all‑or‑nothing” structure.

### Non‑Obvious Insight

A common mistake is to treat \(\lambda_1\) and \(\lambda_2\) as independent knobs.  
In practice, **they are coupled**: increasing \(\lambda_1\) forces more rows of \(B\) to zero, but if \(\lambda_2\) is also large, the remaining non‑zero rows shrink toward equal magnitudes across tasks.  
Thus, a careful cross‑validation grid that jointly searches over (\(\lambda_1,\lambda_2\))—rather than sweeping one while fixing the other—is essential for optimal performance.

---

**Reference**: scikit‑learn 1.9.0 `MultiTaskElasticNet` implementation follows exactly this objective, with efficient coordinate descent and warm starts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
