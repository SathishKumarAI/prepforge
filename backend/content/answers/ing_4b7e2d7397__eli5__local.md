---
qid: ing_4b7e2d7397__eli5__local
question: Where does reinforcement learning fit on top of imitation learning for manipulation,
  and what makes the reward the hard part?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 210
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:36:32-05:00'
sources: []
---

Imagine you’re teaching a child to play piano. **Imitation learning** is like showing them how to press each key by watching you; they copy your exact moves until they can play the same piece. In robot manipulation, reinforcement learning (RL) comes after that: it’s the “practice” phase where the robot tries many ways to pick up an object and receives a **reward**—a score telling it how well it did.

The reward is the hard part because you must decide what “good” looks like. Is it how quickly the robot grabs the cup? How gently? Does it avoid spilling? Crafting that scoring system (the *reward function*) is tricky: if it’s too vague, the robot learns useless tricks; if it’s too strict, it never tries new ways. So RL builds on imitation by letting the robot explore beyond what it copied, guided only by the reward you hand‑crafted.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
