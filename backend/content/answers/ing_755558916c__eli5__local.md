---
qid: ing_755558916c__eli5__local
question: 'Explain: What is a Language Model — The Illustrated GPT-2 (Visualizing
  Transformer Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning
  one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 222
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:42:57-05:00'
sources: []
---

Imagine a giant library where every book is written by a different person in many languages. A language model like GPT‑2 is the *super‑reader* of that library. It has seen millions of books and learned how sentences usually flow—what word tends to follow another, what grammar feels natural, and even subtle styles.

When you ask it a question, the super‑reader predicts the next page: it looks at all the words you’ve already typed (the “context”) and guesses which word comes next that would make the sentence most likely. It keeps doing this one word at a time until the answer is complete. The “transformer” inside GPT‑2 is just a clever way of letting the model look back over every previous word in the context, weighing each’s importance, so it can choose the best continuation.

So, GPT‑2 is like an encyclopedic reader that, after learning from countless books, can write its own new sentences that sound as natural as if a human had written them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
