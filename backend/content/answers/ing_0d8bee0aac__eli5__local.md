---
qid: ing_0d8bee0aac__eli5__local
question: 'Explain: Distributed Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 213
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:56:59-05:00'
sources: []
---

**What’s a cache?**  
Think of a library that keeps a few copies of the most‑borrowed books right on its lobby shelf so people don’t have to walk all the way to the stacks every time they want one. In computing, a *cache* is a small, fast storage area that holds recently used data or results so future requests can be served quickly.

**Distributed cache** takes this idea into many computers. Imagine each librarian in a city keeps a copy of those popular books on their own shelf. When someone asks for a book, the system first checks all local shelves; if one has it, the answer is returned instantly. If not, the request goes to the main library and then the requested copy is copied back into the nearest local shelf for next time.

In short, a distributed cache spreads “quick‑access” copies across many machines so that users get data faster and the central system isn’t overloaded with every single request.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
