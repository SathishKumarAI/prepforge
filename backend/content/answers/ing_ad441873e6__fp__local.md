---
qid: ing_ad441873e6__fp__local
question: 'Explain: It means if you feed in an — But what is a neural network? | Deep
  learning chapter 1'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 331
total_tokens: 513
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:12:57-05:00'
sources: []
---

A **neural network** is a computational graph that solves the *function approximation* problem: given input data \(x\), produce an output \(\hat{y}\) that mimics an unknown mapping \(f(x)\).  
Why must it be structured like a layered cascade of weighted sums followed by nonlinearities?  

1. **Linear combinations** are the only operations that preserve *additive* structure, so each neuron can express any affine transformation on its inputs.  
2. **Nonlinear activation functions** (ReLU, tanh, sigmoid) break linearity, enabling the network to approximate arbitrary continuous functions—this is the content of the universal approximation theorem.  
3. **Depth** corresponds to composition: a deep stack of layers can represent high‑order interactions with far fewer parameters than a shallow network would need, because each layer composes simpler transformations.

Training optimizes the weights by minimizing a loss function via stochastic gradient descent; gradients propagate through the chain rule (backpropagation), which is essentially automatic differentiation on this graph.

**Non‑obvious insight:** A neural network’s *expressive power* depends more on its depth than its width. Doubling layers can encode exponentially richer functions with the same or fewer parameters, because each layer reuses the same pattern of weights to build increasingly abstract features—much like building a tower from modular bricks. This hierarchical reuse is why modern deep models outperform shallow ones, even when parameter counts are comparable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
