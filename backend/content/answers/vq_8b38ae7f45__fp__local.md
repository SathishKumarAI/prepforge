---
qid: vq_8b38ae7f45__fp__local
question: What happens if the eigenvalues are almost equal?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 407
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:45:04-05:00'
sources: []
---

**Why “almost equal” eigenvalues matter**

When a matrix \(A\) has two eigenvalues \(\lambda_1,\lambda_2\) with \(|\lambda_1-\lambda_2|\ll\|A\|\), the corresponding eigenspaces are *nearly degenerate*. In linear algebra this means that any small perturbation—noise, rounding error, or an intentional regulariser—can rotate the eigenvectors arbitrarily within the span of the nearly‑degenerate subspace.  
Formally, first‑order eigenvalue perturbation gives  

\[
\delta \lambda_i = u_i^T\,\delta A\,u_i,
\]

but the corresponding eigenvector shift satisfies

\[
\| \delta u_i \| \;\approx\; \frac{\|\delta A\|}{|\lambda_1-\lambda_2|}\,.
\]

Thus the denominator becomes tiny: the eigenvectors are *ill‑conditioned*.  

**Deep principle**

This is a manifestation of **eigenvalue sensitivity**, itself a special case of the more general *spectral gap* concept in perturbation theory. A small spectral gap amplifies noise like an amplifier with high gain, turning minute errors into large orientation changes while leaving eigenvalues essentially unchanged.

**Non‑obvious insight**

In many machine‑learning pipelines (e.g., PCA, spectral clustering), people only care about the *subspace* spanned by the top \(k\) components. When eigenvalues are almost equal, that subspace is stable even though individual eigenvectors are not; algorithms should therefore return a basis for the invariant subspace rather than a specific orthonormal set. This subtle shift—from “eigenvectors” to “subspaces”—avoids catastrophic mis‑alignment and preserves downstream performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
