---
qid: ing_dd15af2748__fp__local
question: 'Explain: Your pretraining loss suddenly diverges at step 300k of a long
  run. Diagnose and fix it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 563
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:49:15-05:00'
sources: []
---

When the training loss explodes after many steps, the optimizer has left the basin of attraction that contains a good stationary point.  
**Why it must happen**: In stochastic gradient descent the update is  

\[
w_{t+1}=w_t-\eta\,g_t ,
\]

with \(g_t\) an unbiased estimate of \(\nabla L(w_t)\).  
If at step 300k the curvature in some directions becomes large (e.g., a weight matrix that has begun to grow in norm), even a tiny learning‑rate step can send \(w_t\) into a region where the gradient blows up. This is precisely what *gradient explosion* means: \(\|g_t\|\to\infty\).  

**Diagnosis**

1. **Gradient norms** – compute \(\|g_t\|\) over recent batches; a sudden spike signals instability.
2. **Weight norms** – inspect \(\|w_t\|\); if they grow unchecked, the model is “fishing” for larger activations.
3. **Learning‑rate schedule** – check whether you have reached the end of decay or are still using a constant rate; a high fixed \(\eta\) can trigger divergence once gradients start to blow up.
4. **Batch statistics** – verify that batch normalization (or LayerNorm) statistics haven’t collapsed (e.g., variance ≈ 0).

**Fixes**

| Problem | Remedy |
|---------|--------|
| Excessive gradient norm | Gradient clipping: \(\tilde g_t = g_t\;\frac{\min(1,\tau/\|g_t\|)}{}\). |
| Weight explosion | Add weight decay (ℓ₂ regularisation) or spectral‑norm clipping to keep singular values bounded. |
| Too large η after decay | Reduce the learning rate immediately or restart a cosine schedule from a smaller base LR. |
| Vanishing/ exploding batch stats | Re‑initialize moving averages, or use *gradient‑based* BN updates that adapt faster. |

**Non‑obvious insight**  
Even with perfectly calibrated clipping and weight decay, the *interaction* between the learning‑rate schedule and **batch‑norm statistics** can cause a sudden loss spike: as the model’s internal activations saturate, the running mean/variance used by BN become stale, leading to an abrupt change in effective input distribution. Thus, monitor not only gradients but also the moving averages of batch‑norm layers; resetting them at the point of divergence often restores stability faster than tweaking LR or clipping thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
