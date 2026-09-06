---
qid: ing_806d1eb0ff__think__local
question: 'Explain: Training an internal assistant — On-Policy Distillation - Thinking
  Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 485
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:29:40-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   * What is “on‑policy distillation”? Assume a teacher RL agent that samples actions from its current policy (hence “on‑policy”).  
   * The goal: train a lightweight internal assistant to mimic the teacher while staying aligned with future updates.  
   * Assume we have access to trajectories, rewards, and the teacher’s policy logits.

**2️⃣ Adopt a mental model**  
   * Treat distillation as supervised learning where the target is the teacher’s action distribution rather than ground‑truth labels.  
   * View “on‑policy” as ensuring that the data distribution matches what the student will actually see during deployment (avoiding covariate shift).

**3️⃣ Step‑by‑step reasoning**  
   1. **Collect trajectories** from the teacher while it interacts with the environment using its current policy.  
   2. For each state, record the teacher’s action logits and the resulting reward/next‑state.  
   3. Train a student network to minimize cross‑entropy between its output and the teacher’s logits (soft targets).  
   4. Periodically refresh the data by letting the updated teacher generate new on‑policy samples—this is the “distillation” loop.  
   5. Optionally add a reinforcement signal (e.g., KL penalty or reward shaping) so the student can adapt to changes in the teacher.

**4️⃣ Common pitfalls**  
   * Using off‑policy data: leads to mismatch between training and execution distributions.  
   * Ignoring exploration: if the teacher never visits certain states, the student will be blind there.  
   * Over‑regularizing: too strong a KL penalty can freeze learning; too weak can cause divergence.

**5️⃣ Sanity checks & communication**  
   * Verify that the student’s loss decreases on held‑out on‑policy data before deployment.  
   * Test in simulation: compare returns of teacher vs. student to ensure acceptable performance drop (< 5%).  
   * When explaining, emphasize the “on‑policy” aspect as the key innovation—ensuring data relevance—and the iterative refresh that keeps the assistant up‑to‑date with the evolving teacher policy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
