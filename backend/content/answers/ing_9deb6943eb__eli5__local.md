---
qid: ing_9deb6943eb__eli5__local
question: 'Explain: Code-First Evaluation — Pydantic Evals | Pydantic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 199
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:47:55-05:00'
sources: []
---

Imagine you’re building a LEGO set that comes with a picture guide (the *specification*).  
In **code‑first evaluation** the picture is actually written as Python code, not just a PDF.  
When you run your program, Pydantic reads this “picture” and immediately checks every block: does it fit? Are the colors correct? If something’s wrong, it tells you right away—just like a LEGO instruction sheet that stops you from putting a piece in the wrong place.

So, *code‑first evaluation* means **defining data models with Python classes first, then having Pydantic validate input against those definitions automatically**.  
It gives you instant feedback during development and keeps your data rules in one clear place—your code—so you never need to flip back and forth between separate docs and implementation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
