---
qid: ing_e188f9e639__eli5__local
question: 'Explain: How it Works — 7 Cache Eviction Strategies You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 409
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:32:58-05:00'
sources: []
---

Imagine a tiny library that can hold only a handful of books at once. When a new book arrives, the librarian must decide which one to tuck away on a shelf (evict) so there’s room for the new volume. In computer memory, this “library” is called a cache, and the rules the librarian follows are the *cache eviction strategies*. Here are seven common ones, each with a simple real‑world picture:

1. **Least Recently Used (LRU)** – The librarian removes the book that hasn’t been checked out for the longest time, assuming it’s least likely to be needed soon.  
2. **Most Recently Used (MRU)** – Opposite of LRU; the most recently borrowed book is thrown away because it might only be a one‑off hit.  
3. **Least Frequently Used (LFU)** – The librarian counts how often each book has been borrowed and discards the one with the fewest checkouts, believing low demand means low future need.  
4. **Random Replacement** – The librarian picks a random book to remove; this keeps the decision simple but can be wasteful.  
5. **First In First Out (FIFO)** – The oldest book in the library is sent out first, just like a queue at a ticket counter.  
6. **Last In First Out (LIFO)** – The newest book gets evicted, useful when recent items are likely to be short‑lived.  
7. **Clock (Second Chance)** – Books sit on a rotating “clock” face; each time a book is accessed it receives a second chance by moving its flag, and the librarian removes the first book that hasn’t been flagged during the rotation.

Each strategy balances speed, simplicity, and how well the cache predicts future requests—just like a librarian balancing quick service with keeping popular titles handy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
