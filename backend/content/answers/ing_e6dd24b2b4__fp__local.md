---
qid: ing_e6dd24b2b4__fp__local
question: 'Explain model merging: task arithmetic, TIES, DARE and SLERP. When does
  merging actually work?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 728
total_tokens: 909
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:09:59-05:00'
sources: []
---

**Model merging** tackles the problem of *combining* two separately trained neural nets \(M_A\) and \(M_B\) into a single model that preserves each one's knowledge without retraining from scratch.  
At its core, it is an optimization over the weight space \(\mathcal{W}\): we seek a point \(w^\*\in\mathcal{W}\) that simultaneously minimizes the loss on both tasks,
\[
w^\*=\arg\min_{w}\bigl(L_A(w)+L_B(w)\bigr).
\]
Since the losses are highly non‑convex, the *geometry* of \(\mathcal{W}\) matters. In practice we operate in a **local linear regime** around each optimum \(w^A,w^B\).  
Three strategies exploit this:

| Method | Idea | How it works |
|--------|------|--------------|
| **Task arithmetic** | Treat the final weights as vectors and add or average: \(w_{\text{merge}}=\frac12(w^A+w^B)\). | Assumes the loss landscape is locally linear; essentially solves a weighted least‑squares in weight space. |
| **TIES (Tensor Interpolated Embedding Smoothing)** | Instead of raw weights, interpolate *activation embeddings* produced by each model on a shared dataset: \(e_{\text{merge}}=\alpha e^A+(1-\alpha)e^B\). | Works when the models are in the same *mode*; captures higher‑order interactions that raw weight averaging misses. |
| **DARE (Dynamic Averaging with Reweighting)** | Dynamically adjust per‑layer weights based on validation performance: \(w_{\text{merge}}=\sum_k \lambda_k w^k\) where \(\lambda_k\) is learned. | Adapts to layer‑wise importance, mitigating catastrophic interference when tasks differ in scale or distribution. |
| **SLERP (Spherical Linear Interpolation)** | Interpolate along the geodesic on the unit sphere: \(w(t)=\frac{\sin((1-t)\theta)}{\sin\theta} w^A + \frac{\sin(t\theta)}{\sin\theta} w^B\). | Preserves norm and avoids “weight blow‑up” seen in simple averaging; effective when models lie on a low‑dimensional manifold. |

**When does merging actually work?**

1. **Shared parameterization & similar inductive bias** – the two models must live on roughly the same submanifold of \(\mathcal{W}\).  
2. **Non‑conflicting tasks** – losses should not pull weights in opposite directions (e.g., disjoint label spaces).  
3. **Stable local geometry** – the Hessians at \(w^A\) and \(w^B\) must have overlapping eigenspaces; otherwise interpolation jumps into high‑loss regions.

*A non‑obvious insight*: The *effective* merging performance is governed more by the *alignment of eigenvectors* of the Hessian than by raw weight similarity. Even if \(\|w^A-w^B\|\) is large, if their top eigen-directions coincide, a linear blend can land in a low‑loss valley. This explains why task arithmetic often succeeds on vision models trained on similar datasets despite substantial weight differences.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
