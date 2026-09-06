---
qid: ing_b6acd86cc2__fp__local
question: 'QAT Training Objectives: SFT or KD? — What Makes Low-Bit Quantization-Aware
  Training Work for Reasoning LLMs? A Systematic Study'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 459
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:32:30-05:00'
sources: []
---

**Why Low‑Bit QAT Works for Reasoning LLMs**

The core problem is *information loss* when a high‑precision weight \(w\in\mathbb{R}\) is replaced by a discrete quantized value \(\tilde w=q(w)\). For dense language models the gradient flow through \(q(\cdot)\) is blocked, so naïve fine‑tuning collapses: the model cannot recover the lost signal.

Quantization‑aware training (QAT) rewrites this as an *optimization with a non‑convex regularizer* that penalizes deviations between the full‑precision activations and their quantized counterparts. Formally, we minimize  

\[
L(\theta)=\mathbb{E}_{(x,y)}\Bigl[\ell(f_{\tilde \theta}(x),y)\Bigr]
+\lambda\,\mathbb{E}\bigl[|f_\theta(x)-f_{\tilde\theta}(x)|^2\bigr],
\]

where \(\tilde\theta=q(\theta)\). The second term forces the *full‑precision* network to stay close to its quantized version, thereby aligning the two parameter spaces. This is a classic *teacher–student* problem (knowledge distillation), but here the teacher is implicit: the full‑precision parameters act as a self‑distilled guide.

The non‑obvious insight: **the alignment loss implicitly regularizes the Hessian of the loss w.r.t. \(\theta\)**. By constraining higher‑order curvature, QAT prevents catastrophic forgetting of rare but critical reasoning patterns that would otherwise be washed out by aggressive quantization. In practice this yields a *robust manifold* of solutions where low‑bit weights can approximate high‑precision ones without losing the combinatorial structure needed for chain‑of‑thought reasoning.

Hence, low‑bit QAT succeeds because it turns quantization into an *explicit optimization problem* that preserves both gradient flow and curvature—exactly what reasoning LLMs require.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
