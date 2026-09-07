---
qid: ing_806d1eb0ff__faang__local
question: 'Explain: Training an internal assistant — On-Policy Distillation - Thinking
  Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 407
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:43:41-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to explain *On‑Policy Distillation* for training an internal virtual assistant at a lab. I’d confirm: (a) the student model is policy‑based (e.g., RL or seq2seq), (b) we want to transfer knowledge from a high‑performance teacher, and (c) the data comes from the agent’s own interactions (“on‑policy”).  

**2️⃣ Approach**  
1. Run the current policy in the environment to collect trajectories of states → actions → rewards.  
2. For each state, query the teacher for its action distribution or value estimate.  
3. Define a loss that encourages the student’s logits to match the teacher’s (KL divergence) while also maximizing expected reward via RL objective.  
4. Optimize jointly using stochastic gradient descent; optionally add entropy regularization.

**3️⃣ Depth**  
- **Loss:** `L = λ * KL(student‖teacher) + (1‑λ) * (−E[reward])`.  
- **Policy gradient**: use REINFORCE or PPO for the reward term.  
- **Complexity:** O(#steps × batch size).  
- **Trade‑offs:** Larger λ speeds convergence but risks overfitting to teacher; smaller λ preserves exploration.

**4️⃣ Edge Cases**  
- Teacher may be deterministic → KL collapses; use temperature scaling.  
- Non‑stationary environment: re‑collect trajectories periodically.  
- Sparse rewards: augment with imitation loss only on high‑reward states.

**5️⃣ Optimize & Communicate**  
I’d propose adaptive λ that decays as the student’s performance approaches the teacher’s, and report metrics (return, KL gap). In an interview I’d narrate how this blends supervised distillation with RL, yielding faster learning while maintaining policy robustness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
