---
qid: q047
question: "How does backpropagation work?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** I was building a small neural network from scratch in NumPy for an internal training session, and my hand-coded network wasn't learning, the loss just wouldn't drop.

**Task** I had to correctly implement and explain how the network updates its weights, which meant getting backpropagation right.

**Action** I walked through it step by step. Forward pass: inputs flow through the layers to produce a prediction and a loss. Backprop then applies the chain rule backwards, computing the gradient of the loss with respect to each weight layer by layer, reusing the downstream gradients so you don't recompute anything. Those gradients feed gradient descent to nudge each weight. My bug was a transposed matrix in the backward pass, so gradients were miscomputed. I verified the corrected version with numerical gradient checking.

**Result** After the fix the loss dropped smoothly and the demo network hit 96% on a toy digits set. The lesson that landed for the room: backprop is just the chain rule applied efficiently in reverse, and gradient checking is your safety net.
