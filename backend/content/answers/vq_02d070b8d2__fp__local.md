---
qid: vq_02d070b8d2__fp__local
question: Is it possible to utilize any similarity function with SVM?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 502
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:20:36-05:00'
sources: []
---

**Why an SVM needs a special kind of similarity**

An SVM solves the convex quadratic program  

\[
\min_{w,b,\xi}\ \frac12\|w\|^2 + C\sum_i\xi_i
\quad\text{s.t.}\ y_i(\langle w,x_i\rangle+b)\ge 1-\xi_i .
\]

The dual form replaces the inner product \(\langle x_i,x_j\rangle\) by a *kernel* \(K(x_i,x_j)\).  
For the quadratic program to remain convex, the kernel matrix \(G_{ij}=K(x_i,x_j)\) must be **positive‑semidefinite (PSD)**. A PSD matrix guarantees that every feasible \(w\) can be written as a linear combination of training points and that the objective is strictly convex in those coefficients.

Thus *any* similarity function can be used **only if it induces a PSD Gram matrix**.  
If you plug an arbitrary similarity that violates this property, the dual becomes non‑convex: the optimization may get stuck in local minima or produce nonsensical classifiers.

A practical way to use a non‑PSD similarity is to transform it into a PSD one—e.g., by adding a multiple of the identity (regularization), performing eigenvalue truncation, or applying metric learning to map data into a space where the induced inner product is PSD.  

**Non‑obvious insight:**  
People often think “any similarity works” because they test on small datasets and observe reasonable results. In fact, those successes usually stem from the similarity *happening* to be close to PSD (or being implicitly regularized). When scaling up or changing data distributions, the hidden lack of PSDness manifests as instability or failure. Ensuring PSDness is therefore not a mere technicality—it is the guarantee that SVM’s convex machinery truly applies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
