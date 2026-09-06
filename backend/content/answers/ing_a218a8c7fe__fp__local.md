---
qid: ing_a218a8c7fe__fp__local
question: 'Explain: Supervised Fine-Tuning (SFT) — Fine Tuning Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 580
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:50:17-05:00'
sources: []
---

**Supervised Fine‑Tuning (SFT): Why it Works and How to Do It**

At its core, an LLM is a *parameterized density estimator* \(p_\theta(\mathbf{y}\mid\mathbf{x})\) learned on vast, heterogeneous corpora. Those data encode general language statistics but not the *task‑specific* mapping we care about (e.g., “summarise this article”). SFT re‑optimises a small subset of parameters \(\phi\subseteq\theta\) to minimise the cross‑entropy loss  
\[
\mathcal{L}(\phi)= -\frac1N\sum_{i=1}^{N}\log p_{\phi}(\mathbf{y}_i\mid\mathbf{x}_i),
\]
thereby *projecting* the high‑dimensional, general model onto a lower‑dimensional subspace that aligns with our labeled data.  

Why this projection works:  
- **Information bottleneck** – By restricting updates to \(\phi\), we preserve most of the pre‑trained knowledge while only refining the *mutual information* between inputs and desired outputs for the task.  
- **Regularisation by pre‑training** – The base weights act as a strong prior, preventing overfitting when \(N\) is small.

### Common Strategies

| Strategy | What it tweaks | Typical use |
|----------|----------------|-------------|
| **Full‑parameter fine‑tuning (FP‑FT)** | All \(\theta\) | Small datasets with high capacity; risk of catastrophic forgetting. |
| **Adapter layers** | Insert lightweight modules between transformer blocks | Efficient for multi‑task, minimal parameter count. |
| **LoRA (Low‑Rank Adaptation)** | Add rank‑\(r\) updates to weight matrices | Memory‑efficient, fast convergence. |
| **Prompt‑tuning / Prefix tuning** | Optimize continuous prompts instead of weights | Keeps base model frozen; great for few‑shot scenarios. |

### Non‑obvious Insight

Most practitioners treat adapters or LoRA as *additive* tweaks, but they can be interpreted as **constrained manifold learning**: the fine‑tuned model stays on a low‑dimensional affine subspace of the full parameter space that is tangent to the task manifold. This explains why even tiny rank‑\(r\) updates (e.g., \(r=4\)) often achieve performance comparable to full fine‑tuning—because the task lies near a *low‑intrinsic‑dimension* slice of the language model’s latent geometry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
