---
qid: ing_47dda10cdb__eli5__local
question: 'Explain: Title: Deep reinforcement learning from human preferences'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 238
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:30:53-05:00'
sources: []
---

Imagine you’re teaching a robot how to play a video game, but instead of giving it step‑by‑step instructions, you let it try on its own and then point out which moves you liked best. The robot learns to repeat those good moves because it knows they earn “rewards.”  

**Deep reinforcement learning (DRL)** is that process: the robot (the *agent*) takes actions in a world (the *environment*), gets feedback (*reward*), and adjusts its behavior using a big neural network (“deep” means many layers of calculations).  

In **human‑preferences DRL**, the reward isn’t pre‑coded; instead, you compare two short clips of the agent’s play and say which one is better. The agent then treats that clip as higher reward and learns to produce similar behavior. Think of it like a child learning to bake cookies: they try many recipes, parents taste them, and the child tweaks the recipe until the cookies taste just right. This way the robot learns from your tastes rather than strict rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
