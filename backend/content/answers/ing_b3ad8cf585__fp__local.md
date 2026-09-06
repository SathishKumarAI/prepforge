---
qid: ing_b3ad8cf585__fp__local
question: 'Explain: Sign up for a free account — What is Overfitting? - Overfitting
  in Machine Learning Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 401
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:26:08-05:00'
sources: []
---

**Why the model “cheats” on training data**

In supervised learning we solve an *optimization* problem: find parameters θ that minimize a loss  
\(L(θ)=\frac1N\sum_{i=1}^N \ell(y_i,f_\theta(x_i))\).  
The data set is only one finite sample from the true distribution \(P(X,Y)\).  
If we allow θ to become arbitrarily complex, the optimizer can drive \(L(θ)\) toward zero by
memorizing each training pair rather than learning a pattern that generalizes.  
Mathematically, this occurs when the hypothesis class \(\mathcal H\) has *high capacity* (large VC‑dimension or Rademacher complexity). The empirical risk minimizer then converges to a function that fits noise in the sample.

**Why it fails on new data**

The expected loss on unseen data is  
\(R(θ)=\mathbb E_{P}[\ell(Y,f_\theta(X))]\).
When overfitting, \(L(θ)\) drops while \(R(θ)\) rises because the model captures idiosyncratic fluctuations that are not present in the underlying distribution. Regularization terms (weight decay, dropout, early stopping) effectively reduce the capacity of \(\mathcal H\), tightening the *bias–variance trade‑off* and keeping the expected risk bounded.

**Non‑obvious insight**

A model can overfit even when its training loss is already small: if the training set contains duplicated or highly correlated examples, a simple memorization strategy can achieve low error yet still generalize poorly. Thus, monitoring validation performance—not just training loss—is essential; it reveals whether the model has truly learned a *robust* mapping rather than a spurious fit to repeated patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
