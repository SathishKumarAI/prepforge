---
qid: ing_fffebba4be__fp__local
question: DoRA, rsLoRA and LoRA+ all claim to improve on vanilla LoRA. What does each
  actually change, and when would you reach for them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 639
total_tokens: 831
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:04:03-05:00'
sources: []
---

### From first principles: why tweak a low‑rank update?

LoRA rewrites a weight matrix \(W\in\mathbb{R}^{d_{\text{out}}\times d_{\text{in}}}\) as  
\(W' = W + BA\), where \(A\in\mathbb{R}^{r\times d_{\text{in}}}\) and \(B\in\mathbb{R}^{d_{\text{out}}\times r}\).  
The objective is to **constrain the search space** to a low‑rank manifold while keeping the original weights frozen. This reduces parameters, memory, and overfitting risk.

Each variant re‑optimises that manifold in a different way:

| Variant | Core change | Why it works | When to use |
|---------|-------------|--------------|-------------|
| **LoRA** | Baseline: fixed rank \(r\), train only \(A,B\). | Simple projection of gradients onto a low‑rank subspace. | Small fine‑tuning tasks, limited compute. |
| **DoRA (Dynamic LoRA)** | Allows the effective rank to grow during training by adding new basis vectors when gradient norms exceed a threshold. | Treats rank as a latent variable; adapts model capacity to data complexity, akin to adaptive basis in kernel methods. | Tasks with unknown or varying intrinsic dimensionality (e.g., multi‑domain fine‑tuning). |
| **rsLoRA (rank‑selective LoRA)** | Uses a sparsity‑inducing regulariser on the singular values of \(A B\), encouraging only the most informative directions to survive. | Connects to *information bottleneck*: we keep only those components that carry predictive information, discarding redundant modes. | When storage is tight and you need a principled way to prune the rank post‑training. |
| **LoRA+** | Introduces a learnable scaling factor \(\alpha\) per layer and a small *adapter* matrix that feeds into \(A,B\). This effectively lets the network decide how much of the low‑rank update should be applied. | Mirrors the idea of *skip connections*: the model can ignore the update if it harms performance, ensuring stability in extremely noisy regimes. | Highly heterogeneous datasets where some layers benefit from adaptation while others don’t (e.g., vision‑language models). |

#### Non‑obvious insight  
All these methods are **variations on the same manifold projection principle**: they differ only in *how aggressively* they explore or restrict that manifold. DoRA’s dynamic rank is essentially a Bayesian model‑selection step; rsLoRA’s sparsity is an information‑theoretic pruning; LoRA+’s scaling acts like an attention mask over the update. Recognising them as such lets you pick the right tool by matching *data complexity* to *manifold flexibility*, rather than memorising each algorithm’s quirks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
