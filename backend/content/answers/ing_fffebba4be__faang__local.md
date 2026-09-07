---
qid: ing_fffebba4be__faang__local
question: DoRA, rsLoRA and LoRA+ all claim to improve on vanilla LoRA. What does each
  actually change, and when would you reach for them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 625
total_tokens: 880
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:36:00-05:00'
sources: []
---

**Clarify**  
We’re comparing three *low‑rank adaptation* variants that aim to reduce trainable parameters while keeping vanilla LoRA’s efficiency: **DoRA (Dynamic Orthogonal Rank‑Adaptation)**, **rsLoRA (Rank‑Sparse LoRA)** and **LoRA+**.  I’ll assume the baseline is a transformer with weight matrix W∈ℝⁿˣᵐ and rank‑k update Δ=ABᵀ (A∈ℝⁿˣᵏ, B∈ℝᵐˣᵏ). We’re interested in how each variant changes the update shape or sparsity.

**Approach**  
1. Identify the mathematical modification each method introduces.  
2. Explain the motivation behind that change (e.g., dynamic rank, sparsity, orthogonality).  
3. Summarize when the trade‑offs make a particular variant attractive.

**Depth**

| Variant | Modification | Why |
|---------|--------------|-----|
| **LoRA+** | Adds *per‑token* scaling to Δ: Δ = (A ⊙ s)(Bᵀ) where s∈ℝⁿ is learned per token or layer. | Captures token‑specific fine‑tuning signals without increasing rank; keeps the same k but adds a lightweight scalar vector. |
| **rsLoRA** | Enforces *row‑wise sparsity* on A and B: only a fraction α of rows are non‑zero, often via hard‑thresholding or learned masks. | Reduces memory & FLOPs by skipping zero rows; preserves rank k but effectively uses fewer active parameters. |
| **DoRA** | Allows the *effective rank* to change during training by projecting Δ onto an orthogonal basis that grows/shrinks: A = QΛ, where Q is updated via a small SVD. | Adapts capacity to task complexity; can start with low k and grow when loss plateaus, saving compute on simple tasks. |

**Edge cases**

*LoRA+* may over‑parameterize for very short sequences—test with batch size 1.  
*rsLoRA* fails if α is too small: the model loses expressivity (zero‑gradient).  
*DoRA* introduces SVD overhead; if k is large, the benefit diminishes.

**Optimize & communicate**

- Use *rsLoRA* when memory is tight and tasks are highly redundant.  
- Choose *LoRA+* for fine‑grained token adaptation (e.g., domain‑specific vocab).  
- Opt for *DoRA* when you expect varying task difficulty or want to avoid hyper‑parameter tuning of k.

In practice, start with vanilla LoRA; switch to rsLoRA for GPU‑limited settings, add LoRA+ for per‑token nuance, and reserve DoRA for research on dynamic capacity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
