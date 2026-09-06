---
qid: ing_829d57fd96__fp__local
question: 'Explain: proposed in this original paper and what'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 503
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:43:03-05:00'
sources: []
---

### The Core Proposition of the 1986 *Back‑Propagation* Paper

The paper **“Learning representations by back‑propagating errors” (Rumelhart, Hinton & Williams, 1986)** proposed that a multilayer perceptron could be trained efficiently by propagating gradient information from the output layer backward through the network.  

**Why it must work:**  
At each neuron we have an activation \(y=f(\mathbf{w}\!\cdot\!\mathbf{x})\). The loss \(L\) depends on all outputs, so to adjust \(\mathbf{w}\) we need \(\partial L/\partial \mathbf{w}\). By the chain rule,
\[
\frac{\partial L}{\partial w_{ij}} = \frac{\partial L}{\partial y_j}\;\frac{\partial y_j}{\partial z_j}\;x_i,
\]
where \(z_j=\sum_k w_{kj}x_k\). Computing \(\partial L/\partial y_j\) for hidden units is the *back‑propagation* step: each unit’s error signal is a weighted sum of its successors’ errors. This reduces a global optimization problem to local updates, making learning tractable.

**Deeper Principle:**  
It embodies *gradient descent in high‑dimensional parameter space*, turning an ill‑conditioned “error surface” into a series of efficiently computable directional derivatives. The method leverages the linearity of differentiation and the locality of neural connections—an early illustration of *distributed computation* for optimization.

**Non‑obvious Insight:**  
Back‑propagation is not just a training algorithm; it reveals that any differentiable, compositional system (e.g., physics engines, probabilistic models) can be trained end‑to‑end by automatically computing gradients. This universality underlies modern automatic differentiation frameworks and explains why seemingly unrelated domains—computer graphics, robotics, even quantum chemistry—now share the same learning machinery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
