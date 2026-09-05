---
qid: ing_0be0e8479e__eli5__local
question: 'Explain: Where do the parameters and FLOPs actually live in a transformer?
  Walk me through the budget.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 227
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:54:16-05:00'
sources: []
---

Think of a transformer like a giant recipe book that tells a kitchen how to cook a dish (the output) from an ingredient list (the input).  
The **parameters** are the *spices* and *seasoning ratios* written on each page—tiny numbers that decide how much salt, pepper, or sauce goes into every step. They sit inside the book’s pages; you can’t touch them while the kitchen is busy cooking.  

When the kitchen actually cooks, it does a lot of *work*: chopping, mixing, heating—each action is a **floating‑point operation (FLOP)**. The number of FLOPs equals how many times those recipe steps are repeated for every word or token in the input.

So, parameters live in the static text (the book’s pages), while FLOPs live in the dynamic kitchen actions that happen during inference. The “budget” is simply: *size of the book* (parameter count) plus *amount of cooking time* (FLOPs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
