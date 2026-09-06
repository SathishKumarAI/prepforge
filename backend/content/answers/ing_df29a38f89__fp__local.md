---
qid: ing_df29a38f89__fp__local
question: 'Explain: Key structures — Architecture in brief'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 502
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:54:16-05:00'
sources: []
---

**Key Structures – “Architecture” in Machine Learning**

At its core, a machine‑learning system solves *inference*: given data \(x\), produce an output \(y\). The *architecture* is the mathematical map \(\mathcal{F}_\theta : x \mapsto y\) parameterised by \(\theta\).  

1. **Layers as Feature Transformations**  
   Each layer applies a linear transform followed by a non‑linearity: \(h^{(l)} = \sigma(W^{(l)} h^{(l-1)} + b^{(l)})\). This mirrors the chain rule of calculus—gradients flow through successive Jacobians, enabling efficient optimisation via back‑propagation.  

2. **Depth vs. Width**  
   *Depth* allows hierarchical feature extraction; *width* increases representational capacity for complex functions (Universal Approximation Theorem). Balancing them is an optimisation trade‑off: deeper nets capture compositional structure but risk vanishing gradients, mitigated by residual connections or normalisation.

3. **Recurrent & Attention Mechanisms**  
   Recurrent units (RNN/LSTM/GRU) unroll time as a sequence of identical layers, encoding memory via hidden states \(h_t = f(h_{t-1}, x_t)\). Attention replaces fixed‑size context vectors with weighted sums over past states: \(\alpha_{t,i} \propto \exp(h_t^\top h_i)\), enabling the model to focus on relevant parts of the input—an explicit optimisation of information flow.

4. **Probabilistic Views**  
   Many architectures (e.g., VAEs, normalising flows) are trained by maximizing a likelihood lower bound. The structure is chosen so that the Jacobian determinant is tractable, ensuring efficient density estimation.

5. **Non‑obvious Insight: *Parameter Sharing as Symmetry Enforcement***  
   Convolutional layers share weights across spatial locations, enforcing translation equivariance—an explicit symmetry of the data domain. This reduces parameters and embeds prior knowledge directly into the optimisation landscape, a principle that extends to graph neural nets (node‑level weight sharing) and transformers (token‑wise self‑attention). Recognising architectures as symmetry‑aware modules clarifies why they generalise so well beyond mere capacity arguments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
