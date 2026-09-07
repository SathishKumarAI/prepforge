---
qid: ing_8441d2399f__faang__local
question: 'Q: How do you prevent a model from "unlearning" general capabilities during
  fine-tuning?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 468
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:52:21-05:00'
sources: []
---

**Clarify**  
We want to keep a pre‑trained model’s broad knowledge while adapting it to a specific task. The main risk is *catastrophic forgetting*: the new data overwrites useful weights. I’ll assume we have a frozen or partially frozen backbone, labeled fine‑tuning data, and enough compute for gradient updates.

**Approach**  
1. **Regularization** – add a penalty that keeps updated parameters close to their pre‑trained values.  
2. **Replay / Elastic Weight Consolidation (EWC)** – store a few representative samples or approximate the Fisher matrix to identify important weights.  
3. **Layer‑wise freezing** – freeze lower layers, fine‑tune only higher ones.  
4. **Dynamic scaling** – use learning‑rate schedules that gradually increase capacity for new knowledge.

**Depth**  
- *Elastic Weight Consolidation*: compute `F_i = E[(∂L/∂θ_i)^2]` on the base data; loss becomes `L_finetune + λ Σ F_i (θ_i - θ_i^*)²`.  
- *Knowledge Distillation*: train a student to mimic the pre‑trained logits (`KL(p_base||p_student)`) while learning the new task.  
- *Replay*: maintain a small buffer of base examples; interleave them with fine‑tune data in each batch.  
Complexity: EWC adds O(n) memory and a forward pass over base data for Fisher; replay costs extra I/O but keeps n small.

**Edge Cases**  
- If λ is too high, the model may underfit the new task.  
- Over‑freezing layers can prevent necessary adaptation.  
- Replay buffer may become stale if the domain drifts.

**Optimize & Communicate**  
Start with a moderate λ (e.g., 0.1), monitor validation on both base and target tasks. If forgetting spikes, increase λ or add more replay samples. Explain that this is a classic continual‑learning trade‑off: preserving old knowledge vs. acquiring new. By iterating on λ and buffer size, we achieve balanced performance while keeping the model’s general capabilities intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
