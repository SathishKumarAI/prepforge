---
qid: ing_8e34da292e__fp__local
question: 'Explain: 1.1.3.1. Coordinate Descent with Gap Safe Screening Rules'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 519
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:07:35-05:00'
sources: []
---

**Coordinate Descent with Gap‑Safe Screening**

*Fundamental problem.*  
We minimize a convex loss \(L(\mathbf w)=\frac12\|\mathbf X\mathbf w-\mathbf y\|^2+\lambda \|\mathbf w\|_1\).  In high dimensions many coordinates of \(\mathbf w^\star\) are zero (sparsity).  Updating all coordinates each iteration is wasteful; we want to *screen out* those that will stay at zero.

*Why the dual gap guarantees safety.*  
The Lagrange dual of \(L\) has variable \(\boldsymbol \theta\) with constraints \(|X_j^\top \boldsymbol\theta|\le 1\).  At any primal–dual pair \((\mathbf w,\boldsymbol\theta)\), the duality gap
\[G(\mathbf w,\boldsymbol\theta)=L(\mathbf w)-D(\boldsymbol\theta)\]
bounds how far we are from optimality.  
If for a coordinate \(j\) we can show that even at the worst‑case \(|X_j^\top \boldsymbol\theta|\le 1-\epsilon\), then no update to \(w_j\) can make it non‑zero; thus we may permanently drop it.  

*Coordinate descent step.*  
Pick coordinate \(j\); solve the 1‑D subproblem
\[ w_j^{new}=S_{\lambda}(w_j+\langle X_j,\mathbf r\rangle)\]
where \(\mathbf r=\mathbf y-\mathbf X\mathbf w\) and \(S_\lambda\) is soft‑thresholding.  
After a few sweeps, recompute \(\boldsymbol\theta=\frac1\lambda(\mathbf r)\); the gap shrinks, tightening the screening rule.

*Non‑obvious insight.*  
The *safe* set depends only on **current residuals**, not on future updates.  Thus, even though we are solving a non‑separable problem, each coordinate update is locally optimal for that fixed residual, guaranteeing global convergence once all coordinates are visited and the gap vanishes. This local‑global coupling is what makes Gap‑Safe screening both efficient (prunes many variables) and theoretically sound.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
