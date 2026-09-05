---
qid: ing_03174b50da__fp__local
question: 'Explain: The Residuals — The Illustrated Transformer \u2013 Jay Alammar
  \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 426
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:11:40-05:00'
sources: []
---

### Why “Residuals” Are Essential in Transformers

At its core, training a neural network is an **optimization problem**: we want the model’s output \(f_\theta(x)\) to approximate a target function \(y\). The *residual* at any layer measures how far the current representation is from what the next layer should learn. Mathematically,
\[
r = x - \hat{x},
\]
where \(x\) is the input to a sub‑module and \(\hat{x}\) is its prediction.

In a transformer, each encoder/decoder block consists of **multi‑head self‑attention** followed by a feed‑forward network (FFN). The residual connection simply adds the block’s input back into its output:
\[
z_{\text{out}} = z_{\text{in}} + \mathcal{F}(z_{\text{in}}),
\]
where \(\mathcal{F}\) is the sub‑module. This operation has two deep implications:

1. **Gradient flow** – The identity path guarantees that gradients can propagate unchanged, mitigating vanishing/exploding problems in very deep stacks.
2. **Function composition as a perturbation** – Each block learns only a *small* correction to its input. If \(\mathcal{F}\) were large, the network would struggle to learn identity mappings required for early layers.

The non‑obvious insight: residuals act like **implicit regularizers**. By forcing each block to be a *refinement*, they constrain the hypothesis space to functions close to the identity, which is exactly what we need when stacking dozens of self‑attention layers that otherwise would drift far from useful representations.

Thus, in “The Illustrated Transformer,” Jay Alammar’s residual diagrams are not decorative; they reveal how transformers keep deep stacks trainable and stable by treating each layer as a *fine‑tuning* step rather than a wholesale transformation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
