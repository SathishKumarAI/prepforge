---
qid: ing_fcb60934b8__faang__local
question: You're adapting a pretrained model to a new task. What do you freeze, what
  do you train, and how do you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 443
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:27:14-05:00'
sources: []
---

**Clarify**  
You have a frozen backbone (e.g., BERT/ResNet) and a new downstream objective (sentiment, object detection). Ask:  
*Is the domain similar?*  
*How much labeled data do we have?*  
*Do we need real‑time inference?*  

These decide how aggressively to fine‑tune.

**Approach**  
1. **Baseline:** Freeze all encoder weights, train only a lightweight head (classification layer).  
2. **Iterate:** Unfreeze progressively deeper layers until validation loss stops improving or overfits.  
3. **Regularize:** Add weight decay / dropout on newly unfrozen layers.  

Use early‑stopping and learning‑rate scheduling to guard against catastrophic forgetting.

**Depth**  
- *Encoder:* Keep the pre‑trained weights frozen if the new task shares the same feature space (e.g., sentiment on movie reviews).  
- *Task‑specific head:* Always train; it maps generic features to the target labels.  
- *Mid‑layers:* If domain shift is large (e.g., medical imaging), unfreeze and fine‑tune these layers, as they capture more task‑agnostic patterns.  
- *Optimizer:* Use a smaller LR for pre‑trained layers (1e‑5) vs head (1e‑3).  

Complexity: O(N) parameters to train; memory scales with unfrozen depth.

**Edge Cases**  
- **Few shots:** Keep almost everything frozen, use adapters or prompt tuning.  
- **Large data & domain shift:** Full fine‑tuning may be warranted; monitor for overfitting.  
- **Latency constraints:** Prefer freezing more layers to reduce compute per forward pass.

**Optimize & Communicate**  
Explain the trade‑off: *More trainable parameters → higher capacity but risk of overfit and slower inference.* Use validation curves to show diminishing returns when unfreezing deeper layers. Conclude with a recommendation tailored to data size, domain similarity, and deployment constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
