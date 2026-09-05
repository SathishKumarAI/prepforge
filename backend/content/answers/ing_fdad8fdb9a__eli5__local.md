---
qid: ing_fdad8fdb9a__eli5__local
question: 'Explain: F2: Distribution shift between training and serving'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 202
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:16:50-05:00'
sources: []
---

Imagine you’re a chef who trains in a fancy kitchen that always uses fresh, perfectly balanced ingredients—tomatoes that are just ripe enough, spices at the right temperature, and flour that never clumps. Your recipes (the AI model) learn to taste and cook under those exact conditions.

Now your restaurant opens on a different street where the grocery store delivers tomatoes that are sometimes overripe or under‑seasoned, the spice jars have been left out in the heat, and the flour is damp from last night’s rain. The ingredients (the data you feed the AI) no longer match what the chef learned to handle.

That mismatch—ingredients that differ from the training kitchen—is a *distribution shift*. It means the AI sees inputs it wasn’t trained on, so its predictions can falter, just as your chef might over‑ or under‑season dishes when the pantry changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
