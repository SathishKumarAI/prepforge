---
qid: ing_19b8963049__fp__local
question: 'Explain: Get model history — The Annotated ResNet-50 | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 348
total_tokens: 525
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:00:57-05:00'
sources: []
---

In a supervised vision task we want the loss \(L(\theta)\) over epochs to be a faithful record of how the parameter vector \(\theta\) improves.  
Training a ResNet‑50 with Keras or PyTorch produces two time series: training loss and validation loss (or accuracy). These are **model history** objects—arrays indexed by epoch that contain every metric you logged.

Why must we store them?  
1. **Convergence diagnostics** – The loss curve is the empirical estimate of \(E_{(x,y)\sim \mathcal{D}}[\,\ell(f_\theta(x),y)]\). If it plateaus or diverges, it signals under‑/over‑fitting or optimizer issues.  
2. **Hyper‑parameter tuning** – We compare histories across learning rates, batch sizes, etc., selecting the configuration that gives the steepest descent and best validation plateau.  
3. **Reproducibility** – A history is a compressed record of every gradient step; it lets us replay training or perform early‑stopping without retraining from scratch.

The non‑obvious insight: *history objects implicitly encode the learning dynamics*. By plotting loss vs. epoch and overlaying gradients, one can infer effective learning rates (e.g., “zig‑zag” patterns reveal too large a step). Thus, a history is not just data; it’s a diagnostic tool that links the geometry of the loss surface to the optimizer’s trajectory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
