---
qid: ing_fef0ee871d__eli5__local
question: 'Explain: Dynamic Example Selection — Few Shot And Icl'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 194
total_tokens: 352
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:18:55-05:00'
sources: []
---

Imagine you’re learning to cook a new dish with only a handful of recipes (few‑shot) and a small cookbook that’s not quite finished (in‑context learning). The AI is the chef.  
First, it looks at those few example recipes—maybe one or two pictures and short descriptions—and tries to guess what ingredients and steps are needed for the new dish. That’s **dynamic example selection**: the model picks the most useful examples on the fly instead of using a fixed set.  

Then, as it writes the recipe (generates text), it keeps those few examples right next to it in its “mind.” It can refer back to them whenever it needs a clue—just like you might glance at an earlier step while cooking. This combination lets the AI adapt quickly with minimal data and stay on track by always having relevant hints nearby.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
