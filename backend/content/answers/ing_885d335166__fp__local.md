---
qid: ing_885d335166__fp__local
question: Compare L1 and L2 regularization. Why does L1 produce sparse weights?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 484
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:54:38-05:00'
sources: []
---

**Why L1 Regularization Yields Sparse Weights**

The core problem is minimizing a loss \( \mathcal{L}(\mathbf w) \) under a penalty that encourages “small” parameters.  
With an \(L_2\) penalty we solve  

\[
\min_{\mathbf w}\;\mathcal{L}(\mathbf w)+\lambda\|\mathbf w\|_2^2,
\]

which is equivalent to constraining \(\|\mathbf w\|_2\le t\). The feasible set is a smooth Euclidean ball. When the loss surface intersects this ball, the optimal point lies on its *smooth* boundary; the gradient of \(\|\mathbf w\|_2^2\) is proportional to \(\mathbf w\), so every component receives a proportional shrinkage. Thus all weights are reduced but none become exactly zero.

With an \(L_1\) penalty we solve  

\[
\min_{\mathbf w}\;\mathcal{L}(\mathbf w)+\lambda\|\mathbf w\|_1,
\]

equivalently \(\|\mathbf w\|_1\le t\). The feasible set is a *cross‑polytope* (an \(n\)-dimensional diamond) whose boundary contains many flat facets aligned with coordinate axes. When the loss surface touches this polytope, the KKT conditions allow the optimum to sit on a facet where one or more coordinates are exactly zero—because moving along that axis does not increase the penalty. Geometrically, the “corner” nature of the \(L_1\) ball forces solutions onto axes, producing sparsity.

**Non‑obvious insight:**  
The sparsity arises *not* from a direct push to zero but from **constraint geometry**: the flat facets create directions with zero marginal penalty. In contrast, the smooth curvature of the \(L_2\) ball never offers such a direction, so weights are merely shrunk uniformly. Thus, L1 regularization is a geometric selector that exploits the shape of its feasible set to discard irrelevant features automatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
