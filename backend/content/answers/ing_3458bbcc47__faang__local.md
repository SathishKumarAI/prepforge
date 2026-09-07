---
qid: ing_3458bbcc47__faang__local
question: 'Explain: On-Policy Distillation - Thinking Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 542
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:45:58-05:00'
sources: []
---

**On‑Policy Distillation – Thinking Machines Lab**

---

### 1️⃣ Clarify  
We’re asked to explain *on‑policy distillation* as used by the Thinking Machines Lab (TML). The key idea: a **student policy** learns from an **expert teacher** while interacting with the environment itself, rather than replaying pre‑recorded trajectories.  
Assumptions to confirm:
- Teacher is an on‑policy RL agent (e.g., PPO, SAC) that can generate fresh data.
- Student has identical action space but a simpler architecture (e.g., smaller network).
- Both operate in the same Markov Decision Process (MDP).

### 2️⃣ Approach  
1. **Collect**: Teacher runs episodes → gathers state‑action‑reward tuples.  
2. **Distill**: Train student to mimic teacher’s action distribution using KL or cross‑entropy loss, *while* it collects its own data.  
3. **Iterate**: After each distillation step, let the student interact, generate new trajectories, and optionally refine the teacher (e.g., via joint fine‑tuning).

### 3️⃣ Depth  
- Loss: \(L = \mathbb{E}_{s\sim D} [ \text{KL}( \pi_{\text{teacher}}(\cdot|s) \,\|\, \pi_{\text{student}}(\cdot|s)) ]\).  
- Complexity: O(|D| * |A|) per update; memory linear in batch size.  
- Benefit: Student learns from fresh, on‑policy samples → better generalization to new states the teacher hasn’t visited yet.

### 4️⃣ Edge Cases  
- **Distribution shift**: If student diverges, its trajectories may no longer match teacher’s distribution → add a replay buffer or regularizer.  
- **Exploration mismatch**: Student might explore sub‑optimally; enforce entropy bonus.  
- **Teacher instability**: Use EMA of teacher weights to stabilize distillation.

### 5️⃣ Optimize & Communicate  
- **Curriculum**: Start with high‑confidence actions (low entropy) then gradually include uncertain ones.  
- **Parallelism**: Run multiple teacher–student pairs concurrently for data diversity.  
- **Evaluation**: Compare cumulative reward vs. vanilla student training; plot KL divergence over time.

*In short*, on‑policy distillation lets a lightweight agent learn from a powerful teacher in real time, leveraging fresh interactions to bridge the performance gap while keeping computational overhead low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
