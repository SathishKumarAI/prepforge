---
qid: ing_40a859fd72__eli5__local
question: 'Explain: Least Frequently Used (LFU) — 7 Cache Eviction Strategies You
  Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 210
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:18:35-05:00'
sources: []
---

Imagine a library that only has space for a handful of books. Every time someone borrows a book, the librarian writes down how many times it’s been checked out. When the shelf gets full and a new book arrives, the librarian looks at those counts and removes the one that has been borrowed *least often*—the least frequently used (LFU) book.  

In computing, a cache is like that shelf: it stores recently needed data to speed up future requests. When the cache fills up, an eviction strategy decides which piece of data to discard. LFU keeps a simple counter for each item—the number of times it’s been accessed. The item with the lowest count is evicted first. This works well when “hot” data (frequently used) should stay cached, while rarely touched items are swapped out, just as a librarian keeps popular books nearby and clears space for new arrivals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
