---
qid: ing_671a93a562__fp__local
question: What is double descent, and how does it change the classical story about
  model size and overfitting?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 317
total_tokens: 497
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:44:21-05:00'
sources: []
---

Double‑descent flips the classic bias–variance narrative on its head by revealing that a model’s risk is not monotonic in capacity but *U‑shaped* twice: once as under‑parameterized, again near the interpolation threshold, and finally decreasing again for over‑parameterized regimes.  
The first descent (classical) arises because increasing parameters reduces bias while keeping variance bounded; beyond a point extra capacity starts to fit noise, inflating risk. The second ascent occurs when the model just becomes expressive enough to interpolate every training example—variance explodes because tiny perturbations of the data can produce wildly different predictions.  
The key insight is that modern architectures operate in the *interpolating regime* where the number of parameters far exceeds samples. Here, regularization (implicit from stochastic optimization, weight decay, or architectural inductive biases) reshapes the loss landscape so that many interpolants lie near a low‑variance manifold. The risk then descends again because the model can average over this manifold, effectively performing implicit Bayesian inference without explicit priors.  
Thus double‑descent shows that “more parameters” is not inherently harmful; instead, the *structure* of the optimization dynamics and the geometry of parameter space govern whether extra capacity hurts or helps. A non‑obvious takeaway: the interpolation threshold marks a phase transition in the implicit regularization strength—once crossed, training algorithms automatically shift from overfitting to self‑regularizing behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
