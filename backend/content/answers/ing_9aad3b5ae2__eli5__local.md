---
qid: ing_9aad3b5ae2__eli5__local
question: 'Explain: Masks - FAQ for Skeptics — fast.ai\u2014Making neural nets uncool
  again \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 223
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:42:47-05:00'
sources: []
---

**Masks in neural networks are like “filters” that let a model focus on the right parts of an image or sentence while ignoring the rest.**

Imagine you’re looking at a crowded street through a small window. The window is your mask: it blocks everything outside its borders, so only what lies within the square can be seen and processed by the brain (the network). In deep learning, we create masks that highlight important pixels—like people or cars—and set the rest to zero. This tells the network, “Pay attention here; ignore that.” It helps the model learn faster and reduces noise.

*Unavoidable term: **Mask** – a binary pattern applied to data that keeps some elements (1) and discards others (0).*

Fast.ai shows how simple masking tricks can make even very deep nets behave like friendly, interpretable tools—removing the “cool‑but‑mysterious” vibe of black‑box AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
