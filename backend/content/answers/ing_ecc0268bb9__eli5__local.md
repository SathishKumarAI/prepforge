---
qid: ing_ecc0268bb9__eli5__local
question: 'Explain: Add Another URL — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 211
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:50:16-05:00'
sources: []
---

Imagine you’re at a massive library that can’t hold every book, but it still needs to tell you quickly whether a particular title is *probably* there or definitely not.  
A **Bloom filter** is like an ultra‑compact “yes/no” card that the librarian keeps on hand. Each time a new book (URL) arrives, the librarian runs its name through several simple hash functions—think of them as different quick spellings—and marks those spots on the card. Later, when someone asks if a title exists, the librarian checks those same spots:  
- **All marked?** The book is probably in the collection (but maybe not; false positives can happen).  
- **Any unmarked?** The book is definitely missing.

Adding another URL is just adding one more card to that small set of “yes/no” spots, keeping the process fast and memory‑light while accepting a tiny chance of error.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
