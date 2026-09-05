---
qid: vq_152fbfa61e__eli5__local
question: Q16- How is a decision tree pruned?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 218
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:03:34-05:00'
sources: []
---

Imagine building a giant choose‑your‑own‑adventure book. Every page asks a question (“Is the weather sunny?”) and leads to new pages until you reach an ending (the decision). A *decision tree* is just that: a chain of yes/no questions that ends in a prediction.

Sometimes the book gets too long, with tiny branches that only happen once or twice. Those extra twists are called **over‑fitting**—they fit the training data perfectly but won’t help on new stories.  
Pruning cuts those useless twists away. Think of it like trimming a garden: you cut back overgrown vines so the plant stays healthy and easier to manage.

In practice, we look at how well each branch works on unseen data (or a validation set). If removing a branch doesn’t hurt accuracy much—or even improves it—we prune it. The result is a simpler tree that still makes good decisions without memorizing every single training detail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
