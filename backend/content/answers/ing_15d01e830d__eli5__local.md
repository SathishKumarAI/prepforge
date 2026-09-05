---
qid: ing_15d01e830d__eli5__local
question: Kimi extended usable context far beyond typical training lengths. How do
  you take a model trained at, say, 8K-32K and make it work at 128K or more?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 265
total_tokens: 451
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:09:58-05:00'
sources: []
---

Think of the AI like a very good chef who’s only ever cooked in a kitchen that holds 8 k–32 k‑square‑centimeter dishes. If you want that chef to serve a banquet of 128 k, you can’t just throw more ingredients into the same pan – the stove would overheat and the food would burn.

Instead, you give the chef a new set of tools:  
1. **Multiple pans** – split the huge meal into several smaller portions that fit in the existing kitchen (the model’s “context windows”).  
2. **A recipe book with pointers** – each portion remembers where it belongs in the whole banquet, so the final dish still tastes coherent.  
3. **Special seasoning** – add a small amount of extra training (“prompt tuning”) so the chef knows how to stitch the portions together smoothly.

In practice, this means running the model on overlapping windows and using a “memory network” or “attention pooling” that keeps track of what happened in earlier windows. The result is a single 128 k‑context AI that behaves like it was trained from the start with that long range, but built from many short‑window steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
