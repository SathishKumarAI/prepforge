---
qid: ing_a12f6dc48e__eli5__local
question: 'Explain: Q: Explain the difference between prefill and decode phases.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 209
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:53:22-05:00'
sources: []
---

Think of a recipe book (the AI model) that first gathers all the ingredients it will need and then cooks the dish step by step.

**Prefill phase** – like stocking the pantry. The model looks at the whole sentence you gave it, pulls out every word it might use later, and stores them in memory. It’s a quick scan to decide which words are relevant, but it doesn’t yet know their exact order or how they will fit together.

**Decode phase** – the actual cooking. Starting from the first word, the model chooses the next word one at a time, always looking back at what it has already “cooked.” It builds the sentence piece by piece, ensuring each new word fits smoothly with the previous ones.

So, prefill is the fast, broad preparation; decode is the careful, sequential construction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
