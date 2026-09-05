---
qid: ing_b7d7698647__eli5__local
question: 'Explain: 1- Create Query, Key, and Value Vectors — The Illustrated GPT-2
  (Visualizing Transformer Language Models) \u2013 Jay Alammar \u2013 Visualizing
  machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 233
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:28:41-05:00'
sources: []
---

Imagine you’re organizing a big library of books (the input text). Each book gets three special “tags” that help the system decide what to do next:

* **Query** – a tag asking, “Which other books should I look at now?”  
* **Key** – a tag on every book saying, “I’m about this topic.”  
* **Value** – the actual content of the book that can be passed along.

To create these tags, each word is first turned into a numeric vector (a list of numbers) by an embedding layer. Then three different small neural networks—each with its own weight matrix—take that same vector and linearly transform it into the Query, Key, or Value vector. Think of those networks as tiny “filters” that rewrite the book’s information in three useful ways: a question, a label, and the answer itself. These vectors are then used to compute attention scores, letting the model decide how much each word should influence every other word.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
