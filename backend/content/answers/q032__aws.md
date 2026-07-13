---
qid: q032
question: "What is gradient descent?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd explain the intuition, then show I've debugged it for real — **Dive Deep**. Gradient descent is the optimizer that trains most ML models: it computes the gradient of the loss with respect to parameters and steps in the opposite direction (downhill), iterating until convergence. The learning rate controls step size — too large and it diverges/oscillates, too small and it crawls.

I'd distinguish the variants because the choice matters at scale: batch (all data per step, stable but slow), stochastic (one example, noisy but fast), and mini-batch (the practical default, GPU-friendly). I'd mention momentum and Adam as adaptive methods that handle ill-conditioned surfaces.

I'd ground it: "A model's loss was NaN-ing after a few epochs; I diagnosed an exploding gradient, added gradient clipping and dropped the learning rate with a warmup schedule — training stabilized and converged 30% faster." That's **Ownership** of a hard failure, not hand-waving.

On AWS, SageMaker handles distributed mini-batch training across GPU instances, and I'd track the loss curve in real time via SageMaker Debugger / CloudWatch to catch divergence early.

A bar-raiser listens for whether I connect learning rate and batch choices to concrete training behavior, not just recite the definition.
