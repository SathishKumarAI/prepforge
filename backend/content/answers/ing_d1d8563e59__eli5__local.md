---
qid: ing_d1d8563e59__eli5__local
question: 'Explain: Training memory math (why you can''t full-fine-tune 7B on a 24
  GB card)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 245
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:07:45-05:00'
sources: []
---

Imagine the AI as a giant library of books (the 7‑billion‑parameter model). Each book is a “weight” that needs to be read and rewritten every time you train on new data. A single GPU card with 24 GB of memory is like a small reading room that can hold only a handful of books at once.

During training, the model not only keeps all its books (the weights) but also copies them twice more: one copy for “gradients” (how much each page should change) and another for “optimizer state” (extra bookkeeping needed to decide how fast to rewrite). So you need roughly three times the size of the library in memory. A 7‑billion‑parameter model, even if compressed to a few gigabytes, multiplies by three and exceeds 24 GB.

Thus the room is too small to hold all copies at once, so full fine‑tuning can’t run on that card without shuffling books back and forth (which slows everything dramatically).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
