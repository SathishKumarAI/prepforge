---
qid: ing_ebe82393b9__fp__local
question: Adam vs AdamW - what exactly is "decoupled weight decay," and why did AdamW
  become the transformer default?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 612
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:21:11-05:00'
sources: []
---

**Why Adam vs. AdamW matters**

Optimization for deep nets is a *gradient‐based* game: we want the update step to follow the loss surface while keeping the parameters in check.  
In vanilla **Adam**, weight decay is implemented by adding a term proportional to the current weights to the gradient:

\[
g_t \leftarrow g_t + \lambda\,w_{t-1}.
\]

This *couples* the regularizer with the adaptive step‑size \(v_t = \sqrt{s_t}\) that Adam maintains.  
Because \(s_t\) depends on past gradients, the effective learning rate for a weight is

\[
\eta_{\text{eff}}=\frac{\alpha}{\sqrt{s_t}+\epsilon},
\]

so the decay term gets *scaled* by the same factor as the gradient.  When \(s_t\) shrinks (e.g., during fine‑tuning), the decay becomes too weak; when it grows, the decay is over‑strong.  The net effect: Adam’s “weight decay” behaves like **L2 regularization** only for very large \(\alpha\), and it can even destabilise training.

**Decoupled weight decay (AdamW)** removes this coupling:

1. Compute the usual Adam step  
   \(w_t \leftarrow w_{t-1} - \alpha\,v_t^{-1}\,g_t\).
2. Then apply a *pure* L₂ penalty:  
   \(w_t \leftarrow w_t - \lambda\,w_{t-1}\).

Mathematically this is equivalent to adding the regularizer to the loss function and taking its gradient separately—exactly what you’d do with standard SGD+weight decay.  The step size no longer modulates the decay, so it behaves as intended regardless of the adaptive scaling.

**Why transformers switched**

Transformers are notoriously *sensitive* to the scale of weight updates: their self‑attention matrices must preserve relative magnitudes across layers.  Adam’s entangled decay can inadvertently damp or amplify these scales during fine‑tuning, leading to unstable training or suboptimal convergence. AdamW’s clean separation guarantees that regularization acts uniformly, yielding:

- **Stability** across learning‑rate schedules (especially the linear warm‑up + cosine decay used in BERT/ViT).
- **Better generalisation**, as empirical studies show a ~1–2 % higher accuracy on GLUE/NLP benchmarks.
- **Simplicity**: no need to tune \(\lambda\) differently for different learning rates.

Thus, AdamW’s decoupled weight decay restores the theoretical guarantees of L₂ regularization while preserving Adam’s adaptive advantages—making it the default optimiser for modern transformer architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
