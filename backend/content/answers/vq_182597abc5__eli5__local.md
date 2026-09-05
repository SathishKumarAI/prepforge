---
qid: vq_182597abc5__eli5__local
question: Difference between Call-by-value and call-by-name parameter?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 232
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:03:58-05:00'
sources: []
---

Imagine you’re ordering pizza for a group of friends.  
**Call‑by‑value** is like the waiter taking your order, writing it down, and giving each friend a copy of that exact order sheet. Every person gets the same, already‑decided slice size—no one can change it later because the decision was made before they even see the pizza.

**Call‑by‑name** is different: instead of writing the choice down first, the waiter hands each friend an empty note and says, “When you’re ready to eat, decide how many slices you want.” Each person decides on the spot; their choice can vary each time they look at the pizza. The decision (the value) is delayed until it’s actually needed.

So:  
- *Call‑by‑value* evaluates an argument once before the function runs and passes that result in.  
- *Call‑by‑name* delays evaluation until the argument is used inside the function, potentially evaluating it multiple times or never if unused.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
