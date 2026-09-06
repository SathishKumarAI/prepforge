---
qid: ing_ec38f35bbf__fp__local
question: 'Explain: Explain how LoRA works - the math, and what `r` and `alpha` mean.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 543
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:22:07-05:00'
sources: []
---

**Low‑Rank Adaptation (LoRA)** rewrites a frozen transformer weight matrix  
\(W\in \mathbb{R}^{d_{\text{out}}\times d_{\text{in}}}\) as  

\[
W' = W + \Delta W ,\qquad 
\Delta W = B\,A ,
\]

where \(B\in\mathbb{R}^{d_{\text{out}}\times r}\) and \(A\in\mathbb{R}^{r\times d_{\text{in}}}\).  
The rank‑\(r\) product is *low* compared with the full dimension, so only \(2rd_{\text{out}}\!+\!rd_{\text{in}}\) parameters are learned instead of \(d_{\text{out}}d_{\text{in}}\).

---

### Why this works

1. **Gradient flow**: The frozen base \(W\) remains unchanged; gradients propagate through the *product* \(BA\).  
2. **Expressivity vs overfitting**: A rank‑\(r\) subspace can approximate any small perturbation with fewer degrees of freedom, acting like a regularizer that captures the dominant directions needed for fine‑tuning.  
3. **Parameter efficiency**: Training \(B,A\) costs \(O(r(d_{\text{out}}+d_{\text{in}}))\), far less than updating all entries.

---

### Hyper‑parameters

| Symbol | Meaning | Effect |
|--------|---------|--------|
| **\(r\)** | Rank of the low‑rank update | Controls capacity; larger \(r\) → more expressive but more parameters. |
| **\(\alpha\)** | Scaling factor applied to \(\Delta W\):  \(\Delta W = \frac{\alpha}{r} BA\) | Normalizes the magnitude of updates so that different ranks produce comparable perturbations, preventing vanishing or exploding gradients.

---

### Non‑obvious insight

LoRA **does not change the forward pass** of the pretrained model; it only adds a *rank‑\(r\)* correction. This means inference cost stays identical to the base model—only the fine‑tuned parameters are stored and loaded. Consequently, LoRA allows *model‑agnostic* adapters that can be swapped in/out without recompiling or retraining the heavy transformer blocks, turning large LLMs into a family of lightweight task‑specific heads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
