---
qid: ing_4ebc2c2a7c__eli5__local
question: 'Explain: What does it take, memory-wise, to fine-tune a 7B model? Compare
  full fine-tuning, LoRA, and QLoRA.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 332
total_tokens: 513
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:41:53-05:00'
sources: []
---

Imagine you have a huge recipe book (the 7‑billion‑parameter model) that already knows how to cook almost anything. Fine‑tuning is like giving the chef a new notebook to write extra instructions on top of every page.

**Full fine‑tuning:** The chef copies the whole recipe book into his own notebook and scribbles everywhere—every line can change. That means you need memory for *both* the original 7B model and a fresh copy of all its weights, roughly twice the size (≈14 GB for float‑32).

**LoRA (Low‑Rank Adaptation):** Instead of rewriting every page, the chef only adds a few extra notes that tweak the existing recipes. He keeps the original book intact and writes just a small set of adjustment tables—say 0.1% of the total parameters. Memory drops to about 7 GB plus a tiny add‑on (≈70 MB).

**QLoRA:** This is LoRA with a “quantized” chef’s notebook: the original recipe book is compressed to half‑precision or even 4‑bit, cutting its size by 4×. The extra notes stay the same size as in LoRA. So you keep roughly 2 GB for the model plus the small tweak tables.

In short: full fine‑tuning ≈ double the memory; LoRA ≈ the original size plus a tiny add‑on; QLoRA ≈ one quarter of that, still with only a modest extra tweak memory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
