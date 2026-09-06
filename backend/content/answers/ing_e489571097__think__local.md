---
qid: ing_e489571097__think__local
question: 'Explain: Off-policy distillation — On-Policy Distillation - Thinking Machines
  Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 482
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:03:20-05:00'
sources: []
---

**1️⃣ Clarify the request & set assumptions**  
   * Confirm that “off‑policy” and “on‑policy” refer to reinforcement‑learning (RL) training regimes, not supervised distillation.  
   * Assume the user wants a concise comparison of how each type of policy is used in knowledge transfer (“distillation”) from a teacher agent to a student.  

**2️⃣ Adopt a mental model**  
   * Think of RL as two stages: **policy learning** (agent learns by interacting with an environment) and **knowledge distillation** (student imitates the teacher).  
   * Distinguish between “on‑policy” (data generated from the current student policy) vs. “off‑policy” (data stored from past experiences or a different teacher policy).  

**3️⃣ Step‑by‑step reasoning**  
   1. **On‑policy distillation**:  
      * Collect trajectories using the student’s own policy.  
      * Use these on‑policy samples to train the student, often via behavioral cloning or loss functions that align actions with the teacher’s predictions.  
      * Benefits: guarantees consistency between training data and current policy; no importance‑sampling corrections needed.  
   2. **Off‑policy distillation**:  
      * Reuse replay buffers or logs from a previously trained teacher (or other agents).  
      * Train the student on these off‑policy samples, possibly weighting them with importance sampling to correct distribution mismatch.  
      * Benefits: data efficiency, ability to learn from diverse experiences; drawbacks include bias if policies differ significantly.  

**4️⃣ Common pitfalls to avoid**  
   * Mixing up “off‑policy learning” (algorithmic technique) with “off‑policy distillation” (data source).  
   * Ignoring the need for importance weighting when teacher and student policies diverge.  
   * Assuming on‑policy data is always superior; in large state spaces it can be sample‑inefficient.

**5️⃣ Sanity check & verbalize**  
   * Verify that each bullet links back to the core difference: *where* the training data comes from.  
   * Explain how this impacts bias, variance, and computational cost, then summarize with a concise comparison table for quick reference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
