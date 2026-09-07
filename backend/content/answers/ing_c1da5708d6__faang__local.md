---
qid: ing_c1da5708d6__faang__local
question: 'Explain: Illustration — On-Policy Distillation - Thinking Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 485
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:11:45-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise explanation of *On‑Policy Distillation* as used by the Thinking Machines Lab—essentially how a teacher policy trained with on‑policy RL can be distilled into a student network that mimics its behavior while being more efficient.

**Approach**  
1. Define the two actors (teacher & student).  
2. Explain the on‑policy data collection step.  
3. Describe the distillation objective (matching action logits or policy distributions).  
4. Mention practical training details (entropy regularization, replay buffer).

**Depth**  
- **Teacher**: a high‑capacity RL agent trained with an on‑policy algorithm (e.g., PPO) that optimizes expected return under its own trajectory distribution.  
- **Data collection**: roll out the teacher for several episodes, recording state‑action pairs and returns; this constitutes the *distillation dataset*.  
- **Student objective**: minimize KL divergence between student policy π_s(·|s) and teacher policy π_t(·|s), often augmented with an entropy bonus to keep exploration.  
- The loss can be written as L = Σ_s τ⁻¹ log π_s(a|s) – τ⁻¹ log π_t(a|s), where τ is a temperature parameter controlling softness.  
- Training proceeds offline (batch RL style) but the student is evaluated on‑policy, ensuring it learns from trajectories that are actually useful.

**Edge Cases**  
- If the teacher overfits to narrow trajectories, the student may inherit this bias; adding data augmentation or curriculum can mitigate it.  
- Very large action spaces make KL computation expensive—use sampled softmax or hierarchical policies.  
- Mismatch in observation encoders between teacher and student requires careful feature alignment.

**Optimize & Communicate**  
Improvements: (a) use *behavioral cloning* with importance weighting to correct distribution shift; (b) add a value‑matching term so the student also learns the reward signal, leading to faster convergence. When explaining, emphasize that on‑policy distillation preserves the teacher’s optimality while producing a lightweight policy suitable for deployment, which is why it’s attractive in real‑world robotics and game AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
