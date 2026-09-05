---
qid: ing_1125834a9a__eli5__local
question: 'Q: What is the KV cache and why does it matter for serving?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 174
total_tokens: 336
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:02:57-05:00'
sources: []
---

Think of a language model like a chef who keeps a pantry (the **KV cache**) stocked with all the ingredients used during a meal. When the chef starts cooking a new dish (generating text), she can quickly grab any ingredient that was already in the pantry instead of going back to the market each time. In AI, “ingredients” are key‑value pairs that capture how earlier words influence later ones. The KV cache stores these pairs so that for every new word the model only has to process fresh information; it reuses what’s already there. This saves a lot of computation and speeds up answering questions or continuing stories—just as a well‑organized pantry lets a chef serve dishes faster and with less waste.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
