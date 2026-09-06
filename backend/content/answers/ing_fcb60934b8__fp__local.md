---
qid: ing_fcb60934b8__fp__local
question: You're adapting a pretrained model to a new task. What do you freeze, what
  do you train, and how do you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 517
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:56:51-05:00'
sources: []
---

### Why freezing matters

A pretrained model has learned two distinct types of knowledge:

| Layer | Role | Sensitivity to new task |
|-------|------|--------------------------|
| **Embeddings & early layers** | Capture low‑level, generic signal (syntax, token statistics) | *High* – useful across domains |
| **Middle attention heads** | Encode structural patterns (co‑occurrence, discourse) | *Moderate* – can adapt but may overfit |
| **Late heads / output projection** | Map to task‑specific label space | *Low* – must be relearned |

Freezing a layer keeps its parameters fixed; training updates them. The choice hinges on the **information bottleneck**: we want to preserve useful generic features while allowing the model to specialize where data is scarce.

### Practical rule of thumb

1. **Small new dataset (< 10k examples)**  
   *Freeze* all but the final classification head (and optionally a few top‑layer attention norms).  
   *Train* only the task‑specific projection and maybe layer‑norms that act as “feature adapters.”  

2. **Moderate dataset (10–100k examples)**  
   *Unfreeze* the last transformer block(s) plus the classification head.  
   *Optionally*, fine‑tune selected attention heads that align with the new domain (e.g., biomedical vs. finance).  

3. **Large dataset (> 100k or full‑scale retraining)**  
   *Fine‑tune* all layers, possibly with a lower learning rate for early layers to avoid catastrophic forgetting.

### Non‑obvious insight

**Layer‑norms are the real “freezer.”** They act as small trainable scalars that re‑balance each layer’s activation distribution. By freezing everything except a handful of layer‑norm parameters, you can dramatically reduce overfitting while still allowing the network to adapt its internal scaling—often matching or exceeding performance of full‑fine‑tuning with far fewer updates.

---

**Bottom line:** Freeze generic, low‑level layers; train task‑specific heads and a few adaptive scalars. Scale the number of trainable parameters with data volume, guided by the information bottleneck principle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
