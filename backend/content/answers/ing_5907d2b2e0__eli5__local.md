---
qid: ing_5907d2b2e0__eli5__local
question: 'Explain: Summary — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 213
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:57:27-05:00'
sources: []
---

Imagine you’re at a huge library that holds every book ever written, but you only need to know if a particular title is in the collection without actually looking it up. A **Bloom filter** is like a special “quick‑check” card that tells you “probably not here” or “maybe yes.” It works with tiny tables of numbers (hashes) that point to spots on a bit array. When you add a book, you hash its title several times and set those bits to 1. To ask if a book exists, you hash it again; if all the corresponding bits are 1, the filter says “yes—maybe.” If any bit is 0, it’s definitely not there. The trick: Bloom filters can give false positives (saying “yes” when the book isn’t actually in the library) but never false negatives. They’re fast, use little space, and are perfect for quick membership tests in large systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
