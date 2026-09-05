---
qid: ing_42db1d9bee__fp__local
question: 'Explain: This is a 3. It''s sloppily written — But what is a neural network?
  | Deep learning chapter 1'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 370
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:26:52-05:00'
sources: []
---

A *neural network* is a function‑approximator built as a composition of simple, differentiable layers whose parameters are tuned by gradient descent.  
At its core it solves **function interpolation under uncertainty**: given input data \(x\in\mathbb{R}^d\) and desired output \(y\), we want a model that generalises to unseen samples while respecting the stochastic nature of real‑world signals.  

Why a layered stack?  
1. **Expressivity vs. learnability** – A single linear map cannot capture nonlinearity; adding a non‑linear activation (e.g., ReLU) after each affine transform expands the function class from a hyperplane to a piecewise‑linear manifold, yet keeps backpropagation tractable.  
2. **Modularity** – Each layer can be seen as an *information bottleneck*: it compresses input into a latent representation that preserves predictive information while discarding irrelevant variance (Tishby’s principle).  
3. **Optimization geometry** – The parameter space is highly non‑convex, but the composition of smooth layers yields gradients that guide descent efficiently; stochasticity in mini‑batch updates acts as implicit regularisation, preventing overfitting.

A subtle insight: *depth matters because it increases the capacity to represent compositional structure*. A shallow network approximating a function with nested dependencies would need exponentially many units, whereas a deep stack reuses intermediate features, mirroring how humans learn hierarchical concepts. Thus, neural networks are not just “black boxes”; they embody a principled trade‑off between representation power, learnability, and generalisation grounded in optimisation theory and information geometry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
