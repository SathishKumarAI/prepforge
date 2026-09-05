---
qid: ing_9eba25b2b0__eli5__local
question: What are Skip Connections? — The Annotated ResNet-50 | Towards Data Science
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 188
total_tokens: 353
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:48:59-05:00'
sources: []
---

Imagine building a long staircase that carries people from the ground floor to the top. Each step is a “layer” that changes the person’s shoes (the data) a little bit. After many steps, it can get hard for someone to keep going; they might lose some of their original shoes or feel tired.

A **skip connection** is like adding an extra shortcut rail beside the staircase. It lets you bypass several steps and drop a fresh pair of shoes straight onto the top. In a neural network, this means the output from an early layer is added directly to the output of a later layer. The shortcut keeps the original signal alive while still allowing the deeper layers to learn new features. This makes training very deep networks easier—just as the shortcut rail helps people reach the top without losing their shoes or getting exhausted.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
