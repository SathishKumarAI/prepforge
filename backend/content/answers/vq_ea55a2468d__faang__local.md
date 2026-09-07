---
qid: vq_ea55a2468d__faang__local
question: What should you do if you're Overfitting or Underfitting?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 425
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:40:49-05:00'
sources: []
---

**Clarify**  
> *“Over‑/under‑fitting” refers to a model’s bias–variance trade‑off: the former when training loss is low but test loss high, the latter when both are high. I’ll assume we’re working with supervised learning (classification/regression) and have separate train/validation/test splits.**  

**Approach**  
1. **Diagnose** – plot learning curves; check if validation error plateaus or keeps decreasing.  
2. **Under‑fit?** → increase model capacity, add features, reduce regularization.  
3. **Over‑fit?** → decrease capacity, add data/augmentation, strengthen regularization, use dropout, early stopping, cross‑validation.  

**Depth**  
- *Capacity*: switch from linear → tree ensemble → deep network; or add hidden units/layers.  
- *Regularization*: L1/L2 penalties, weight decay, dropout rates, batch‑norm.  
- *Data*: augment images, synthesize samples, use transfer learning.  
- *Early stopping*: monitor validation loss, stop when it stops improving for N epochs.  
- *Cross‑validation*: k‑fold to estimate generalization error more robustly.  
Complexity: extra training time for CV/augmentation; memory overhead for larger models.

**Edge Cases**  
- Extremely noisy labels → under‑fit may look like over‑fit.  
- Small datasets → regularization dominates; too much capacity causes catastrophic over‑fit.  
- Imbalanced classes → use class weighting or focal loss to avoid bias.

**Optimize & Communicate**  
Start with a simple baseline, iterate: add complexity only if validation improves. Use early stopping and learning curves as continuous feedback. Explain that the goal is minimal *generalization* error, not training accuracy. This systematic loop—diagnose → adjust capacity/regularization/data → validate—ensures we hit the sweet spot between bias and variance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
