---
qid: ing_f82b1b68d7__faang__local
question: After fine-tuning on a customer's task, target-task accuracy is up but the
  model got worse at everything else. What happened and what do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 552
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:17:08-05:00'
sources: []
---

**Clarify**  
You’re fine‑tuning a pre‑trained language model on a specific customer task (e.g., intent classification). After training, the target accuracy improves but performance on all other downstream tasks drops. Confirm:  
- Is the drop measured on held‑out data or on the same dataset?  
- Are you using a single‑task fine‑tune or multi‑task?  
- What optimizer/learning rate schedule and regularization were used?

**Approach**  
1. Diagnose over‑fitting to the new task.  
2. Quantify forgetting: run the model on a benchmark of other tasks (e.g., GLUE).  
3. Decide between *catastrophic forgetting* mitigation or a new training pipeline.

**Depth**  
The most common culprit is **catastrophic forgetting**—the fine‑tuned weights drift away from the general representation learned during pre‑training. Solutions:  

| Technique | How it works | Complexity |
|-----------|--------------|------------|
| **Elastic Weight Consolidation (EWC)** | Adds a quadratic penalty on parameters that are important for old tasks, using Fisher information. | O(N) extra memory, modest runtime. |
| **Replay / Pseudo‑Rehearsal** | Mix in a small buffer of examples from previous tasks during fine‑tuning. | Requires storage and sampling logic. |
| **Progressive Networks / Adapter Layers** | Freeze base encoder; add lightweight task‑specific adapters that don’t overwrite shared weights. | Linear parameter increase, minimal interference. |

If the model was trained with a very high learning rate or no regularization, consider lowering the LR schedule and adding weight decay.

**Edge Cases**  
- If the target dataset is extremely small, even EWC may not prevent forgetting; in that case use adapters.  
- If the other tasks are highly dissimilar (e.g., code generation vs. text classification), replay might be ineffective—opt for multi‑task training instead.  
- Test with varying buffer sizes to ensure robustness.

**Optimize & Communicate**  
Explain that catastrophic forgetting is expected when fine‑tuning large models on a narrow task. Recommend a **multi‑head or adapter‑based approach** so the base remains intact, and iterate with validation on a held‑out “other tasks” set. Highlight trade‑offs: adapters add negligible overhead but preserve generality; EWC preserves weights but adds compute. Conclude by proposing an experiment plan (baseline, EWC, adapters) and metrics to show recovery of non‑target performance while maintaining target gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
