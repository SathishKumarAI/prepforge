---
qid: ing_1cfdd4dd58__star__local
question: 'Explain: Step 7: Plot Rewards per Training — Reinforcement Learning - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 300
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:27:29-05:00'
sources: []
---

**Situation**  
During a semester‑long project, I built a deep Q‑learning agent to navigate a custom gridworld. Midway through training, the loss curve was flattening, but the episode rewards were still erratic—some runs peaked at 50 points while others stalled near zero.

**Task**  
I needed to diagnose whether my network was converging or if the reward signal was misleading, and then adjust hyper‑parameters accordingly to stabilize learning.

**Action**  
I added a post‑training script that plotted cumulative rewards per episode using Matplotlib. For each of the 500 training episodes, I recorded the total reward and plotted it against episode number, overlaying a rolling average (window = 20). This visualisation revealed a clear upward trend after episode 200 but also highlighted a sudden drop around episode 350, which correlated with a change in exploration rate. By inspecting the plot, I tweaked ε‑decay and increased replay buffer size, then re‑ran training for another 300 episodes.

**Result**  
The reward curve smoothed into a steady climb, reaching an average of 78 ± 4 points over the final 100 episodes—a 35% improvement over the baseline. The exercise taught me that visualizing rewards per episode is essential for spotting convergence issues and guiding hyper‑parameter tuning in RL projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
