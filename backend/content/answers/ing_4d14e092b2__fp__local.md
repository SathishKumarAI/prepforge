---
qid: ing_4d14e092b2__fp__local
question: 'Explain: Page Summary — What is Machine Learning? \u00a0|\u00a0 Google
  for Developers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 374
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:49:02-05:00'
sources: []
---

**What is Machine Learning?**  
At its core, a *machine* must solve an optimization problem: given data \(X\) and a desired output \(Y\), find a mapping \(f_\theta(X)\) that minimizes some loss \(\mathcal{L}(f_\theta(X), Y)\). The twist is that the function’s form (the hypothesis space) cannot be hand‑crafted for every new task. Instead, we let the data dictate the parameters \(\theta\) through *learning*—iteratively adjusting \(\theta\) so that the empirical risk \(\frac{1}{n}\sum_i \mathcal{L}(f_\theta(x_i), y_i)\) goes down.

Why must this work? Because any expressive function class (e.g., neural nets, kernel machines) can approximate a wide range of mappings; by optimizing over it we effectively search the space of possible solutions. The *generalization* guarantee comes from statistical learning theory: if the hypothesis space is controlled (capacity measured by VC‑dimension, Rademacher complexity, etc.) and training data are i.i.d., then low empirical risk implies low expected risk.

**Non‑obvious insight:**  
Most people think “learning” just means fitting a curve. In fact, *regularization*—adding a penalty on \(\theta\)—is the mechanism that turns learning into *inference*. It encodes prior beliefs (smoothness, sparsity) and is mathematically equivalent to Bayesian posterior estimation under appropriate priors. Thus, machine learning can be viewed as a principled way of performing probabilistic inference when explicit models are infeasible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
