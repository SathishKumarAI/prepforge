---
qid: ing_78bd64b35b__eli5__local
question: What Is a Bloom Filter? — Bloom Filters | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 236
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:48:05-05:00'
sources: []
---

Imagine you have a huge library of books and you want to know quickly if a particular title is in the collection without opening every book. A **Bloom filter** is like a special “yes/no” card that lets you check membership with only a handful of quick look‑ups, but it can occasionally say *“Yes, it’s here”* when the book isn’t actually in the library (a false positive). It never says *“No, it’s not there”* if the book is truly present.

How it works: you have a bit array and several hash functions. When you add a title, each hash function points to a position in the array and sets that bit to 1. To test a title, you run the same hashes; if all those bits are 1, the title might be there. If any bit is 0, it’s definitely not. This saves space and time, perfect for fast checks where occasional mistakes are acceptable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
