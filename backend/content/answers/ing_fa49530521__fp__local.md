---
qid: ing_fa49530521__fp__local
question: What does the feed-forward network in a transformer block actually do, and
  why is SwiGLU the default now?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 507
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:51:51-05:00'
sources: []
---

In a transformer, each *feed‑forward* (FF) sub‑layer is essentially a small multilayer perceptron that expands the hidden dimension, applies nonlinearity, and contracts back to the original size.  
Formally it computes  

\[
\text{FF}(x)=W_2\,\sigma(W_1x+b_1)+b_2 ,
\]

where \(W_1\in\mathbb R^{d_{\!h}\times d_{\!ff}}\) projects to a higher‑dimensional “intermediate” space (\(d_{\!ff}\gg d_{\!h}\)), \(\sigma\) is an elementwise activation, and \(W_2\) maps back.  
Why this structure?  
1. **Expressivity**: A linear map alone cannot capture interactions between different feature dimensions; the intermediate projection allows multiplicative coupling of input components after nonlinearity.  
2. **Optimization geometry**: The two‑stage mapping keeps gradients from vanishing—\(W_2\) is applied to a already “activated” representation, so the Jacobian retains rank and preserves signal flow through deep stacks.  
3. **Parameter efficiency**: By widening only temporarily (the “bottleneck”), we increase capacity without blowing up memory.

The choice of activation \(\sigma\) now leans toward **SwiGLU** (\(x\,\mathrm{sigmoid}(Wx)\)).  
*Why Swish‑like GLU?*  
- It blends the benefits of *Gated Linear Units* (which control information flow with a learned gate) and *Swish* (smooth, non‑saturating).  
- The product form \(x\,\sigma(\cdot)\) acts as an adaptive, per‑feature scaling that preserves gradient magnitude better than ReLU or GELU.  
- Empirically, SwiGLU yields higher effective capacity with the same parameter budget because the gate can selectively amplify useful features while suppressing noise.

**Non‑obvious insight:** The gating term \(\sigma(Wx)\) is not just a regularizer; it implicitly implements a *soft attention* over the intermediate dimension, allowing each neuron to decide how much of its linear output should pass through. This internal attention mechanism explains why SwiGLU consistently outperforms vanilla GELU in large‑scale transformer training.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
