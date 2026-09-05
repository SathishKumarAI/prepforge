---
qid: ing_89450b7c56__eli5__local
question: When do you need approximate nearest neighbour search instead of exact search?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 331
total_tokens: 491
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:14:10-05:00'
sources: []
---

Imagine you’re a librarian in a gigantic, constantly shifting library where every book’s cover is slightly different each time you look at it. If you want to find the book that *exactly* matches a particular cover, you’d have to scan every single page—slow and exhausting. But if you just need a book that looks almost right—good enough for your reader—you can let the librarian glance quickly through a few shelves, picking the closest match without checking every detail.

In computing, “exact nearest‑neighbour (NN) search” is that exhaustive scan: it guarantees the single most similar item in a dataset. It works well when the set is small or speed isn’t critical. When the data set explodes to millions or billions of points, or you need answers in milliseconds (e.g., real‑time image retrieval), exact search becomes too slow.

Approximate nearest‑neighbour (ANN) methods trade a tiny bit of accuracy for massive speed gains. They use clever shortcuts—like hashing, tree structures, or locality‑sensitive indexing—to narrow the search to a handful of promising candidates and then pick the best among them. If your application can tolerate occasional “almost‑right” results (e.g., recommending similar products, face recognition in photos), ANN is the practical choice.

So: use exact NN when you need absolute precision and the data size is manageable; switch to ANN when speed matters more than 100 % correctness, especially with huge, high‑dimensional datasets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
