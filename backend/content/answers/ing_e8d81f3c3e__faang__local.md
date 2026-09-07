---
qid: ing_e8d81f3c3e__faang__local
question: 'Explain: Overlap Ratio. — Rethinking On-Policy Distillation of Large Language
  Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 551
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:40:50-05:00'
sources: []
---

**Clarify**  
You’re asking about the *Overlap Ratio* used in “Rethinking On‑Policy Distillation of Large Language Models.” It’s a metric that quantifies how much a student model’s token predictions overlap with those of its teacher during on‑policy rollouts—essentially measuring alignment between their output distributions.

**Approach**  
1. Define the ratio mathematically.  
2. Explain why it matters for distillation quality.  
3. Illustrate with an example.  
4. Discuss how to compute it efficiently in practice.

**Depth**  

| Step | Description |
|------|-------------|
| **Formula** | \( \text{Overlap Ratio} = \frac{\sum_{t=1}^{T}\mathbb{I}(y_t^{S}=y_t^{T})}{\sum_{t=1}^{T}\mathbb{I}(y_t^{T}\neq y_{\text{null}})} \)  |
| **Terms** | \(y_t^{S}\), \(y_t^{T}\): argmax token at step t for student and teacher.  Null token denotes positions where the teacher did not emit a token (e.g., padding). |
| **Interpretation** | Ratio ∈ [0,1]; higher values mean the student’s predictions match the teacher more often during rollout. |
| **Why it matters** | On‑policy distillation relies on the student exploring the same state space as the teacher; if overlap is low, the student may learn from a distribution that diverges early, hurting performance. |

**Edge Cases**  
- *Teacher emits multiple equally‑likely tokens*: use entropy‑weighted overlap or top‑k intersection instead of hard argmax.  
- *Long sequences with many nulls*: normalize by non‑null teacher tokens to avoid bias toward short outputs.  
- *Non‑deterministic teachers (sampling)*: compute expectation over several rollouts.

**Optimize & Communicate**  
- Compute overlap on the fly during rollout, O(T) time and constant extra memory.  
- Report average overlap per batch and track its trend; a sharp decline signals mode collapse or reward misalignment.  
- If overlap drops below a threshold (e.g., 0.6), trigger curriculum adjustments: increase teacher temperature or introduce auxiliary losses.

By framing the metric this way, interviewers see that you grasp both the math and practical implications—exactly what FAANG scoring looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
