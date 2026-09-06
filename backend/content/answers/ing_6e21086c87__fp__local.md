---
qid: ing_6e21086c87__fp__local
question: 'Explain: 1.1.1.1. Non-Negative Least Squares — 1.1. Linear Models \u2014
  scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 424
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:58:45-05:00'
sources: []
---

**Non‑Negative Least Squares (NNLS)** is the problem of fitting a linear model  
\(y \approx X\beta\) while forcing every coefficient \(\beta_j\ge0\).  
The objective is  

\[
\min_{\beta\ge 0}\;\|X\beta-y\|_2^2 .
\]

Why impose non‑negativity? In many domains—spectral unmixing, topic modeling, gene expression—the underlying contributions cannot be negative. NNLS therefore enforces *physical plausibility* and often yields a sparser, more interpretable solution because the feasible set is a convex cone: all linear combinations of the columns of \(X\) with non‑negative weights.

Mathematically, the problem remains convex; the gradient  
\(2X^\top(X\beta-y)\) points toward decreasing error, but the projection onto the cone
\(C=\{\beta:\beta_j\ge0\}\) is simply clipping negative components to zero.  
Thus a projected gradient or active‑set algorithm iteratively moves along the unconstrained optimum and then projects back into \(C\). The solution lies on the boundary where some \(\beta_j=0\); this is exactly where the Karush–Kuhn–Tucker (KKT) conditions hold.

A subtle insight: **the geometry of NNLS turns the usual “least‑squares hyperplane” into a *cone* of feasible predictions**. Consequently, even if \(X\) has full rank, the NNLS solution can be unique only when the columns are linearly independent *and* no negative combination of them lies in the span of \(y\). This uniqueness condition is rarely mentioned but guarantees that adding a non‑negativity constraint removes the entire continuum of least‑squares solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
