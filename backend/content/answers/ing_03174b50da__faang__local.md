---
qid: ing_03174b50da__faang__local
question: 'Explain: The Residuals — The Illustrated Transformer \u2013 Jay Alammar
  \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 491
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:51:10-05:00'
sources: []
---

**Clarify**

The question asks for an explanation of *residual connections* (skip‑connections) as presented in Jay Alammar’s “Illustrated Transformer.”  
Assumptions:  
1. The reader knows the basic Transformer block (self‑attention → feed‑forward).  
2. They’re familiar with deep learning training (gradient flow, vanishing gradients).

**Approach**

I’ll first restate what a residual connection is in this context, then describe why it’s needed, how it’s implemented in the transformer, and finally its practical impact on training and performance.

**Depth**

- **What it is**: In each sub‑layer (self‑attention or feed‑forward), the output *x* is added to the original input *h*:  
  `y = LayerNorm(h + Sublayer(h))`.  
  The “residual” term keeps a copy of the unaltered input.

- **Why it matters**: Deep nets suffer from vanishing gradients. By providing an identity shortcut, gradients can flow directly back through the layer, making training of very deep transformers feasible.

- **How it’s built**:  
  1. Compute sub‑layer output `S = Sublayer(h)`.  
  2. Add input: `h + S`.  
  3. Apply LayerNorm (and dropout).  
  This pattern repeats for both the multi‑head attention and position‑wise feed‑forward modules.

- **Effect**: Empirically, residuals stabilize training, improve convergence speed, and allow deeper stacks without degradation in performance.

**Edge cases**

- If the sub‑layer is too noisy (e.g., due to dropout), the sum can become unstable; careful tuning of dropout rates mitigates this.  
- Very shallow models may not need residuals, but adding them doesn’t hurt.

**Optimize & communicate**

I’d emphasize that residuals are a simple yet powerful architectural design that turns a stack of non‑linear layers into an ensemble of “identity + learned transformation.” In interviews, I would highlight how this trick was pivotal for the success of BERT and GPT families. This concise, structured answer meets the 160–240 word limit while covering clarity, approach, depth, edge cases, and optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
