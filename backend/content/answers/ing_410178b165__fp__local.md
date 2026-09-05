---
qid: ing_410178b165__fp__local
question: 'Explain: Really the entire network is just a — But what is a neural network?
  | Deep learning chapter 1'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 360
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:22:51-05:00'
sources: []
---

In a nutshell, a neural network is **a chain of parametric functions that maps an input vector to an output vector**.  
Why this structure?  

1. **Linear algebra gives us the most general finite‑dimensional linear map**: \(x\mapsto Wx+b\).  
2. **Nonlinearities (ReLU, tanh, sigmoid) are the only way to escape linearity and capture interactions between features**; they introduce curvature while remaining differentiable almost everywhere so gradients can propagate.  
3. **Composing layers multiplies expressive power exponentially**: a network with \(L\) layers can approximate any continuous function on a compact set (Universal Approximation Theorem), because each layer expands the feature space into a higher‑dimensional manifold where linear separators become powerful classifiers or regressors.

Thus a neural net is nothing more than an *adaptive basis expansion* followed by a linear readout.  
The deeper principle is **optimization over a parameterized function class**: we choose weights to minimize empirical risk, and the architecture dictates the hypothesis space’s capacity (bias‑variance tradeoff).  

A non‑obvious insight: **the choice of activation determines the geometry of that manifold**. For example, ReLU induces piecewise linear manifolds with sharp corners, while tanh produces smooth curved manifolds; this directly affects how gradients flow and how many parameters are needed to capture a given function. Understanding this geometry explains why some activations lead to faster convergence or better generalization in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
