---
qid: ing_e7ccfeaa6f__faang__local
question: 'Explain: Reinforcement learning — On-Policy Distillation - Thinking Machines
  Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 489
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:39:04-05:00'
sources: []
---

**Reinforcement Learning – On‑Policy Distillation (Thinking Machines Lab)**  

### Clarify  
We’re asked to explain how *on‑policy distillation* works in reinforcement learning (RL). Assume we have a teacher policy trained by an on‑policy algorithm (e.g., PPO) and want to compress it into a student network while preserving performance.

### Approach  
1. **Collect rollouts** from the teacher using its own exploration strategy.  
2. For each state, record the teacher’s action distribution (probabilities or logits).  
3. Train the student by minimizing a divergence loss (KL or cross‑entropy) between student and teacher distributions over these states.  

### Depth  
- **Data source:** On‑policy rollouts ensure trajectories reflect the current policy’s visitation distribution; thus the student learns exactly what the teacher would see during deployment.  
- **Loss function:**  
  \[
  L_{\text{KD}} = \mathbb{E}_{s\sim d^{\pi_T}}\!\big[ D_{\text{KL}}\big(\pi_T(\cdot|s)\,\Vert\,\pi_S(\cdot|s)\big) \big]
  \]  
  where \(d^{\pi_T}\) is the state‑distribution induced by the teacher.  
- **Optimization:** Standard SGD/Adam; no need for rewards or value targets during distillation.  
- **Result:** Student mimics teacher’s policy with fewer parameters, often matching or slightly improving on‑policy performance due to regularization.

### Edge Cases  
- **Non‑stationary teachers**: If the teacher updates mid‑distillation, stale rollouts can mislead the student.  
- **Sparse state space**: Rare states may be underrepresented; importance weighting can help.  
- **Policy mismatch**: When teacher uses stochastic exploration but student is deterministic, KL loss becomes ineffective.

### Optimize & Communicate  
To speed convergence, one can pre‑train the student on a subset of high‑value states or use *temperature scaling* to soften logits. Communicating this approach involves highlighting that on‑policy distillation leverages exactly the same state distribution as deployment, yielding a faithful compressed policy while sidestepping reward modeling complexities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
