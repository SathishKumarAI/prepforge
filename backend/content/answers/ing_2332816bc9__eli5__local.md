---
qid: ing_2332816bc9__eli5__local
question: 'Explain: System Design BASICS: Horizontal vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 208
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:32:04-05:00'
sources: []
---

Think of a library that needs more bookshelves to hold all the books it receives each day.

**Horizontal scaling** is like adding more shelves in new rooms. Each shelf (or server) holds a portion of the books, and together they give the library more space without making any single shelf larger. It’s easy to add or remove rooms as demand changes.

**Vertical scaling** is like expanding a single shelf by installing a taller frame so it can hold more books in one place. You make that one shelf bigger, but you’re still limited by its maximum height and the cost of building a larger frame.

In computing, horizontal scaling means adding more machines (servers) to share the load; vertical scaling means upgrading one machine’s CPU, memory or disk to handle more work. Both aim to keep the system fast as traffic grows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
