---
qid: ing_b29048e1ff__fp__local
question: 'Explain: You know, we''re sending these deltas through'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 434
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:23:34-05:00'
sources: []
---

When a model is trained on many workers, each one computes the *gradient* (or a stochastic approximation) on its local data batch.  
Let \(w\in\mathbb{R}^d\) be the parameter vector and \(\ell_i(w)\) the loss on worker \(i\). The global objective is  

\[
L(w)=\frac1n\sum_{i=1}^{n}\ell_i(w).
\]

The *exact* descent direction for a full‑batch update would be \(-\nabla L(w)= -\frac1n\sum_i\nabla\ell_i(w)\).  
Each worker cannot send the entire gradient because it is \(d\)-dimensional and may contain redundant information.  Instead, each worker sends a **delta** \(\Delta_i = -\eta\,\nabla\ell_i(w)\) (scaled by learning rate \(\eta\)).  

Why deltas?  
1. **Linearity of gradients**: The sum of the deltas equals the full‑batch update up to scaling, so aggregating them preserves the descent direction.  
2. **Compression**: Deltas often have many near‑zero entries or can be quantized; sending only non‑zero components saves bandwidth without altering the expected update.  
3. **Decentralization**: Workers can compute deltas independently and then average or sum them asynchronously, turning a global optimization problem into a local one that still converges under mild assumptions (e.g., bounded variance).  

A subtle insight is that *delivering only the change* rather than the absolute parameters aligns with **information theory**: the delta carries high‑entropy information about how the model should move, while the base \(w\) provides low‑entropy context.  Thus, communication efficiency and convergence speed both benefit from sending deltas rather than full weights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
