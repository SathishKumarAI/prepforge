---
qid: ing_a3df59a52b__eli5__local
question: How do you instrument cost and latency for an agentic feature, and what
  actually drives cost creep?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 239
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:58:10-05:00'
sources: []
---

Imagine your AI is a kitchen robot that prepares meals (answers). Every time it decides how to cook, it uses two kinds of fuel: **cost** (the money you pay for electricity and ingredients) and **latency** (how long the dish takes to finish).

To *instrument* them means putting tiny “meters” on the robot’s actions. For cost, we count every bit of electricity used and each ingredient bought; for latency, we time each step from start to finish. By logging these meters, we see which recipes (model calls) consume more fuel or take longer.

What drives **cost creep** is mostly three things:

1. **Model size** – bigger brains need more power.
2. **Number of turns** – every back‑and‑forth chat adds a new “step” that burns fuel and time.
3. **Complex prompts** – longer, trickier instructions make the robot work harder.

Keeping the meters on lets you spot which recipe is expensive or slow, so you can tweak it for a cheaper, quicker meal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
