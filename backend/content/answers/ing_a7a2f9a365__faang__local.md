---
qid: ing_a7a2f9a365__faang__local
question: Your agent solves the same class of task 500 times a week and never gets
  better at it. How would you make it learn, without fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 465
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:14:19-05:00'
sources: []
---

**Clarify**  
You have an agent that repeats the same task (e.g., a dialogue or control problem) 500×/week but its performance remains static. We’re asked to enable learning **without fine‑tuning the core model weights**—so the backbone stays frozen, only higher‑level components can adapt.

Assumptions:  
- The agent receives state observations and produces actions.  
- Rewards or success signals are available each episode.  
- Computational budget permits per‑episode updates.

**Approach**  
1. **Meta‑policy layer** on top of the frozen encoder (e.g., a lightweight MLP).  
2. **Online reinforcement learning**: update this meta‑policy with gradient‑based RL (TRPO/REINFORCE) each episode.  
3. Use **experience replay** to stabilize learning across the 500 runs.  
4. Optionally add a small **value network** for bootstrapping.

**Depth**  
The frozen encoder provides rich representations; the meta‑policy learns task‑specific action mapping. Update rule:  

\[
\nabla_\theta J(\theta) = \mathbb{E}_{\tau}\big[\,R(\tau)\,\nabla_\theta \log \pi_\theta(a|s)\,\big]
\]

with \(R(\tau)\) the episode return. Complexity per update is \(O(|\tau|d)\), where \(d\) is meta‑policy dimension, negligible compared to backbone inference.

**Edge Cases**  
- Sparse rewards → use reward shaping or intrinsic motivation.  
- Non‑stationary environment → decay replay buffer or use priority sampling.  
- Catastrophic forgetting in the meta‑policy → regularize with weight decay.

**Optimize & Communicate**  
To accelerate convergence, employ **Proximal Policy Optimization (PPO)** for clipped updates and a small learning rate schedule. Present this plan as: “We’ll freeze the backbone to preserve general knowledge, then let a lightweight policy adapt online using PPO, replaying past episodes to smooth gradients.” This keeps the core model intact while enabling continuous improvement across thousands of interactions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
