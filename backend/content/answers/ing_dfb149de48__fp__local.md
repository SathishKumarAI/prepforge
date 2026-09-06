---
qid: ing_dfb149de48__fp__local
question: 'Explain: Interesting Links — The Annotated ResNet-50 | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 452
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:55:35-05:00'
sources: []
---

**Why Residuals Are Needed**

When a network learns a function \(f(x)=\mathcal{F}(x)+x\), the extra term \(\mathcal{F}\) is *what* we want to learn, while \(x\) acts as a shortcut that guarantees a non‑zero gradient no matter how deep.  
Without this identity mapping, each layer must approximate an identity function if it should pass information unchanged; otherwise the chain rule forces gradients to shrink exponentially (the vanishing‑gradient problem).  

**From Principle to Architecture**

1. **Identity as Baseline** – The simplest function that keeps the signal intact is \(y=x\).  
2. **Learned Residual** – Instead of learning the whole mapping, we learn \(\mathcal{F}(x)=\text{Conv}_k(x)\) and add it back: \(y=x+\mathcal{F}(x)\).  
3. **Stacking Blocks** – Repeating this unit creates a *deep* network where each block only needs to refine the representation, not reconstruct the input.

**Geometric Interpretation**

The residual connection can be seen as a shortcut in feature‑space that keeps the trajectory of activations near the identity manifold, making optimization behave like traversing a shallow manifold embedded in high dimensions.  

**Non‑obvious Insight**

Because the shortcut bypasses nonlinearities, it preserves *information flow* even when batch‑norm or ReLU would otherwise zero‑out portions of the signal. This explains why very deep ResNets (e.g., 50 layers) can be trained without degradation: the shortcut acts as a “data bus” that carries raw information forward while deeper layers only refine it.

The annotated ResNet‑50 article walks through each of these steps in code, showing how to implement the identity block, why the `Add` layer is crucial, and how the final fully connected layer turns the learned features into class scores.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
