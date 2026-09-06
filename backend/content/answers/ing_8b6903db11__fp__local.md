---
qid: ing_8b6903db11__fp__local
question: 'Explain: Continuous Batching (Iteration-level) — Batching Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 454
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:01:19-05:00'
sources: []
---

**Continuous Batching (Iteration‑level)**  
At the heart of training is the *stochastic gradient* estimate \(g_t=\nabla_\theta \ell(\mathbf{x}_{i:t})\) computed on a mini‑batch. The algorithm must decide *when* to accumulate samples and *how many* to include before an update. Two extreme strategies exist:  
1. **Fixed batch size** – always use the same number of samples per step;  
2. **Full‑data (batch) update** – wait until all data are seen.

The continuous strategy interpolates between these extremes by treating the *update threshold* as a dynamic variable that depends on current gradient variance and curvature.  

From an optimization standpoint, we want to minimize the expected loss \(E[L(\theta)]\). The variance of the stochastic gradient is \(\sigma^2/n\) where \(n\) is batch size. A larger batch reduces variance but increases compute time per update. Continuous batching formalises this trade‑off by solving  

\[
\min_{n}\;\frac{\alpha}{n} + \beta n
\]

where \(\alpha\) captures the *variance penalty* and \(\beta\) the *time cost*. The optimal \(n^*\) satisfies \(n^*=\sqrt{\alpha/\beta}\), which is **not** constant across epochs: as learning rate decays, \(\alpha\) shrinks, so \(n^*\) should grow.  

**Non‑obvious insight:**  
The *effective batch size* should be adapted to the *local curvature* of the loss surface (e.g., via Hessian estimates). In flat regions a smaller batch suffices because gradients are already stable; in steep valleys we need larger batches to dampen noise and avoid oscillations. Thus continuous batching is not merely a computational convenience—it is an implicit second‑order optimizer that balances stochasticity with curvature, yielding faster convergence without manual tuning of fixed batch sizes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
