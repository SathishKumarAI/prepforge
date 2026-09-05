---
qid: ing_e96148d149__eli5__local
question: 'Explain: API Reference — Pydantic Evals | Pydantic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 256
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:44:43-05:00'
sources: []
---

Imagine a library that keeps all your recipes (data) in neat, labeled boxes so you can always find the right one quickly.  
Pydantic is that library system: it checks each recipe’s ingredients (fields) to make sure they’re correct and stores them in an organized way.  

When we talk about **API Reference – Pydantic Evals**, think of a special “recipe scanner” that reads a whole box at once, looks at every ingredient, and tells you whether the box is ready for use or if something needs fixing.  
The API gives you all the “scan buttons”:  
* `parse_obj()` – read a plain dictionary (a list of ingredients) and turn it into a Pydantic object.  
* `validate()` – run the scanner on an existing object to double‑check its contents.  
* `schema()` – ask for the box’s layout, showing which fields exist and what types they should be.  

These tools let developers “scan” data automatically, so their programs never get confused by wrong or missing information—just like a well‑organized kitchen keeps cooking smooth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
