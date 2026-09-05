---
qid: ing_1bd9a7d76d__eli5__local
question: 'Explain: Prefill and Decode Phases — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 223
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:20:12-05:00'
sources: []
---

**Prefill & Decode: The “Reading” and “Writing” of a Language Model**

Imagine a chef preparing a fancy meal.  
*Prefill* is like the prep station where the chef chops vegetables, measures spices, and arranges all ingredients. In an AI model, this phase takes your prompt (the recipe) and turns it into *embeddings*—numerical “notes” that the neural network can understand.

*Decode* is the cooking itself: the model uses those notes to decide, one word at a time, what comes next—just as the chef adds spices in sequence to build flavor. Each new word depends on all previous ones, so the decoder keeps track of the evolving “story” until it finishes or reaches a stop point.

So, prefill is the preparation of data; decode is the step‑by‑step generation of text, like cooking from scratch based on the prepared ingredients.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
