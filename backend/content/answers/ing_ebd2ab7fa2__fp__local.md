---
qid: ing_ebd2ab7fa2__fp__local
question: 'Explain: Start building in the console — What is Overfitting? - Overfitting
  in Machine Learning Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 381
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:21:02-05:00'
sources: []
---

**Overfitting – a failure of generalization**

In supervised learning we solve an *optimization problem*: find parameters θ that minimize a loss \(L(\theta)=\frac1N\sum_{i=1}^N \ell(f_\theta(x_i),y_i)\).  
The training data are only a finite sample from the true distribution. If the model is too expressive (high‑dimensional θ, deep nets), the optimizer can drive \(L(\theta)\) to zero on that sample by memorizing idiosyncratic noise rather than learning the underlying mapping.

Geometrically, each datapoint defines a hypersurface in parameter space where its loss is zero. A complex model has many such surfaces; their intersection may contain points that satisfy all training constraints but lie far from any “true” solution. The learned function then oscillates wildly on unseen inputs—a high‑variance estimator.

From an information‑theoretic view, overfitting corresponds to a *low‑bias, high‑variance* trade‑off: the model captures more bits of the sample than are justified by the data’s entropy, violating Occam’s razor. Regularization terms (weight decay, dropout) add a penalty \(R(\theta)\), effectively shrinking the hypothesis space and forcing the solution to align with global structure rather than noise.

**Non‑obvious insight:**  
Overfitting is not merely “too many parameters”; it is *the mismatch between the model’s capacity and the intrinsic complexity of the target function*. Even a modestly sized network can overfit if the training set is noisy or too small. Thus, controlling data quality (augmenting, cleaning) can be as effective as adding regularization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
