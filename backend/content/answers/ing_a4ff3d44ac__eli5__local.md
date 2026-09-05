---
qid: ing_a4ff3d44ac__eli5__local
question: 'Q: What is the KV cache and why is it critical for serving?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 200
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:59:49-05:00'
sources: []
---

Imagine your brain as a kitchen that makes recipes (AI models). Every time you make a dish, you first look up ingredients in a pantry (the **KV cache**: key‑value memory). The “key” is the ingredient’s name, and the “value” is the actual item. When the same recipe comes back again, you can grab what you need instantly instead of rummaging through the whole kitchen.

In AI serving, the model repeatedly needs the same hidden states (keys) to compute new outputs (values). Storing these pairs in a fast, local memory lets the server answer requests super quickly—like pulling ingredients from the pantry rather than fetching them from a distant warehouse. Without this cache, every request would have to rebuild everything from scratch, slowing service dramatically. The KV cache is therefore the kitchen’s pantry that keeps your AI running hot and hungry for new questions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
