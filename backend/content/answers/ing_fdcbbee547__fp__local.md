---
qid: ing_fdcbbee547__fp__local
question: Why do transformer training recipes use learning-rate warmup, and what does
  the rest of the schedule look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 441
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:59:27-05:00'
sources: []
---

**Why warm‑up?**  
A transformer’s parameters are coupled through multi‑head attention and residual connections. When the learning rate (LR) is high at initialization, a single update can send the hidden states into a region where gradients explode or saturate (e.g., softmax in attention). Warm‑up gradually scales the LR from zero to its target value, allowing the optimizer to *adapt* the momentum and precondition the weight space. This mirrors the classic “learning‑rate schedule” in stochastic optimization: start with a small step size so that the iterates lie within the basin of attraction defined by the curvature matrix approximated by Adam or LAMB.

**Rest of the schedule**  
After the linear warm‑up (typically 10–20 k steps), the LR follows a *cosine decay* or *step‑decay* curve:
- **Cosine**: \( \eta_t = \frac{\eta_{\max}}{2}\bigl(1+\cos(\pi t/T)\bigr) \),
- **Step**: drop by factor 10 at predetermined epochs.

The key is that the LR should stay roughly constant while the loss plateaus, then decrease to allow fine‑tuning of the already learned representations. Empirically, a plateau followed by a slow decay gives better generalization than an abrupt fall.

**Non‑obvious insight**  
Warm‑up is not merely a safety valve; it implicitly shapes the *effective* curvature seen by Adam/LAMB. By slowly turning on the learning rate, we ensure that the adaptive moments converge to a stable estimate before large steps are taken. Without warm‑up, the first few gradients dominate the moving averages, leading to an over‑aggressive update schedule that can destabilize training—especially in very deep transformers where signal propagation is already fragile. Thus, warm‑up acts as a *curvature normalizer*, aligning the optimizer’s internal state with the true geometry of the loss surface.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
