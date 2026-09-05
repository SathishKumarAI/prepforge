---
qid: ing_2b73a7c67f__fp__local
question: 'Explain: What they emphasise — Figure Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 399
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:36:55-05:00'
sources: []
---

**Why the figure stresses “data > model”**

At its core, an AI system is a *function approximator*: it maps inputs \(x\) to outputs \(\hat{y}\). The *fundamental problem* is that we only ever observe a finite sample \(\mathcal D=\{(x_i,y_i)\}_{i=1}^N\), not the entire data‑generating distribution \(P(x,y)\). The figure reminds us that **the capacity of any model, no matter how expressive, cannot compensate for missing information**. If the empirical distribution is a poor proxy for the true one—because it’s too small, biased, or noisy—the learned mapping will systematically err.

This ties to the *bias–variance trade‑off* and *information theory*. The expected error decomposes into bias (model mismatch), variance (sampling noise), and irreducible error. Adding parameters shrinks bias but inflates variance unless the data support it. Thus, a deep network trained on a million images can underperform a shallow model trained on ten thousand high‑quality, diverse samples.

**Non‑obvious insight:** *Data augmentation is essentially regularization in disguise.* By transforming existing samples (rotations, crops, color jitter), we enlarge the empirical distribution to approximate the true one better. This reduces variance without increasing model capacity—exactly what the figure’s emphasis on data quality and quantity achieves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
