---
qid: ing_ae1fc5209e__fp__local
question: 'Explain: good choices we''re going to constrain the'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 437
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:14:54-05:00'
sources: []
---

**Why we must *constrain* a learning algorithm**

When a learner observes data \((x_i,y_i)\) it seeks parameters \(\theta\) that minimize an empirical loss  
\(L(\theta)=\frac1n\sum \ell(f_\theta(x_i),y_i)\).  
Without any restriction, the solution may fit every training point exactly (zero‑error), but then the *expected* error on new data explodes—a classic bias–variance trade‑off.  

From a **probabilistic** view, we are implicitly maximizing a posterior \(p(\theta|D)\propto p(D|\theta)p(\theta)\).  The likelihood \(p(D|\theta)\) rewards fit; the prior \(p(\theta)\) penalizes implausible parameter values.  Constraining \(\theta\) is thus equivalent to encoding domain knowledge (smoothness, sparsity, low rank) into a prior that regularises the posterior.

From an **optimization** standpoint, adding a convex penalty \(R(\theta)\) turns the problem into
\[
\min_\theta L(\theta)+\lambda R(\theta),
\]
ensuring existence and uniqueness of a solution (by strong convexity), and often yielding efficient algorithms (proximal methods).

A non‑obvious insight: **constraints are not merely “shrinkage”; they reshape the hypothesis space’s geometry.**  
For example, an \(\ell_1\) penalty induces a polyhedral feasible set whose corners align with coordinate axes—this makes many coefficients exactly zero even before training, effectively performing variable selection *during* optimization.

Thus, good constraints arise from the underlying data-generating process and desired inductive biases; they guarantee generalisation by limiting over‑flexibility while preserving expressive power.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
