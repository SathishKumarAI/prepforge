---
qid: ing_c8a5a858bf__faang__local
question: 'Explain: In this network I chose two hidden — But what is a neural network?
  | Deep learning chapter 1'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 450
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:26:38-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain *what* a neural network is, assuming you’ve already built a small two‑hidden‑layer model. Confirm the scope: are we describing feed‑forward networks only? Do they want intuition or formal math?  

**Approach**  
1. Define the high‑level idea (computational graph).  
2. Relate it to familiar concepts (perceptron → layers).  
3. Mention learning via backpropagation.  
4. Tie back to your concrete example.  

**Depth**  
A neural network is a parameterized function \(f_\theta(x)\) that maps input vectors to outputs by composing affine transforms with non‑linear activations across multiple *layers*. Each neuron computes \(\sigma(Wx + b)\); stacking layers yields deep representations. Training adjusts \(\theta\) to minimize a loss (e.g., cross‑entropy) using gradient descent; gradients are backpropagated layer‑wise, exploiting the chain rule. In your two‑hidden‑layer network, the first hidden layer extracts low‑level features, the second refines them before the output layer produces predictions. Complexity per forward pass is \(O(\sum_{l} n_l n_{l-1})\), and backprop adds a similar cost; space scales with parameters.

**Edge Cases**  
- Very deep nets may suffer vanishing/exploding gradients—use residual connections or batch norm.  
- Over‑parameterization can lead to overfitting—apply regularization (weight decay, dropout).  
- Non‑differentiable activations break backprop; choose smooth ones (ReLU is piecewise linear but works).

**Optimize & Communicate**  
Highlight that depth increases expressiveness but also training difficulty. Suggest experimenting with different activation functions or learning rates before adding more layers. Conclude by noting how your two‑hidden‑layer example illustrates the core principles—affine + nonlinearity, parameter learning via backprop—while leaving room for scaling and regularization in production systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
