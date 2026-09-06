---
qid: ing_84502dd5a4__fp__local
question: 'Explain: 1.1.3.2.4. Comparison with the regularization parameter of SVM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 631
total_tokens: 813
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:46:38-05:00'
sources: []
---

**Why a regularizer in one model looks like the inverse of another**

In supervised learning we minimise a loss \(L(\mathbf{w})\) plus a penalty that keeps the weights \(\mathbf{w}\) small.  
For *ridge regression* (or L2‑regularised linear regression) the objective is  

\[
J_{\text{ridge}}(\mathbf{w})=\|y-X\mathbf{w}\|^2+\lambda\|\mathbf{w}\|_2^2 .
\]

The scalar \(\lambda>0\) trades bias against variance: a large \(\lambda\) forces the coefficients toward zero, reducing over‑fit but increasing bias.

In a *soft‑margin SVM* we solve  

\[
J_{\text{SVM}}(\mathbf{w})=\frac{1}{2}\|\mathbf{w}\|_2^2+C\,\sum_i \xi_i ,
\]

where \(\xi_i\) are hinge losses and \(C>0\) penalises misclassifications.  
Here a large \(C\) makes the classifier *hard‑margin* (low bias, high variance), whereas a small \(C\) relaxes the margin (high bias, low variance).

**The key link**

Both objectives contain \(\|\mathbf{w}\|_2^2\). In ridge we add it directly; in SVM it appears with coefficient \(1/2\) but is *not* the regulariser – the penalty on slack variables carries the hyperparameter. If we rewrite the SVM as a minimisation of hinge loss plus an L2 term, the two are dual:

\[
C = \frac{1}{\lambda}\quad\Longleftrightarrow\quad
\text{SVM regularisation } \propto \frac{1}{C}.
\]

Thus, *increasing* ridge’s \(\lambda\) (more shrinkage) corresponds to *decreasing* the SVM’s \(C\) (more margin slack).  

**Non‑obvious insight**

Because both methods minimise the same quadratic form, they share the same *geometric* bias: the solution lives on a hypersphere of radius \(\|\mathbf{w}\|_2\). The only difference is how we penalise deviations from that sphere—ridge pushes the centre toward zero, SVM pulls the margin outward. Consequently, tuning \(\lambda\) in ridge is mathematically equivalent to tuning \(C\) in an SVM with the same kernel; one simply flips the direction of the trade‑off. This duality explains why cross‑validation curves for \(\lambda\) and \(1/C\) are mirror images—an insight that often slips past practitioners focused only on empirical performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
