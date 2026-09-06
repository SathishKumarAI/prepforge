---
qid: ing_6b3fd393a1__fp__local
question: 'Explain: Neural Network Optimizers from Scratch in Python | Towards Data
  Science'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 517
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:52:41-05:00'
sources: []
---

**Why an optimizer matters**

Training a neural net is an *optimization* problem: we minimise the loss  
\(L(\theta)\) over parameters \(\theta\). The only way to do this efficiently is
to follow the negative gradient, \(-\nabla_\theta L\), but naïvely stepping
with a fixed learning rate leads either to overshoot or painfully slow progress.
An optimizer supplies a *step rule* that adapts the update size and direction
based on past gradients.

**From first principles**

1. **Gradient descent**: \(\theta_{t+1} = \theta_t - \alpha\,g_t\)  
   where \(g_t=\nabla L(\theta_t)\).  
2. **Momentum**: keep an exponential moving average of gradients,
   \(v_t = \beta v_{t-1} + (1-\beta) g_t\), and update with
   \(\theta_{t+1}= \theta_t - \alpha\,v_t\).  
   This dampens oscillations along valleys.
3. **Adaptive rates**: keep per‑parameter second moments,
   \(s_t = \gamma s_{t-1} + (1-\gamma) g_t^2\), then scale the step
   by \(1/\sqrt{s_t+\epsilon}\).  
   RMSProp, Adam, and variants emerge by combining momentum with adaptive
   scaling.

**The deeper principle**

All these rules are instances of *mirror descent* on a Bregman divergence.
Choosing a different “mirror map” (e.g., Euclidean vs. KL) yields the
different step shapes we observe in practice. This geometric view explains
why Adam’s bias‑correction matters: it restores the true second‑moment estimate
when the moving averages are short‑lived, which is essential for convergence.

**Non‑obvious insight**

Most people treat optimizers as black boxes, but the *bias* introduced by
finite‑sample moving averages can dominate early training dynamics. Correcting
this bias (as Adam does) is not just a nicety—it can be the difference between
a model that converges in minutes and one that stalls for hours. Building an
optimizer from scratch forces you to confront these subtleties, turning an
applied trick into a principled algorithm.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
