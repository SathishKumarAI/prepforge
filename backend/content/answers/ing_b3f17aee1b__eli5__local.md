---
qid: ing_b3f17aee1b__eli5__local
question: 'Explain: A model was pretrained at 8k context. You need 128k. What are
  your options? Explain position interpolation and YaRN.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 246
total_tokens: 423
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:22:12-05:00'
sources: []
---

Think of a language model like a very long tape‑measure that was originally cut to 8 000 inches (the “context”). If you need a tape that reaches 128 000 inches, you have two ways to stretch it.

**1. Position interpolation** – Imagine the original tape has markers every inch. To reach farther, we simply add extra markers between the old ones by guessing what lies in between. The model learns to treat these new positions as if they were part of its original 8 000‑inch range. It’s like filling a photo with more pixels by estimating the missing detail from nearby ones.

**2. YaRN (You’re All Right, Neural) – “Yet another Recurrent Network”** – This is a different approach that builds a new tape from scratch but keeps the same “rules” the old model learned. It repeats the same pattern of learning steps for each extra inch, so the extended tape behaves like the original, just longer.

Both methods let you use the old 8 000‑inch knowledge to answer questions that span far beyond it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
