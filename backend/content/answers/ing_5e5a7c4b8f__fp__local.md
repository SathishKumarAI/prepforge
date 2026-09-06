---
qid: ing_5e5a7c4b8f__fp__local
question: 'Explain: And if you really wanted to pick — But what is a neural network?
  | Deep learning chapter 1'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 418
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:25:19-05:00'
sources: []
---

A neural network is a parametric function \(f_\theta:\mathbb{R}^d\to\mathbb{R}^k\) that can approximate any continuous mapping on compact sets (universal approximation).  
Why this particular form?  

1. **Local linearity + composition** – Each neuron computes \(\sigma(w^\top x+b)\), a *linear* map followed by a fixed non‑linearity \(\sigma\). Linear maps are cheap to optimise and preserve convexity locally; the non‑linearity introduces curvature, allowing the network to represent complex manifolds.  

2. **Hierarchical feature learning** – Stacking layers composes functions: \(f(x)=\sigma(W_L\sigma(\dots\sigma(W_1x+b_1)\dots)+b_L)\). Each layer learns features that are progressively higher‑level, mirroring the way humans build abstractions from raw data.  

3. **Optimization geometry** – The loss surface is highly non‑convex but contains many “good” valleys. Gradient descent works because gradients can be backpropagated efficiently (chain rule), turning a global search into a series of local updates that exploit the network’s compositional structure.  

4. **Statistical bias–variance tradeoff** – The architecture (depth, width) controls model capacity; regularisation (weight decay, dropout) injects prior belief that nearby inputs should yield similar outputs, reducing variance without sacrificing expressive power.  

**Non‑obvious insight:**  
The *same* weight matrix can be reused across spatial or temporal dimensions (convolution), effectively imposing a *group symmetry*. This dramatically shrinks the parameter space and biases learning toward invariances inherent in natural data—an elegant marriage of geometry and statistics that underlies most modern deep models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
