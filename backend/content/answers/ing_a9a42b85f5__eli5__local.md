---
qid: ing_a9a42b85f5__eli5__local
question: 'Explain: Recap ¶ — Part 3: Intro to Policy Optimization \u2014 Spinning
  Up  documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 229
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:06:38-05:00'
sources: []
---

Imagine a robot learning to play a game of fetch with a ball.  
**Policy (π)** is the robot’s “playbook”: a rule that says, given the current position of the ball and the robot, which action to take next.  
**Policy optimization** is like giving the robot a notebook where it writes down how good each play was after many trials. The notebook tells the robot: *“If I move forward when the ball is behind me, I usually win.”*  

In Spinning Up’s Part 3, we start by saying that instead of hand‑crafting this playbook, we let the robot adjust it automatically. It tries actions, watches how often the ball lands in its mouth (the **reward**), and then tweaks the playbook to increase those successful outcomes. This is the essence of policy optimization: a systematic way for an agent to learn the best strategy directly from experience, without pre‑written rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
