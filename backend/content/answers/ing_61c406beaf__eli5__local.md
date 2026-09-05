---
qid: ing_61c406beaf__eli5__local
question: 'Explain: Variants — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 235
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:11:18-05:00'
sources: []
---

Think of a library that wants to know if a book is *probably* in its collection without looking through every shelf.  
A **Bloom filter** is like a quick “yes‑or‑no” card: you write the book’s title on it, run three different scribes (hash functions) over the title, and mark three spots on the card as “seen.” Later, to check another title, you run those same scribes. If all three marked spots are still “seen,” the filter says *probably in the library*; if any spot is blank, it’s definitely **not** there.

In system design, a Bloom filter lets servers answer membership queries (e.g., “Did this user sign up?”) with minimal memory and instant speed. The trade‑off: a tiny chance of false positives—sometimes it says “yes” when the book isn’t actually there—but no false negatives. It’s perfect for large‑scale caching, spam filters, or avoiding duplicate data in distributed ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
