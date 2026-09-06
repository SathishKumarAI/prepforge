---
qid: ing_cc62f0425b__fp__local
question: How do you detect overfitting and underfitting in practice, and what do
  you do about each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 383
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:14:53-05:00'
sources: []
---

**From the fundamental problem of generalisation**

A model that memorises training data fails to answer *new* questions; one that is too weak cannot even capture the signal.  
Over‑fitting ⇔ variance dominates bias: training loss ≪ validation loss.  
Under‑fitting ⇔ bias dominates variance: both losses remain high.

**Practical detection**

1. **Learning curves** – plot training/validation error versus epoch or data size.  
   *Sharp divergence* signals over‑fit; *parallel high errors* signal under‑fit.  
2. **Cross‑validation scores** – large spread across folds indicates variance (over‑fit).  
3. **Regularisation diagnostics** – if L1/L2 penalties shrink all weights to near zero yet validation error stays high, the model is too simple.

**What to do**

- *Over‑fitting*:  
  - Increase regularisation strength or add dropout.  
  - Collect more data or augment it.  
  - Simplify architecture (fewer layers/units).  
  - Use early stopping with a patience window.

- *Under‑fitting*:  
  - Reduce regularisation, remove constraints.  
  - Expand capacity: deeper networks, wider layers, richer feature maps.  
  - Feature engineering or pretraining on related tasks to provide stronger priors.

**Non‑obvious insight**

The *effective* number of parameters is not just the raw count; it depends on data geometry and activation saturation. A large network can behave like a low‑dimensional model if most weights collapse during training, masking under‑fitting. Monitoring singular values of weight matrices (or Fisher information) reveals whether capacity is truly utilised, guiding more principled scaling than arbitrary layer sizing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
