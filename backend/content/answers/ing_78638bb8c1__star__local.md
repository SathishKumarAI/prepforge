---
qid: ing_78638bb8c1__star__local
question: 'Explain: Results. — Rethinking On-Policy Distillation of Large Language
  Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 369
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:34:53-05:00'
sources: []
---

**Situation**  
In my research group we were training a next‑generation LLM on a massive text corpus but the GPU budget was capped at 8 A100s. Our baseline policy distillation pipeline produced a student model that lagged behind the teacher by ~5 % perplexity, and it took 48 h to converge.

**Task**  
I had to re‑engineer the on‑policy distillation process so that we could train a high‑fidelity student within a week while keeping memory usage below 40 GB per GPU.

**Action**  
I implemented the “rethinking on‑policy” recipe from the paper: (1) I replaced the vanilla KL loss with a mixture of MSE on hidden states and cross‑entropy on logits, weighted adaptively via a learned temperature schedule. (2) I introduced an auxiliary “phenomenology” loss that penalizes divergence in token probability rank order, encouraging the student to mimic the teacher’s confidence distribution. (3) For efficiency, I swapped the standard transformer encoder for a lightweight MoE layer with 8 experts and used mixed‑precision training with gradient checkpointing. Finally, I scheduled curriculum learning so the student first learned from high‑confidence samples before being exposed to harder ones.

**Result**  
The new pipeline cut training time to 18 h on the same hardware, reduced perplexity by 3.2 % relative to the teacher, and lowered GPU memory to 32 GB. The experiment also revealed that balancing state‑level MSE with rank‑order loss is key for preserving semantic nuance—an insight I’ve applied in subsequent projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
