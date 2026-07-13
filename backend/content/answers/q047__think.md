---
qid: q047
question: "How does backpropagation work?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** State the scope: backprop is the *gradient computation*, not the weight update itself, an optimizer does the update. This distinction prevents the most common conflation.

2. **Mental model.** Frame it as the chain rule executed efficiently via dynamic programming: one forward pass to get the loss, one backward pass to distribute blame for that loss to every weight.

3. **Reason step by step.** Forward pass: inputs flow layer by layer to an output and a loss. Backward pass: apply the chain rule from output back to input, each layer computing the loss-gradient by reusing the downstream gradients already computed. Then the optimizer applies w gets w minus alpha times the gradient. Stress that reusing intermediate results makes this O(network size), not exponential.

4. **Traps to avoid.** Do not say it randomly perturbs weights, and do not say it only updates the first (or last) layer. Do not claim exponential cost, the reuse is the whole efficiency story. Remember activations must be differentiable.

5. **Sanity-check and communicate.** Verify you separated 'compute gradients' (backprop) from 'apply update' (SGD/Adam). Add credibility by naming failure modes, vanishing/exploding gradients, and their fixes: ReLU, normalization, residual connections, good initialization.
