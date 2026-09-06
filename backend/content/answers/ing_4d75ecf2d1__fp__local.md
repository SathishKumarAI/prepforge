---
qid: ing_4d75ecf2d1__fp__local
question: 'Explain: Defining Generic Function — Ridge and Lasso Regression in Python
  - Analytics Vidhya'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 433
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:49:45-05:00'
sources: []
---

### Why a *generic* interface is essential

When we fit linear models under a penalty, the **only thing that changes** between Ridge (ℓ₂) and Lasso (ℓ₁) is the regularisation term in the objective:

\[
J(\beta)=\|y-X\beta\|^2_2+\lambda\,R(\beta),
\]

where \(R(\beta)=\|\beta\|^2_2\) for Ridge or \(R(\beta)=\|\beta\|_1\) for Lasso.  
All other components—data preprocessing, cross‑validation, hyper‑parameter search—remain identical.  

A generic `fit` function therefore:

1. **Encapsulates the optimisation algorithm** (e.g., coordinate descent, gradient descent) that can handle any convex penalty.
2. **Accepts a callable regulariser** so the user need only specify `lambda` and the type of norm; the underlying routine plugs it in automatically.
3. **Returns diagnostics** (loss curve, feature importance) in a uniform format.

This mirrors the *principle of least astonishment*: users who know one penalty can instantly apply another without re‑implementing boilerplate.

### One non‑obvious insight

The optimisation landscape for ℓ₁ is *nondifferentiable* at zero.  
A generic routine that treats both penalties must therefore **switch between smooth and nonsmooth updates**.  
In practice, this means using a *proximal operator* for the ℓ₁ term while keeping the gradient step for the ℓ₂ part.  
If you ignore this subtlety and apply a vanilla gradient descent to Lasso, convergence stalls at sub‑optimal points—an error many beginners overlook.

Thus, a well‑designed generic function is not just convenient; it guarantees that the mathematical properties of each penalty are respected while sharing code across algorithms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
