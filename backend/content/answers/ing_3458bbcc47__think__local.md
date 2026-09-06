---
qid: ing_3458bbcc47__think__local
question: 'Explain: On-Policy Distillation - Thinking Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 470
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:52:42-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   * Identify what “On‑Policy Distillation” means in ML contexts (knowledge transfer from a policy‑learning agent to another).  
   * Assume the reader knows basic RL, policy gradients, and model distillation but not this specific technique.  

**2️⃣ Pick a mental framework**  
   * **Conceptual map**: RL → Policy → Distillation → On‑Policy vs Off‑Policy.  
   * Break it into: (a) base agent training, (b) student agent learning, (c) interaction loop that keeps both on the same trajectory distribution.  

**3️⃣ Step‑by‑step reasoning**  
   1. Start with a teacher policy trained by an RL algorithm (e.g., PPO).  
   2. Create a student network that will imitate the teacher’s action probabilities.  
   3. Instead of sampling from a fixed dataset, let the student interact with the environment *while* the teacher still acts on‑policy.  
   4. At each step collect `(state, teacher_action_distribution)` and train the student to minimize KL divergence.  
   5. Because both agents share the same state distribution (teacher’s trajectory), the student learns from “on‑policy” data, avoiding covariate shift.  

**4️⃣ Common pitfalls to avoid**  
   * Confusing on‑policy distillation with standard supervised imitation learning.  
   * Forgetting that the teacher must still be active; otherwise you revert to off‑policy (dataset replay).  
   * Neglecting exploration: if the student diverges, the state distribution drifts and training stalls.  

**5️⃣ Sanity checks & verbalizing**  
   * Verify that the loss is KL between teacher and student actions – this signals distillation.  
   * Explain why keeping the teacher on‑policy ensures matched distributions; contrast with off‑policy where a replay buffer introduces mismatch.  
   * Summarize: On‑Policy Distillation trains a student by letting both agents act together, ensuring the student sees exactly the states the teacher would encounter, leading to smoother transfer and better sample efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
