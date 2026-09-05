---
qid: ing_5e56aceee7__eli5__local
question: 'Explain: Hash Functions — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 240
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:06:02-05:00'
sources: []
---

Imagine a huge library that never wants to waste time looking up books by hand.  
A **hash function** is the librarian’s quick “finger‑print” machine: you give it a book title, and it spits out a single shelf number almost instantly. It never tells you which exact book on that shelf—just where to look.

A **Bloom filter** is like a tiny note left beside each shelf: a short, colored stamp that says *“books with this title might be here.”* If the stamp isn’t there, you can confidently say the book is absent. If it is, you still need to check the shelf because the stamp could be a false positive (a harmless “maybe”).  

In system design, Bloom filters let us ask many “does X exist?” questions in milliseconds while keeping memory use tiny—perfect for quickly filtering out impossible candidates before doing more expensive work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
