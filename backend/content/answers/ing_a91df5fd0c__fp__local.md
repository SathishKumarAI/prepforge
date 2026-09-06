---
qid: ing_a91df5fd0c__fp__local
question: 'Q: Why do we use NF4 instead of standard Float4 for QLoRA?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 533
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:05:03-05:00'
sources: []
---

### Why NF4 beats a naïve Float‑4 in QLoRA

**Problem:**  
When compressing the weight tensor \(W\in\mathbb{R}^{m\times n}\) of a transformer for inference, we need an *injective* mapping from each 32‑bit real to a few bits that still preserves the inner products \(\langle Wv, u\rangle\) used in attention and MLPs. A simple Float‑4 (sign + 3‑bit mantissa) is symmetric around zero but allocates equal precision to all magnitudes, wasting capacity on tiny weights and under‑representing large ones.

**Solution – NF4:**  
NF4 defines a *non‑uniform* quantization grid
\[
q_k = \operatorname{sgn}(x)\,\frac{k}{2^{3}}\,\alpha,
\quad k\in\{-7,-6,\dots,6,7\},
\]
where the step size \(\alpha\) is *weight‑wise* chosen to match the empirical distribution of \(W\). The grid is **logarithmic**: small magnitudes are sampled densely (high precision), large magnitudes sparsely. This matches the fact that transformer weights often follow a heavy‑tailed distribution; most values lie near zero but a few dominate the L2 norm.

Mathematically, NF4 minimizes the expected squared error
\[
E[(x - \operatorname{NF4}(x))^2]
\]
under a fixed bit budget, which is equivalent to solving a 1‑D vector quantization problem with Lloyd–Max optimality. The result is a **bias‑free** estimator for dot products because the expectation of the quantizer equals the identity on average.

**Non‑obvious insight:**  
NF4’s *weight‑wise scaling* turns out to be equivalent to applying an *adaptive variance normalization* before quantization. This means that during fine‑tuning (as in QLoRA), the same scale can be reused for all downstream tasks, explaining why NF4 preserves performance across prompts while using only 4 bits per weight.

In short, NF4 is not just “fewer bits”; it’s a *statistically optimal* discretization tailored to the heavy‑tailed nature of transformer weights, guaranteeing that inner products—and thus inference accuracy—remain intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
