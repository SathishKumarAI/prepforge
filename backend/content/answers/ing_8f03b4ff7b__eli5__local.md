---
qid: ing_8f03b4ff7b__eli5__local
question: Why should you assume the system prompt will leak, and what follows from
  that?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 197
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:23:37-05:00'
sources: []
---

Think of an AI as a polite robot that only talks when it’s told what to say—its “system prompt” is the instruction sheet you give it before anyone asks questions. If that sheet slips out, other people can see exactly how the robot was set up: its rules, biases, and the limits it has been given. Imagine you hand a recipe card to a chef; if someone copies it, they’ll know whether the dish should be spicy or sweet and what ingredients are allowed. Once the prompt leaks, anyone can craft new questions that exploit those hidden rules—making the AI reveal private data, repeat mistakes, or behave in ways you didn’t intend. So always treat the system prompt like a secret recipe: keep it safe, because if it’s out, the robot can be steered in ways you never planned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
