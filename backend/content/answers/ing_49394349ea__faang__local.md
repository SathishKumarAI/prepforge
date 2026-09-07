---
qid: ing_49394349ea__faang__local
question: Explain momentum and Adam. What problem does each solve over vanilla SGD?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 682
total_tokens: 918
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:34:21-05:00'
sources: []
---

**Clarify**  
You’re asking why we use *momentum* and the *Adam* optimizer instead of plain stochastic gradient descent (SGD).  
Assumptions: a deep network with non‑convex loss, mini‑batch updates, and typical hyperparameters (learning rate, batch size).

---

### Approach  
1. **Explain vanilla SGD** – update rule & its limitations.  
2. **Describe momentum** – how it incorporates past gradients.  
3. **Introduce Adam** – adaptive learning rates + bias correction.  
4. **Contrast each with vanilla SGD** in terms of convergence speed, stability, and hyper‑parameter sensitivity.

---

### Depth  

| Optimizer | Update (vector form) | Key Idea | What Vanilla SGD Misses |
|-----------|----------------------|----------|------------------------|
| **SGD** | \(\theta_{t+1} = \theta_t - \eta g_t\) | Fixed step size, pure gradient | No inertia → zig‑zag; sensitive to learning‑rate choice. |
| **Momentum** | \(v_{t+1}= \beta v_t + (1-\beta)g_t;\quad \theta_{t+1} = \theta_t - \eta v_{t+1}\) | Exponential moving average of gradients → “inertia” | Dampens oscillations on ravines; faster traversal along shallow valleys. |
| **Adam** | \(m_{t}= \beta_1 m_{t-1}+ (1-\beta_1)g_t;\quad v_{t}= \beta_2 v_{t-1} + (1-\beta_2)g_t^2\)  <br>Bias‑corrected: \(\hat{m}_t=\frac{m_t}{1-\beta_1^t}\), \(\hat{v}_t=\frac{v_t}{1-\beta_2^t}\)<br>\(\theta_{t+1} = \theta_t - \eta \frac{\hat{m}_t}{\sqrt{\hat{v}_t}+ \epsilon}\) | Per‑parameter adaptive step sizes + momentum; reduces need for manual LR tuning. | Handles sparse gradients and varying curvature, which vanilla SGD struggles with.

---

### Edge Cases  
* Momentum: too high β → overshooting; too low → little benefit.  
* Adam: can over‑adapt on noisy data, leading to premature convergence; sometimes needs a decaying learning rate or “AMSGrad” variant.  
* Vanilla SGD may diverge if LR is set too high or the loss surface has steep cliffs.

---

### Optimize & Communicate  
- **Practical tip**: Start with Adam (β₁=0.9, β₂=0.999) for quick convergence; switch to SGD + momentum in fine‑tuning to avoid overfitting.  
- **Narration**: Emphasize that momentum solves *oscillation* and *slow progress* along flat directions, while Adam further tackles *heterogeneous curvature* and *sparse updates*. This layered reasoning showcases structured thinking and depth expected by FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
