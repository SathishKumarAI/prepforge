---
qid: ing_d467c36ce4__fp__local
question: 'Explain: 1.1.2.2. Classification — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 379
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:32:26-05:00'
sources: []
---

**Linear‑model classifiers (scikit‑learn ≥ 1.9)**

A supervised classification problem asks for a mapping  
\(f:\mathbb{R}^d\rightarrow \{0,\dots ,K-1\}\).  
The linear family assumes the *decision function* is an affine
combination of features:
\[
g(x)=w^{\top}x+b.
\]
For binary tasks we assign class 1 if \(g(x)\ge 0\), else class 0.  
Why this form?  
It corresponds to maximizing a margin in the *dual space* of the
data: every hyperplane separates the classes, and the distance from
the hyperplane to the nearest training point is the margin.
Maximizing that margin (or equivalently minimizing a convex loss
plus regularization) yields the **Support Vector Machine**; when the
loss is replaced by a *logistic* or *hinge* function we obtain
Logistic Regression, Linear SVM, etc.  
All these models share the principle of **convex optimization with
ℓ₂/ℓ₁ penalties**, guaranteeing a unique global optimum and robust
generalization.

A subtle point: scikit‑learn’s linear classifiers solve a *dual*
problem that is numerically stable for high‑dimensional sparse data.
The dual objective depends only on inner products \(x_i^\top x_j\),
so the algorithm never constructs an explicit weight vector until
after convergence.  This allows training with millions of features
while keeping memory usage low—an insight often overlooked when
reading “linear” models as if they were trivial.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
