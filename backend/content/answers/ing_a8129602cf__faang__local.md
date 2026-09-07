---
qid: ing_a8129602cf__faang__local
question: 'Explain: The question at hand is what parameters — But what is a neural
  network? | Deep learning chapter 1'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 473
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:15:32-05:00'
sources: []
---

**Clarify**  
The interviewer asks for an explanation of *“what is a neural network?”* in the context of a deep‑learning primer.  
Assumptions:  
1. The audience knows basic ML terminology (features, labels).  
2. We’re focusing on feed‑forward networks, not RNNs or transformers.

**Approach**  
1. Define the core idea (layers of weighted units).  
2. Describe forward pass and learning rule (gradient descent).  
3. Mention activation functions and why we need them.  

**Depth**  
A neural network is a composition of *units* (neurons) organized into layers: an input layer, one or more hidden layers, and an output layer. Each unit computes a weighted sum \(z = w^T x + b\) of its inputs and applies a nonlinear activation \(\phi(z)\). The vector of outputs from one layer becomes the input to the next, producing a function \(f_\theta(x)\) parameterized by weights \(\theta\).  
Training minimizes a loss \(L(y, f_\theta(x))\) via back‑propagation: compute gradients \(\partial L/\partial \theta\) efficiently using the chain rule and update \(\theta \leftarrow \theta - \eta \nabla_\theta L\). Common activations include ReLU (rectified linear unit), sigmoid, and tanh; they introduce nonlinearity so that deep nets can approximate arbitrary functions (universal approximation theorem).

**Edge cases**  
- Very deep nets suffer vanishing/exploding gradients without careful initialization or residual connections.  
- Over‑parameterization leads to overfitting unless regularized (dropout, weight decay).  
- If data are sparse, a shallow network may suffice.

**Optimize & communicate**  
Explain that the *architecture* (depth, width) trades expressiveness against training stability and computational cost. Mention modern tricks: batch normalization, Adam optimizer, skip connections. Wrap up by stating that a neural net is essentially a learnable, hierarchical function approximator built from simple linear operations plus nonlinearity, trained end‑to‑end to minimize prediction error.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
