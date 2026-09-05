---
qid: ing_178e1827fc__eli5__local
question: 'Explain: Feed-Forward Networks — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 209
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:13:05-05:00'
sources: []
---

Imagine your brain as a giant kitchen where recipes (words) are turned into dishes (meaning). A **feed‑forward network** is like the prep station: you take raw ingredients, mix them through a series of bowls and mixers, but you never go back to change an earlier step.  

In a language model, each “prep bowl” is a **layer** that takes numbers from the previous layer, multiplies them by a table of weights (the recipe), adds a bias (a small seasoning tweak), and then passes the result through a simple function called an activation (like flipping a switch to keep only useful flavors). The output of one bowl becomes the input for the next, moving steadily toward the final dish.  

So, a feed‑forward network is a straight‑line chain of transformations that turns raw tokens into richer representations, ready for the next part of the model to interpret.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
