---
qid: ing_570bb940c6__fp__local
question: 'Explain: FlashAttention-3 and int8 quantization — Optimizing AI Inference
  at Character.AI (Part Deux)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 489
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:09:50-05:00'
sources: []
---

**Why FlashAttention‑3 + INT8 works**

The core of a transformer is the *scaled dot‑product attention*  
\(A_{ij}= \frac{q_i^\top k_j}{\sqrt d}\,e^{-\lambda (i-j)}\).  
Its computational cost is \(O(n^2d)\), dominated by two dense matrix products.  
FlashAttention‑3 rewrites the attention kernel so that the softmax and the
output multiplication are fused into a single pass over the *attention window*,
removing intermediate buffers and reducing memory traffic from \(4n^2\) to
\(O(nw)\) (where \(w\) is the window size).  This turns a bandwidth‑bound
operation into compute‑bound, allowing GPUs to stay near peak FLOPs.

**INT8 quantization**

To squeeze even more throughput we quantize weights and activations to signed 8‑bit integers.  
The dot product becomes a *vector‑by‑matrix multiply* over INT8 with a single scaling factor per row:
\[
q_i^\top k_j \approx \frac{(Q_i^{int}\cdot K_j^{int})}{S_q S_k}.
\]
Because the softmax normalizes, we can absorb the two scalars into one *bias‑corrected* scale
\(s = \frac{1}{S_q S_k}\), keeping the probability distribution intact.

**Non‑obvious insight**

Most people think quantization hurts *accuracy*.  In attention, however, the dominant error source is *dynamic range*: a few large logits can dominate the softmax.  INT8’s small dynamic range actually regularises these extremes, acting like a learned temperature controller that improves calibration without extra tuning.

**Result**

Combining FlashAttention‑3’s memory‑efficient kernel with INT8’s reduced bandwidth yields inference speeds up to **4× faster** on modern GPUs while preserving perplexity, making real‑time character dialogue feasible at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
