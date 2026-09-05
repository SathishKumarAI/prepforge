---
qid: ing_d49c1b4808__eli5__local
question: 'Explain: TTL (Time-to-Live) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 346
total_tokens: 511
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:11:55-05:00'
sources: []
---

Imagine a library that keeps books in a special shelf, but it can only hold a limited number of titles at once. Every book has a “time‑to‑live” (TTL) stamp—after the set period, the book is automatically removed because its information might be out of date. When the shelf gets full and new books arrive, the library must decide which old ones to take off first. That’s the cache eviction strategy.

Top 8 simple strategies:

1. **Least Recently Used (LRU)** – remove the book that hasn’t been checked out for the longest time.
2. **Most Recently Used (MRU)** – discard the one just borrowed, useful if fresh items are less needed later.
3. **First In First Out (FIFO)** – take off the oldest book in terms of arrival order.
4. **Last In First Out (LIFO)** – remove the most recently added book first.
5. **Least Frequently Used (LFU)** – drop the book that’s been borrowed the fewest times overall.
6. **Most Frequently Used (MFU)** – evict the most popular title, when you want to keep newer or rarer ones.
7. **Random Replacement (RR)** – pick a book at random; simple but unpredictable.
8. **Age‑based (TTL only)** – remove books whose TTL has expired, ensuring data stays fresh.

Each method trades off how “relevant” the remaining items stay versus how predictable the eviction is—just like choosing which library shelf rules best fit your reading habits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
