---
qid: ing_fa8352e78e__eli5__local
question: 'Explain: Self-Attention in Detail — The Illustrated Transformer \u2013
  Jay Alammar \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 283
total_tokens: 464
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:11:36-05:00'
sources: []
---

Imagine you’re reading a mystery novel and trying to guess who did the crime. Every sentence in the story gives clues, but some clues are more important than others depending on what you already know. **Self‑attention** is like a detective that looks at each word (the “clue”) and decides how much it should weigh other words when forming its final answer.

In practice, every word first turns into a short vector (a tiny list of numbers) called an *embedding*. For each pair of words, the model computes three new vectors—*query*, *key*, and *value*—by multiplying the embedding with learned matrices. The query tells the model what it’s looking for; the key shows what each word offers; the value is the actual information to pass along.

The similarity between a word’s query and another word’s key (a dot product) becomes an “attention score.” These scores are turned into probabilities with a softmax, so they sum to one. Finally, each word’s output is a weighted sum of all values, where the weights come from its attention scores. This lets every word focus on the most relevant parts of the sentence—just like our detective zooming in on the clues that matter most for solving the mystery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
