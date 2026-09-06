---
qid: ing_6e619f7ee8__fp__local
question: 'Explain: So if you want to cheat, you — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 488
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:59:24-05:00'
sources: []
---

**Why a “cheating” learner is bad – the over‑fit paradox**

A learning algorithm’s job is to infer a *generalizable* mapping  
\(f:\mathcal X\to \mathcal Y\) that will perform well on future, unseen data.  
Formally we minimize the expected risk  

\[
R(f)=\mathbb E_{(x,y)\sim P}\bigl[L(y,f(x))\bigr].
\]

In practice we only observe a finite sample \(\{(x_i,y_i)\}_{i=1}^n\) and replace
\(R(f)\) by the empirical risk  

\[
\hat R_n(f)=\frac1n\sum_{i=1}^n L(y_i,f(x_i)).
\]

If a model “cheats” – i.e. memorizes every training example – it can drive
\(\hat R_n(f)\) to zero, but the *capacity* of the hypothesis class has become so high that the expected generalization error

\[
R(f)-\hat R_n(f)
\]

explodes.  The curse of dimensionality and VC‑dimension arguments show that the excess risk scales with model complexity; a perfect fit on training data does **not** imply low true risk.

*Non‑obvious insight:*  
The act of memorization is equivalent to encoding *noise* as signal.
In information theory terms, the mutual information \(I(X;\hat Y)\) between
input and predicted output becomes dominated by idiosyncratic correlations,
leaving little capacity for genuine structure.  Regularization (e.g., weight decay,
dropout, early stopping) forces the learner to compress the data—keeping only
features that truly predict \(Y\).  Thus, a “cheating” model is mathematically
unreliable because it violates the principle of *Occam’s razor* embedded in
statistical learning theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
