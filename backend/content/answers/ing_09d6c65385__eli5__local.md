---
qid: ing_09d6c65385__eli5__local
question: Why can't you initialize all weights to zero? What do Xavier and He initialization
  actually do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 204
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:51:23-05:00'
sources: []
---

Imagine a classroom where every student (a weight) starts with the same blank notebook. If everyone writes the exact same notes, the teacher can’t tell who is doing better; all answers look identical. That’s what happens when all neural‑network weights begin at zero: each neuron learns the same thing and the network can’t learn useful patterns.

Xavier (Glorot) and He initialization give every student a different, balanced notebook. They set each weight to a small random number drawn from a normal distribution whose width depends on how many classmates sit in front of and behind them (the layer’s fan‑in and fan‑out). This keeps the signal neither exploding nor vanishing as it travels through the class, so every neuron can develop its own unique idea. In short: zero weights freeze learning; Xavier/He give a fair, varied start that lets the network learn efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
