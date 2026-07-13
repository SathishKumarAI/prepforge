---
qid: q032
question: "What is gradient descent?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll explain gradient descent as the workhorse optimizer for minimizing a differentiable loss, then cover variants and the learning rate. Confirm we want intuition plus practical knobs.

**Approach** — Give the update rule and geometric intuition, then variants, then failure modes.

**Depth** — Gradient descent iteratively minimizes a loss L(θ) by stepping parameters **opposite the gradient** — the direction of steepest ascent: `θ ← θ − η·∇L(θ)`, where η is the **learning rate**. Geometrically, we walk downhill on the loss surface until the gradient vanishes. **Variants** by how much data each step uses: **batch** (full dataset — stable but slow), **stochastic/SGD** (one sample — noisy, fast, escapes shallow minima), and **mini-batch** (a small batch — the practical default, balancing noise and hardware efficiency). Modern optimizers — **momentum, RMSProp, Adam** — add velocity and per-parameter adaptive rates to converge faster and handle poorly-scaled surfaces.

**Edge cases** — Learning rate too high diverges/oscillates; too low crawls. Non-convex surfaces have local minima, saddle points, and plateaus; vanishing/exploding gradients plague deep nets. Unscaled features distort the surface.

**Optimize & communicate** — I'd use Adam with a learning-rate schedule (warmup + decay), normalize inputs, and monitor the loss curve. Signal: I connect the single update rule to the batch-size spectrum and to why we normalize and tune η.
