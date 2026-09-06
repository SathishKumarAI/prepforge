---
qid: ing_f82b1b68d7__fp__local
question: After fine-tuning on a customer's task, target-task accuracy is up but the
  model got worse at everything else. What happened and what do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 417
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:47:20-05:00'
sources: []
---

Fine‑tuning is essentially *gradient descent with a very small dataset* that is heavily weighted toward one objective: the task loss \(L_{\text{task}}\).  
Because the pre‑trained weights already encode a vast amount of knowledge (captured by the loss \(L_{\text{pre}}\)), the optimizer now tries to reduce \(L_{\text{task}}\) while *concurrently* increasing \(L_{\text{pre}}\) if it helps. The two losses are usually not orthogonal; gradients that lower one often raise the other.  
When the fine‑tuning data is scarce or unrepresentative, the optimizer overfits to the target distribution and moves the parameters far from the “sweet spot” where \(L_{\text{pre}}\) and \(L_{\text{task}}\) were jointly minimized during pre‑training. The result: higher accuracy on the target but degraded performance elsewhere—a classic case of **catastrophic forgetting**.

### What to do

1. **Use a smaller learning rate or *gradient clipping*** so that updates are gentler, preserving the pre‑trained manifold.  
2. **Add an auxiliary loss** (e.g., knowledge distillation from the base model or an L2 penalty on weight changes) to keep parameters close to their original values.  
3. **Employ regularization such as Elastic Weight Consolidation (EWC)**: estimate Fisher information for each parameter and penalize large deviations proportional to its importance for previous tasks.  
4. **Curate a more diverse fine‑tuning set** or use *continual learning* techniques that interleave base‑task samples during training.  

The non‑obvious insight: forgetting is not merely “losing knowledge”; it’s the optimizer’s natural tendency to move toward any local minimum of the new loss, even if that minimum lies on a different manifold than the one that supported broad generalization. Protecting that manifold is key to retaining versatility while gaining specialization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
