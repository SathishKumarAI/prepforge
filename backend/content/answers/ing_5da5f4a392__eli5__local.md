---
qid: ing_5da5f4a392__eli5__local
question: Define supervised, unsupervised, and self-supervised learning. Where does
  each stage of modern LLM training fit?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 300
total_tokens: 471
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:04:52-05:00'
sources: []
---

Imagine a kitchen where recipes are being learned.

**Supervised learning** is like a cooking class with a chef who gives you the exact recipe and shows you the finished dish. You get labeled examples—input (ingredients) paired with output (dish). The model learns to map ingredients to dishes by following those labels.

**Unsupervised learning** is like wandering into a pantry without a recipe, just looking at all the ingredients and noticing patterns: which spices often appear together, how many items are in each box. No dish labels are given; the model discovers structure on its own.

**Self‑supervised learning** blends the two: you take a sentence, hide part of it, and ask the model to guess the missing word. The data itself provides the “label” (the hidden word). It’s a clever way to learn language patterns from raw text.

In modern large language models:

1. **Self‑supervised pre‑training** – the model reads massive amounts of text, predicting masked words or next sentences, learning grammar and world knowledge without human labels.
2. **Fine‑tuning (optional)** – a supervised step where the model is trained on specific labeled tasks (e.g., answering questions), sharpening its performance for that use.

So, self‑supervised learning does most of the heavy lifting; supervised fine‑tuning polishes the final dish.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
