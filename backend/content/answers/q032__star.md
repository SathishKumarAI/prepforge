---
qid: q032
question: "What is gradient descent?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** I was training a neural recommender whose loss kept exploding to NaN within a few epochs. The team was ready to blame the architecture, but I suspected the optimization itself.

**Task** I needed to get training to converge stably, which meant really understanding how gradient descent was moving through the loss landscape.

**Action** I walked through the mechanics: gradient descent computes the gradient of the loss with respect to each parameter and steps the parameters in the negative gradient direction to reduce error, repeating until convergence. The NaN was a learning-rate problem, the steps were so big they overshot and diverged. I lowered the learning rate from 0.1 to 0.001, switched from plain batch updates to mini-batch stochastic gradient descent for faster, noisier progress, added a momentum-based Adam optimizer, and normalized inputs so the loss surface was better conditioned. I also added gradient clipping as a safety net.

**Result** Training converged smoothly and validation loss dropped 22% over the old setup. The lesson I took away: gradient descent is just following the slope downhill, but the step size and update variant decide whether you glide to the minimum or blow past it.
