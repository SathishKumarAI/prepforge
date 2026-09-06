---
qid: ing_dee635621a__fp__local
question: 'Explain: Interestingly, the thing that is sent to'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 531
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:53:48-05:00'
sources: []
---

**Why the *gradient* is what gets pushed to the optimiser**

When training a model we minimise a loss \(L(\theta)\) over parameters \(\theta\).  
The fundamental problem is: **how do we know in which direction to change \(\theta\) so that \(L\) decreases most efficiently?**  

A first‑principles answer comes from calculus. For a small update \(\Delta\theta\),

\[
L(\theta+\Delta\theta)\approx L(\theta)+\nabla_\theta L(\theta)^T\,\Delta\theta .
\]

The linear term tells us that the instantaneous rate of change of \(L\) in any direction is given by the inner product with the gradient.  
If we choose \(\Delta\theta = -\eta\,\nabla_\theta L(\theta)\), i.e., step opposite to the gradient, the first‑order change becomes

\[
L(\theta-\eta\nabla_\theta L) \approx L(\theta)-\eta\,\|\nabla_\theta L\|^2 ,
\]

guaranteeing a descent for any positive learning rate \(\eta\).  
Thus the **gradient is the unique direction that, to first order, guarantees maximal decrease**.

From an optimisation viewpoint this is a local linearisation of a nonlinear objective; from information geometry it is the steepest‑descent direction in Euclidean space (the natural gradient would modify the metric). From probability, gradients are expectations of sufficient statistics under the model’s distribution, linking learning to maximum likelihood.

*Non‑obvious insight:* The optimiser does **not** need the loss value itself; only its derivative matters. In high‑dimensional neural nets the loss surface is highly non‑convex, yet the gradient still points toward a direction that locally improves performance. This explains why backpropagation—computing gradients via automatic differentiation—is sufficient to learn deep representations even when we never observe the global optimum.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
