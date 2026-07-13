---
qid: q047
question: "How does backpropagation work?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume a feedforward neural network trained with gradient descent, and that the interviewer wants the chain-rule mechanics, not just "it computes gradients."

**Approach** — Describe the forward pass, the loss, then the backward pass computing gradients layer by layer, and how weights update.

**Depth** — Backpropagation efficiently computes the gradient of the loss with respect to every weight. First, the forward pass feeds the input through each layer, applying weights, biases, and activations to produce a prediction and a scalar loss. Then the backward pass applies the chain rule from the output backward: it computes the gradient of the loss with respect to the output, then propagates that error signal layer by layer, multiplying by each layer's local derivatives (activation derivative and weights). This reuses intermediate results, so computing all gradients costs about the same as one forward pass, far cheaper than perturbing each weight. Finally, an optimizer (SGD, Adam) nudges each weight opposite its gradient, scaled by the learning rate.

**Edge cases** — Vanishing/exploding gradients in deep nets (mitigate with ReLU, residual connections, normalization, careful init); dead ReLUs; non-differentiable points. Requires stored activations, so it's memory-heavy.

**Optimize & communicate** — Use batching, gradient clipping, and adaptive optimizers. I'd emphasize that backprop is just the chain rule applied efficiently with memoization, the insight interviewers listen for.
