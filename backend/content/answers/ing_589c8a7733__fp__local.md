---
qid: ing_589c8a7733__fp__local
question: 'Explain: Optimization: SGD → momentum → Adam → AdamW'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 568
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:12:37-05:00'
sources: []
---

**From plain stochastic descent to weight‑decay aware Adam: a principled evolution**

The core optimization problem in deep learning is to minimize a highly non‑convex loss \(L(\theta)\) over parameters \(\theta\).  
With only a minibatch gradient estimate \(\nabla_{\!b} L\), the simplest update is **SGD**:

\[
\theta_{t+1}= \theta_t - \eta\,\nabla_{\!b} L .
\]

*Why it works:* SGD injects noise that helps escape shallow local minima and approximates the full‑batch gradient cheaply.  
*Limitation:* its trajectory is highly sensitive to curvature; oscillations occur on ravines.

**Momentum** augments SGD with an exponentially weighted average of past gradients \(v_t = \beta v_{t-1} + (1-\beta)\nabla_{\!b}L\), then updates \(\theta_{t+1}= \theta_t - \eta\,v_t\).  
*Why it solves the problem:* the “velocity” smooths oscillations and accelerates along gentle directions, effectively pre‑conditioning by a diagonal matrix of past gradients.

**Adam** goes further: it maintains *two* moving averages—mean \(m_t\) and uncentered variance \(v_t\)—and scales the step by \(\sqrt{v_t}\).  
Mathematically this is equivalent to performing **adaptive RMSProp** with bias correction.  
*Why:* it learns per‑parameter learning rates from data, handling sparse gradients and rapidly varying curvature.

**AdamW** corrects a subtle but critical flaw: Adam’s weight decay is entangled with the adaptive step size, effectively acting as *L2 regularization* only when the adaptive term is small. AdamW decouples weight decay \(\lambda\) from the update:

\[
\theta_{t+1}= (1-\eta\lambda)\,\theta_t - \frac{\eta}{\sqrt{v_t+\epsilon}}\,m_t .
\]

*Non‑obvious insight:* Weight decay should be applied **before** adaptive scaling, otherwise it biases the curvature estimate and degrades generalisation. AdamW restores the true interpretation of L2 regularisation while preserving Adam’s adaptivity.

Thus the progression is a systematic refinement: from naive descent → smoothed dynamics → per‑parameter adaptation → correct regularisation—all driven by the same underlying optimisation principle: *efficiently approximate the true gradient while respecting curvature and generalisation constraints.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
