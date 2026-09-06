---
qid: ing_c85a20a290__fp__local
question: 'Explain: LoRA r=16 over full fine-tuning — Multi Tenant Fine Tuning Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 457
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:07:13-05:00'
sources: []
---

**Why a rank‑16 LoRA beats full‑fine‑tuning on a multi‑tenant platform**

The core problem is *parameter sharing* under limited compute and memory.  
In full fine‑tuning we treat every weight \(W\in\mathbb{R}^{d\times d}\) as an independent variable, optimizing over \(\Theta=d^2\) degrees of freedom. When many tenants share a backbone, each tenant needs its own copy of all \(\Theta\), quickly exhausting storage and causing interference (catastrophic forgetting).

LoRA re‑parameterizes the update as
\[
W_{\text{new}} = W + BA,\qquad B\in\mathbb{R}^{d\times r},\;A\in\mathbb{R}^{r\times d},
\]
with a fixed rank \(r\). The optimization now runs over only \(2dr\) parameters. For \(r=16\), this is a 100‑fold compression when \(d\approx 768\).

**Why it works:**  
1. **Low‑rank manifold approximation** – most useful updates lie in a low‑dimensional subspace (empirically true for language models).  
2. **Implicit regularization** – constraining the update to \(\operatorname{rank}(BA)\le r\) biases learning toward smoother, more generalizable directions.  
3. **Orthogonality with base weights** – \(W\) remains unchanged, so tenants do not overwrite each other’s knowledge.

**Non‑obvious insight:**  
LoRA’s update can be seen as *gradient projection onto a fixed subspace*. The subspace is tenant‑specific but lives in the same ambient space; thus multiple tenants can share the same backbone without interference while still exploring distinct directions. This geometric view explains why a small \(r\) suffices even when tenants require diverse behaviors—each only needs to span a modest slice of the full parameter manifold.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
