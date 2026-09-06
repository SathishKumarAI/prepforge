---
qid: ing_bb837853b2__fp__local
question: 'Explain: Supervised learning — What is Machine Learning? \u00a0|\u00a0
  Google for Developers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 487
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:42:33-05:00'
sources: []
---

**Machine Learning (ML)**  
At its core, ML addresses the *inverse problem* of function approximation: we observe pairs \((x_i,y_i)\) drawn from an unknown distribution \(P(x,y)\), and we wish to construct a mapping \(f\) that predicts future \(y\)’s given new \(x\)’s. The “learning” part comes from the fact that \(f\) is not known a priori; instead, it is inferred by minimizing a *risk functional*—the expected loss \(\mathbb{E}_{P}[L(f(x),y)]\). Because the true distribution is inaccessible, we replace it with its empirical counterpart over training data, yielding the **empirical risk minimization** principle. This formalism unifies seemingly disparate tasks: regression (continuous \(y\)), classification (categorical \(y\)), ranking, etc.

---

### Supervised Learning
Supervision supplies labeled examples \((x_i,y_i)\). The learner’s objective is to find a hypothesis \(h\) from a class \(\mathcal{H}\) that generalizes well. This is governed by the **bias–variance trade‑off**: a too simple \(\mathcal{H}\) (high bias) underfits, whereas an overly rich \(\mathcal{H}\) (low bias, high variance) overfits. Regularization terms in the loss function embody this trade‑off mathematically.

---

### Non‑obvious Insight
Most practitioners focus on *accuracy* as a metric, yet accuracy conflates **discriminative capacity** with *sample complexity*. A model can achieve perfect training accuracy but still perform poorly because it has memorized noise. The deeper principle is that *capacity control*—measured by VC dimension or Rademacher complexity—dictates the number of samples needed for a desired generalization error, independent of raw performance on the training set. Thus, when designing supervised learners, prioritize controlling model capacity (e.g., via architecture design or regularizers) before chasing higher training scores.

> *Key takeaway*: ML is fundamentally about minimizing expected loss under uncertainty; supervised learning refines this by exploiting labeled data while balancing bias and variance to ensure true generalization.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
