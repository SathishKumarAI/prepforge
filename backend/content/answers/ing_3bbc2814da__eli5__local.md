---
qid: ing_3bbc2814da__eli5__local
question: 'Explain: The Problem with Modulo Hashing — Consistent Hashing | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 223
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:10:56-05:00'
sources: []
---

Imagine you’re organizing a library’s books on shelves that keep changing size.  
With **modulo hashing** (the “divide‑and‑assign” method), each book is put on shelf `(bookID mod number_of_shelves)`. If the library adds or removes a shelf, every book’s division changes, so almost all books must be moved to new shelves—like having to shuffle nearly every book whenever you add a new shelf.

**Consistent hashing** solves this by first mapping both books and shelves onto a circle (a number line wrapped around). Each book goes to the next shelf clockwise. When a shelf is added or removed, only the books that were nearest to that shelf need to move; the rest stay where they are. It’s like having a carousel: adding a new seat only forces a few people to step onto the next spot, leaving everyone else in place.

So, modulo hashing can cause massive reshuffling when the system scales, while consistent hashing keeps changes local and efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
