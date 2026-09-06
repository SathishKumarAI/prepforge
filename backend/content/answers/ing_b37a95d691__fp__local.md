---
qid: ing_b37a95d691__fp__local
question: 'Explain: Ensemble Cost Matrix — Ensemble Methods'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 410
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:25:39-05:00'
sources: []
---

**Ensemble Cost Matrix – A First‑Principles View**

At the heart of any supervised learning problem is a *risk* \(R(h)=\mathbb{E}[L(Y,h(X))]\), where \(L\) penalises misclassifications. When we aggregate several predictors \(\{h_i\}_{i=1}^m\) into an ensemble, we effectively form a new decision rule
\[
H(x)=\arg\min_{c}\sum_{i=1}^{m}\lambda_i\,\ell_i(c,x),
\]
with \(\ell_i(c,x)\) the loss incurred by model \(i\) for class \(c\). The **ensemble cost matrix** is precisely this weighted sum of individual losses, expressed as a matrix
\[
C_{ij}=\sum_{k=1}^{m}\lambda_k\,L(y_j,h_k(x_i)),
\]
where rows index true labels and columns index ensemble‑predicted classes. This construction guarantees that the *expected* risk of the ensemble equals the weighted average of component risks—an immediate consequence of linearity of expectation.

Why must we weight by \(\lambda_k\)? Because each model contributes to the joint decision proportionally to its reliability; otherwise, a poorly calibrated learner could dominate and inflate \(R(H)\). This weighting turns the ensemble into an *optimal* convex combination under Brier or log‑loss, aligning with Bayesian model averaging when \(\lambda_k\) are posterior probabilities.

**Non‑obvious insight:** The cost matrix is *not* merely a bookkeeping tool; it encodes the geometry of decision boundaries. Eigenvectors of \(C\) reveal directions in label space that are most confounded across models—guiding targeted data collection or feature engineering to break these degeneracies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
