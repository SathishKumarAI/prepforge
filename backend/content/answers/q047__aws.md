---
qid: q047
question: "How does backpropagation work?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd explain the mechanism clearly, then show I've debugged it — **Dive Deep** on a hard topic. Backpropagation is how a neural network computes gradients efficiently. In the forward pass, inputs flow through the layers to produce a prediction and a loss. In the backward pass, we apply the chain rule from the output backward, computing the gradient of the loss with respect to every weight by reusing the downstream gradients — so we get all gradients in one sweep instead of perturbing each weight separately. An optimizer (SGD/Adam) then nudges each weight opposite its gradient.

The key insight is efficiency: the chain rule lets us cache intermediate derivatives, making training deep networks tractable.

I'd ground it with a real failure I owned: "A deep net's early layers stopped learning — classic vanishing gradients from sigmoid activations. I switched to ReLU, added batch normalization and residual connections, and the gradients flowed; convergence went from stalled to reaching target accuracy in 20 epochs." Understanding vanishing/exploding gradients is what separates rote answers from practitioners.

On AWS, SageMaker autodiff (via PyTorch/TensorFlow) handles this, and SageMaker Debugger surfaces gradient histograms to catch these issues early.

A bar-raiser listens for the chain-rule intuition *and* awareness of the gradient-flow problems that break real training.
