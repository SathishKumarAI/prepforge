---
qid: ing_889a793aa0__eli5__local
question: 'Explain: Quantization Aware Training — Inside Kaiju - building conversational
  models at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 244
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:12:54-05:00'
sources: []
---

**Quantization‑Aware Training (QAT) in Kaiju**

Imagine you’re baking a giant cake that will be sliced into many small pieces for guests. The original recipe uses precise measurements—cups of flour, teaspoons of sugar—but the kitchen has only a handful of standard measuring spoons (like 1/4 cup or 1 tablespoon). If you simply cut the cake after baking, each slice might have slightly different amounts of ingredients, and some guests will get too much or too little.

QAT is like adjusting the recipe *while* you’re cooking. As Kaiju trains a conversational model, it pretends that all weights (the “ingredients”) are already rounded to the limited set of measurement sizes. The training process then learns how to compensate for those rounding errors so that when the final model is actually quantized (cut into slices), every slice still tastes good—meaning the model keeps high accuracy even after compression.

In short, QAT trains with the same coarse “measurements” you’ll use in production, ensuring the final small‑size model works as well as the full‑precision one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
