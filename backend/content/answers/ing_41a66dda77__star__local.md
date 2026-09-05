---
qid: ing_41a66dda77__star__local
question: 'Explain: Reinforcement Learning - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 277
total_tokens: 514
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:39:51-05:00'
sources: []
---

**Situation:**  
In my senior capstone I was tasked with building an autonomous drone that could navigate a cluttered indoor environment to deliver parcels. The project had a strict two‑month deadline and we were already falling behind on sensor integration.

**Task:**  
I needed to develop a navigation policy that would let the drone learn optimal flight paths in real time, improving safety and reducing travel time by at least 20% over our baseline PID controller.

**Action:**  
I chose reinforcement learning with Proximal Policy Optimization (PPO). First I built a Gazebo simulation with realistic LiDAR and obstacle dynamics. Using PyTorch, I defined a reward function that penalized collisions, long paths, and high energy use while rewarding progress toward the target. To speed training, I employed curriculum learning: starting with simple corridors then gradually adding obstacles. I also implemented experience replay buffers to stabilize learning and used tensorboard to monitor episode returns.

**Result:**  
After three weeks of training, the RL policy achieved a 28% reduction in average travel time and cut collision incidents from 12 per run to zero. The drone’s battery consumption dropped by 15%. This project taught me how to translate theoretical RL concepts into a tight engineering loop, balancing exploration with safety constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
