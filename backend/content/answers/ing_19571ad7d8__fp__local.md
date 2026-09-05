---
qid: ing_19571ad7d8__fp__local
question: 'Explain: But what is a neural network? | Deep learning chapter 1'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 497
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:00:15-05:00'
sources: []
---

**A neural network is an engineered probabilistic model that learns *how* to map inputs to outputs by adjusting weighted connections so that the overall mapping approximates a target function with minimal expected loss.**

1. **Fundamental problem:**  
   We want a system that can predict \(y\) from \(x\) when we only know many noisy input–output pairs \((x_i,y_i)\). The optimal predictor under squared error is the conditional expectation \(E[y|x]\), which is usually unknown and highly nonlinear.

2. **Why a layered graph of linear + non‑linear units works:**  
   - *Linear* layers compute affine transforms \(z = Wx+b\); these are the only functions that preserve convexity, making optimization tractable.  
   - *Non‑linear activations* (ReLU, sigmoid, tanh) inject expressivity; a composition of many such “piecewise linear” maps can approximate any continuous function on compact sets (Universal Approximation Theorem).  
   - *Depth* allows hierarchical feature extraction: early layers learn low‑level patterns; later layers combine them into higher‑order abstractions. This mirrors the geometry of data manifolds—low‑dimensional surfaces embedded in high‑dimensional space.

3. **Learning as optimization:**  
   We minimize a loss \(L(\theta)=\frac{1}{N}\sum \ell(f_\theta(x_i),y_i)\) over parameters \(\theta=\{W,b\}\). Gradient descent exploits the chain rule through the computational graph, efficiently propagating error signals back to every weight (back‑propagation). This is a direct implementation of stochastic variational inference in a deterministic setting.

4. **Non‑obvious insight:**  
   A neural network is not merely a “black box”; it implements *structured sparsity* implicitly. Each neuron’s activation threshold acts as a gate that selectively routes information, effectively performing a form of data‑dependent dimensionality reduction before the next layer sees it. This gating mechanism explains why networks can learn highly compositional representations without explicit architectural constraints.

In short, a neural network is an adaptive, hierarchical function approximator built from simple linear transformations and non‑linear gates, trained by gradient descent to solve high‑dimensional inference problems efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
