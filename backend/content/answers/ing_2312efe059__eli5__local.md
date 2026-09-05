---
qid: ing_2312efe059__eli5__local
question: 'Explain: Path parameters — Create an index | Elasticsearch API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 233
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:31:53-05:00'
sources: []
---

Think of Elasticsearch like a big library that stores books (data).  
When you want to add a new shelf for a specific topic, you send a letter to the librarian with two pieces of information: **where** in the library the shelf should go and **what the shelf is called**.  

In the API, these two pieces are the *path parameters*:

- **`{index}`** – the name of the new shelf (the index).  
- **`_doc`** – a special word that tells Elasticsearch you’re dealing with documents inside that shelf.

So to create an index you write a request like `PUT /my‑books/_doc`.  
The path parameters are part of the URL itself, not in the body or headers. They tell Elasticsearch exactly which “room” (index) you want to build and what kind of content it will hold. This keeps the command short and clear, just like giving a librarian the shelf name and type right up front.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
