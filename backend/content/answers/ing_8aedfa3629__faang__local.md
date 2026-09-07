---
qid: ing_8aedfa3629__faang__local
question: 'Explain: Pseudocode — On-Policy Distillation - Thinking Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 657
total_tokens: 895
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:07:05-05:00'
sources: []
---

**Clarify**  
We’re asked to sketch the pseudocode for *On‑Policy Distillation* as described by the Thinking Machines Lab. The goal is to transfer knowledge from a large teacher policy (e.g., an RL agent) into a smaller student policy while still collecting fresh on‑policy data from the environment.

Key assumptions I’d confirm:  
- Teacher policy πₜ and student policy πₛ are both stochastic policies parameterized by θₜ, θₛ.  
- The environment is Markovian with state s, action a, reward r, transition T.  
- We have access to a replay buffer for on‑policy trajectories.  

**Approach**  
1. Run the teacher policy to generate trajectories and store them.  
2. Use those trajectories as demonstrations for supervised learning of the student.  
3. Periodically update the teacher with new data (on‑policy) while continuing to train the student from the buffer.

**Depth**  
```python
# Hyperparameters
BATCH = 64; LR_T = 1e-4; LR_S = 1e-4; UPDATE_FREQ = 1000

θ_t, θ_s = init_params()
buffer = []

for step in range(MAX_STEPS):

    # ---------- On‑policy data collection ----------
    s = env.reset()
    done = False
    while not done:
        a ~ π_θt(s)                      # sample action from teacher
        r, s_next, done = env.step(a)
        buffer.append((s,a,r,s_next,done))
        s = s_next

    # ---------- Teacher update ----------
    if step % UPDATE_FREQ == 0:
        batch = random_sample(buffer, BATCH)
        loss_t = policy_gradient_loss(θ_t, batch)   # e.g., REINFORCE or PPO
        θ_t ← θ_t - LR_T * ∇loss_t

    # ---------- Student distillation ----------
    if step % UPDATE_FREQ == 0:
        demo_batch = random_sample(buffer, BATCH)
        loss_s = cross_entropy_loss(θ_s, demo_batch)   # KL(π_θt || π_θs)
        θ_s ← θ_s - LR_S * ∇loss_s
```
*Complexity*: Each update is O(BATCH), linear in buffer size. The algorithm scales with the teacher’s policy size but keeps student training cheap.

**Edge Cases**  
- If the teacher collapses (e.g., due to catastrophic forgetting), the student may learn sub‑optimal behavior; we’d monitor teacher loss.  
- Buffer overflows: use a capped FIFO or prioritized replay.  
- Highly stochastic environments may require variance reduction in policy gradients.

**Optimize & Communicate**  
To improve sample efficiency, one could employ *importance sampling* to reuse off‑policy data for the teacher update, or add *reward shaping* to the student loss. I’d present this pseudocode with a diagram of the data flow (teacher → buffer → student) and explain how each component guarantees on‑policy learning while distilling knowledge efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
