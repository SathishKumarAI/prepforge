---
qid: ing_49394349ea__fp__local
question: Explain momentum and Adam. What problem does each solve over vanilla SGD?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 717
total_tokens: 890
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:41:19-05:00'
sources: []
---

### Momentum

**Problem it solves:**  
Vanilla stochastic gradient descent (SGD) updates parameters by a single noisy step along the instantaneous negative gradient:
\[
\theta_{t+1}=\theta_t-\eta g_t .
\]
When the loss surface has long, narrow valleys—common in deep nets—the gradient oscillates orthogonally to the valley’s direction. SGD therefore takes many tiny zig‑zag steps and converges slowly.

**Why it works:**  
Momentum augments each update with an exponentially decaying *velocity* term:
\[
v_{t+1}=\beta v_t+(1-\beta)g_t,\qquad
\theta_{t+1}=\theta_t-\eta v_{t+1}.
\]
This is equivalent to integrating the gradient over time, i.e. estimating a *second‑order* trend. In continuous time it resembles solving  
\(m \ddot{\theta}+c\dot{\theta}+\nabla L(\theta)=0\), a damped physical system that naturally damps high‑frequency oscillations while preserving motion along the valley. The parameter \(\beta\) tunes how far back in history we look, trading off responsiveness for stability.

**Non‑obvious insight:**  
Momentum implicitly *low‑passes* the gradient noise: by averaging over recent gradients it reduces variance without any explicit regularization term. Thus it can accelerate convergence even on highly noisy data.

---

### Adam

**Problem it solves:**  
SGD with momentum still scales poorly when different parameters have gradients of wildly varying magnitudes (e.g., due to sparse features). A fixed learning rate \(\eta\) is suboptimal: large‑magnitude parameters get over‑stepped, small ones under‑stepped.

**Why it works:**  
Adam maintains *first* and *second* moment estimates of the gradients:
\[
m_t=\beta_1 m_{t-1}+(1-\beta_1)g_t,\qquad
v_t=\beta_2 v_{t-1}+(1-\beta_2)g_t^2 .
\]
The update is
\[
\theta_{t+1}=\theta_t-\eta \frac{\hat m_t}{\sqrt{\hat v_t}+ \epsilon},
\]
with bias‑corrected \(\hat m_t,\hat v_t\). This is essentially an *adaptive* learning rate per parameter, proportional to \(1/\sqrt{v_t}\). The second moment captures the variance of each coordinate’s gradient; dividing by its root stabilizes steps across dimensions.

**Non‑obvious insight:**  
Adam can be seen as a *preconditioned SGD* where the preconditioner is learned online from past gradients. Unlike RMSProp, Adam’s momentum term (first moments) also smooths the direction, giving it both variance reduction and directional stability—essentially marrying two “why” principles: **variance control** and **directional smoothing**.

---

Both optimizers address *bias‑variance trade‑offs* in stochastic updates: momentum reduces high‑frequency noise by averaging directions; Adam further normalizes per‑parameter step sizes based on historical gradient magnitude, yielding faster, more robust convergence than vanilla SGD.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
