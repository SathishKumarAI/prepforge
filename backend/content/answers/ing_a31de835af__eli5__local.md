---
qid: ing_a31de835af__eli5__local
question: 'Explain: Part 3: Intro to Policy Optimization — Spinning Up  documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 237
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:56:17-05:00'
sources: []
---

**Policy optimization is like teaching a robot how to walk better each time it practices.**

Imagine the robot’s walking style (the *policy*) is a set of knobs on a music player: turning them changes its steps. Every time the robot takes a step, we listen to how far it goes and whether it falls (that’s the *reward*). If it does well, we slightly tweak the knobs in that direction; if it fails, we adjust opposite. The Spinning‑Up guide shows how to do this systematically:  
- **Policy** – a recipe that turns a situation into an action.  
- **Reward** – a number telling us “good” or “bad.”  
- **Gradient** – the direction in which tiny knob changes improve the reward.  

By repeatedly stepping, listening, and nudging the knobs toward higher rewards, the robot learns to walk smoothly without ever needing a pre‑written set of steps. This is the heart of policy optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
