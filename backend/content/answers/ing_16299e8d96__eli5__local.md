---
qid: ing_16299e8d96__eli5__local
question: 'Q: What is the difference between MHA, MQA, and GQA?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 277
total_tokens: 441
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:10:46-05:00'
sources: []
---

Think of building a smart recipe book.

**MHA (Multi‑Head Attention)** – like a chef who looks at the same dish from many angles at once: one head tastes the spices, another checks the texture, another watches the aroma. Each “head” focuses on a different part of the input and then all those views are combined so the model can understand everything in context.

**MQA (Multi‑Query Attention)** – imagine that chef still has several taste buds but now each bud is tuned to a *specific* ingredient instead of a generic angle. One query looks only at salt, another at sweetness, and they all share the same underlying kitchen layout (the same key/value memory). It saves time because the shared structure lets you ask many focused questions quickly.

**GQA (Global Query Attention)** – picture a master chef who first scans the entire kitchen to decide which ingredient is most important for the whole meal. That single “global” query gathers all information, then spreads it out so every part of the dish gets that common understanding before any finer details are added.

So: MHA = many angles; MQA = many focused queries sharing a common base; GQA = one global view that informs everything else.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
