---
qid: ing_be250d15cb__star__local
question: When would you choose Q-learning over policy gradients, and vice versa?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 313
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:51:15-05:00'
sources: []
---

**Situation:**  
In a recent robotics competition I was tasked with training an autonomous drone to navigate through dynamic obstacle courses. The environment had a sparse reward signal: the drone only received a positive score upon reaching the goal and negative penalties for collisions.

**Task:**  
I needed to decide whether to use Q‑learning or policy gradients to learn an efficient navigation policy that minimized collision rate while maximizing speed.

**Action:**  
I started with Deep Q‑Learning (DQN) because of its simplicity and proven performance in discrete action spaces. I discretized the drone’s steering into 12 angular bins, used experience replay, and a target network to stabilize learning. However, after several training epochs the agent over‑exploited a narrow set of actions, leading to brittle behavior when new obstacles appeared.

I then switched to Proximal Policy Optimization (PPO), which allowed continuous action outputs and introduced entropy regularization to maintain exploration. PPO’s clipped surrogate objective helped keep updates stable even with noisy reward signals.

**Result:**  
The DQN agent achieved a 60 % success rate, whereas the PPO policy reached 85 % under identical test conditions—reducing collisions by 40 % and cutting average completion time from 12 s to 8.5 s. I learned that sparse, discrete rewards favor Q‑learning, but when actions are continuous or exploration is critical, policy gradients (PPO) provide superior robustness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
