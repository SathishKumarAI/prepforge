---
qid: ing_afd3916363__eli5__local
question: How much data do you need to fine-tune a model? Quality vs. quantity?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 243
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:16:03-05:00'
sources: []
---

Imagine learning to cook a new recipe by tasting small samples of food rather than reading every cookbook.  
Fine‑tuning an AI is like that tasting: you give the model a handful of examples (the data) and let it adjust its “taste” to match your style.

**How many samples?**  
It depends on how complex the task is. For simple tweaks—like making a chatbot sound friendly—you might need only a few hundred well‑chosen sentences. For deeper changes, like translating legal documents, thousands or even tens of thousands of high‑quality examples are useful.

**Quality vs. quantity**  
*Quality* means each example clearly shows what you want the model to learn and is free from mistakes. *Quantity* gives the model enough variety to generalize. In practice, a small set of clean, diverse data often beats a large pile of noisy examples; but if your task is very broad, more data helps.

So, start with a few hundred good samples, test, and add more only when you see the model still missing something.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
