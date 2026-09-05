---
qid: ing_96b1003240__eli5__local
question: 'So, what’s your phone number? — My favorite algorithm (and data structure):
  HyperLogLog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 205
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:36:54-05:00'
sources: []
---

Think of a huge library that holds every book ever written, but you only want to know *how many* books there are, not each title.  
A **HyperLogLog** is like a clever librarian who takes a tiny, random “bookmark” from every book—just a few bits that capture the book’s first page number in a compressed form.  
She then keeps the largest bookmark she sees for each group of books (the “registers”). When you ask her how many books exist, she uses these few biggest bookmarks to estimate the total count with high accuracy while using only a handful of bytes—just enough room for a phone number!  

So HyperLogLog is a space‑saving trick that turns an enormous set into a quick, approximate counter. It’s the library’s “quick‑look” number, not every single title.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
