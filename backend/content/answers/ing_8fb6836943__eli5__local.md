---
qid: ing_8fb6836943__eli5__local
question: 'Explain: If it''s a one-way, if it''s a — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 232
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:24:45-05:00'
sources: []
---

Imagine you’re teaching a child to recognize animals by showing pictures and saying the name each time. The child learns **one‑way**: from picture → name. Later, if you show a new picture, they can guess the name, but they can’t magically turn a name back into a picture—they don’t learn that direction unless explicitly taught.

In machine learning this is called a *unidirectional mapping*. A model takes input data (images, text, etc.) and produces an output (labels, predictions). It never reverses the process automatically. Think of it like a vending machine: you feed in coins (input) and get a snack (output), but you can’t turn that snack back into coins by using the machine.

This one‑way nature is why training data matters so much—if we only ever give “picture → name” pairs, the model will never learn to generate pictures from names unless we add that reverse data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
