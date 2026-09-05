---
qid: ing_b9d07e0444__eli5__local
question: A customer asks you to prove which of these documents your model wrote.
  What can you actually deliver?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 242
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:31:49-05:00'
sources: []
---

Imagine a chef who prepares many dishes in a busy kitchen. If a diner wants to know which dish the chef made, we can point to the recipe card the chef used and the timestamps on the oven rack—proof that the dish came from that chef at that time. But we can’t prove the exact thoughts or inspirations that guided each seasoning choice; those are private.

Similarly, when an AI model writes a document, you can show:

1. **The version of the code** (the “recipe”) and the date‑time stamp it ran.
2. **The input prompt** that fed into the model.
3. **The raw token output** that the model produced before any post‑processing.

These records prove that the model, at a specific moment, turned that prompt into those words. What you can’t provide is the model’s internal “thought process” or why it chose each word; that inner reasoning stays hidden inside its neural network weights. Thus you deliver the recipe, timing, and output—enough to confirm authorship without revealing private internals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
