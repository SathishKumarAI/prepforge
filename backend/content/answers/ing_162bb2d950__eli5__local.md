---
qid: ing_162bb2d950__eli5__local
question: 'Explain: Special Tokens — Tokenization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 236
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:10:46-05:00'
sources: []
---

Imagine you’re writing a grocery list and each item is a word. When you hand the list to a cashier, the scanner first looks for a few “special” marks: a **start‑of‑sentence** sign that tells the cashier this is a new list, an **end‑of‑list** marker so they know when it stops, and sometimes a **padding** space that keeps all lists the same length.  

In AI language models, tokenization turns text into numbered pieces called *tokens*. Those special tokens are like the marks on your list:  
- **[CLS] (classify)** – tells the model to start reading.  
- **[SEP] (separator)** – separates different parts of a sentence or two questions.  
- **[PAD] (padding)** – fills unused slots so every input line is the same length.  

They help the machine understand structure, keep data uniform, and signal when one piece ends and another begins—just like your grocery list marks guide the cashier.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
