---
qid: ing_f503d0fea8__eli5__local
question: How do you get reliable structured output (JSON) from a model, and what
  happens when it fails anyway?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 236
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:02:38-05:00'
sources: []
---

Imagine the model as a chef who’s been told to bake a cake in a very specific recipe book (JSON).  
You give it a clear menu: “Make me an object with keys `name`, `age`, and `hobbies`,” and you even provide a template like `{ "name": "", "age": 0, "hobbies": [] }`. The chef follows the instructions, but sometimes he forgets to close a bracket or swaps a comma for a colon—just as a human might mis‑type.

To catch those slip‑ups, we ask the model again: “Did you finish the recipe correctly?” and we can even run a quick validator (a computer script that checks JSON syntax). If it fails, we either ask the chef to redo the part or fall back on a simpler format like plain text.  
Thus, reliable structured output comes from clear instructions + a safety check; when failure happens, validation catches it and lets us correct or re‑request the data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
