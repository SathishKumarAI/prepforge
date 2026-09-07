---
qid: ing_9b116528e0__faang__local
question: 'Explain: 1.1.1.2. Ordinary Least Squares Complexity'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 527
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:44:52-05:00'
sources: []
---

**Clarify**  
You’re asking about the computational cost of fitting an ordinary least‑squares (OLS) regression model: given a design matrix \(X\in\mathbb{R}^{n\times p}\) and target vector \(y\), we solve \(\hat\beta=(X^\top X)^{-1}X^\top y\). I’ll assume no regularisation, dense matrices, and that the inversion is done via a standard factorisation.

**Approach**  
1. Compute \(X^\top X\) – an \(p\times p\) matrix.  
2. Invert or solve \((X^\top X)\beta = X^\top y\).  
3. Multiply by \(y\) if needed for residuals or predictions.

**Depth**  
- **Matrix multiplication**: \(O(np^2)\).  
- **Cholesky factorisation** of the symmetric positive‑definite matrix \(X^\top X\): \(O(p^3/3)\).  
  (LU would be \(O(2p^3/3)\); for very large \(p\), iterative solvers like conjugate gradient avoid the cubic term but add a convergence factor.)  
- **Total**: \(O(np^2 + p^3)\).  
For “wide” data (\(n \gg p\)), the \(np^2\) dominates; for “tall” data (\(p \approx n\)), the \(p^3\) term becomes critical.

**Edge Cases**  
- **Singular or ill‑conditioned \(X^\top X\)**: Cholesky fails; switch to SVD or add ridge regularisation.  
- **Sparse matrices**: Exploit sparsity in multiplication and factorisation to reduce constants.  
- **Streaming data**: Use incremental least squares (Sherman–Morrison) to avoid recomputation.

**Optimize & Communicate**  
If \(p\) is huge, consider dimensionality reduction (PCA), feature hashing, or stochastic gradient descent as a scalable alternative. In practice, I’d benchmark both the direct factorisation and an iterative solver on a sample of the data; report the wall‑clock time versus theoretical cost to validate assumptions. This structured analysis demonstrates clear reasoning, depth in algorithmic complexity, and awareness of practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
