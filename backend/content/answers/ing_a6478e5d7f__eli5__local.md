---
qid: ing_a6478e5d7f__eli5__local
question: 'Explain: That''s what an anomaly is. For example — Detecting anomalies
  using Isolation Trees: Practical Machine Learning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 207
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:01:45-05:00'
sources: []
---

Imagine a library where most books are shelved neatly by genre, author and year—everything follows a predictable pattern. An **anomaly** is like a book that’s misplaced: it’s in the wrong section, has a strange cover, or an odd title. In machine learning we want to spot these misplacements automatically.

Isolation Trees do this by repeatedly picking random “cuts” through the data—think of drawing random lines across a map of books. Each cut splits the library into two piles. Most books (normal data) get separated quickly because they’re clustered together; you can isolate them with just a few cuts. A misplaced book, however, stays tangled among many others and needs many more cuts to stand alone. The number of cuts needed is called its **path length**. Shorter paths mean normal; longer paths flag anomalies—those odd books that don’t fit the usual pattern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
