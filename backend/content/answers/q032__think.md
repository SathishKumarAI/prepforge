---
qid: q032
question: "What is gradient descent?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** State that it's a general first-order optimizer minimizing a differentiable loss, applicable well beyond neural nets. Assume they want the update rule, the variants, and the learning-rate intuition.

2. **Mental model.** Picture walking downhill on a loss surface: the gradient points uphill, so you step in the *negative* gradient direction, sized by the learning rate.

3. **Reason step by step.** Write theta <- theta - alpha * grad J(theta). Explain alpha (learning rate) controls step size. Cover the variants by how much data per step: batch (whole dataset, stable but slow), stochastic (one sample, fast and noisy), mini-batch (small batches, the practical default). Then the learning-rate caveat: too high diverges/oscillates, too low crawls and can stall. Mention adaptive optimizers - Momentum, RMSProp, Adam - that improve speed and stability, and that convex losses reach the global min while non-convex ones settle at good local minima.

4. **Traps to avoid.** Don't say it *increases* loss, don't call it just "splitting into batches," and don't claim it's a one-step exact solver.

5. **Sanity-check.** Verify the sign (minus the gradient) and that your variant descriptions differ by batch size. Communicate the learning rate as the key tuning knob.
