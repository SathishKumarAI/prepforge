---
qid: ing_2a01425225__fp__local
question: Explain post-training quantization versus quantization-aware training. What
  breaks when you push weights to 2-4 bits, and how do you recover quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 613
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:34:07-05:00'
sources: []
---

### Why we quantize

Deep nets solve a **continuous‑optimization problem**: they learn real‑valued weights that minimize a loss over training data.  
Deploying them on edge devices forces us to replace those high‑precision numbers with low‑bit integers to save memory and energy. The *quantization* step maps each real weight \(w\) to an integer \(q\) via  

\[
q = \operatorname{round}\!\left(\frac{w}{s}\right),\qquad s=\text{scale},
\]

where \(s\) is chosen so that the dynamic range of \([-\max|w|,\max|w|]\) fits into the available bit‑width.  

### Post‑Training Quantization (PTQ)

In PTQ we *freeze* the learned weights and simply apply the mapping above.  
The optimisation that produced \(w\) is lost; the network no longer “knows” it will be quantized, so its predictions drift.  The main failure mode when pushing to **2–4 bits** is that the quantization error \(\varepsilon = w - s\,q\) becomes comparable to or larger than the weight’s contribution to the pre‑activation. In shallow layers with large gradients this error dominates and accuracy collapses.

### Quantization‑Aware Training (QAT)

QAT restores the optimisation loop by inserting a *fake quantisation* operator during back‑propagation:

```
q = round(x / s)  # forward
x̂ = q * s         # backward: treat as identity w.r.t. x
```

Thus the loss is computed on the **quantised** activations, and gradients flow through a straight‑through estimator that encourages weights to lie near quantisation levels. The network learns to “tolerate” the fixed‑point noise.

### Recovering quality

1. **Scale refinement**: use per‑channel or per‑group scales so each weight cluster has its own dynamic range, reducing clipping.
2. **Bias correction**: after PTQ compute the bias shift caused by quantisation and add it back to each layer’s bias term.
3. **Fine‑tuning**: a short QAT run on a calibration set (few thousand images) lets the model adjust to the new representation.

#### Non‑obvious insight

*Quantization error is not just noise; it is a structured perturbation that can be exploited by optimisation.* In QAT, the straight‑through estimator effectively teaches the network to encode **redundancy** in its parameters: weights are nudged toward values that produce the same integer after rounding. This redundancy is why low‑bit models (e.g., 4‑bit) can rival full‑precision ones when trained with awareness of the quantisation process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
