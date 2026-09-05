---
qid: ing_f1e320ed41__eli5__local
question: You want to RL-train an agent for a multi-turn tool-use task, and the only
  reward you have is whether the final task succeeded. How do you make that work?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 229
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:57:31-05:00'
sources: []
---

Imagine you’re teaching a robot chef to bake a cake, but the only thing you can check at the end is whether the cake tastes good. The robot has to pick up flour, stir, bake, and decorate—all without knowing which step matters most until the finished cake arrives.

Treat the whole cooking session like a long story with many chapters. Even though you only get one “yes” or “no” after the last chapter, you can give the robot tiny clues during each turn: a quick thumbs‑up when it adds sugar (because that’s usually good), a gentle reminder if it drops an egg (since that often ruins things). These small signals are called *shaping rewards*; they help the robot learn which actions tend to lead to success.

So, start with a basic recipe of positive hints for good moves and negative hints for mistakes. Over time, the robot learns to choose the right sequence of actions that will make the cake taste great, even though it only sees the final verdict at the end.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
