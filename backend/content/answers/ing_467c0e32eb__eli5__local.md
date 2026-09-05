---
qid: ing_467c0e32eb__eli5__local
question: Behaviour cloning on teleoperation data has a well-known failure mode. What
  is it, and what do you do about it on a real humanoid?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 273
total_tokens: 450
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:28:48-05:00'
sources: []
---

Imagine teaching a child to walk by showing them a video of a perfect stroll in a straight hallway. The child learns the steps but never sees what happens if they stumble or bump into a wall. When they try it on their own, a small misstep can send them off balance, and the next step is wrong too—errors stack up until they fall.

That’s the classic failure of **behavior cloning from teleoperation data**: the robot only ever sees the “good” trajectories the human performed, so its policy never learns to recover when it makes a mistake. On a real humanoid, we fix this by giving the robot extra training that mimics real‑world surprises—randomly changing lighting, adding small obstacles, or perturbing joint torques (domain randomization). We also pair cloning with a safety controller or reinforcement learning that rewards staying upright, so the robot learns to correct itself when it deviates from the ideal path. This keeps the walk steady even after an unexpected slip.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
