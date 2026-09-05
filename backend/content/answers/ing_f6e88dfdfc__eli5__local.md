---
qid: ing_f6e88dfdfc__eli5__local
question: 'Explain: Example URL Patterns — Rest'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 225
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:05:41-05:00'
sources: []
---

Think of a REST API like a library that holds different kinds of books (the “resources”).  
Each book has a unique address on the shelf, called a **URL**. In machine‑learning APIs you might see patterns such as:

* `/models` – the whole collection of trained models.  
* `/models/123` – a single model whose ID is 123.  
* `/models/123/predict` – a special page that lets you send data to that model and get a prediction back.

Just as you go down a specific aisle (the URL path) to find the book you need, a client program uses these URLs to **GET** information, **POST** new training jobs, or **DELETE** old models.  
The key idea: each URL maps cleanly to an action on a resource—no hidden magic, just a clear map of where things live and what you can do with them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
