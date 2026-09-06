---
qid: ing_5daf6079c2__fp__local
question: 'Explain: Then as a final step, I''ll wrap — But what is a neural network?
  | Deep learning chapter 1'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 357
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:23:52-05:00'
sources: []
---

**Neural networks – the engine of deep learning**

At its core a neural network solves an *approximation* problem: given data points \((x_i,y_i)\), it must find a function \(f_\theta(x)\) that maps inputs to outputs with minimal error.  
Why a layered, weighted graph? Because a single linear map can only represent hyperplanes; the universe of real‑world signals is highly non‑linear. By composing *affine* transforms \(W^{(l)}x+b^{(l)}\) with *non‑linear* activation functions \(\sigma\), we obtain a universal approximator—any continuous function on a compact domain can be expressed to arbitrary precision (Cybenko, 1989).  

The network’s parameters \(\theta=\{W^{(l)},b^{(l)}\}\) are tuned via **gradient descent**: the back‑propagation algorithm efficiently computes derivatives of the loss \(L(f_\theta(x),y)\) with respect to every weight using the chain rule. This is essentially a *coordinate‑wise* application of the calculus of variations, turning a global optimization problem into local updates.

A non‑obvious insight: **depth matters more than width**. While increasing neurons per layer expands expressiveness linearly, adding layers allows the network to build hierarchical features—each layer reuses and refines representations from previous ones. This mirrors how the human cortex processes visual data in stages (edges → shapes → objects). Thus, a deep architecture doesn’t just stack more parameters; it creates *compositional* structures that capture complex patterns efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
