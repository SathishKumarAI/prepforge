---
qid: ing_06260934bf__eli5__local
question: Compare Kaplan and Chinchilla scaling laws. What did Chinchilla change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 204
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:45:17-05:00'
sources: []
---

Imagine training a chef (the AI) who learns recipes by tasting dishes. The old “Kaplan” rule said the more ingredients you give the chef—more data and bigger cooking pots (model size)—the better he becomes, but only if you keep feeding him enough food. It didn’t tell how much food each pot should hold; it just linked total cooking time to the product of ingredients and pot size.

Chinchilla re‑thought that recipe: it said the chef’s skill improves most when the amount of food (training data) matches the number of pots (parameters). In other words, don’t just crank up pot size without giving enough dishes; give a balanced ratio. The change is a new formula that balances data and model capacity so each “pot” gets enough “food,” leading to more efficient learning and better performance for the same cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
