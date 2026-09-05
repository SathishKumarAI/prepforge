---
qid: ing_1848b00583__fp__local
question: Why does overfitting occur? — What is Overfitting? - Overfitting in Machine
  Learning Explained - AWS
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 441
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:57:13-05:00'
sources: []
---

**Why does over‑fitting happen?**

At its core, a learning algorithm seeks a function *f* that maps inputs **x** to outputs *y*. It does this by minimizing a loss on the training set:

\[
L_{\text{train}}(f)=\frac1N\sum_{i=1}^N \ell(f(x_i),y_i).
\]

The *bias–variance trade‑off* tells us that any estimator can be decomposed into bias (systematic error) and variance (sensitivity to data). Over‑fitting is the regime where variance dominates: the model captures idiosyncrasies of the finite sample rather than the underlying distribution.

Mathematically, the expected risk on new data is

\[
L_{\text{test}}(f)=L_{\text{train}}(f)+\underbrace{\bigl(\mathbb E[L_{\text{test}}]-\mathbb E[L_{\text{train}}]\bigr)}_{\text{generalization gap}},
\]

and the gap grows with model capacity *C* and shrinks with sample size *N*. When \(C \gg N\), the hypothesis space contains functions that interpolate the training data perfectly (zero empirical loss) but have enormous variance. The “curse of dimensionality” further exacerbates this: in high dimensions, points become sparse, so a flexible model can place spurious decision boundaries around noise.

**Non‑obvious insight:**  
Over‑fitting is not merely a lack of data; it’s the *misalignment* between the geometry of the hypothesis space and the true data manifold. If the training set lies on a low‑dimensional manifold embedded in high‑dimensional space, a model that respects that manifold (e.g., via manifold regularization or implicit bias of SGD) will generalize better than one that treats all directions equally. Thus, controlling over‑fitting is tantamount to aligning your inductive bias with the geometry of reality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
