---
qid: ing_916ec4616e__eli5__local
question: 'Explain: Adding a Node — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 199
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:27:30-05:00'
sources: []
---

Imagine a circular “pizza” that represents all possible keys (like names of files). Each slice is assigned to a pizza‑topping shop (a server) that sits on the circle. When you want a file, you look at its name, find where it falls on the circle, and go straight to the topping shop that owns that slice.

Now suppose a new shop opens. In ordinary hashing, every customer would have to re‑choose a shop, but in **consistent hashing** we only move the customers whose names fall between the new shop and the one that used to be next on the circle. Everyone else keeps eating at their old shop. This way adding or removing shops changes almost nobody’s ordering.

The “node” is just another shop placed on the pizza’s edge; consistent hashing keeps most data in place while smoothly integrating the newcomer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
