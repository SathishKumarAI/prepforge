---
qid: ing_2f5a4a01ef__eli5__local
question: 'Explain: Prefill vs Decode — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 221
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:51:03-05:00'
sources: []
---

Imagine you’re writing a recipe book for a new dish.  
**Prefill (Encoder‑decoder attention)** is like having a master chef who first writes the entire list of ingredients and steps—everything’s already on paper. When you need to add a note, the chef can instantly look back at any part of the recipe because it’s all stored together. The decoder reads this full “book” to decide what comes next, paying attention to the relevant lines.

**Decode‑only (decoder self‑attention)** is like writing the recipe one line at a time in a notebook that you keep turning. Each new line can only look back at the previous lines in the same notebook; it can’t jump ahead or see future steps because they haven’t been written yet.

So, prefill gives the model a full map of context to reference, while decode relies on its own growing text, looking only backward. Both use “attention” to decide which parts matter most, but the source of that attention differs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
